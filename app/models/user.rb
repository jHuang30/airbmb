# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  fname           :string           not null
#  lname           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
    attr_reader :password

    validates :email, :session_token, presence: true, uniqueness: true
    validates :fname, :lname, :password_digest, presence: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    after_initialize :ensure_session_token

    has_many :spots,
        foreign_key: :host_id,
        class_name: "Spot"

    has_many :reviews,
        foreign_key: :user_id,
        class_name: "Review"

    has_many :bookings,
        foreign_key: :user_id,
        class_name: "Booking"

    def self.find_by_credentials(email, password)  
        user = User.find_by(email: email)
        return nil unless user && user.is_password?(password)
        user
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)      
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.update!(session_token: self.class.generate_session_token)
        self.session_token
    end

    private

    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end


    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

end
