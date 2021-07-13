import React,{useEffect} from 'react'
import {SimpleForm,TextInput} from 'react-admin'
import {useState} from 'react'
import axios from 'axios'

const CategoryEdit = (props) => {
    const [categoryid, setCategoryId] = useState('')
    const [categoryname, setCategoryName] = useState('')
    const [categorydescription, setCategoryDescription] = useState('')
    const [createdon, setCreatedOn] = useState('')
    const [modifiedon, setModifiedOn] = useState('')

  

    useEffect(()=>{
      axios.get(`http://localhost:9000/categories/${id}`).then((res) =>
      {console.log(res.data)
        if(res.data){
       
        setCategoryName(res.data.CategoryName)
        setCategoryDescription(res.data.CategoryDes)
        setCategoryId(res.data.EventCategoryId)
        setModifiedOn(res.data.CategoryModifiedOn)
        setCreatedOn(res.data.CategoryCreatedOn)
        }
      })
    },[])
  


    var path = props.location.pathname
    var arr = path.split("/")
    var id = arr[arr.length-1]
    console.log(id)
    
    const submitHandle = (evt) =>{
    evt.preventDefault()
    var data = {
      CategoryId : categoryid, CategoryName: categoryname,CategoryDes : categorydescription ,
      CategoryCreatedOn: createdon, CategoryModifiedOn : modifiedon}

    axios.patch(`http://localhost:9000/categories/${id} `,data).then((res) => {console.log(res)})
 }
  
    return (

      <div>
      <SimpleForm>
      <h6>CATEGORIES</h6>
        
          {console.log(categoryid,categoryname,categorydescription,createdon,modifiedon)} 
         <TextInput source='Category Id:'onChange={(evt) => setCategoryId(evt.target.value)} value={categoryid}placeholder={categoryid}/>
         <TextInput source='Category Name:'onChange={(evt) => setCategoryName(evt.target.value)} value={categoryname}placeholder={categoryname}/>
         <TextInput multiline source='Category Description:'onChange={(evt) => setCategoryDescription(evt.target.value)} value={categorydescription}placeholder={categorydescription}/>
         <TextInput source='Created On(dd-mm-yy):'onChange={(evt) => setCreatedOn(evt.target.value)} value={createdon}placeholder={createdon}/>
         <TextInput source='Modidified On(dd-mm-yy):'onChange={(evt) => setModifiedOn(evt.target.value)} value={modifiedon}placeholder={modifiedon}/>
        <button  type='UPDATE' onClick={(evt) => {submitHandle(evt)}} style={{padding:"20px"}}>UPDATE</button>
        </SimpleForm>
      
      </div>
      
  )
}


export default CategoryEdit;