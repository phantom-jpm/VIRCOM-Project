import React,{useEffect} from 'react'
import {SimpleForm,TextInput} from 'react-admin'
import {useState} from 'react'
import axios from 'axios'

const OrganiserEdit = (props) => {

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

  
  useEffect(()=>{
    axios.get(`http://localhost:9000/organisers/${id}`).then((res) =>
    {console.log(res.data)
      if(res.data){
      setFristName(res.data.FirstName)
      setMiddleName(res.data.MiddleName)
      setLastName(res.data.LastName)
      setDOB(res.data.DOB)
      setConcatNo(res.data.ContactNO)
      setAlternateNo(res.data.AlterNateNo)
      setEmail(res.data.Email)
      setProfession(res.data.Profession)
      setResidentialaddress(res.data.ResAddress)
      setOfficaladdress(res.data.offAddress)
      setCountry(res.data.Country)
      setState(res.data.State)
      setPincode(res.data.Pincode)
      setcompanyname(res.data.companyname)
      setUserName(res.data.UserName)
      setPassword(res.data.Password)


      }
    })
  },[])

  var path = props.location.pathname
  var arr = path.split("/")
  var id = arr[arr.length-1]
  console.log(id)
  const submitHandle = (evt) =>{
  evt.preventDefault()
  var data = {FirstName : fristname,MiddleName : middlename,LastName : lastname,DOB : DOB,ContactNO : concatno,AlterNateNo : alternateno,
    Email : email,Profession : profession,ResAddress : residentialaddress,offAddress : officaladdress,
    Country : country,State : state,Pincode : pincode,CompanyName : companyname,UserName : username,Password : password}

    axios.patch(`http://localhost:9000/organisers/${id} `,data).then((res) => {console.log(res)})

  }
  return(
              <SimpleForm>
              <h6>ORGANIZER DETAILS</h6>
              {console.log(fristname,middlename,lastname,DOB,concatno,alternateno,email,profession,residentialaddress,officaladdress,country,state,pincode,companyname,username,password)}
                <TextInput source='Frist Name: ' onChange={(evt) => setFristName(evt.target.value)} value={fristname} placeholder={fristname} /> 
                <TextInput source='Middle Name: ' onChange={(evt) => setMiddleName(evt.target.value)} value={middlename} placeholder={middlename}/>  
                <TextInput source='Last Name:' onChange={(evt) => setLastName(evt.target.value)} value={lastname}placeholder={lastname}/>
                <TextInput source='Date-Of-Birth(dd-mm-yy):' onChange={(evt) => setDOB(evt.target.value)} value={DOB}placeholder={DOB}/>
                <TextInput source='Contact No:'onChange={(evt) => setConcatNo(evt.target.value)} value={concatno}placeholder={concatno}/>
                <TextInput source='Alternate No:'onChange={(evt) => setAlternateNo(evt.target.value)} value={alternateno}placeholder={alternateno}/>
                <TextInput source='Enter email:' onChange={(evt) => setEmail(evt.target.value)} value={email}placeholder={email}/>
                <TextInput source='Profession:' onChange={(evt) => setProfession(evt.target.value)} value={profession}placeholder={profession}/>
                <TextInput multiline source='Residential Address:'onChange={(evt) => setResidentialaddress(evt.target.value)} value={residentialaddress}placeholder={residentialaddress}/>
                <TextInput multiline source='Offical Address:'onChange={(evt) => setOfficaladdress(evt.target.value)} value={officaladdress}placeholder={officaladdress}/>
                <TextInput source='Country:'onChange={(evt) => setCountry(evt.target.value)} value={country}placeholder={country}/>
                <TextInput source='State:'onChange={(evt) => setState(evt.target.value)} value={state}placeholder={state}/>
                <TextInput source='Pincode:'onChange={(evt) => setPincode(evt.target.value)} value={pincode}placeholder={pincode}/>
                <TextInput source='Company Name:'onChange={(evt) => setcompanyname(evt.target.value)} value={companyname}placeholder={companyname}/>
                <TextInput source='User Name:'onChange={(evt) => setUserName(evt.target.value)} value={username}placeholder={username}/>
                <TextInput source='Password:'onChange={(evt) => setPassword(evt.target.value)} value={password}placeholder={password}/>
                
                <button  type='UPDATE' onClick={(evt) => {submitHandle(evt)}} style={{padding:"20px"}}>UPDATE</button>
                </SimpleForm>


  )
}

export default OrganiserEdit;