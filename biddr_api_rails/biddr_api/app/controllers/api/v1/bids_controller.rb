class Api::V1::BidsController < Api::ApplicationController
    def create
        #auction_id = params[:id]
        auction = Auction.find params[:auction_id]
       
        bid = Bid.create bid_params
        bid.user = current_user
        bid.auction = auction
        if bid.save
        render json:{id: bid.id}
        end
    end


    private
    def bid_params 
        params.require(:bid).permit(:bid_price)
    end
end
