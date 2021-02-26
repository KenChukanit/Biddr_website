import React from 'react';
import BidDetails from './BidDetails';

function BidList(props) {
    const {bids} = props
    return (
        <>
          {bids ? bids.map((b, i) => {
            return <BidDetails
              key={i}
              id={b.id}
              bid_price={b.bid_price}
              user={b.user}
              created_at={b.created_at}
              reserve_price = {props.reserve_price}
            />
          }) : '' }
        </>
      )
}

export default BidList
