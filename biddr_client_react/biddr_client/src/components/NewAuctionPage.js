import React from 'react';
import NewAuctionForm from "./NewAuctionForm";

function NewAuctionPage(props) {
    return (
        <main className = "container">
            <NewAuctionForm history ={props.history}/>
        </main>
    )
}

export default NewAuctionPage
