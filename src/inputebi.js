import { useEffect, useState } from "react";

function Inputi(){
let[userlist,setuserlist]=useState([])
let inputvelue={name:"",age:0,lname:"",profesia:""}
let[userdata,setuserdata]=useState(inputvelue)
let[formerors,setformerors]=useState({})
//dzalian mokle chanaweri inputebis darenderebis bervi kodi roma r vwerot. 13dan 18 xazamde
let validacia=(values)=>{
    let errors={};
    if(values.name.length<4){
        errors.name="saxeli carielia"
    }
    if(!values.lname){
        errors.lname="gvari carielia"
    }
    return errors
    }


function submiti(e){
e.preventDefault()
setuserlist((preuserlist)=>
    [...preuserlist,userdata])};

  
function userSave(e){
setuserdata((preuserdata)=>{
return {
    ...preuserdata,
    [e.target.name]: e.target.value,
};
});
setformerors(validacia(userdata))
};
    return <>
    <form onSubmit={submiti}>
<input type="text" name="name"  value={userdata.name}  onChange={userSave}  placeholder="saxeli"/>
<br/>
<br/>
{formerors.name&&<p>{formerors.name}</p>}
<input type="email" placeholder="gvari" name="age"  value={userdata.age}  onChange={userSave} />

<input type="text" placeholder="asaki" name="lname"  value={userdata.lname}  onChange={userSave} />
<br/>
<br/>
{formerors.lname&&<p>{formerors.lname}</p>}
<input type="text" placeholder="profesia" name="profesia"  value={userdata.profesia}  onChange={userSave} />


<button> kliki</button>

    </form>
  {userlist.map((item)=><p key={Math.random()}>{item.name}{item.lname} {item.age} {item.profesia}</p>)}
    </>
}

export default Inputi;