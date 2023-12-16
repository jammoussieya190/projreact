import { useState } from 'react';

import axios from 'axios';

import { useNavigate } from 'react-router-dom';

function AddClient() {

    const navigate=useNavigate();

  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [imageartpetitf, setImageartpetitf] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const newClient = {
      clientName,
      clientEmail,
      clientPhone,
      imageartpetitf
    };
  
//faire le add dans la BD
axios.post("http://localhost:3001/clients",newClient)
.then(res => {  
console.log(res);
navigate("/clients")
  })   
.catch(error=>{
    console.log(error)
    alert("Erreur ! Insertion non effectuée")
    })

}

return ( 
<div className="container">
        <h2>Ajout client </h2>
        <form onSubmit={handleSubmit}>
    <div className="grid gap-3">
    <div className="col-sm-5 p-2 g-col-6">
        <input className="form-control"
          placeholder="Name"
          type="text"
          value={clientName}
          onChange={e => setClientName(e.target.value)}
          />
     </div>
     <div className="col-sm-5 p-2 g-col-6">
        <input className="form-control"
          placeholder="Email"
          name="clientEmail"
          type="Email"
          value={clientEmail}
          onChange={e => setClientEmail(e.target.value)}
          />
     </div>
     <div className="col-sm-5 p-2 g-col-6">
        <input className="form-control"
          placeholder="phone"
          name="clientPhone"
          type="tel"
          value={clientPhone}
          onChange={e => setClientPhone(e.target.value)}
          />
     </div>
     
     <div className="col-sm-5 p-2 g-col-6">
     <input className="form-control"
          placeholder="Image"
          type="text"
          value={imageartpetitf}
          onChange={e => setImageartpetitf(e.target.value)}
          />
    </div>    
    <div>{imageartpetitf ?<img src={imageartpetitf} alt="" width="70"/>:null}</div> 
     <div>
    <button className="btn btn-success">Valider</button>
    </div>  
    </div>
    </form>
   
  </div>

     );
}

export default AddClient;
