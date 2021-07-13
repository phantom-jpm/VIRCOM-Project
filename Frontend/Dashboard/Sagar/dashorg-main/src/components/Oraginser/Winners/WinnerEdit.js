import React from 'react'
import {SimpleForm,TextInput} from 'react-admin'
import {useState} from 'react'
import axios from 'axios'

const WinnerEdit = (props) => {
  
  const [winnerid, setWinnerId] = useState('')
  const [winnername, setWinnerName] = useState('')
  
  const [prizeamount, setPrizeAmount] = useState('')
  
  const [createdon, setCreatedOn] = useState('')
  const [modifiedon, setModifiedOn] = useState('')


  
  var path = props.location.pathname
  var arr = path.split("/")
  var id = arr[arr.length-1]
  console.log(id)


  
  const submitHandle = (evt) =>{
    evt.preventDefault()
    var data = {
      WinnersId : id, WinnersName : winnername,PrizeAmount :prizeamount ,
      WinnersCreatedOn : createdon, WinnersModifiedOn : modifiedon
     }

     axios.patch(`http://localhost:9000/winners/${id} `,data).then((res) => {console.log(res)})

    }
  
  return (
    <div>
    <SimpleForm>
    {console.log(winnerid,winnername,prizeamount,createdon,modifiedon)}
    <h6>WINNERS</h6>
    <TextInput source='Id:'onChange={(evt) => setWinnerId(evt.target.value)} value={winnerid}placeholder={winnerid}/>
   <TextInput source='Winner Name:'onChange={(evt) => setWinnerName(evt.target.value)} value={winnername}placeholder={winnername}/>
   <TextInput source='Prize Amount:'onChange={(evt) => setPrizeAmount(evt.target.value)} value={prizeamount}placeholder={prizeamount}/>
   <TextInput source='Created On(dd-mm-yy):'onChange={(evt) => setCreatedOn(evt.target.value)} value={createdon}placeholder={createdon}/>
   <TextInput source='Modidified On(dd-mm-yy):'onChange={(evt) => setModifiedOn(evt.target.value)} value={modifiedon}placeholder={modifiedon}/> <button  type='SUBMIT' onClick={(evt) => {submitHandle(evt)}} style={{padding:"20px"}}>SUBMIT</button>
   <button type="SAVE" onClick={(evt) =>{submitHandle(evt)}} style={{padding:"20px"}}>SAVE</button> 
   </SimpleForm>
     </div>
  )
}

export default WinnerEdit;