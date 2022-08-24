require 'faker'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "now seeding"

10.times do
    
    User.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, username: Faker::App.name, password_digest: Faker::Alphanumeric.alphanumeric(number: 10), email: Faker::Internet.email, bio: Faker::Lorem.sentences(number: 1))
    
end



20.times do 

    Repository.create(user_id: Faker::Number.within(range: 1..10), title: Faker::App.name, description: Faker::Lorem.sentences(number: 2), tag: Faker::Hacker.adjective)

end

40.times do

    Attachment.create(repository_id: Faker::Number.within(range: 1..20), name: Faker::App.name, code: Faker::Lorem.sentences(number: 2))

end

puts "seeding finished"


