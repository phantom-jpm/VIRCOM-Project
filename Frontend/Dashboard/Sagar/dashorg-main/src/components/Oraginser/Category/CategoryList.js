import React,{useEffect,useState} from 'react'
import { Link } from '@material-ui/core';
import './class.css'
import axios from 'axios'
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export const CategoryList = (props) => {
    
   const [data, setdata] = useState([])
   const [change,setc] = useState(false)
   useEffect(() =>{
    
      axios.get('http://localhost:9000/categories/').then((res )=> {setdata(res.data); console.log(res.data)}   )
   },[change])
   
 const HandleDelete=(evt,id)=>{
   evt.preventDefault()
   axios.delete(`http://localhost:9000/categories/${id}`).then((res) => {console.log(res.data)
   setc(!change)
  })
 }
    
    return (<div>
      <h1 className="title">ORGANIER PANEL
      <span><Link href="/#/category/create" style={{float:"right"}}>Create</Link></span> </h1>

      <h3>CATEGORIES DETAILS</h3>
      <Paper className="Categories">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Category-Id</TableCell>
              <TableCell >Category-Name</TableCell>
              <TableCell >Category-Description</TableCell>
              <TableCell >Created-On</TableCell>
              <TableCell >Modidified-On</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {data && data.map((i) => (
              <TableRow >
                <TableCell >{i.CategoryId}</TableCell>
                <TableCell >{i.CategoryName}</TableCell>
                <TableCell >{i.CategoryDes}</TableCell>
                <TableCell >{i.CategoryCreatedOn}</TableCell>
                <TableCell >{i.CategoryModifiedOn}</TableCell>
                
              <TableCell ><Link href={`/#/category/edit/${i._id}`}><button  >Edit</button></Link></TableCell>
                <TableCell ><button onClick={(evt) => HandleDelete(evt,i._id)}>Delete</button></TableCell>
              
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>


     
      
    </div>
    



        
    )
    
}





export default CategoryList;