class CreateAuctions < ActiveRecord::Migration[6.1]
  def change
    create_table :auctions do |t|
      t.string :title
      t.text :description
      t.datetime :end_at
      t.integer :reserve_price

      t.timestamps
    end
  end
end
