import Therapist from '../components/Therapist'


const TherapistList = (props:any) =>{
const { therapists } = props
return (
  <div>
<ul>
  {therapists.map((therapist:any)=>{
return <Therapist therapist={therapist} />
  })}

</ul>
  </div>
)
}

export default TherapistList;