import React , { useEffect } from 'react';
import { Container, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Profile = () => {
    
    const userLoggedIn = useSelector( state => state.user.loggedIn);
    const profilePic = localStorage.getItem("img");
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    const navigate = useNavigate();

    const imgCss ={
        width: "30vh",
        height: "auto",
        margin: "auto",
        borderRadius: "50%",
    }

    useEffect(() => {
        if(userLoggedIn === false){
          navigate("/");
        }
      },[userLoggedIn,navigate])

    return (
    <div>
        <Container className='w-75'>
            <Card className='w-75'>
                <Card.Img variant="top" src={profilePic} style={imgCss}/>
                <Card.Body>
                    <Card.Title className='text-center'>{name}</Card.Title>
                    <Card.Text className='text-center'>
                        Email : {email}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    </div>
    )
}

export default Profile