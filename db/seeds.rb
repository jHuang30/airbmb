# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'


User.destroy_all
Spot.destroy_all
Amenity.destroy_all
AmenitiesSpot.destroy_all

demo = User.create!(email: 'demouser@gmail.com', 
                    fname: 'demo', 
                    lname:'user', 
                    password:'aaaaaa' )

user1 = User.create!(email: 'user1@gmail.com', 
                    fname: 'user', 
                    lname:'one', 
                    password:'111111' )

user2 = User.create!(email: 'user2@gmail.com', 
                    fname: 'user', 
                    lname:'two', 
                    password:'222222' )

user3 = User.create!(email: 'user3@gmail.com', 
                    fname: 'user', 
                    lname:'three', 
                    password:'333333' )



spot1 = Spot.create!(title: "Mushroom Dome Cabin: #1 on airbnb in the world.",
                      description:"With a geodesic dome loft & a large deck in the trees, you'll feel like you're in a tree house in the woods. We have been listing with airbnb since July '09 and have had the most reservations of any of their listings! So you've got to plan ahead if you want to stay in the Mushroom.  ",
                      address: "3120 Trout Gulch RdAptos, CA 95003",
                      lat: 37.008141,
                      long: -121.883363,
                      price: 130,
                      host_id: demo.id,
                      num_bedrooms: 1,
                      num_beds: 2,
                      num_guests: 3,
                      num_bathrooms: 1,
                      spotType: 'Lodge',
                      location: 'Aptos',
)

spot2 = Spot.create!(title: "Penthouse Studio East 50s Terrace",
                      description:"the photo taken on the roof is during the summer when all the plants are in full bloom. The plantings will change during seasons so please don't expect the plants to be as full during the late fall, winter, or early spring! ",
                      address: "406 Lexington AveNew York, NY 10170",
                      lat: 43.135183,
                      long: -77.644103,
                      price: 135,
                      host_id: user1.id,
                      num_bedrooms: 1,
                      num_beds: 1,
                      num_guests: 2,
                      num_bathrooms: 1,
                      spotType: 'Entire apartment',
                      location: 'New York',
)

spot3 = Spot.create!(title: "WeLive Wall Street -- Studio Suite Apartment",
                      description:"Our Studio Suite unit has 1 queen-size bed (in its own office room) and 1 full-size bed in a private alcove and a queen-sized murphy bed that folds into the wall. The room is fully furnished with everything you need to feel at home: a sofa, 65 flat-screen TV, full-size wardrobe, linens, refrigerator/freezer, microwave, stove, pots, pans, plates, glassware, and cutlery. High-speed Wi-Fi, premium cable, and a wireless AirPlay speaker system are also included.",
                      address: "15 william st, new yrok, NY, 10005",
                      lat: 40.828730,
                      long: -73.038362,
                      price: 208,
                      host_id: user1.id,
                      num_bedrooms: 1,
                      num_beds: 3,
                      num_guests: 6,
                      num_bathrooms: 1,
                      spotType: 'Entire serviced apartment',
                      location: 'New York',
)

spot4 = Spot.create!(title: "Luxury Central Park Apartment close to everything",
                      description:"My place is located close to Central Park West and Columbia University. It is very modern and clean. Public transportation just steps away and can take you everywhere in New York City. My place is good for couples,families with kids,business travelers, friends and solo adventurers.on 125th street we have one of the best shopping area in NYC. You can find great bargain. If you like walking, biking,boating and other sport activities Central Park will be your place. COME TO VISIT NEW YORK CITY!!! ",
                      address: "130 W 119th St New York",
                      lat: 40.804396,
                      long: -73.949810,
                      price: 199,
                      host_id: user1.id,
                      num_bedrooms: 1,
                      num_beds: 4,
                      num_guests: 4,
                      num_bathrooms: 1,
                      spotType: 'Entire apartment',
                      location: 'New York',
)

