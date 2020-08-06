import React, { useEffect , useState} from 'react';

import './App.css';

function App() {

  const [repos, setrepos] = useState([{}]);


  useEffect ( ()=> {

    async function getapi(){
    try {
      const getapidata= await fetch('https://api.github.com/users/mabrar92/repos')
      const data = await getapidata.json();
      console.log(data);
      setrepos(data)
     }
    catch (error) {
      console.log(error,"Errorrrrrrrrr")
    }
    
   } 
  getapi();
  
  }, [] )


  return (
    <div>
     <ul>
      {repos.map((repoObj,id)=>{
      return (<li key={id}> {repoObj.name} </li>)
      
     })}
     </ul>
    </div>
  );
}

export default App;
