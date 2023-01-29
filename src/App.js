
import { useState } from 'react';
import './App.css';
import Inputi from './inputebi';
import Validatess from './validations';

function App() {
//inputebis darenderebis gza
let[name,setname]=useState()

   let[userlist,setuserlist]=useState()

function kliki(e){
e.preventDefault()
setuserlist(name)

}
function rame(e){
setname(e.target.value)

}

  return (
    <div className="App">

      <Validatess/>
      <Inputi/>
      besoo
<form onSubmit={kliki}>
<input type="text"  value={name} onChange={rame}/>
<button>kliskjfbds</button>
</form>
{userlist}



    </div>
  );
}

export default App;
