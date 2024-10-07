import Signup1 from "../components/korean/Signup1";
import Signup2 from "../components/korean/Signup2";
import {useState} from 'react'

export default function Signup(){
  const [step, setStep] = useState(1)
  const [memberInfo, setMemberInfo]= useState({
          terms:false, pinfo:false, marketing:false, name:'', id:'', pw:'',
          pwagain:'',phone1:'010',phone2:'',phone3:'', bday:'', gender:'', emailadd:'', emaildomain:'',
          address:'',detailaddress:'', zipcode:''})
  const [agree, setAgree] = useState({terms:false, pinfo:false, marketing:false})
  

  const next = () =>{
    setStep(step + 1);
  }
  const prev = () =>{
    setStep(step - 1);
  }
  const handleCheck = (name, isChecked)=>{
    if(name === 'all'){
      setMemberInfo({...memberInfo, terms:isChecked, pinfo:isChecked, marketing:isChecked})
      setAgree({...agree, terms:isChecked, pinfo:isChecked, marketing:isChecked})
    }
      else{
      setMemberInfo({...memberInfo, [name]:!memberInfo[name]})
      setAgree({...agree, [name]:!agree[name]})
    }
  }
  const agreeCheck = ()=>{
    for(let i = 0; i<Object.keys(agree).length-1; i++){
      if(Object.values(agree)[i]===false){
        document.getElementById('all').checked = false
      }
  }
}

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setMemberInfo({...memberInfo, [name]:value})
  }

  const hanldeAddress = (e) =>{
    setMemberInfo({...memberInfo, zipcode:e.zipcode, address:e.address})
  }
  console.log(memberInfo)
  return(
    <>
    {step ===1 &&(
      <Signup1  memberInfo={memberInfo}
                agree={agreeCheck}
                handleCheck={handleCheck}
                handleChange={handleChange}
                handleAddress={hanldeAddress}
                next={next}/>
    )}
    {step ===2 &&(
      <Signup2/>
    )}
    </>
  );
}