import React from 'react'
import {Create,SimpleForm,TextInput} from 'react-admin'
import {useState} from 'react'

import axios from 'axios'
import './class.css'

const CategoryCreate = (props) => {


    const [categoryid, setCategoryId] = useState('')
    const [categoryname, setCategoryName] = useState('')
    const [categorydescription, setCategoryDescription] = useState('')
    const [createdon, setCreatedOn] = useState('')
    const [modifiedon, setModifiedOn] = useState('')


    
  const submitHandle = (evt) =>{
    evt.preventDefault()
    var data = {
      CategoryId : categoryid, CategoryName: categoryname,CategoryDes : categorydescription ,
      CategoryCreatedOn: createdon, CategoryModifiedOn : modifiedon}
    console.log(data)

    if(data.CategoryName && data.CategoryId){
    axios.post('http://localhost:9000/categories',data ).then((res) => {
      console.log(res.data);

    })
  }else{
    alert("Enter every * Field")
}

    }

return (
    <div>
        <Create title='CATEGORIES'{...props} > 
          <SimpleForm>
          <h6>CATEGORIES</h6>
          {console.log(categoryid,categoryname,categorydescription,createdon,modifiedon)}
         <TextInput source='Category Id:'onChange={(evt) => setCategoryId(evt.target.value)} value={categoryid}placeholder={categoryid} />
         <TextInput source='Category Name:'onChange={(evt) => setCategoryName(evt.target.value)} value={categoryname}placeholder={categoryname}required id="standard-required"/>
         <TextInput multiline source='Category Description:'onChange={(evt) => setCategoryDescription(evt.target.value)} value={categorydescription}placeholder={categorydescription}/>
         <TextInput source='Created On(dd-mm-yy):'onChange={(evt) => setCreatedOn(evt.target.value)} value={createdon}placeholder={createdon}/>
         <TextInput source='Modidified On(dd-mm-yy):'onChange={(evt) => setModifiedOn(evt.target.value)} value={modifiedon}placeholder={modifiedon}/>
         <button  type='SAVE' onClick={(evt) => {submitHandle(evt)}} style={{padding:"20px"}}>SAVE</button>
         </SimpleForm>
           </Create>


        </div>

)

}

export default CategoryCreate;
