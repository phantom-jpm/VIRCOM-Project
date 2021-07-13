import React from 'react'
import {Create,SimpleForm,TextInput} from 'react-admin'
import {useState} from 'react'

import axios from 'axios'
import './class.css'

const WinnerCreate = (props) => {
    
  const [winid, setId] = useState('')
  const [winnername, setWinnerName] = useState('')
  const [prizeamount, setPrizeAmount] = useState('')
  const [createdon, setCreatedOn] = useState('')
  const [modifiedon, setModifiedOn] = useState('')


  const submitHandle = (evt) =>{
    evt.preventDefault()
    var data = {
      WinnersId : winid, WinnersName : winnername,PrizeAmount :prizeamount ,
      WinnersCreatedOn : createdon, WinnersModifiedOn : modifiedon
  }
  console.log(data)
  axios.post('http://localhost:9000/winners',data ).then((res) => {console.log(res);

})
    }

return(
  <div>
    <Create title='WINNERS'{...props}>
    <SimpleForm>
    {console.log(winid,winnername,prizeamount,createdon,modifiedon)}
    <h6>WINNERS</h6>
    <TextInput source='WinId:'onChange={(evt) => setId(evt.target.value)} value={winid}placeholder={winid}/>
   <TextInput source='Winner Name:'onChange={(evt) => setWinnerName(evt.target.value)} value={winnername}placeholder={winnername}/>
   <TextInput source='Prize Amount:'onChange={(evt) => setPrizeAmount(evt.target.value)} value={prizeamount}placeholder={prizeamount}/>
   <TextInput source='Created On(dd-mm-yy):'onChange={(evt) => setCreatedOn(evt.target.value)} value={createdon}placeholder={createdon}/>
   <TextInput source='Modidified On(dd-mm-yy):'onChange={(evt) => setModifiedOn(evt.target.value)} value={modifiedon}placeholder={modifiedon}/> <button  type='SUBMIT' onClick={(evt) => {submitHandle(evt)}} style={{padding:"20px"}}>SUBMIT</button>
   <button type="SAVE" onClick={(evt) =>{submitHandle(evt)}} style={{padding:"20px"}}>SAVE</button> 
   </SimpleForm>
     </Create>
     </div>

)

  
}
export default WinnerCreate;
