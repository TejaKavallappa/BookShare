json.array!(@users) do |user|
  json.extract! user, :username, :id
  # json.url user_url(user, format: :json)
end