spot5 = Spot.create!(title: "Huge 5BR Townhouse - LEGAL NYC B&B!",
                      description:"Why pay a fortune for a NYC hotel you can barely turn around in when you can stay in your own 5 Bedroom - 2.5 Bath House!! This grand historic home features 3 floors with over 2500 sq ft of living space. Huge parlor, full kitchen, laundry, deck & free WiFi! ",
                      address: "2 W 119th St New York",
                      lat: 40.802595,
                      long: -73.945423,
                      price: 300,
                      host_id: user2.id,
                      num_bedrooms: 5,
                      num_beds: 6,
                      num_guests: 13,
                      num_bathrooms: 2,
                      spotType: 'Entire townhouse',
                      location: 'New York',
)

spot6 = Spot.create!(title: "Beautiful Hollywood Getaway (2 blocks from Metro!)",
                      description:"Our Beautiful Hollywood Apartment is located just off famous Hollywood Blvd. It's spacious and cozy, air conditioned, and has a fully equipped kitchen! Stroll just seconds to everything Hollywood has to offer! Walk of Fame, the Chinese Theater, Universal Studios, and more are all just minutes away. ",
                      address: "6717 Whitley Terrace, Los Angeles, California",
                      lat: 34.108404,
                      long: -118.333799,
                      price: 99,
                      host_id: user3.id,
                      num_bedrooms: 1,
                      num_beds: 2,
                      num_guests: 4,
                      num_bathrooms: 1,
                      spotType: 'Entire apartment',
                      location: 'Los Angeles',
)

spot7 = Spot.create!(title: "Licensed luxurious guesthouse with Parking Garage",
                      description:"Detached guesthouse in the quiet Santa Monica neighborhood with everything you need for a relaxing stay, 42in TV HBO NOW, private garage and patio, 2.8 mile to Santa Monica piers and walking to great restaurant, desert places, bus station, and Hulu bike rental",
                      address: "2331 Pearl St, Santa Monica, California",
                      lat: 34.019100,
                      long: -118.463316,
                      price: 139,
                      host_id: user3.id,
                      num_bedrooms: 1,
                      num_beds: 1,
                      num_guests: 5,
                      num_bathrooms: 1,
                      spotType: 'Entire house',
                      location: 'Santa Monica',
)

spot8 = Spot.create!(title: "House with Pool & Jacuzzi By Venice Beach!!",
                      description:"The Joshua Tree House is a two bed two bath 1949 hacienda located 10 minutes from the west entrance of Joshua Tree National Park in Joshua Tree, CA. ",
                      address: "11337 Victoria Ave, Los Angeles, California",
                      lat: 34.012566,
                      long: -118.422219,
                      price: 116,
                      host_id: user3.id,
                      num_bedrooms: 2,
                      num_beds: 4,
                      num_guests: 6,
                      num_bathrooms: 1,
                      spotType: 'Entire house',
                      location: 'Los Angeles',
)



kitchen = Amenity.create!(name: 'Kitchen', sym: 'kitchen')
wifi = Amenity.create!(name:'Wifi', sym:'wifi')
elavator = Amenity.create!(name:'Elevator', sym:'elevator')
tv = Amenity.create!(name: 'Cable TV', sym:'cable_tv')
iron = Amenity.create!(name: 'Iron', sym:'iron')
washer = Amenity.create!(name:'Washer', sym:'washer')
shampoo = Amenity.create!(name:'Shampoo', sym:'shampoo')



AmenitiesSpot.create!(amenity_id: Amenity.all[0].id, spot_id: Spot.all[0].id)
AmenitiesSpot.create!(amenity_id: Amenity.all[2].id, spot_id: Spot.all[0].id)
AmenitiesSpot.create!(amenity_id: Amenity.all[3].id, spot_id: Spot.all[0].id)

AmenitiesSpot.create!(amenity_id: Amenity.all[4].id, spot_id: Spot.all[1].id)
AmenitiesSpot.create!(amenity_id: Amenity.all[5].id, spot_id: Spot.all[1].id)
AmenitiesSpot.create!(amenity_id: Amenity.all[6].id, spot_id: Spot.all[1].id)

AmenitiesSpot.create!(amenity_id: Amenity.all[3].id, spot_id: Spot.all[2].id)
AmenitiesSpot.create!(amenity_id: Amenity.all[4].id, spot_id: Spot.all[2].id)
AmenitiesSpot.create!(amenity_id: Amenity.all[6].id, spot_id: Spot.all[2].id)

