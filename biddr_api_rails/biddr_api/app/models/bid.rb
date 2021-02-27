class Bid < ApplicationRecord
    belongs_to :auction
    belongs_to :user
    validates :bid_price, presence: {message: 'must be provided'}
  end
  