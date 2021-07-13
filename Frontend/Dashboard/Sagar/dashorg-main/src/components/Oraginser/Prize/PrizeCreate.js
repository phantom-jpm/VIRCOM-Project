import React from 'react'
import {Create,SimpleForm,TextInput} from 'react-admin'
import {useState} from 'react'

import axios from 'axios'
import './class.css'
const PrizeCreate = (props) => {


    const [pzid, setPzId] = useState('')
    const [prizename, SetPrizeName] = useState('')
    const [createdon, setCreatedOn] = useState('')
    const [modifiedon, setModifiedOn] = useState('')

  
    
  const submitHandle = (evt) =>{
    evt.preventDefault()
    var data = {
      PrizeId : pzid,PrizeName : prizename,PrizeCreatedOn : createdon, PrizeModifiedOn : modifiedon}
        console.log(data)
        axios.post('http://localhost:9000/prizes',data ).then((res) => {
          console.log(res.data);
        })
    }

    return (
        <div>    
      <Create title='PRIZES'{...props}>
          <SimpleForm>
          {console.log(pzid,prizename,createdon,modifiedon)}
          <h6>PRIZE</h6>
          <TextInput source='PzId:'onChange={(evt) => setPzId(evt.target.value)} value={pzid}placeholder={pzid}/>
         <TextInput source='Prize Name:'onChange={(evt) => SetPrizeName(evt.target.value)} value={prizename}placeholder={prizename}/>
         <TextInput source='Created On(dd-mm-yy):'onChange={(evt) => setCreatedOn(evt.target.value)} value={createdon}placeholder={createdon}/>
         <TextInput source='Modidified On(dd-mm-yy):'onChange={(evt) => setModifiedOn(evt.target.value)} value={modifiedon}placeholder={modifiedon}/>
         <button  type='SAVE' onClick={(evt) => {submitHandle(evt)}} style={{padding:"20px"}}>SAVE</button>
         </SimpleForm>
           </Create>
    
    
            </div>
    
    )
    

    }

export default PrizeCreate;