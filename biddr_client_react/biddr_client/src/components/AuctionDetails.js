import React from 'react';


function AuctionDetails(props) {
    const {title, description,end_at,reserve_price,created_at} = props
    return (
        <div className="show">
            <h3>{title}</h3>
            <div className="show-detail">
            <h5>{description}</h5>
            <h5>Ends at:{end_at.toDateString()}</h5>
            </div>
        </div>
    )
}

export default AuctionDetails
