json.partial! "api/users/user", user: @user

json.bookings do 
    @user.bookings.each do |booking|
        json.set! booking.id do 
            json.extract! booking, :start_date, :end_date, :num_guests
        end
    end
end