

class OauthController < ApplicationController
    # Login endpoint
    def login
        email = params[:username]
        password = params[:password]
        users = User.where(email: email)
        if users.length > 0 && users[0].authenticate(password)
            matching_user = users[0].as_json
            puts matching_user
            hmac_secret = ENV["AUTH_SECRET_KEY"]
            matching_user_json = matching_user.as_json
            matching_user_json['id'] = "#{matching_user_json['id']}"
            payload = { :user => matching_user_json, :id => matching_user['id'] }
            token = JWT.encode(payload, hmac_secret,'HS256')
            puts token
            decoded = JWT.decode(token, hmac_secret, true, { :algorithm => 'HS256' })
            puts "DECODED_18: #{decoded}" 
            render(json: { status: 200, access_token: token, expires_in: 3600000, user: matching_user_json } )
        else
            render(json: { status: 401, message: "Unauthorized #{ENV["AUTH_SECRET_KEY"]}" } )
        end
    end

    def logout
        "TODO"
    end
end
