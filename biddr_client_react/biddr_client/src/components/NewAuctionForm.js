import React,{useState} from 'react';
import {Auction} from '../data/request';
import FormErrors from './FormErrors';

function NewAuctionForm(props) {
    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('');
    const [endAt, setEndAt] = useState('');
    const [reservePice,setReservePrice] = useState('');
    const [errors,setErrors]=useState({});

    const handleSubmit = (event)=>{
        event.preventDefault();
        const formData= new FormData(event.currentTarget);
        const params={
            title: formData.get('title'),
            description: formData.get('description'),
            end_at: formData.get('end_at'),
            reserve_price: formData.get('reserve_price')
        }
        createAuction(params)
        event.currentTarget.reset();
    }
    console.log(props)
    const createAuction=(params)=>{
        Auction.create(params)
        .then((auction)=>{
            if(auction.errors){
                setErrors(auction.errors)
            }
            if(auction.id){
                const id = auction.id;
                console.log(id)
                props.history.push(`/auctions/${id}`)
            }
        })
    }

    return (
        <div>
            <h2>Create An Auction</h2>
            <form className="form-group" onSubmit={event=>handleSubmit(event)}>
                <div>
                    <label htmlFor='title'>Title: </label><br/>
                    <FormErrors errors={errors} forField='title'/>
                    <input name='title' 
                            id='title' 
                            value={title} 
                            onChange={e=>setTitle(e.target.value)}
                            className="form-control"
                            placeholder="eg. 3 Years old Macbook"
                    />
                </div>
                <div>
                    <label htmlFor='description'>Description: </label>
                    <FormErrors errors={errors} forField='description'/>
                    <textarea name='description' 
                            id='description' 
                            cols='60' 
                            rows='5' 
                            value={description} 
                            onChange={e=>setDescription(e.target.value)} 
                            className="form-control"
                            placeholder="*Details"
                            />
                </div>
                <div>
                    <label htmlFor='end_at'>End at: </label>
                    <FormErrors errors={errors} forField='end_date'/>
                    <input type="date" 
                            name='end_at' 
                            id='end_at' 
                            value={endAt} 
                            onChange={e=>setEndAt(e.target.value)}
                            className="form-control"
                            placeholder="2019/03/15"
                            />
                </div>
                <div>
                    <label htmlFor='reserve_price'>Reserve Price: </label><br/>
                    <FormErrors errors={errors} forField='reserve_price'/>
                    <input name='reserve_price' 
                            id='reserve_price' 
                            value={reservePice} 
                            onChange={e=>setReservePrice(e.target.value)}
                            className="form-control"
                            placeholder="1000"
                            />
                </div>
                <input type='submit' value='Save'/>
            </form>
        </div>
    )
}

export default NewAuctionForm
