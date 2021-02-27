import React,{useState} from 'react';


const SignInPage =({handleSubmit, history,currentUser})=>{
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [warning, setWarning] = useState('');
  
    function onSubmit(event){
        event.preventDefault();
        const {currentTarget}=event;
        const formData= new FormData(currentTarget);
        const formValues={
            email: formData.get('email'),
            password: formData.get('password')
        }
        handleSubmit(formValues);
        history.push('/auctions');
    }
    return(
        <main className="container">
        <h1>Sign In</h1>
        <form className="form-group" onSubmit={onSubmit}>
            <div>{warning}</div>
            <div>
                <label htmlFor='email'>Email</label>
                <input id='email' 
                        type='email' 
                        name='email' 
                        className="form-control"
                        value={email} 
                        onChange={e=>setEmail(e.target.value)}
            />
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input id='password' 
                        type='password' 
                        name='password' 
                        className="form-control"
                        value={password} 
                        onChange={e=>setPassword(e.target.value)}
                        />
            </div>
            <input type='submit' value='Sign In' />
        </form>
        </main>
    )
}
export default SignInPage;