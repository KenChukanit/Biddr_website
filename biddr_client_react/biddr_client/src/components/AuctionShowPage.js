import React,{useState,useEffect} from 'react';
import {Auction} from '../data/request';
import AuctionDetails from './AuctionDetails';
import BidList from './BidList';
import NewBidForm from './NewBidForm';
import './AuctionShowPage.css';

function AuctionShowPage(props) {
    const [auction,setAuction] = useState({});
    const id = props.match.params.id
   

    const loadAuction=()=>{ 
        Auction.show(id)
        .then(auction => {
          console.log(auction);
        setAuction(auction)
        })
    }
 
    useEffect(()=>{
        loadAuction()
    },[])
    console.log(auction)
    const {title, description,end_at,reserve_price,created_at,bids} = auction
    
    return (
        <div className="container">
            <AuctionDetails
                id = {id}
                title = {title}
                description={description}
                end_at = {new Date(end_at)}
                reserve_price = {reserve_price}
                created_at = {new Date(created_at)}
            />
              {!bids || bids === undefined?(<div></div>):
            (<h5 className="mt-2">Current Price: {Math.max(...bids.map((bid)=>{
                return bid.bid_price 
                }))}</h5>)}

            {!bids || bids.length === 0?(<h5>No one bid in this auction</h5>):
            (<h5>{Math.max(...bids.map((bid)=>{
                return bid.bid_price
            }))>=reserve_price?(
            <div>Reserve Price Met</div>):
            (<div>Reserve Price Not Met</div>)}</h5>)}
            <NewBidForm id={id} 
                        history={props.history}
                        loadAuction ={loadAuction}
            />
            <h3>Previous bids</h3>
            <BidList
                bids = {bids}
                reserve_price ={reserve_price}
            />
            
        </div>
    )
}

export default AuctionShowPage
