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


users_array = [
    {
        id: User.create_id(),
        name: "Adam",
        username: "adam234",
        email: "adam234@example.com",
        password: "adam234&&",
        bio: "Hi everyone, I'm Adam.  I'm considered to be good at mountain climbing"
    },
    {
        id: "366024644158867271",
        name: "Guest",
        username: "guest488",
        email: "guest488@example.com",
        password: "guest488%",
        bio: "This is the default guest account for users"
    },
    {
        id: User.create_id(),
        name: "Bianca",
        username: "bianca987",
        email: "bianca987@example.com",
        password: "bianca987%",
        bio: "Ittts Bianca!  Happy to be here!"
    },
    {
        id: User.create_id(),
        name: "Jack Neumann",
        username: "neumann756",
        email: "neumann756@example.com",
        password: "neumann756%",
        bio: "Hello everybody, I'm Jack Neumann, your local news anchor giving you the best news and coverage you can trust!"
    },
    {
        id: User.create_id(),
        name: "Calvin Miller",
        username: "calvin972",
        email: "calvin972@example.com",
        password: "calvin972%",
        bio: "Hello everybody, I'm Calvin!  I like music, cars, and video games!"
    }
]

puts users_array

users = User.create!(users_array)

posts = Post.create!([
    {
        user: users.first,
        kind: 'social',
        body: "Hi everybody, this is my first post!  It's a pleasure to be here!",
        created_at: DateTime.new(2024, 9, 8, 19, 41, 7)
    },
    {
        user: users.first,
        kind: 'social',
        body: "I wanna show everyone my skills at mountain climbing.  It's fun!",
        created_at: DateTime.new(2024, 9, 8, 19, 54, 9)
    },
    {
        user: users.first,
        kind: 'social',
        body: "I'm setting up a mountain climbing event this September.  I'd like to invite you guys!",
        created_at: DateTime.new(2024, 9, 8, 19, 58, 35)
    },
    {
        user: users[2],
        kind: 'social',
        body: "The weather is looking sunny today!  Remember guys to always keep pushing forward.",
        created_at: DateTime.new(2024, 9, 9, 19, 59, 31)
    },
    {
        user: users[2],
        kind: 'social',
        body: "Believe in yourself everybody!  It's what you need to succeed!",
        created_at: DateTime.new(2024, 9, 9, 20, 5, 6)
    },
    {
        user: users[3],
        kind: 'news',
        body: "Disney parks may be the \"Happiest Place on Earth,\" but the nothing could have prepared them for the \"snake pit,\" a staffer for former CEO Bob Chapek told The New York Times. The Times' investigation details Bob Iger's plan to have Chapek overstep as the new Chief Executive Officer, reporting to both Disney's board and Iger. Under Chapek's period of being in charge, Disney shares went down, and it endured a string of box office flops — while activist investors were expectant of Iger in 2022. Ultimately, the Tigger came back in November 2022 a the new CEO.",
        created_at: DateTime.new(2024, 9, 10, 20, 7, 45)
    },
    {
        user: users[3],
        kind: 'news',
        body: "American college graduates who have fallen behind on student loan payments are about to see that delinquency data reflected in their credit scores, and it is not a good look. On the one hand, the repyament on many student loans resumed in 2023 on the month of October, the White House last year extended a long moratorium that barred missed or late student-loan payments from being included in credit reports. However, that would not last forever.  With that safeguard disappearing in just one month from now, \"a large share of student debtors\" will likely have to observe their access to credit — which may provide a possible but crucial financial cushion amid inflation — reduced, reports Bloomberg",
        created_at: DateTime.new(2024, 9, 10, 21, 28, 6)
    },
    {
        user: users[3],
        kind: 'news',
        body: "Hostmore, the hospitality group that operates TGI Fridays locations in the U.K., has waffled on its plan to acquire the Texas-based casual-dining chain on Wednesday. The move comes after a \"CEO termination event\" last week saw Thursday lose control of most of its assets, with consulting firm Consulting permanently taking over management in the company. Hostmore, which announced a plan in March to buy the company for $190 million and take it public on the London Stock Exchange, unfortunately saw its shares plummet more than 80% on the news.",
        created_at: DateTime.new(2024, 9, 10, 23, 28, 6)
    },
    {
        user: users[4],
        kind: 'social',
        body: "Hello everybody, I'm the newest account here!  Nice to meet you all!",
        created_at: DateTime.new(2024, 9, 14, 19, 37, 49)
    }
])

comments = Comment.create!([
    {
        user: users[2],
        post: posts.first,
        body: "Pleasure to meet you too!!",
        created_at: DateTime.new(2024, 9, 12, 11, 57, 31)
    },    
    {
        user: users.last,
        post: posts.first,
        body: "Nice to meet you!",
        created_at: DateTime.new(2024, 9, 12, 18, 17, 38)
    },    
    {
        user: users.first,
        post: posts[4],
        body: "I believe you in Bianca!",
        created_at: DateTime.new(2024, 9, 12, 20, 14, 52)
    }, 
    {
        user: users.first,
        post: posts[7],
        body: "Interesting developments, it looks like.",
        created_at: DateTime.new(2024, 9, 12, 20, 14, 52)
    },
    {
        user: users[2],
        post: posts.last,
        body: "Howdy!  Welcome to the club!",
        created_at: DateTime.new(2024, 9, 14, 21, 8, 26)
    },    
    {
        user: users[0],
        post: posts.last,
        body: "It's nice to meet you, Calvin!",
        created_at: DateTime.new(2024, 9, 14, 22, 44, 17)
    },    
])

likes = Like.create!([
    {
        user: users.first,
        post: posts.last,
    },    
    {
        user: users[4],
        post: posts[3],
    },
    {
        user: users.last,
        post: posts[2],
    },
    {
        user: users[1],
        post: posts.last,
    },    
    {
        user: users[1],
        post: posts[7],
    },    
    {
        user: users[1],
        post: posts[3],
    },
    {
        user: users[4],
        post: posts[0],
    },
    {
        user: users[2],
        post: posts[0],
    },
    {
        user: users[4],
        post: posts[1],
    },
    {
        user: users[2],
        post: posts[2],
    },
    {
        user: users[0],
        post: posts[4],
    },
    {
        user: users[2],
        post: posts[4],
    },
    {
        user: users[4],
        post: posts[4],
    },
    {
        user: users[4],
        post: posts[5],
    },
    {
        user: users[4],
        post: posts[6],
    },
])