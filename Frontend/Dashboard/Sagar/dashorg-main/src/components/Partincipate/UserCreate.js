import React from 'react'
import {Create,SimpleForm,TextInput} from 'react-admin'
import {useState} from 'react'
import axios from 'axios'
import './class.css'
const UserCreate = (props) => {
 

const [firstname, setFirstName] = useState('')
const [lastname, setLastName] = useState('')
const [address, setAddress] = useState('')
const [phno, setPhno] = useState('')
const [email, setEmail] = useState('')
const [idproof, setIDProof] = useState('')
const [profession, setProfession] = useState('')
const [DOB, setDOB] = useState('')
const [categoryid, setCategoryId] = useState('')
const [categoryname, setCategoryName] = useState('')
const [id, setId] = useState('')

const [eventname, setEventName] = useState('')
const [eventdate, setEventDate] = useState('')


const [steps,setSteps] = useState(0)



const submitHandleBack= (evt) =>{
  evt.preventDefault()
  setSteps(steps-1);
}

const NextHandle=(evt) => {
  evt.preventDefault()
  setSteps(steps+1);
}

const submitHandle = (evt) =>{
   evt.preventDefault()
   var data = {name : firstname,lmame : lastname,address :address,phone :phno,
    dob : DOB,email :email,idproof :idproof,Profession :profession,
    event : eventname,categoryid : categoryid,edate : eventdate

  }
  
    
   axios.post('https://still-hamlet-44176.herokuapp.com/api',data ).then((res) => {console.log(res)
   
  })
   }
  return (
        <div>
        {steps === 0 &&
      <Create title='PARTCIPANTE DETIALS'{...props}>

      <SimpleForm>
      <h6>PARTCIPANTE DETIALS</h6>
      
      {console.log(firstname,lastname,address,phno,email,DOB,idproof,profession)}
      <TextInput source='First Name:'onChange={(evt) => setFirstName(evt.target.value)} value={firstname}placeholder={firstname}/>
      <TextInput source='Last Name:'onChange={(evt) => setLastName(evt.target.value)} value={lastname}placeholder={lastname}/>
      <TextInput multiline source='Address:'onChange={(evt) => setAddress(evt.target.value)} value={address}placeholder={address}/>
      <TextInput source='Phone No:'onChange={(evt) => setPhno(evt.target.value)} value={phno}placeholder={phno}/>
      <TextInput source='Enter mail:'onChange={(evt) => setEmail(evt.target.value)} value={email}placeholder={email}/>
      <TextInput source='Date-Of-Birth:' onChange={(evt) => setDOB(evt.target.value)} value={DOB}placeholder={DOB}/>
      <TextInput source='Id Proof(Adhar Card No):'onChange={(evt) => setIDProof(evt.target.value)} value={idproof}placeholder={idproof}/>
      <TextInput source='Profession:' onChange={(evt) => setProfession(evt.target.value)} value={profession}placeholder={profession}/>
      <button  type='NEXT' onClick={(evt) => {NextHandle(evt)}} style={{padding:"20px"}}>NEXT</button>
      </SimpleForm>

  </Create>
  
}
      {steps === 1 &&
      <Create title='REGISTER FOR EVENT'{...props}>
      <SimpleForm>
      <h6>REGISTERING FOR EVENT</h6>
      {console.log(id,eventname,categoryid,categoryname,eventdate)}
      <TextInput source='Id:'onChange={(evt) => setId(evt.target.value)} value={id}placeholder={id}/>
      <TextInput source='Event Name:'onChange={(evt) => setEventName(evt.target.value)} value={eventname}placeholder={eventname}/>
      <TextInput source='Category Id:'onChange={(evt) => setCategoryId(evt.target.value)} value={categoryid}placeholder={categoryid}/>
      <TextInput source='Category Name:'onChange={(evt) => setCategoryName(evt.target.value)} value={categoryname}placeholder={categoryname}/>
      <TextInput source='Event Date:'onChange={(evt) => setEventDate(evt.target.value)} value={eventdate}placeholder={eventdate}/> 
      <button  type='SUBMIT' onClick={(evt) => {submitHandle(evt)}} style={{padding:"20px"}}>SUBMIT</button>
      <button type="BACK" onClick={(evt) =>{submitHandleBack(evt)}} style={{padding:"20px",border:"Black"}}>Back</button> 
      <h6>
        THANK YOU
        </h6>

      </SimpleForm>
       </Create>
      }
    
 </div>


  )
}
export default UserCreate;