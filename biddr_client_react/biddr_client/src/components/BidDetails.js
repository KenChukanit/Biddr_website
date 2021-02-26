import React from 'react';

function BidDetails(props) {
    const {bid_price} = props;

    return (
        <div>
            {bid_price}
        </div>
    )
}

export default BidDetails
