class AddStatusToAuctions < ActiveRecord::Migration[6.1]
  def change
    add_column :auctions, :status, :string, default: "draft"
  end
end