AmenitiesSpot.create!(amenity_id: Amenity.all[0].id, spot_id: Spot.all[3].id)
AmenitiesSpot.create!(amenity_id: Amenity.all[1].id, spot_id: Spot.all[3].id)

AmenitiesSpot.create!(amenity_id: Amenity.all[2].id, spot_id: Spot.all[4].id)
AmenitiesSpot.create!(amenity_id: Amenity.all[1].id, spot_id: Spot.all[4].id)
AmenitiesSpot.create!(amenity_id: Amenity.all[3].id, spot_id: Spot.all[4].id)
AmenitiesSpot.create!(amenity_id: Amenity.all[4].id, spot_id: Spot.all[4].id)

AmenitiesSpot.create!(amenity_id: Amenity.all[4].id, spot_id: Spot.all[5].id)
AmenitiesSpot.create!(amenity_id: Amenity.all[3].id, spot_id: Spot.all[5].id)
AmenitiesSpot.create!(amenity_id: Amenity.all[2].id, spot_id: Spot.all[5].id)

AmenitiesSpot.create!(amenity_id: Amenity.all[0].id, spot_id: Spot.all[6].id)
AmenitiesSpot.create!(amenity_id: Amenity.all[5].id, spot_id: Spot.all[6].id)

AmenitiesSpot.create!(amenity_id: Amenity.all[1].id, spot_id: Spot.all[7].id)
AmenitiesSpot.create!(amenity_id: Amenity.all[2].id, spot_id: Spot.all[7].id)
AmenitiesSpot.create!(amenity_id: Amenity.all[3].id, spot_id: Spot.all[7].id)
AmenitiesSpot.create!(amenity_id: Amenity.all[4].id, spot_id: Spot.all[7].id)
AmenitiesSpot.create!(amenity_id: Amenity.all[5].id, spot_id: Spot.all[7].id)


one1 = open('https://airbmb-seeds.s3.amazonaws.com/first/1.jpg')
one2 = open('https://airbmb-seeds.s3.amazonaws.com/first/2.jpg')
one3 = open('https://airbmb-seeds.s3.amazonaws.com/first/3.jpg')
one4 = open('https://airbmb-seeds.s3.amazonaws.com/first/4.jpg')
one5 = open('https://airbmb-seeds.s3.amazonaws.com/first/5.jpg')
spot1.photos.attach(io: one1, filename: 'one1.jpg')
spot1.photos.attach(io: one2, filename: 'one2.jpg')
spot1.photos.attach(io: one3, filename: 'one3.jpg')
spot1.photos.attach(io: one4, filename: 'one4.jpg')
spot1.photos.attach(io: one5, filename: 'one5.jpg')
spot1.save


two1 = open('https://airbmb-seeds.s3.amazonaws.com/two/1.jpg')
two2 = open('https://airbmb-seeds.s3.amazonaws.com/two/2.jpg')
two3 = open('https://airbmb-seeds.s3.amazonaws.com/two/3.jpg')
two4 = open('https://airbmb-seeds.s3.amazonaws.com/two/4.jpg')
two5 = open('https://airbmb-seeds.s3.amazonaws.com/two/5.jpg')
spot2.photos.attach(io: two1, filename: 'two1.jpg')
spot2.photos.attach(io: two2, filename: 'two2.jpg')
spot2.photos.attach(io: two3, filename: 'two3.jpg')
spot2.photos.attach(io: two4, filename: 'two4.jpg')
spot2.photos.attach(io: two5, filename: 'two5.jpg')


three1 = open('https://airbmb-seeds.s3.amazonaws.com/three/1.jpg')
three2 = open('https://airbmb-seeds.s3.amazonaws.com/three/2.jpg')
three3 = open('https://airbmb-seeds.s3.amazonaws.com/three/3.jpg')
three4 = open('https://airbmb-seeds.s3.amazonaws.com/three/4.jpg')
three5 = open('https://airbmb-seeds.s3.amazonaws.com/three/5.jpg')
spot3.photos.attach(io: three1, filename: 'three1.jpg')
spot3.photos.attach(io: three2, filename: 'three2.jpg')
spot3.photos.attach(io: three3, filename: 'three3.jpg')
spot3.photos.attach(io: three4, filename: 'three4.jpg')
spot3.photos.attach(io: three5, filename: 'three5.jpg')


