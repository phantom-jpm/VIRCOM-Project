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



export const EventList = (props) => {
    
   const [data, setdata] = useState([])
   const [change,setc] = useState(false)
   useEffect(() =>{
    
      axios.get('http://localhost:9000/events/').then((res )=> {setdata(res.data); console.log(res.data)}   )
   },[change])

   const HandleDelete=(evt,id)=>{
    evt.preventDefault()
    axios.delete(`http://localhost:9000/events/${id}`).then((res) => {console.log(res.data)
    setc(!change)
   })
  }

    
    return (<div>
      <h1 className="title">ORGINZER PANNEL
      <span><Link href="/#/event/create" style={{float:"right"}}>Create</Link></span> </h1>
      <h3>EVENT DETIALS</h3>
      <Paper className="Event">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Event-Id</TableCell>
              <TableCell >Category-Id</TableCell>
              <TableCell >Event-Name</TableCell>
              <TableCell >Event-Description</TableCell>
              <TableCell >Event-Date</TableCell>
              <TableCell >No-Of-Participantes</TableCell>
              <TableCell >No-Of-WinnersAccounced</TableCell>
              <TableCell >Created-On</TableCell>
              <TableCell >Modidified-On</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data && data.map((i) => (
              <TableRow>
                <TableCell >{i.EventId}</TableCell>
                <TableCell >{i.EventCategoryId}</TableCell>
                <TableCell >{i.EventName}</TableCell>
                <TableCell >{i.EventDes}</TableCell>
                <TableCell >{i.EventDate}</TableCell>
                <TableCell >{i.NoOfParticipants}</TableCell>
                <TableCell >{i.NoOfWinners}</TableCell>
                <TableCell >{i.EventCreatedOn}</TableCell>
                <TableCell >{i.EventModifiedOn}</TableCell>
                
              <TableCell ><Link href={`/#/event/edit/${i._id}`}><button  >Edit</button></Link></TableCell>
                <TableCell ><button onClick={(evt) => HandleDelete(evt,i._id)}>Delete</button></TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
     


      
    </div>
    



        
    )
    
}





export default EventList;