json.review do 
    json.partial! "api/reviews/review", review: @review
end

 
json.user do 
    json.partial! "api/users/user", user: @user
end

json.booking do 
    json.partial! "api/bookings/booking", booking: @booking
end