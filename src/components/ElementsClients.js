import {Link } from "react-router-dom";
function ElementsClients(props) {
    return ( 
<div className="container">
  <div className="row">
  <table className="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">EMAIL</th>
      <th scope="col">PHONE</th>
      <th scope="col">Image</th>
      <th scope="col">  operation   </th>

    </tr>
  </thead> 
{
props.clients.map(client =>{
return(

<>
<tr >
      <th scope="row">{client.id}</th>
      <td scope="row">{client.clientName}</td>
      <td scope="row">{client.clientEmail}</td>
      <td scope="row">{client.clientPhone}</td>
      <td scope="row"><img src={client.imageartpetitf} /></td>
<td scope="row"><Link exact to={`/editClient/${client.id}`} className="btn btn-primary">Modifier</Link>
  <button onClick={()=>{props.deleteProd(client.id)}} className="btn btn-danger">Supprimer</button></td>
  </tr> 
  </>

                  
                )
            })
    }  </table>  
</div>
</div>
     );
}

export default ElementsClients;
