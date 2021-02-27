import React from 'react';


function AuctionDetails(props) {
    const {title, description,end_at,reserve_price,created_at} = props
    return (
        <>
        <h3 className="d-flex flex-column mt-5">{title}</h3>
        <div className="show d-flex flex-row mt-2">
            
            <div className="show-detail">
            <h5 className="d-flex flex-column flex-wrap justify-content-around">{description}</h5>
            <h5 className="d-flex flex-column">Ends at:  {end_at.toDateString()}</h5>
            </div>
            
        </div>
        </>
    )
}

export default AuctionDetails
