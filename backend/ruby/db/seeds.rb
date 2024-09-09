# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

Comment.destroy_all
Post.destroy_all
User.destroy_all

users = User.create!([
    {
        name: "Adam",
        username: "adam234",
        email: "adam234@example.com",
        password: "adam234%",
        bio: "Hi everyone, I'm Adam.  I'm considered to be good at mountain climbing"
    },
    {
        name: "Guest",
        username: "guest488",
        email: "guest488@example.com",
        password: "guest488%",
        bio: "This is the default guest account for users"
    },
    {
        name: "Bianca",
        username: "bianca987",
        email: "bianca987@example.com",
        password: "bianca987%",
        bio: "Ittts Bianca!  Happy to be here!"
    }
])

posts = Post.create!([
    {
        user: users.first,
        body: "Hi everybody, this is my first post!  It's a pleasure to be here!"
    },
    {
        user: users.first,
        body: "I wanna show everyone my skills at mountain climbing.  It's fun!"
    },
    {
        user: users.first,
        body: "I'm setting up a mountain climbing event this September.  I'd like to invite you guys!"
    },
    {
        user: users.last,
        body: "The weather is looking sunny today!  Remember guys to always keep pushing forward."
    },
    {
        user: users.last,
        body: "Believe in yourself everybody!  It's what you need to succeed!"
    }
])

comments = Comment.create!([
    {
        user: users.last,
        post: posts.first,
        body: "Nice to meet you!"
    },    
    {
        user: users.first,
        post: posts.last,
        body: "I believe you in Bianca!"
    },
])