four1 = open('https://airbmb-seeds.s3.amazonaws.com/four/1.jpg')
four2 = open('https://airbmb-seeds.s3.amazonaws.com/four/2.jpg')
four3 = open('https://airbmb-seeds.s3.amazonaws.com/four/3.jpg')
four4 = open('https://airbmb-seeds.s3.amazonaws.com/four/4.jpg')
four5 = open('https://airbmb-seeds.s3.amazonaws.com/four/5.jpg')
spot4.photos.attach(io: four1, filename: 'four1.jpg')
spot4.photos.attach(io: four2, filename: 'four2.jpg')
spot4.photos.attach(io: four3, filename: 'four3.jpg')
spot4.photos.attach(io: four4, filename: 'four4.jpg')
spot4.photos.attach(io: four5, filename: 'four5.jpg')

five1 = open('https://airbmb-seeds.s3.amazonaws.com/five/1.jpg')
five2 = open('https://airbmb-seeds.s3.amazonaws.com/five/2.jpg')
five3 = open('https://airbmb-seeds.s3.amazonaws.com/five/3.jpg')
five4 = open('https://airbmb-seeds.s3.amazonaws.com/five/4.jpg')
five5 = open('https://airbmb-seeds.s3.amazonaws.com/five/5.jpg')
spot5.photos.attach(io: five1, filename: 'five1.jpg')
spot5.photos.attach(io: five2, filename: 'five2.jpg')
spot5.photos.attach(io: five3, filename: 'five3.jpg')
spot5.photos.attach(io: five4, filename: 'five4.jpg')
spot5.photos.attach(io: five5, filename: 'five5.jpg')


six1 = open('https://airbmb-seeds.s3.amazonaws.com/six/1.jpg')
six2 = open('https://airbmb-seeds.s3.amazonaws.com/six/2.jpg')
six3 = open('https://airbmb-seeds.s3.amazonaws.com/six/3.jpg')
six4 = open('https://airbmb-seeds.s3.amazonaws.com/six/4.jpg')
six5 = open('https://airbmb-seeds.s3.amazonaws.com/six/5.jpg')
spot6.photos.attach(io: six1, filename: 'six1.jpg')
spot6.photos.attach(io: six2, filename: 'six2.jpg')
spot6.photos.attach(io: six3, filename: 'six3.jpg')
spot6.photos.attach(io: six4, filename: 'six4.jpg')
spot6.photos.attach(io: six5, filename: 'six5.jpg')


seven1 = open('https://airbmb-seeds.s3.amazonaws.com/seven/1.jpg')
seven2 = open('https://airbmb-seeds.s3.amazonaws.com/seven/2.jpg')
seven3 = open('https://airbmb-seeds.s3.amazonaws.com/seven/3.jpg')
seven4 = open('https://airbmb-seeds.s3.amazonaws.com/seven/4.jpg')
seven5 = open('https://airbmb-seeds.s3.amazonaws.com/seven/5.jpg')
spot7.photos.attach(io: seven1, filename: 'seven1.jpg')
spot7.photos.attach(io: seven2, filename: 'seven2.jpg')
spot7.photos.attach(io: seven3, filename: 'seven3.jpg')
spot7.photos.attach(io: seven4, filename: 'seven4.jpg')
spot7.photos.attach(io: seven5, filename: 'seven5.jpg')


eight1 = open('https://airbmb-seeds.s3.amazonaws.com/eight/1.jpg')
eight2 = open('https://airbmb-seeds.s3.amazonaws.com/eight/2.jpg')
eight3 = open('https://airbmb-seeds.s3.amazonaws.com/eight/3.jpg')
eight4 = open('https://airbmb-seeds.s3.amazonaws.com/eight/4.jpg')
eight5 = open('https://airbmb-seeds.s3.amazonaws.com/eight/5.jpg')
spot8.photos.attach(io: eight1, filename: 'eight1.jpg')
spot8.photos.attach(io: eight2, filename: 'eight2.jpg')
spot8.photos.attach(io: eight3, filename: 'eight3.jpg')
spot8.photos.attach(io: eight4, filename: 'eight4.jpg')
spot8.photos.attach(io: eight5, filename: 'eight5.jpg')



booking1 = Booking.create!(num_guest: 2, start_date:)