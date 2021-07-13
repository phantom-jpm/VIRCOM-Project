import React,{useEffect} from 'react'
import {SimpleForm,TextInput} from 'react-admin'
import {useState} from 'react'
import axios from 'axios'


const EventEdit = (props) => {
  const [eventid, setEventId] = useState('')
  const [categoryid,setCategoryId] = useState('')
  const [eventname, setEventName] = useState('')
  const [eventdescription, setEventDescription] = useState('')
  const [eventdate, setEventDate] = useState('')
  const [noofparticipantes, setNoOfParticpantes] = useState('')
  const [noofwinnersaccounced, setNoOfWinnersAccounced] = useState('')
  const [createdon, setCreatedOn] = useState('')
  const [modifiedon, setModifiedOn] = useState('')

  var path = props.location.pathname
  var arr = path.split("/")
  var id = arr[arr.length-1]
  console.log(id)

  useEffect(()=>{
    axios.get(`http://localhost:9000/events/${id}`).then((res) =>
    {console.log(res.data)
      if(res.data){
      setEventId(res.data.EventId)
      setEventName(res.data.EventName)
      setEventDescription(res.data.EventDes)
      setEventDate(res.data.EventDate)
      setCategoryId(res.data.EventCategoryId)
      setModifiedOn(res.data.EventModifiedOn)
      setNoOfParticpantes(res.data.NoOfParticipants)
      setNoOfWinnersAccounced(res.data.NoOfWinners)
      setCreatedOn(res.data.EventCreatedOn)
      }
    })
  },[])

  const submitHandle = (evt) =>{
    evt.preventDefault()
    var data = {
      EventId : eventid,EventCategoryId :categoryid,EventName : eventname,EventDes : eventdescription,EventDate :eventdate,NoOfParticipants :noofparticipantes,
      NoOfWinners: noofwinnersaccounced,EventCreatedOn : createdon, EventModifiedOn : modifiedon}

      
    axios.patch(`http://localhost:9000/events/${id} `,data).then((res) => {console.log(res)})
     
 }
  return (

    <div>

          <SimpleForm >  
          <h6>EVENT DETAILS</h6>
          {console.log(eventid,categoryid,eventname,eventdescription,eventdate,noofparticipantes,noofwinnersaccounced)}
         <TextInput source='Event-Id:'onChange={(evt) => setEventId(evt.target.value)} value={eventid}placeholder={eventid}/>
         <TextInput source='Category Id:'onChange={(evt) => setCategoryId(evt.target.value)} value={categoryid}placeholder={categoryid}/>
         <TextInput source='Event Name:'onChange={(evt) => setEventName(evt.target.value)} value={eventname}placeholder={eventname}/>
         <TextInput multiline source='EventDescription:'onChange={(evt) => setEventDescription(evt.target.value)} value={eventdescription}placeholder={eventdescription}/>
         <TextInput source='Event Date(DD-MM-YY):'onChange={(evt) => setEventDate(evt.target.value)} value={eventdate}placeholder={eventdate}/>
         <TextInput source='No Of Participantes:'onChange={(evt) => setNoOfParticpantes(evt.target.value)} value={noofparticipantes}placeholder={noofparticipantes}/>
         <TextInput source='No Of Winners Accounced:'onChange={(evt) => setNoOfWinnersAccounced(evt.target.value)} value={noofwinnersaccounced}placeholder={noofwinnersaccounced}/> 
         <TextInput source='Created On(DD-MM-YY):'onChange={(evt) => setCreatedOn(evt.target.value)} value={createdon}placeholder={createdon}/>
         <TextInput source='Modidified On(DD-MM-YY):'onChange={(evt) => setModifiedOn(evt.target.value)} value={modifiedon}placeholder={modifiedon}/>
         <button  type='UPDATE' onClick={(evt) => {submitHandle(evt)}} style={{padding:"20px"}}>UPDATE</button>
         </SimpleForm>
         
    

 </div>
      
  )
}

export default EventEdit;