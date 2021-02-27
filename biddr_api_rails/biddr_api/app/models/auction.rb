class Auction < ApplicationRecord
    has_many :bids
    belongs_to :user
    validates :title, presence: {message: 'must be provided'}
    validates :description, presence: {message: 'must be provided'}
    validates :end_at, presence: {message: 'must be provided'}
    validates :reserve_price, presence: {message: 'must be provided'}
end
