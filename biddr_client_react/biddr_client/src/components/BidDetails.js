import React from 'react';

function BidDetails(props) {
    const {bid_price} = props;

    return (
        <h2>
            {bid_price}
        </h2>
    )
}

export default BidDetails
