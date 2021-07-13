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


export const OrganiserList = (props) => {
    
   const [data, setdata] = useState([])
   const [change,setc] = useState(false)
   useEffect(() =>{
    
    axios.get('http://localhost:9000/organisers').then((res )=> {setdata(res.data); console.log(res.data)}   )
  },[change])

   const HandleDelete=(evt,id)=>{
    evt.preventDefault()
    axios.delete(`http://localhost:9000/organisers/${id}`).then((res) => {console.log(res.data)
    setc(!change)
   })
  }

    
    return (<div>
      <h1 className="title">ORGANIER PANEL
      <span><Link href="/#/Organizer/create" style={{float:"right"}}>Create</Link></span> </h1>
      <h3>ORGANIER PANEL</h3>
      <Paper className="">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell >Frist-Name</TableCell>
              <TableCell >Middle-Name</TableCell>
              <TableCell >Last-Name</TableCell>
              <TableCell >Date-Of-Birth</TableCell>
              <TableCell >Contact-No</TableCell>
              <TableCell >Alternate-No</TableCell>
              <TableCell >Email</TableCell>
              <TableCell >Profession</TableCell>
              <TableCell >Residential-Address</TableCell>
              <TableCell >Offical-Address</TableCell>
              <TableCell >Country</TableCell>
              <TableCell >State</TableCell>
              <TableCell >Pincode</TableCell>
              <TableCell >Company-Name</TableCell>
              <TableCell >User- Name</TableCell>
              <TableCell >Password</TableCell>
              
              
            </TableRow>
          </TableHead>
          <TableBody>
            {data && data.map((i) => (
              <TableRow >
                <TableCell > {i.FirstName}</TableCell>
                <TableCell >{i.MiddleName}</TableCell>
                <TableCell >{i.LastName}</TableCell>
                <TableCell >{i.DOB}</TableCell>
                <TableCell >{i.ContactNO}</TableCell>
                <TableCell >{i.AlterNateNo}</TableCell>
                <TableCell >{i.Email}</TableCell>
                <TableCell >{i.Profession}</TableCell>
                <TableCell >{i.ResAddress}</TableCell>
                <TableCell >{i.offAddress}</TableCell>
                <TableCell >{i.Country}</TableCell>
                <TableCell >{i.State}</TableCell>
                <TableCell >{i.Pincode}</TableCell>
                <TableCell >{i.CompanyName}</TableCell>
                <TableCell >{i.UserName}</TableCell>
                <TableCell >{i.Password}</TableCell>
                
              <TableCell ><Link href={`/#/Organizer/edit/${i._id}`}><button  >Edit</button></Link></TableCell>
                <TableCell ><button onClick={(evt) => HandleDelete(evt,i._id)}>Delete</button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      
      
          </div>        
    )
    
}





export default OrganiserList;