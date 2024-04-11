import React from 'react'
import  { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function SignUp() {
//   const [users, setUsers] = useState([])
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
}, [])
 const fetchUsers = () => {
        axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/register`)
        .then((res) => {
            console.log(res.username)
            console.log("succesfull");
        })
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/register`, { email, username, password })
      .then(() => {
          alert('Registration Successful')
          setEmail('')
          setUsername('')
          setPassword('')
          fetchUsers();
          navigate('/login')
      })
      .catch((error) => {
          console.log('Unable to register user')
      })

  }


  return (
    <div style={{ height: '75vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <div style={{ width: '30%' }}>
    <form onSubmit={handleSubmit} style={{ border: '1px solid #007bff', borderRadius: '0.50rem', padding: '1.5rem' }}>
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="email" style={{ marginBottom: '0.5rem', display: 'block' }}>Email</label>
        <input
          type="text"
          className="form-control"
          id="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: '100%', padding: '0.375rem 0.75rem', fontSize: '1rem', lineHeight: '1.5', color: '#495057', backgroundColor: '#fff', border: '1px solid #ced4da', borderRadius: '0.25rem' }}
        />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="username" style={{ marginBottom: '0.5rem', display: 'block' }}>Username</label>
        <input
          type="text"
          className="form-control"
          id="username"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ width: '100%', padding: '0.375rem 0.75rem', fontSize: '1rem', lineHeight: '1.5', color: '#495057', backgroundColor: '#fff', border: '1px solid #ced4da', borderRadius: '0.25rem' }}
        />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="password" style={{ marginBottom: '0.5rem', display: 'block' }}>Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '100%', padding: '0.375rem 0.75rem', fontSize: '1rem', lineHeight: '1.5', color: '#495057', backgroundColor: '#fff', border: '1px solid #ced4da', borderRadius: '0.25rem' }}
        />
      </div>
      <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.375rem 0.75rem', fontSize: '1rem', lineHeight: '1.5', color: '#fff', backgroundColor: '#007bff', border: '1px solid #007bff', borderRadius: '0.25rem' }}>Sign Up</button>
    </form>
  </div>
</div>

  )
}

export default SignUp

