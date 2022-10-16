import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Signup() {
  
    useEffect(()=>{
        let authenticate =localStorage.getItem('user')
        if(authenticate){
            navigate('/dashboard/viewproduct')
        }
    },[])
    const [username, setusername] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    let navigate=useNavigate()
    
    let handleSignup =(e)=>{
        let user ={username,email,password}
        e.preventDefault();
        fetch('http://localhost:8000/auth/register',
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(user)
  
        }
      )
        .then((res) => {
            console.log(res)
           
            if(!res.ok){
                throw new Error(`${res.statusText}`)
            }
            return res.json()
        
          
        })
        .then(data=> {
            localStorage.setItem("token",data.accessToken)
            navigate('/dashboard/viewproduct')
        })
        .catch((error) => {
            console.log(error.message)
        })
    }
    return (
        <div className="card card-info">
            <div className="card-header">
                <h3 className="card-title">Horizontal Form</h3>
            </div>
            <form className="form-horizontal" onSubmit={(e)=>handleSignup(e)}>
                <div className="card-body">
                    <div className="form-group row">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Useranme</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="inputEmail3" placeholder="UserName" onChange={(e)=>setusername(e.target.value)} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="inputEmail3" placeholder="Email" onChange={(e)=>setemail(e.target.value)} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="inputPassword3" placeholder="Password" onChange={(e)=>setpassword(e.target.value)} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="offset-sm-2 col-sm-10">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck2" />
                                <label className="form-check-label" htmlFor="exampleCheck2">Remember me</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <button type="submit" className="btn btn-info">Sign Up</button>
                    <Link to={"/login"} className="btn btn-default float-right">Login</Link>
                </div>
            </form>
        </div>

    )
}
