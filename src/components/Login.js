import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux/es/exports';
import { LoginUser } from '../redux/user/userActions';


const Login = () => {

    const [ name, setName ] = useState("")
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (email,password) => {
        if( name && email  && password){
            localStorage.setItem("loggedIn", true);
            localStorage.setItem("email",email);
            localStorage.setItem("name",name);
            dispatch(LoginUser());
        }
    }

    return (
        <div className='login'>
            <Container className='mx-5'>
                <h3 className='text-center mt-4'>New to website please sign up</h3>
                <Form className='mx-auto w-75 my-5' autoComplete="off">
                    <Form.Group className="mb-3">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" autoComplete="off" value={name} onChange={(e) => setName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" autoComplete='off' value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </Form.Group>
                    <Button variant="primary" onClick={()=>handleSubmit(email,password)}>
                        Signup
                    </Button>
                </Form>
            </Container>
        </div>
    )
}



export default Login;