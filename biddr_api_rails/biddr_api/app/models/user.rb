class User < ApplicationRecord
    has_secure_password
    has_many :auctions, dependent: :nullify
    has_many :bids, dependent: :nullify
    
    def full_name
        "#{first_name} #{last_name}"
    end
end
