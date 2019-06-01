# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Spot.destroy_all

demo = User.create!(email: 'demouser@gmail.com', 
                    fname: 'demo', 
                    lname:'user', 
                    password:'aaaaaa' )

user1 = User.create!(email: 'user1@gmail.com', 
                    fname: 'user', 
                    lname:'one', 
                    password:'111111' )



spots1 = Spot.create!(title: "MY LITTLE PARIS IN LOS ANGELES With free parking.",
                      description:"You will be ask to leave if any of the activities listed above happen.I LIVE NEXT DOOR AND SECURITY WILL LET ME KNOW RIGHT AWAY. ",
                      address: "418 S Spring St, Los Angeles, CA 90013",
                      lat: 34.048141,
                      long: -118.248428,
                      price: 120,
                      host_id: demo.id,
                      num_bedrooms: 3,
                      num_beds: 7,
                      num_guests: 14,
)

spots2 = Spot.create!(title: "The Joshua Tree House",
                      description:"The Joshua Tree House is a two bed two bath 1949 hacienda located 10 minutes from the west entrance of Joshua Tree National Park in Joshua Tree, CA. ",
                      address: "1502, 5th St, Twentynine Palms, CA 92278",
                      lat: 34.234322,
                      long: -116.057198,
                      price: 258,
                      host_id: user1.id,
                      num_bedrooms: 2,
                      num_beds: 4,
                      num_guests: 8,
)

spots3 = Spot.create!(title: "COZI AND GLAM IN MANHATTAN",
                      description:"GREAT LOCATION IN THE UPPER EAST SIDE IN MANHATTAN. A VERY COZY GLAMOROUS SPACE DESIGNED FOR YOU.  ",
                      address: "3703, 240 E 109th St, New York, NY 10029",
                      lat: 40.792620,
                      long: -73.941310,
                      price: 95,
                      host_id: user1.id,
                      num_bedrooms: 1,
                      num_beds: 1,
                      num_guests: 2,
)

spots4 = Spot.create!(title: "The Joshua Tree House",
                      description:"The Joshua Tree House is a two bed two bath 1949 hacienda located 10 minutes from the west entrance of Joshua Tree National Park in Joshua Tree, CA. ",
                      address: "156602, 5th St, Twentynine Palms, CA 92278",
                      lat: 34.2342,
                      long: -116.057,
                      price: 258,
                      host_id: user1.id,
                      num_bedrooms: 2,
                      num_beds: 4,
                      num_guests: 8,
)

spots5 = Spot.create!(title: "The Joshua Tree House",
                      description:"The Joshua Tree House is a two bed two bath 1949 hacienda located 10 minutes from the west entrance of Joshua Tree National Park in Joshua Tree, CA. ",
                      address: "154402, 5th St, Twentynine Palms, CA 92278",
                      lat: 34.24322,
                      long: -116.05198,
                      price: 258,
                      host_id: user1.id,
                      num_bedrooms: 2,
                      num_beds: 4,
                      num_guests: 8,
)

spots6 = Spot.create!(title: "The Joshua Tree House",
                      description:"The Joshua Tree House is a two bed two bath 1949 hacienda located 10 minutes from the west entrance of Joshua Tree National Park in Joshua Tree, CA. ",
                      address: "102, 5th St, Twentynine Palms, CA 92278",
                      lat: 34.23432902,
                      long: -116.0574198,
                      price: 258,
                      host_id: user1.id,
                      num_bedrooms: 2,
                      num_beds: 4,
                      num_guests: 8,
)

spots7 = Spot.create!(title: "The Joshua Tree House",
                      description:"The Joshua Tree House is a two bed two bath 1949 hacienda located 10 minutes from the west entrance of Joshua Tree National Park in Joshua Tree, CA. ",
                      address: "15025, 5th St, Twentynine Palms, CA 92278",
                      lat: 34.2343622,
                      long: -116.0587198,
                      price: 258,
                      host_id: user1.id,
                      num_bedrooms: 2,
                      num_beds: 4,
                      num_guests: 8,
)

spots8 = Spot.create!(title: "The Joshua Tree House",
                      description:"The Joshua Tree House is a two bed two bath 1949 hacienda located 10 minutes from the west entrance of Joshua Tree National Park in Joshua Tree, CA. ",
                      address: "15078, 5th St, Twentynine Palms, CA 92278",
                      lat: 34.2343722,
                      long: -116.0857198,
                      price: 258,
                      host_id: user1.id,
                      num_bedrooms: 2,
                      num_beds: 4,
                      num_guests: 8,
)

spots9 = Spot.create!(title: "The Joshua Tree House",
                      description:"The Joshua Tree House is a two bed two bath 1949 hacienda located 10 minutes from the west entrance of Joshua Tree National Park in Joshua Tree, CA. ",
                      address: "15078, 56th St, Twentynine Palms, CA 92278",
                      lat: 34.234372290,
                      long: -116.085713298,
                      price: 258,
                      host_id: user1.id,
                      num_bedrooms: 2,
                      num_beds: 4,
                      num_guests: 8,
)

spots10 = Spot.create!(title: "The Joshua Tree House",
                      description:"The Joshua Tree House is a two bed two bath 1949 hacienda located 10 minutes from the west entrance of Joshua Tree National Park in Joshua Tree, CA. ",
                      address: "15078, 53th St, Twentynine Palms, CA 92278",
                      lat: 34.2346371222,
                      long: -116.085715598,
                      price: 258,
                      host_id: user1.id,
                      num_bedrooms: 2,
                      num_beds: 4,
                      num_guests: 8,
)