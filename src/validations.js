const { useState, useEffect } = require("react")
function Validatess(){
let[formerors,setformerors]=useState({})
let[userinfo,setuserinfo]=useState({name:"",lname:""})
let[userdata,setuserdata]=useState([])
function erorebi(values){

    let erori={}
    if(!values.name.length<8){
      erori.name="gtxovt chawerot saxeli beso"
    }
if(!values.lname){
    erori.lname="chaweret gvari"
}
    return erori
}
function valuebi(e){
setuserinfo(preuserinfo=>{
 return   {
    ...preuserinfo,[e.target.name]:e.target.value
 }
}
)}
function gagzavna(e){
e.preventDefault()
setuserdata((preuserdata)=>[...preuserdata,userinfo])
setformerors(erorebi(userinfo))
}
    return<>
    
    <form onSubmit={gagzavna}>
<input type="text" placeholder="saxeli" name="name" value={userinfo.name} onChange={valuebi}/>
<br/>
{formerors.name&&<p>{formerors.name}</p>}
<input type="text" placeholder="gvari" name="lname" value={userinfo.lname}  onChange={valuebi}/>
<br/>
{formerors.lname&&<p>{formerors.lname}</p>}
<button>daachire</button>
    </form>
    {userdata.map((item)=><p>{item.name}{item.lname}</p>)}
    
    </>
}
export default Validatess;