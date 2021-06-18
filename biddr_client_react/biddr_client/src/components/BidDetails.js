import React from 'react';

function BidDetails(props) {
    const {bid_price,created_at} = props;

    return (
        <h5>
            $ {bid_price} on {created_at.toDateString()}
        </h5>
    )
}

export default BidDetails
