class User < ApplicationRecord
    has_secure_password
    has_many :posts
    has_many :comments
    has_many :likes
    before_save :check_id

    def check_id()
        puts "#{self.name} #{self.id}"
    end

    def User.create_id()
        new_id = ""
        i = 0
        j = 0
        date_text = "#{DateTime.now.strftime('%Q')}"
        while i < date_text.length
            option = rand(2)
            if option == 0 || j >= 3
                new_id += date_text[date_text.length - 1 - i]
                i += 1
            end
            if option == 1 && j < 3
                if j == 2
                    new_id += "0"
                end
                if j != 2
                    shift = rand(10)
                    letter = ("0".ord + shift).chr
                    new_id += letter
                end
                j += 1
            end
        end
        while j < 3
            if j == 2
                new_id += "0"
            end
            if j != 2
                shift = rand(10)
                letter = ("0".ord + shift).chr
                new_id += letter
            end
            j += 1
        end
        sleep 0.001
        puts new_id
        new_id
    end
end
