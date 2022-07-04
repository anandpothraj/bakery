import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';

const AddressModal = () => {

  const [data,setData]=useState([]);
  const [state,setState]=useState([]);
  const [city,setCity]=useState([]);
  const email= localStorage.getItem("email");
  const username = localStorage.getItem("name");
  const [ name, setName ] = useState(username);

  useEffect(()=>{
    axios.get("https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json")
    .then(res=> setData(res.data))
    .catch(err=>console.log(err))
  },[])

let country = [...new Set(data.map(item=> item.country))];
country.sort();

const handleCountryChange=(e)=>{
  setState("Select State");
  setCity("Select City");
  let Singlecountry = data.filter(item=> item.country === e.target.value);
  let states = [...new Set(Singlecountry.map(item=> item.subcountry))];
  setState(states);
}

const handleStateChange=(e)=>{
  let singleCity = data.filter(item=> item.subcountry === e.target.value);
  setCity(singleCity);
}

return (
  <>
    <Form autoComplete="off" >
      <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" value={email} readOnly />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicFullName">
          <Form.Label>Enter Full Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Full Name" value={name} onChange={(e) => setName(e.target.value)} autoFocus autoComplete="off" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Enter Phone Number</Form.Label>
          <Form.Control type="number" placeholder="Enter Phone Number" autoComplete="off" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicAddress">
        <Form.Control
          as="textarea"
          placeholder="Enter Address"
          style={{ height: '100px' }}
          autoComplete="off" 
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCountry">
        <Form.Label>Select Country</Form.Label>
        <Form.Select aria-label="Default select example" onChange={(e)=>handleCountryChange(e)} className="mx-2" >
          <option>Select Country</option>
        {country?.map((item,index)=> (
          <option key={index} value={item}>{item}</option>
          ))}
      </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicState">
        <Form.Label>Select State</Form.Label>
        <Form.Select aria-label="Default select example"  onChange={(e)=>handleStateChange(e)} className="mx-2">
        <option>Select State</option>
        {state !=='Select State' &&  state?.map((item,index)=>
        <option key={index} value={item}>{item}</option>
        )}
      </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCity">
        <Form.Label>Select City</Form.Label>
        <Form.Select aria-label="Default select example" className="mx-2">
        <option>Select City</option>
        {city !=='Select City' && city?.map((item,index)=>
        <option key={index} value={item?.name}>{item?.name}</option>
        )}
      </Form.Select>
      </Form.Group>
    </Form>
  </>
  )
}

export default AddressModal;