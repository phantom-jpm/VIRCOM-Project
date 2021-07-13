import React from 'react'
import {Create,SimpleForm,TextInput} from 'react-admin'
import {useState} from 'react'

import axios from 'axios'
import './class.css'
const EventCreate = (props) => {

    
  const [eventid, setEventId] = useState('')
  const [categoryid,setCategoryId] = useState('')
  const [eventname, setEventName] = useState('')
  const [eventdescription, setEventDescription] = useState('')
  const [eventdate, setEventDate] = useState('')
  const [noofparticipantes, setNoOfParticpantes] = useState('')
  const [noofwinnersaccounced, setNoOfWinnersAccounced] = useState('')
  
  const [createdon, setCreatedOn] = useState('')
  const [modifiedon, setModifiedOn] = useState('')
    
  const submitHandle = (evt) =>{
    evt.preventDefault()
    var data = {
      EventId : eventid,EventCategoryId :categoryid,EventName : eventname,EventDes : eventdescription,EventDate :eventdate,NoOfParticipants :noofparticipantes,
      NoOfWinners: noofwinnersaccounced,EventCreatedOn : createdon, EventModifiedOn : modifiedon}
      
      if(data.EventId && data.CategoryId && data.EventName && data.NoOfParticipants && data.EventDate){
      axios.post('http://localhost:9000/events',data )
      .then((res) => {console.log(res)});
      }else{
           alert("Enter every * Field")
      }
    }

    return (
        <div>
            
          <Create title='EVENT'{...props}>
          <SimpleForm >  
          <h6>EVENT DETAILS</h6>
          {console.log(eventid,categoryid,eventname,eventdescription,eventdate,noofparticipantes,noofwinnersaccounced)}
         <TextInput source='Event Id:'onChange={(evt) => setEventId(evt.target.value)} value={eventid}placeholder={eventid}/>
         <TextInput source='Category Id:'onChange={(evt) => setCategoryId(evt.target.value)} value={categoryid}placeholder={categoryid}/>
         <TextInput source='Event Name:'onChange={(evt) => setEventName(evt.target.value)} value={eventname}placeholder={eventname}/>
         <TextInput multiline source='EventDescription:'onChange={(evt) => setEventDescription(evt.target.value)} value={eventdescription}placeholder={eventdescription}/>
         <TextInput source='Event Date(dd-mm-yy):'onChange={(evt) => setEventDate(evt.target.value)} value={eventdate}placeholder={eventdate}/>
         <TextInput source='No Of Participantes:'onChange={(evt) => setNoOfParticpantes(evt.target.value)} value={noofparticipantes}placeholder={noofparticipantes}/>
         <TextInput source='No Of Winners Accounced:'onChange={(evt) => setNoOfWinnersAccounced(evt.target.value)} value={noofwinnersaccounced}placeholder={noofwinnersaccounced}/> 
         <TextInput source='Created On(dd-mm-yy):'onChange={(evt) => setCreatedOn(evt.target.value)} value={createdon}placeholder={createdon}/>
         <TextInput source='Modidified On(dd-mm-yy):'onChange={(evt) => setModifiedOn(evt.target.value)} value={modifiedon}placeholder={modifiedon}/>
         <button  type='SAVE' onClick={(evt) => {submitHandle(evt)}} style={{padding:"20px"}}>SAVE</button>
         </SimpleForm>
    
           </Create>
          
            </div>
    
    )
    
}

export default EventCreate;