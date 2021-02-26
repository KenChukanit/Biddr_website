import React,{useState} from 'react'
import {Bid} from '../data/request';

function NewBidForm(props) {
    const [bidPrice,setBidPrice] = useState('');
    const id = props.id
    const handleSubmit = (event)=>{
        event.preventDefault();
        const formData= new FormData(event.currentTarget);
        const params={
            bid_price: formData.get('bid_price'),
        }
        createBid(params,id);
        event.currentTarget.reset();
    }

    const createBid=(params,id)=>{
        Bid.create(params,id)
        .then((bid)=>{
            if(bid){
                console.log(bid.id)
            }
            props.history.push(`/auctions/${id}`)
            
        })
    }
    return (
        <div>
            <form onSubmit={event=>handleSubmit(event)}>
                <div>
                    <label htmlFor='bid_price'>Title: </label><br/>
                    <input name='bid_price' id='bid_price' value={bidPrice} onChange={e=>setBidPrice(e.target.value)}/>
                </div>
                <input type='submit' value='Submit'/>
            </form>
        </div>
    )
}

export default NewBidForm
