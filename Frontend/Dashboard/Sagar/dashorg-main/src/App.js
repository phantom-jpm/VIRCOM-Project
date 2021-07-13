import  React from 'react'
import './index'
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import OrganiserCreate from'./components/Oraginser/Orgainser Detials/OrganiserCreate'
import OrganiserEdit from'./components/Oraginser/Orgainser Detials/OrganiserEdit'
import OrganiserList from'./components/Oraginser/Orgainser Detials/OrganiserList'
import CategoryCreate from'./components/Oraginser/Category/CategoryCreate'
import CategoryList from'./components/Oraginser/Category/CategoryList'
import CategoryEdit from'./components/Oraginser/Category/CatergoryEdit'
import EventCreate from'./components/Oraginser/Event/EventCreate'
import EventEdit from'./components/Oraginser/Event/EventEdit'
import EventList from'./components/Oraginser/Event/EventList'

import PrizeCreate from'./components/Oraginser/Prize/PrizeCreate'
import PrizeEdit from'./components/Oraginser/Prize/PrizeEdit'
import PrizeList from'./components/Oraginser/Prize/PrizeList'
import WinnerCreate from'./components/Oraginser/Winners/WinnerCreate'
import WinnerEdit from'./components/Oraginser/Winners/WinnerEdit'
import WinnerList from'./components/Oraginser/Winners/WinnerList'

import UserCreate from'./components/Partincipate/UserCreate'
import UserEdit from'./components/Partincipate/UserEdit'
import UserList from'./components/Partincipate/UserList'


function App() {

    return (
       <Admin dataProvider={restProvider('http//localhost:3000/')}> 
        <Resource name="Organizer" list={OrganiserList} edit={OrganiserEdit} create={OrganiserCreate} exact/>
        <Resource name="Category"list={CategoryList} edit={CategoryEdit} create={CategoryCreate} exact/>
       <Resource name="Event"list={EventList} edit={EventEdit} create={EventCreate} exact/> 
       <Resource name="Prize"list={PrizeList} edit={PrizeEdit} create={PrizeCreate} exact/>
       <Resource name="Winner"list={WinnerList} edit={WinnerEdit} create={WinnerCreate} exact/>
         <Resource name="Winner"list={UserList} edit={UserEdit} create={UserCreate} exact/>

      
     </Admin>
    );
  }
  
  export default App;
