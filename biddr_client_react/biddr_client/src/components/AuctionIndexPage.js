import React,{useState,useEffect} from 'react';
import {Auction} from '../data/request';
import { Link } from 'react-router-dom';
import './AuctionIndexPage.css'

function AuctionIndexPage(props) {
    const [auctions,setAuctions] = useState([]);
    const currentUser = props.currentUser;
  
    const publishedUserAuctionFilter=(arr)=>{
      return arr.filter((a)=>{
        if(!currentUser){
          return a.status === "published"
        }else{
          return a.seller.id === currentUser.id || a.status === "published"
        }
      })
    }
    useEffect(()=>{
        Auction.index()
        .then((auctions) => {
            setAuctions(auctions)
        })
    },[])

    return (
        <main className="container">
          <h2 className="index">Auctions</h2>
        <>
        {publishedUserAuctionFilter(auctions).map((a,i)=> {
          return(
            <div className="auction-index" key={i}>
              <Link to={`/auctions/${a.id}`}>
                <h3>{a.id} - {a.title}</h3>
              </Link>
                <div>
                    <h3>posted on: {new Date(a.created_at).toDateString()}</h3>
                </div>
            </div>
          )
        })}
        </>
      </main>
    )
}

export default AuctionIndexPage
