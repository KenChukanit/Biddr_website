import React,{useState,useEffect} from 'react';
import {Auction} from '../data/request';
import { Link } from 'react-router-dom';
import './AuctionIndexPage.css'

function AuctionIndexPage(props) {
    const [auctions,setAuctions] = useState([]);

    useEffect(()=>{
        Auction.index()
        .then((auctions) => {
            setAuctions(auctions)
        })
    },[])

    return (
        <main>
          <h1 className="index">Auctions</h1>
        {auctions.map((a,i)=> {
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
      </main>
    )
}

export default AuctionIndexPage
