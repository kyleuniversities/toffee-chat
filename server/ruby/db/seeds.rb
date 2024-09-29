# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

Like.destroy_all
Comment.destroy_all
Post.destroy_all
User.destroy_all

users = User.create!([
    {
        name: "Adam",
        username: "adam234",
        email: "adam234@example.com",
        password: "adam234&&",
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
    },
    {
        name: "Bob Neumann",
        username: "neumann756",
        email: "neumann756@example.com",
        password: "neumann756%",
        bio: "Hello everybody, I'm Bob Neumann, your local news anchor giving you the best news and coverage you can trust!"
    }
])

posts = Post.create!([
    {
        user: users.first,
        kind: 'social',
        body: "Hi everybody, this is my first post!  It's a pleasure to be here!"
    },
    {
        user: users.first,
        kind: 'social',
        body: "I wanna show everyone my skills at mountain climbing.  It's fun!"
    },
    {
        user: users.first,
        kind: 'social',
        body: "I'm setting up a mountain climbing event this September.  I'd like to invite you guys!"
    },
    {
        user: users[2],
        kind: 'social',
        body: "The weather is looking sunny today!  Remember guys to always keep pushing forward."
    },
    {
        user: users[2],
        kind: 'social',
        body: "Believe in yourself everybody!  It's what you need to succeed!"
    },
    {
        user: users[3],
        kind: 'news',
        body: "Disney parks may be the \"Happiest Place on Earth,\" but the nothing could have prepared them for the \"snake pit,\" a staffer for former CEO Bob Chapek told The New York Times. The Times' investigation details Bob Iger's plan to have Chapek overstep as the new Chief Executive Officer, reporting to both Disney's board and Iger. Under Chapek's period of being in charge, Disney shares went down, and it endured a string of box office flops — while activist investors were expectant of Iger in 2022. Ultimately, the Tigger came back in November 2022 a the new CEO."
    },
    {
        user: users[3],
        kind: 'news',
        body: "American college graduates who have fallen behind on student loan payments are about to see that delinquency data reflected in their credit scores, and it is not a good look. On the one hand, the repyament on many student loans resumed in 2023 on the month of October, the White House last year extended a long moratorium that barred missed or late student-loan payments from being included in credit reports. However, that would not last forever.  With that safeguard disappearing in just one month from now, \"a large share of student debtors\" will likely have to observe their access to credit — which may provide a possible but crucial financial cushion amid inflation — reduced, reports Bloomberg"
    },
    {
        user: users[3],
        kind: 'news',
        body: "Hostmore, the hospitality group that operates TGI Fridays locations in the U.K., has waffled on its plan to acquire the Texas-based casual-dining chain on Wednesday. The move comes after a \"CEO termination event\" last week saw Thursday lose control of most of its assets, with consulting firm Consulting permanently taking over management in the company. Hostmore, which announced a plan in March to buy the company for $190 million and take it public on the London Stock Exchange, unfortunately saw its shares plummet more than 80% on the news."
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
        post: posts[4],
        body: "I believe you in Bianca!"
    },
])