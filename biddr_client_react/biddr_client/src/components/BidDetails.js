import React from 'react';

function BidDetails(props) {
    const {bid_price} = props;

    return (
        <h3>
            {bid_price}
        </h3>
    )
}

export default BidDetails
