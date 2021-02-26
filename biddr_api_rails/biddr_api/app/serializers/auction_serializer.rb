class AuctionSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :end_at, :reserve_price, :created_at

  belongs_to :user, key: :seller
  class UserSerializer < ActiveModel::Serializer
    attributes :id,
        :first_name,
        :last_name,
        :full_name
  end
  
  has_many  :bids  
  class BidSerializer < ActiveModel::Serializer
  attributes :id, :bid_price, :created_at
  
  end
  
end
