import React,{useState,useEffect} from 'react';
import {Auction} from '../data/request';
import { Link } from 'react-router-dom';

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
      
        {auctions.map((a,i)=> {
          return(
            <div key={i}>
              <Link to={`/auctions/${a.id}`}>
                <h1>{a.id} - {a.title}</h1>
              </Link>
                <div>
                    <h3>posted on: {a.created_at}</h3>
                </div>
            </div>
          )
        })}
      </main>
    )
}

export default AuctionIndexPage
