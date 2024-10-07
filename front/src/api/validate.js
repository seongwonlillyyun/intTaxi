export const ValidationAgree = (memberInfo) =>{
  let checkFlag = true;
  if(!memberInfo.terms){
      alert('이용약관에 동의 하지 않으셨습니다')
      document.getElementById('termsbox').style.outline='3px solid red'
      checkFlag = false;
    } else if (!memberInfo.pinfo){
      alert('개인정보 수집약관에 동의하지 않으셨습니다.')
      document.getElementById('pinfobox').style.outline='3px solid red'
      checkFlag = false;
    }
  return checkFlag;
};

export const infoCheck = (refs) =>{
  let checkFlag = true;
  if(refs.nameRef.current.value === ''){
      alert('이름을 입력 해 주세요')
      checkFlag = false;
      refs.nameRef.current.focus()
  } else if(refs.pwRef.current.value === ''){
      alert('비밀번호를 입력 해 주세요')
      checkFlag = false;
      refs.pwRef.current.focus() 
  } else if(refs.pwagainRef.current.value ===''){
      alert('비밀번호 확인을 입력 해 주세요')
      checkFlag = false;
      refs.pwagainRef.current.focus()
  } else if(refs.phone1Ref.current.value === '' 
              || refs.phone2Ref.current.value === ''
              || refs.phone3Ref.current.value === ''){
                  alert('전화번호를 입력 해 주세요')
                  checkFlag = false;
                  refs.phone1Ref.current.focus()
                  refs.phone2Ref.current.focus()
                  refs.phone3Ref.current.focus()
              }
  else if(refs.bdayRef.current.value === ''){
      alert('생년월일을 입력 해 주세요')
      checkFlag = false;
      refs.bdayRef.current.focus()
  }
  else if (refs.genderRef.current.value===''){
      alert('성별을 선택 해 주세요')
      checkFlag = false;
      refs.genderRef.current.focus()
  }
  else if(refs.emailaddRef.current.value === '' || refs.emaildomainRef.current.value === '')
  {
      alert('이메일을 입력 해 주세요')
      checkFlag = false;
      refs.emailaddRef.current.focus()
      refs.emaildomainRef.current.focus()
  }
  else if (refs.addressRef.current.value === ''
          || refs.zipcodeRef.current.value === '' ||
          refs.detailaddressRef.current.value ===''
  ){
      alert('주소를 입력 해 주세요')
      checkFlag = false;
      refs.addressRef.current.focus()
      refs.zipcodeRef.current.focus()
      refs.detailaddressRef.current.focus()
  }
  return checkFlag;
};    

export const pwcheck = (refs) =>{
  let checkFlag = true
  const password = refs.pwRef.current; 
  const repassword = refs.pwagainRef;
  if(password.value !== repassword){
      alert('비밀번호가 일치하지 않습니다.')
      password.value === '';
      repassword.value === '';
      password.focus();
      checkFlag = false;
  }
  return checkFlag;
};