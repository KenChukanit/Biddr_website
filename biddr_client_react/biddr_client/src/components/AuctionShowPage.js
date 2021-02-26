import React,{useState,useEffect} from 'react';
import {Auction} from '../data/request';
import AuctionDetails from './AuctionDetails';
import BidList from './BidList';
import NewBidForm from './NewBidForm';

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
        <div>
            <AuctionDetails
                id = {id}
                title = {title}
                description={description}
                end_at = {end_at}
                reserve_price = {reserve_price}
                created_at = {created_at}
            />
            <NewBidForm id={id}/>
            <BidList
                bids = {bids}
            />
            
        </div>
    )
}

export default AuctionShowPage
