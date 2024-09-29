

class OauthController < ApplicationController
    # Login endpoint
    def login
        email = params[:username]
        password = params[:password]
        users = User.where(email: email)
        if users.length > 0 && users[0].authenticate(password)
            hmac_secret = ENV["AUTH_SECRET_KEY"]
            payload = { :user => users[0].as_json, :id => users[0].id }
            token = JWT.encode(payload, hmac_secret,'HS256')
            puts token
            decoded = JWT.decode(token, hmac_secret, true, { :algorithm => 'HS256' })
            puts decoded 
            render(json: { status: 200, message: "Authenticated #{ENV["AUTH_SECRET_KEY"]}", access_token: token, expires_in: 3600, decoded: decoded } )
        else
            render(json: { status: 401, message: "Unauthorized #{ENV["AUTH_SECRET_KEY"]}" } )
        end
    end

    def logout
        "TODO"
    end
end
