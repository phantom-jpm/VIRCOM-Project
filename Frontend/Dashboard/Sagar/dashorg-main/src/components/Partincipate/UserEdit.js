import React from 'react'
import {SimpleForm,TextInput} from 'react-admin'
import {useState} from 'react'
import axios from 'axios'

const UserEdit = (props) => {

  

const [eventname, setEventName] = useState('')


var path = props.location.pathname
var arr = path.split("/")
var id = arr[arr.length-1]
console.log(id)

const submitHandle = (evt) =>{
   evt.preventDefault()
   var data = {
    event : Event}
  axios.patch(`https://still-hamlet-44176.herokuapp.com/api/${id}`,data ).then((res) => {console.log(res)
  })
   }


  return (

<div>
      <SimpleForm>
      <h6>REGISTERING FOR EVENT</h6>
      {console.log(eventname,)}
      <TextInput source='Event:'onChange={(evt) => setEventName(evt.target.value)} value={eventname}placeholder={eventname}/> 
      <button  type='UPDATE' onClick={(evt) => {submitHandle(evt)}} style={{padding:"20px"}}>UPDATE</button>
      <h6>
        THANK YOU
        </h6>

      </SimpleForm>
      
      
    </div>
      
  )
}

export default UserEdit;