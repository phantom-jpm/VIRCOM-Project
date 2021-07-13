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


export const PrizeList = (props) => {
    
   const [data, setdata] = useState([])
   const [change,setc] = useState(false)

   useEffect(() =>{
    
      axios.get('http://localhost:9000/prizes').then((res )=> {setdata(res.data); console.log(res.data)}   )
   },[change])

   const HandleDelete=(evt,id)=>{
    evt.preventDefault()
    axios.delete(`http://localhost:9000/prizes/${id}`).then((res) => {console.log(res.data)
    setc(!change)
   })
  }
    
    return (<div>
      <h1 className="title">ORGANIER PANEL
      <span><Link href="/#/prize/create" style={{float:"right"}}>Create</Link></span> </h1>

      <h3>PRIZE DETAILS</h3>
      <Paper className="Prize">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Prize-Id</TableCell>
              <TableCell >Prize-Name</TableCell>
              <TableCell >Created-On</TableCell>
              <TableCell >Modidified-On</TableCell>
            </TableRow>
          </TableHead>
          
          <TableBody>
            {data && data.map((i) => (
              <TableRow >
                <TableCell >{i.PrizeId}</TableCell>
                <TableCell >{i.PrizeName}</TableCell>
                <TableCell >{i.PrizeCreatedOn}</TableCell>
                <TableCell >{i.PrizeModifiedOn}</TableCell>
                <TableCell ><Link href={`/#/prize/edit/${i._id}`}><button  >Edit</button></Link></TableCell>
                <TableCell ><button onClick={(evt) => HandleDelete(evt,i._id)}>Delete</button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
     
      
    </div>
    



        
    )
    
}





export default PrizeList;