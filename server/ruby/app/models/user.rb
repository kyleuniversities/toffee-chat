class User < ApplicationRecord
    has_secure_password
    has_many :posts
    has_many :comments
    has_many :likes
    before_save :encrypt_password
    # def encrypt_password
    #     if password.present?
    #         self.password_salt = BCrypt::Engine.generate_salt
    #         self.password_hash = BCrypt::Engine.hash_secret(password, password_salt)
    # end

    def encrypt_password
        if password.present?
            self.password_digest = User.digest(password)
        end
    end

    def User.digest(password_string)
        cost = ActiveModel::SecurePassword.min_cost ?   BCrypt::Engine::MIN_COST : 
                                                        BCrypt::Engine.cost
        BCrypt::Password.create(password_string, cost: cost)
    end
end
