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
              bid={b.brice}
              user={b.user}
              created_at={b.created_at}
            />
          }) : '' }
        </>
      )
}

export default BidList
