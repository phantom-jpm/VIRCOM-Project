import React from 'react'
import {Create,SimpleForm,TextInput} from 'react-admin'
import {useState} from 'react'
import axios from 'axios'
import './class.css'

const OrganiserCreate = (props) => {

  const [fristname, setFristName] = useState('')
  const [middlename, setMiddleName] = useState('')
  const [lastname, setLastName] = useState('')
  const [DOB, setDOB] = useState('')
  const [concatno, setConcatNo] = useState('')
  const [alternateno, setAlternateNo] = useState('')
  const [email, setEmail] = useState('')
  const [profession, setProfession] = useState('')
  const [residentialaddress, setResidentialaddress] = useState('')
  const [officaladdress, setOfficaladdress] = useState('')
  const [country, setCountry] = useState('')
  const [state, setState] = useState('')
  const [pincode, setPincode] = useState('')
  const [companyname, setcompanyname] = useState('')
  const [username, setUserName] = useState('') 
  const [password, setPassword] = useState('')
 

  const submitHandle = (evt) =>{
     evt.preventDefault()
     var data = {FirstName : fristname,MiddleName : middlename,LastName : lastname,DOB : DOB,ContactNO : concatno,AlterNateNo : alternateno,
      Email : email,Profession : profession,ResAddress : residentialaddress,offAddress : officaladdress,
      Country : country,State : state,Pincode : pincode,CompanyName :companyname,UserName : username,Password : password}
      console.log(data)
      
    if(data.FirstName && data.MiddleName && data.LastName){
      axios.post('http://localhost:9000/organisers',data ).then((res) => {console.log(res);

})
}else{
  alert("Enter every * Field")
}
  }
  

    return (
        <div>
        <Create title='ORGANIZER DETAILS'{...props}>
      
              <SimpleForm>
              <h6>ORGANIZER DETAILS</h6>
              {console.log(fristname,middlename,lastname,DOB,concatno,alternateno,email,profession,residentialaddress,officaladdress,country,state,pincode,companyname,username,password)}
                <TextInput source='Frist Name: ' onChange={(evt) => setFristName(evt.target.value)} value={fristname} placeholder={fristname}required id="standard-required" /> 
                <TextInput source='Middle Name: ' onChange={(evt) => setMiddleName(evt.target.value)} value={middlename} placeholder={middlename}required id="standard-required"/>  
                <TextInput source='Last Name:' onChange={(evt) => setLastName(evt.target.value)} value={lastname}placeholder={lastname}required id="standard-required"/>
                <TextInput source='Date-Of-Birth(dd-mm-yy):' onChange={(evt) => setDOB(evt.target.value)} value={DOB}placeholder={DOB}required id="standard-required"/>
                <TextInput source='Contact No:'onChange={(evt) => setConcatNo(evt.target.value)} value={concatno}placeholder={concatno}required id="standard-required"/>
                <TextInput source='Alternate No:'onChange={(evt) => setAlternateNo(evt.target.value)} value={alternateno}placeholder={alternateno}/>
                <TextInput source='Enter email:' onChange={(evt) => setEmail(evt.target.value)} value={email}placeholder={email}required id="standard-required"/>
                <TextInput source='Profession:' onChange={(evt) => setProfession(evt.target.value)} value={profession}placeholder={profession}required id="standard-required"/>
                <TextInput multiline source='Residential Address:'onChange={(evt) => setResidentialaddress(evt.target.value)} value={residentialaddress}placeholder={residentialaddress}required id="standard-required"/>
                <TextInput multiline source='Offical Address:'onChange={(evt) => setOfficaladdress(evt.target.value)} value={officaladdress}placeholder={officaladdress}/>
                <TextInput source='Country:'onChange={(evt) => setCountry(evt.target.value)} value={country}placeholder={country}required id="standard-required"/>
                <TextInput source='State:'onChange={(evt) => setState(evt.target.value)} value={state}placeholder={state}required id="standard-required"/>
                <TextInput source='Pincode:'onChange={(evt) => setPincode(evt.target.value)} value={pincode}placeholder={pincode}required id="standard-required"/>
                <TextInput source='Company Name:'onChange={(evt) => setcompanyname(evt.target.value)} value={companyname}placeholder={companyname}required id="standard-required"/>
                <TextInput source='User Name:'onChange={(evt) => setUserName(evt.target.value)} value={username}placeholder={username}required id="standard-required"/>
                <TextInput source='Password:'onChange={(evt) => setPassword(evt.target.value)} value={password}placeholder={password}required id="standard-required"/>
                <button  type='SAVE' onClick={(evt) => {submitHandle(evt)}} style={{padding:"20px"}}>SAVE</button>
                </SimpleForm>
           </Create>

         </div>
    )
}
export default OrganiserCreate;