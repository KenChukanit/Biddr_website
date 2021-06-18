class CreateBids < ActiveRecord::Migration[6.1]
  def change
    create_table :bids do |t|
      t.integer :bid_price
      t.references :auction, null: false, foreign_key: true
      t.timestamps
    end
  end
end
