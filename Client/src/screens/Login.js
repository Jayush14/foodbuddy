import React ,{useState} from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function Login() {
  const [credentials,setcredentials]= useState({email:"",password:""})
  let navigate=useNavigate()
  const handleSubmit= async(abc)=>{ 
      abc.preventDefault(); 
      const response=await fetch("https://foodbuddy-rust.vercel.app/api/loginuser",{
          method:'POST',
          headers:{
          'Content-Type':'application/json'
          },
          body:JSON.stringify({email:credentials.email,password:credentials.password})
      });
      const json=await response.json();
      console.log(json);

      if(!json.success){
          alert('enter valid credentials')
      }
      if(json.success){

        localStorage.setItem("userEmail",credentials.email);
        localStorage.setItem("authToken",json.authToken);
        console.log(localStorage.getItem("authTokrn"))
        navigate("/");
    }

  }
      const onChange=(event)=>{
          setcredentials({...credentials,[event.target.name]:event.target.value})
      }
  return (
    <div style={{backgroundImage: 'url("https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=600")', height: '100vh', backgroundSize: 'cover' }}>
      <div>
        <Navbar/>
      </div>
    <div className='container'>
        
        <form className='w-50 m-auto mt-5 border-success rounded' onSubmit={handleSubmit}>
    
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label" style={{ color: 'black' }} >Email address</label>
      <input type="email" className="form-control bg-transparent border border-success" style={{ color: 'black', '::placeholder': { color: 'black' } }} name='email' value={credentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp"/>
      <div id="emailHelp" className='form-text text-danger'>We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label" style={{ color: 'black' }} >Password</label>
      <input type="password" className="form-control bg-transparent border border-success" name='password' value={credentials.password} style={{ color: 'black', '::placeholder': { color: 'black' } }} onChange={onChange} id="exampleInputPassword1"/>
    </div>
    
    <button type="submit" className="m-3 btn btn-success">Submit</button>
    <Link to="/createUser" className='m-3 btn btn-danger'>New User</Link>
  </form>
      </div>
    </div>
  )
}