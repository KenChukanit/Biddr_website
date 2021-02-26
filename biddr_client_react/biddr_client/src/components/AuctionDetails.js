import React from 'react';


function AuctionDetails(props) {
    const {title, description,end_at,reserve_price,created_at} = props
    return (
        <div>
            <h1>{title}</h1>
            <h5>{description}</h5>
            <h3>{end_at}</h3>
        </div>
    )
}

export default AuctionDetails
