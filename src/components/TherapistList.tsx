const TherapistList = ({therapists}) =>{

return (
  <div>
<ul>
  {therapists.map((therapist:any)=>{
return <li>{therapist.name} </li>
  })}

</ul>
  </div>
)
}

export default TherapistList;