import axios from 'axios';
import {useEffect,useState} from 'react';
import ElementsClients from './ElementsClients';
function ListClients() {
    const[clients,setClients]=useState([]);
    
    useEffect(() => {
        axios.get("http://localhost:3001/clients")
        .then((response)=>setClients(response.data));
       }, []);

    
          const deleteProd = async (id) => {
            if (!window.confirm("Are you sure you want to delete")) {
              return;
            }
        
            axios.delete('http://localhost:3001/clients/' + id)
              .then(() => {
                console.log('successfully deleted!')
                setClients(prevClients => prevClients.filter((client) => client.id !== id));
              }).catch((error) => {
                console.log(error)
              })
        
          }
      

    return ( 
        <>
        <h2>Liste des Clients </h2>
      
        <ElementsClients clients={clients} deleteProd={deleteProd}/>
      </>
     );
}

export default ListClients;
