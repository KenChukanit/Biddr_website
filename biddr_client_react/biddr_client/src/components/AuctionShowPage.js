import React,{useState,useEffect} from 'react';
import {Auction} from '../data/request';
import AuctionDetails from './AuctionDetails';
import BidList from './BidList';
import NewBidForm from './NewBidForm';

function AuctionShowPage(props) {
    const [auction,setAuction] = useState({});
    const [checkReservePrice, setCheckReservePrice] = ('')
    const id = props.match.params.id
   

    const loadAuction=()=>{ 
        Auction.show(id)
        .then(auction => {
          console.log(auction);
        setAuction(auction)
        })
    }
    const checkBid=(bid)=>{
        
    }
    useEffect(()=>{
        loadAuction()
    },[])
    console.log(auction)
    const {title, description,end_at,reserve_price,created_at,bids} = auction
    
    return (
        <div>
            <AuctionDetails
                id = {id}
                title = {title}
                description={description}
                end_at = {new Date(end_at)}
                reserve_price = {reserve_price}
                created_at = {new Date(created_at)}
            />
              {!bids || bids === NaN?(<div></div>):
            (<div>Current Price: {Math.max(...bids.map((bid)=>{
                return bid.bid_price
                }))}</div>)}

            {!bids?(<div>No one bid in this auction</div>):
            (<div>{Math.max(...bids.map((bid)=>{
                return bid.bid_price
            }))>=reserve_price?(
            <div>Reserve Price Met</div>):
            (<div>Reserve Price Not Met</div>)}</div>)}
            <NewBidForm id={id} 
                        history={props.history}
                        loadAuction ={loadAuction}
            />
            <BidList
                bids = {bids}
                reserve_price ={reserve_price}
            />
            
        </div>
    )
}

export default AuctionShowPage
