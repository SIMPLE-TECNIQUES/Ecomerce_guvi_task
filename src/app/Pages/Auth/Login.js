import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
//
import { loginUserSuccess } from './action';
// import { setCurrentUser } from "../../Features/Cart/CartSlice"

function Login() {

//   const [users, setUsers] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();
  //
  const dispatch = useDispatch(); 
  //


  useEffect(() => {
    fetchUsers();
}, [])

const fetchUsers = () => {
  axios
  .get(`${process.env.REACT_APP_BACKEND_URL}/register`)
  .then((res) => {
    console.log(res.data);
  })
}

const handleLogin =  async (event) => {
  event.preventDefault();
  try {
      const response = await axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/login`, { username, password })
      //
      const {token,user} = response.data
      //
      console.log(user);
      alert('Login successful')
      //
      dispatch(loginUserSuccess(user));
      //
      localStorage.setItem('token', token);
      localStorage.setItem('username', username);
      //
    //   dispatch(setCurrentUser(username));
      //
   
      setUsername('')
      setPassword('')
      fetchUsers();
      navigate('/')
      window.location.reload();
      localStorage.setItem('token', token)
  } catch (error) {
      console.log('Login Error', error)
  }
}

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" >
      <div className="col-md-4">
        <div className="card border-primary">
          <div className="card-header  ">
            <h3 className="text-center">Login</h3>
          </div>
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" style={{width:'100px'}}className="btn btn-primary btn-block">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
