import { useState,useEffect  } from 'react';

import axios from 'axios';

import { useNavigate , useParams} from 'react-router-dom';

function EditClient() {

    const navigate=useNavigate();

  
    const [clientName, setClientName] = useState("");
    const [clientEmail, setClientEmail] = useState("");
    const [clientPhone, setClientPhone] = useState("");
    const [imageartpetitf, setImageartpetitf] = useState("");
    
    const {id} = useParams();

    useEffect(()=>{
      axios.get('http://localhost:3001/clients/'+id).then(res => {
        setClientName(res.data.clientName);
          setClientEmail(res.data.clientEmail);
          setClientPhone(res.data.clientPhone);
          setImageartpetitf(res.data.imageartpetitf);
      })
    },[id]);

    
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const newClient = {
        id:id,
        clientName,
        clientEmail,
        clientPhone,
        imageartpetitf
      };
    
   axios.put("http://localhost:3001/clients/"+id,newClient)
  .then(res => {  
  console.log(res);
  navigate("/clients")
    })   
  .catch(error=>{
      console.log(error)
      alert("Erreur ! Modification non effectuée")
      })
  
  }

    return ( 
        <>
        <div className="container">
        <h2>Modification d'un client </h2>
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
          type="email"
          value={clientEmail}
          onChange={e => setClientEmail(e.target.value)}
          />
     </div>
     <div className="col-sm-5 p-2 g-col-6">
        <input className="form-control"
          placeholder="phone"
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
    <div>{imageartpetitf ?<img src={"/"+imageartpetitf} alt={imageartpetitf} width="70"/>:null}</div> 
     <div>
    <button className="btn btn-success">Valider</button>
    </div>  
    </div>
    </form>
   
  </div>
  </>
     );
}

export default EditClient;
