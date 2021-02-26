class Api::V1::AuctionsController < Api::ApplicationController
    def index 
     
        auctions= Auction.order created_at: :desc
        render json: auctions , each_serializer: AuctionSerializer
       
    end
    def show
        @auction=Auction.find params[:id]
        render json: @auction
    end
    def create
        auction = Auction.new auction_params
        auction.user=current_user
        if auction.save
            render json:{id: auction.id}
        else
            render(
                json: {errors: auction.errors},
                status: 422 
            )
        end
    end

    private
    def auction_params
        params.require(:auction).permit(:title,:description,:end_at,:reserve_price)
    end
end
