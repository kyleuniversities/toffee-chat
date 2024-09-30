# frozen_string_literal: true

class GraphqlController < ApplicationController
  # If accessing from outside this domain, nullify the session
  # This allows for outside API access while preventing CSRF attacks,
  # but you'll have to authenticate your user separately
  # protect_from_forgery with: :null_session

  def execute
    # puts "\n\n\nHEADERS_2:\n\"#{request.headers}\", \"#{request.headers["Authorization"]}\"\n\n\n"
    variables = prepare_variables(params[:variables])
    query = params[:query]
    operation_name = params[:operationName]
    current_user = nil
    authorization_header = request.headers["Authorization"]
    puts "Auth_7: \"#{authorization_header}\""
    if authorization_header.present? && authorization_header.include?("Bearer ") && authorization_header.length > 10
      hmac_secret = ENV["AUTH_SECRET_KEY"]
      token = authorization_header[7, authorization_header.length - 7]
      #puts "Token: #{token}"
      decoded = JWT.decode(token, hmac_secret, true, { :algorithm => 'HS256' })
      #puts "Decoded: #{decoded}"
      current_user = decoded[0]['user']
      #puts "Current_User: #{current_user}"
    end
    context = {
      hello: 'Test',
      current_user: current_user
    }
    result = RubySchema.execute(query, variables: variables, context: context, operation_name: operation_name)
    render json: result
  rescue StandardError => e
    raise e unless Rails.env.development?
    handle_error_in_development(e)
  end

  private

  # Handle variables in form data, JSON body, or a blank value
  def prepare_variables(variables_param)
    case variables_param
    when String
      if variables_param.present?
        JSON.parse(variables_param) || {}
      else
        {}
      end
    when Hash
      variables_param
    when ActionController::Parameters
      variables_param.to_unsafe_hash # GraphQL-Ruby will validate name and type of incoming variables.
    when nil
      {}
    else
      raise ArgumentError, "Unexpected parameter: #{variables_param}"
    end
  end

  def handle_error_in_development(e)
    logger.error e.message
    logger.error e.backtrace.join("\n")

    render json: { errors: [{ message: e.message, backtrace: e.backtrace }], data: {} }, status: 500
  end
end
