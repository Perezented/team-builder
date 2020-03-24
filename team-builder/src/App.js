import React from 'react';
import axios from 'axios';

function App() {
  axios.get('https://swapi.co/api/people/')
  .then(res=>{
      console.log(res.data.results)
      const MyTeam = res.data.results
    }

  )
  .catch(error=> console.log('errrrrroroorororoorororrrrr', error))

  return (
    <div className="App">
      <h2>List of people</h2>
      {MyTeam.map(res=> {console.log(res)
        return <h5>{res.name}</h5>
      })}

    </div>
  );
}

export default App;
