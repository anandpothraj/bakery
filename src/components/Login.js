import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux/es/exports';
import { LoginUser } from '../redux/user/userActions';
import { ToastContainer, toast } from 'react-toastify';


const Login = () => {

    const [ name, setName ] = useState("")
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [pic, setPic] = useState(
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
      );

    const dispatch = useDispatch();

    const handleSubmit = (email,password) => {
        if( name && email  && password && pic){
            localStorage.setItem("loggedIn", true);
            localStorage.setItem("email",email);
            localStorage.setItem("name",name);
            dispatch(LoginUser());
        }
        else{
            toast.error("Please Fill all fields")
        }
    }

    const postDetails = (pics) => {
        if (pics.type === "image/jpeg" || pics.type === "image/png") {
          const data = new FormData();
          data.append('file' , pics);
            data.append('upload_preset','todoworld');
            data.append('cloud_name','de3bkua6f');
            fetch("https://api.cloudinary.com/v1_1/de3bkua6f/image/upload", {
            method: "post",
            body: data,
          })
            .then((res) => res.json())
            .then((data) => {
                localStorage.setItem("img",data.url.toString());
                setPic(data.url.toString());
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
           toast.notify("Please select a image of PNG,JPG and JPEG only..");
        }
      };

    return (
        <div className='login'>
            <ToastContainer/>
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
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Upload Profile Photo</Form.Label>
                        <Form.Control type="file" onChange={(e) => postDetails(e.target.files[0])}/>
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