// import React, {useState} from 'react'
// import { Button } from 'react-bootstrap';
// import Form from 'react-bootstrap/Form';
import apiURL from '../api';

// export default function LoginForm({setUserEmail}) {
//     const [email, setEmail] = useState('');
// 	const [password, setPassword] = useState('');

//     const handleSubmit = async (e) => {
//         setUserEmail(email)
// 		const response = await fetch(`${apiURL}/users`, {
// 			method: "POST",
// 			headers: {
// 				'Content-Type': 'application/json'
// 			},
// 			body: JSON.stringify(
// 				{
// 					email: email,
//                     password: password
// 				}
// 			)
// 		});
// 		const data = await response.json();
// 	}
//   return (
//     <div>
//         <Form onSubmit={handleSubmit}>
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//                 <Form.Label>Email address</Form.Label>
//                 <Form.Control
//                 onChange={(e) =>{setEmail(e.target.value)}}
//                 value={email} 
//                 type="email" 
//                 placeholder="Enter email" />
//                 <Form.Text className="text-muted">
//                 We'll never share your email with anyone else.
//                 </Form.Text>
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicPassword">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control 
//                   onChange={(e) =>{setPassword(e.target.value)}}
//                   value={password} 
//                 type="password" placeholder="Password" />
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="formBasicCheckbox">
//                 <Form.Check type="checkbox" label="Check me out" />
//             </Form.Group>
//             <Button
//             variant="primary" type="submit">
//                 Submit
//             </Button>
// 		</Form>
//     </div>
//   )
// }

import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Make a POST request to the server with the user's email and password
    const response = await fetch(`${apiURL}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
        }),
    });

    // If the login was successful, get the user's data from the API
    if (response.status === 200) {
        const data = await response.json();
  
        // Set the user's data in the state
        setUser(data);

    // Redirect the user to the inventory app's main page if the login was successful
    if (response.status === 200) {
      window.location.href = '/inventory';
    } else {
      // Display an error message if the login was unsuccessful
      alert('Invalid username or password.');
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
