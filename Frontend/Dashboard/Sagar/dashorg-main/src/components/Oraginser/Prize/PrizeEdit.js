import React from 'react'
import { SimpleForm,TextInput} from 'react-admin'
import {useState} from 'react'
import axios from 'axios'

const PrizeEdit = (props) => {
    const [prizeid, setPrizeId] = useState('')
    const [prizename, SetPrizeName] = useState('')
    const [createdon, setCreatedOn] = useState('')
    const [modifiedon, setModifiedOn] = useState('')
  
    var path = props.location.pathname
    var arr = path.split("/")
    var id = arr[arr.length-1]
    console.log(id)
    
  const submitHandle = (evt) =>{
    evt.preventDefault()
    var data = {
      PrizeId : prizeid, PrizeName : prizename, PrizeCreatedOn : createdon, PrizeModifiedOn : modifiedon} 

     axios.patch(`http://localhost:9000/prizes/${id} `,data).then((res) => {console.log(res)})
  }

  return (

    <div>
        <SimpleForm>
          {console.log(id,prizename,createdon,modifiedon)}
          <h6>PRIZE</h6>
          <TextInput source='PzId:'onChange={(evt) => setPrizeId(evt.target.value)} value={prizeid}placeholder={prizeid}/>
         <TextInput source='Prize Name:'onChange={(evt) => SetPrizeName(evt.target.value)} value={prizename}placeholder={prizename}/>
         <TextInput source='Created On(dd-mm-yy):'onChange={(evt) => setCreatedOn(evt.target.value)} value={createdon}placeholder={createdon}/>
         <TextInput source='Modidified On(dd-mm-yy):'onChange={(evt) => setModifiedOn(evt.target.value)} value={modifiedon}placeholder={modifiedon}/>
         <button  type='SAVE' onClick={(evt) => {submitHandle(evt)}} style={{padding:"20px"}}>SAVE</button>
         </SimpleForm>
    
      </div>
      
  )




































}
 

export default PrizeEdit;