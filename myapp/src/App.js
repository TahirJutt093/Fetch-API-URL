
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';

function App() {
  {
    const [data,setData]= useState([])
    var jsondata;
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => jsondata=json)
  
    function fetchdata() {
      setData(jsondata);
    }
  
    return (
     <div>
       <div className="bg-dark" style={{width:"100%",height:"100%",position:"absolute"}}>
      <div className="container bg-white">
      <table className="table mt-5 shadow-lg table-striped table-hover text " style={{fontSize: "15px", fontFamily: 'Franklin Gothic Medium, Arial Narrow, Arial, sans-serif'}}>
          <thead className=" text-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">Company</th>
              <th scope="col">View Profile</th>
            </tr>
          </thead>
          <tbody id="table">
            {data.length===0?<tr>
              <td>No ID</td>
              <td>No Name</td>
              <td>No Email</td>
              <td>No Address</td>
              <td>No Company</td>
              <td>No Profile</td>
            </tr>:data.map(data=>(
        <tr key={data.id}>
         <th scope="row">{data.id}</th>
         <td>{data.name}</td>
         <td>{data.email}</td>
         <td>{data.address.street}, {data.address.city}, {data.address.zipcode}</td>
         <td>{data.company.name}</td>
         <td><a href="https://github.com/TahirJutt093" className="btn btn-primary" target="_blank" rel="noreferrer">View Profile</a></td>
       </tr>))}
    
       
          </tbody>
        </table>
  
        <button className="btn btn-primary mt-5 mb-3 me-3" onClick={fetchdata}>Display Data</button>
        
       
  </div>
     </div>
     </div>
    )
  }
}

export default App;
