# 5.times do
#   Post.create(
#     user_id: 1,
#     title: Faker::Lorem.sentence,
#     body: Faker::Lorem.paragraph
#   )
# end

avatar = ['this', 'that', 'foo', 'bar', 'baz']

10.times do
  User.create!(
    name: Faker::Name.first_name,
    uid: Faker::Internet.user_name(8),
    email: Faker::Internet.email,
    image: Faker::Avatar.image(avatar.sample, '50x50', 'png', 'set4'),
    nickname: Faker::Hipster.word,
    password: "password"
  )
end
