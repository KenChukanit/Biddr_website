import React,{useState} from 'react';
import {User} from '../data/request';
import FormErrors from './FormErrors';

const SignUpPage=(props)=>{
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [errors,setErrors]=useState({});
    const {handleSignUp,history}=props;

    function handleSubmit(event){
        event.preventDefault();
        const {currentTarget}=event;
        const formData=new FormData(currentTarget);
        const signUpParams={
            first_name: formData.get('first_name'),
            last_name: formData.get('last_name'),
            email: formData.get('email'),
            password: formData.get('password'),
            password_confirmation: formData.get('password_confirmation')
        }
        User.create(signUpParams).then(res=>{
            if(res.errors){
                setErrors(res.errors)
            }
            if (res.id){
                handleSignUp();
                history.push('/auctions')
            }
        })

    }
    return(
        <main className="container">
        <h1>Sign Up</h1>
        <form className="form-group" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="first_name">First Name</label>
                <FormErrors errors={errors} forField='first_name'/>
                <input type='text' 
                        name='first_name' 
                        id='first_name' 
                        className="form-control"
                        value={firstName}
                        onChange ={e=>setFirstName(e.target.value)}
                        />
            </div>
            <div>
                <label htmlFor="last_name">Last Name</label>
                <FormErrors errors={errors} forField='last_name'/>
                <input type='text' 
                        name='last_name' 
                        id='last_name' 
                        className="form-control"
                        value={lastName}
                        onChange ={e=>setLastName(e.target.value)}
                        />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <FormErrors errors={errors} forField='email'/>
                <input type='email' 
                        name='email' 
                        id='email' 
                        className="form-control"
                        value={email}
                        onChange ={e=>setEmail(e.target.value)}
                        />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <FormErrors errors={errors} forField='password'/>
                <input type='password' 
                        name='password' 
                        id='password' 
                        className="form-control"
                        value={password}
                        onChange ={e=>setPassword(e.target.value)}
                        />
            </div>
            <div>
                <label htmlFor="password_confirmation">Password Confirmation</label>
                <FormErrors errors={errors} forField='password_confirmation'/>
                <input type='password' 
                        name='password_confirmation' 
                        id='password_confirmation' 
                        className="form-control"
                        value={password2}
                        onChange ={e=>setPassword2(e.target.value)}
                        />
            </div>
            <input type='submit' value='Sign Up'/>
        </form>
        </main>
    )
}
export default SignUpPage;