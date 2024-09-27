import Signup1 from "../components/korean/Signup1";
import Signup2 from "../components/korean/Signup2";
import {useState} from 'react'

export default function Signup(){
  const [memberInfo, setMemberInfo]= useState({
          terms:false, pinfo:false, marketing:false, name:'', id:'', pw:'',
          pwagain:'',phone1:'010',phone2:'',phone3:'', bday:'', gender:'', emailadd:'', emaildomain:'',
          address:'',detailaddress:'', zipcode:''})
  const [nextStep, setNextStep] = useState(1)

  const next = () =>{
    setNextStep(nextStep + 1);
  }
  const prev = () =>{
    setNextStep(nextStep - 1);
  }
  const handleCheck = (name, isChecked)=>{
    if(name === 'all'){
      setMemberInfo({...memberInfo, terms:isChecked, pinfo:isChecked, marketing:isChecked})
    } /* else if (memberInfo.terms === false || memberInfo.pinfo === false || memberInfo.marketing === false){
      document.getElementsByName('all')
    } */
      else{
      setMemberInfo({...memberInfo, [name]:!memberInfo[name]})
    }
  }
  
  const handleChange = (e) =>{
    const {name,value} = e.target
    setMemberInfo({...memberInfo, [name]:value})
  }
  return(
    <>
      <Signup1  memberInfo={memberInfo}
                handleCheck={handleCheck}
                handleChange={handleChange}/>
    </>
  );
}