import React,{useEffect,useState} from 'react'
import axios from 'axios'
import './class.css'
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link } from '@material-ui/core';
export const UserList = (props) => {

    
const [data, setdata] = useState([])

const [change,setc] = useState(false)
  useEffect(() =>{
    
    axios.get('https://still-hamlet-44176.herokuapp.com/api').then((res )=> {
      setdata(res.data.participantSchema); 
      console.log(res.data)})
 },[change])


 /*
 const HandleDelete=(evt,id)=>{
  evt.preventDefault()
  axios.delete(`https://still-hamlet-44176.herokuapp.com/api/${id}`).then((res) => {console.log(res.data)
  setc(!change)
 })
}
*/


    return ( <div> <h1 className="title">PARTCIPANTE PANNEL
    <span><Link href="/#/Participante/create" style={{float:"right"}}>Create</Link></span> </h1>
    <h3>PARTCIPANTE DETIALS</h3>
      <Paper className="">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell >FristName</TableCell>
              <TableCell >LastName</TableCell>
              <TableCell >Email</TableCell>
              <TableCell >Address</TableCell>
              <TableCell >ContactNo</TableCell>
              <TableCell >Date-Of-Birth</TableCell>
              <TableCell >ID Proof</TableCell>

            </TableRow>
          </TableHead>
          
            <TableBody>
            {data && data.map((i) => (
              <TableRow>
                <TableCell >{i.firstname}</TableCell>
                <TableCell >{i.lastname}</TableCell>
                <TableCell >{i.email}</TableCell>
                <TableCell >{i.address}</TableCell>
                <TableCell >{i.phone}</TableCell>
                <TableCell >{i.DOB}</TableCell>
                <TableCell >{i.Identity}</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>


      <h3>EVENT </h3>
      <Paper className="">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell >EventName</TableCell>
              <TableCell >CategoryId</TableCell>
              <TableCell >EventDate</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {data && data.map((i) => (
              <TableRow>
                <TableCell >{i.event}</TableCell>
                <TableCell >{i.categoryid}</TableCell>
                <TableCell >{i.event_date}</TableCell>
                <TableCell ><Link href={`/#/Participante/edit/${i._id}`}><button  >Edit</button></Link></TableCell>
                

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
     




  </div>

    )
}    
export default UserList;

/*<List {...props}>
        <div>


           <Datagrid>
                <TextField source='Id'/>
                <TextField source='Frist Name:'/>
                <TextField source='Last Name:'/>
                <TextField multiline source='Address:'/>
                <TextField source='Phone No:'/>
                <EmailField source='Enter mail:'/>
                <DateField source='DOB:'/>
                <TextField source='Id Proof:'/>
                <TextField source='Profession:' />
                <EditButton basePath='/Partcipante'/>
                <DeleteButton basePath='/Partcipante'/> 

            </Datagrid>

            <Datagrid>
                <TextField source='Id'/>
                <TextField source='Event Name:'/>
                <TextField source='Category Id:'/>
                <EmailField source='Category Name:'/>
                <TextField source='Id Proof:'/>
                <DateField source='Event Date:' />
                <EditButton basePath='/Partcipante'/>
                <DeleteButton basePath='/Partcipante'/> 

            </Datagrid>

          </div>
        </List>
*/