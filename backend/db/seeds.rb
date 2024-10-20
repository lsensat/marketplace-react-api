# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
require 'faker'

puts "Deleting old items..."
# Price.delete_all
Order.delete_all
# Review.delete_all
Product.delete_all
puts "Deleting old users..."
User.delete_all

total_items = 10
total_users = 10

puts "Creating products..."
total_items.times do
  Product.create(
    name: Faker::Book.title,
    description: Faker::Lorem.sentences(number: 1),
    price: rand(1..20)
  )
end
puts "#{total_items} products created!"

puts "Creating users..."
total_users.times do
  name = Faker::Name.first_name
  # last_name = Faker::Name.last_name
  # address = Faker::Address.full_address
  # phone = Faker::PhoneNumber.phone_number_with_country_code
  user = User.new(
    name:,
    # last_name:,
    # address:,
    # phone:,
    email: Faker::Internet.unique.email(name: "#{name}", separators: ['-'], domain: 'gmail'),
    # password: 'UsersAreTested1'
  )
  user.save
end
puts "#{total_users} users created!"

# puts "Creating some reviews..."
# Item.all.sample(Item.all.length).each do |item|
#   User.all.sample(Item.all.length * rand(0.2..0.6)).each do |user|
#     comment = Faker::Lorem.paragraph(sentence_count: rand(2..4))
#     rating = rand(1..5)
#     Review.create(user: user, item: item, comment: comment, rating: rating)
#   end
# end
# puts "Added some reviews!"
