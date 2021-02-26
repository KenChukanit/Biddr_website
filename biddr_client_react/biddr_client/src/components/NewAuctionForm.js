import React,{useState} from 'react';
import {Auction} from '../data/request';

function NewAuctionForm(props) {
    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('');
    const [endAt, setEndAt] = useState('');
    const [reservePice,setReservePrice] = useState('');

    const handleSubmit = (event)=>{
        event.preventDefault();
        const formData= new FormData(event.currentTarget);
        const params={
            title: formData.get('title'),
            description: formData.get('body'),
            end_at: formData.get('end_at'),
            reserve_price: formData.get('reserve_price')
        }
        createAuction(params);
        event.currentTarget.reset();
    }

    const createAuction=(params)=>{
        Auction.create(params)
        .then((auction)=>{
            if(auction.id){
                const id = auction.id;
                props.history.push(`/auctions/${id}`)
            }
        })
    }

    return (
        <div>
            <h1>New Auction</h1>
            <form onSubmit={event=>handleSubmit(event)}>
                <div>
                    <label htmlFor='title'>Title: </label><br/>
                    <input name='title' id='title' value={title} onChange={e=>setTitle(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor='description'>Description: </label>
                    <textarea name='description' id='description' cols='60' rows='5' value={description} onChange={e=>setDescription(e.target.value)} />
                </div>
                <div>
                    <label htmlFor='end_at'>End at: </label><br/>
                    <input type="date" name='end_at' id='end_at' value={endAt} onChange={e=>setEndAt(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor='reserve_price'>Reserve Price: </label><br/>
                    <input name='reserve_price' id='reserve_price' value={reservePice} onChange={e=>setReservePrice(e.target.value)}/>
                </div>
                <input type='submit' value='Submit'/>
            </form>
        </div>
    )
}

export default NewAuctionForm
