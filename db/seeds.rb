5.times do
  Post.create(
    user_id: 1,
    title: Faker::Lorem.sentence,
    body: Faker::Lorem.paragraph
  )
end
