import '../../css/signup.css'
import { MemberTitle } from "./MemberComponents";
import {useRef, useState} from 'react'
import { MarketingModal, PinfoModal, TermsModal } from './Modal';
import DaumPostCode from 'react-daum-postcode'
import { ValidationAgree, infoCheck, pwcheck } from '../../api/validate';

export default function Signup1({memberInfo,agree,handleCheck,handleChange, handleAddress, next}){
    const [showModal, setShowModal] = useState(false)
    const [addbtn, setAddbtn] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const refs = {
        nameRef:useRef(null),
        idRef:useRef(null),
        pwRef:useRef(null),
        pwagainRef:useRef(null),
        phone1Ref:useRef(null),
        phone2Ref:useRef(null),
        phone3Ref:useRef(null),
        bdayRef:useRef(null),
        genderRef:useRef(null),
        emailaddRef:useRef(null),
        emaildomainRef:useRef(null),
        addressRef:useRef(null),
        detailaddressRef:useRef(null),
        zipcodeRef:useRef(null)
    }
    const openModal = () =>{
        setShowModal(true)
    }
    const closeModal = () =>{
        setShowModal(false)
    }
    if (showModal === true) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
      
    const btnhandler = () =>{
        setAddbtn(!addbtn)
    }
    const themeObj = {
        bgColor: '#FFFFFF', 
        pageBgColor: '#FFFFFF', 
        postcodeTextColor: '#C05850',
        emphTextColor: '#222222',
    }
    const completeHanlder = (data)=> {
        const {address, zonecode} = data;
      handleAddress({zipcode:zonecode, address:address})
    }

    const closeHandler = (state) => {
        if (state === 'FORCE_CLOSE') {
          setIsOpen(false);
        } else if (state === 'COMPLETE_CLOSE') {
          setIsOpen(false);
        }
      };
      
    const handleInfo = () =>{
        if(ValidationAgree(memberInfo)){
            if(infoCheck(refs)){
                if(pwcheck(refs)){
                    console.log(memberInfo)
                }
            }
        }
    }

    
     
  return(
    <>
        <div id="Signup1">
            <div className="signup_content wrap"> 
               <MemberTitle
               bigtitle='회원가입' smalltitle='회원가입 후 서비스를 이용해보세요!'/>
               <div className='signup_box'>
                    <h3 className='agree_title'>약관 동의</h3>
                        <ul className='agree_box'>
                            <li className='agree_list_all'>
                                <input type="checkbox" name='all'
                                    onChange={(e)=>handleCheck('all',e.target.checked)}
                                    id='all' />
                                <p>전체 약관 동의</p>
                            </li>
                            <li className='agree_list'>
                                <input type="checkbox" name="terms" id="termsbox"
                                         onChange={(e)=>{handleCheck(e.target.name); agree()}}
                                         checked={memberInfo.terms} />
                                <p className='agree_list_text'><span className='list_check'>[필수]</span> 이용약관</p>
                                <button className='agree_btn'
                                        name='terms'
                                        onClick={openModal}>내용보기</button>
                                {showModal === true ? <TermsModal closeModal={closeModal}/> : null}
                            </li>
                            <li className='agree_list'>
                                <input type="checkbox" name="pinfo" id="pinfobox" 
                                         onChange={(e)=>{handleCheck(e.target.name); agree()}}
                                         checked={memberInfo.pinfo} />
                                <p className='agree_list_text'><span className='list_check'>[필수]</span> 개인정보 수집 및 이용 동의</p>
                                <button className='agree_btn'
                                        name='pinfo'
                                        onClick={openModal}>내용보기</button>
                                {showModal === true ? <PinfoModal closeModal={closeModal}/> : null}
                            </li>
                            <li className='agree_list'>
                                <input type="checkbox" name="marketing" id=""
                                         onChange={(e)=>{handleCheck(e.target.name); agree()}}
                                         checked={memberInfo.marketing} />
                                <p className='agree_list_text'><span>[선택]</span> 맞춤 마케팅을 위한 개인정보 수집 이용 동의</p>
                                <button className='agree_btn'
                                        name='marketing'
                                        onClick={openModal}>내용보기</button>
                                {showModal===true?<MarketingModal closeModal={closeModal}/>:null}
                            </li>
                        </ul>
                        <h3 className='agree_title'>회원정보</h3>
                        <ul className='info_box'>
                            <li className='insert_box'>
                                <p>이름</p>
                                <input type="text" name="name"
                                        ref={refs.nameRef}
                                        value={memberInfo.name}
                                        onChange={handleChange}/>
                            </li>
                            <li className='insert_box'>
                                <p>아이디</p>
                                <input type="text" name="id"
                                        ref={refs.idRef}
                                        value={memberInfo.id}
                                        onChange={handleChange}/>
                                <button className='id_btn'>중복확인</button>
                            </li>
                            <li className='insert_box'>
                                <p>비밀번호</p>
                                <input type="password" name="pw"
                                        ref={refs.pwRef}
                                        value={memberInfo.pw}
                                        onChange={handleChange}/>
                            </li>
                            <li className='insert_box'>
                                <p>비밀번호 확인</p>
                                <input type="password" name="pwagain"
                                        ref={refs.pwagainRef}
                                        value={memberInfo.pwagain}
                                        onChange={handleChange}/>
                            </li>
                            <li className='insert_box'>
                                <p>전화번호</p>
                                <ul className='phonenumber_list'>
                                    <li><select name="phone1"
                                                ref={refs.phone1Ref}
                                                value={memberInfo.phone1}
                                                onChange={handleChange}>
                                            <option value="010">010</option>
                                            <option value="011">011</option>
                                            <option value="019">019</option>
                                        </select>
                                    </li>
                                    <li><input type="text" name='phone2'
                                                ref={refs.phone2Ref}
                                                value={memberInfo.phone2}
                                                onChange={handleChange} /></li>
                                    <li><input type="text" name='phone3'
                                                ref={refs.phone3}
                                                value={memberInfo.phone3}
                                                onChange={handleChange} /></li>
                                </ul>
                            </li>
                            <li className='insert_box'>
                                <p>생년월일</p>
                                <input type="date" name='bday'
                                        ref={refs.bday}
                                        value={memberInfo.bday}
                                        onChange={handleChange} />
                            </li>
                            <li className='insert_box'>
                                <p>성별</p>
                                <div className='select_gender'>
                                    <input type="radio" name='gender' value='female'
                                            ref={refs.genderRef}
                                            onChange={handleChange} />
                                    <p>여성</p>
                                    <input type="radio" name='gender' value='male'
                                            ref={refs.genderRef}
                                            onChange={handleChange} />
                                    <p>남성</p>
                                </div>
                            </li>
                            <li className='insert_box email_list'>
                                <p>이메일</p>
                                <input type="text" name='emailaddress'
                                        ref={refs.emailaddRef}
                                        value={memberInfo.emailadd}
                                        onChange={handleChange}
                                        />
                                <input type="text" name='emaildomain'
                                        ref={refs.detailaddressRef}
                                        value={memberInfo.emaildomain}
                                        onChange={handleChange} />
                                <select name="emaildomain" 
                                        ref={refs.emaildomainRef}
                                        value={memberInfo.emaildomain}
                                        onChange={handleChange}>
                                    <option value=''>직접입력</option>
                                    <option value="@gmail.com">@gmail.com</option>
                                    <option value="@naver.com">@naver.com</option>
                                    <option value="@kakao.com">@kakao.com</option>
                                    <option value="@hanmail.net">@hanmail.net</option>
                                </select>
                            </li>
                            <li className='address_list'>
                                <p>주소</p>
                                <div className='address_box'>
                                    <ul className='address_content'>
                                        <li>
                                            <input type="text" className='zipcode_box' value={memberInfo.zipcode}
                                                    name='zipcode'
                                                    onChange={handleChange} ref={refs.zipcodeRef}/>
                                            <button className='zipcode_btn' onClick={btnhandler}>우편번호 찾기</button>
                                            {addbtn && (
                                                <div>
                                                    <DaumPostCode className='zipcodemodal'
                                                        theme={themeObj}
                                                        onComplete={completeHanlder}
                                                        onClose={closeHandler}/>
                                                </div>

                                            )
                                            }
                                        </li>
                                        <li>
                                            <input type="text" className='address_first' value={memberInfo.address}
                                                    name='address'
                                                    onChange={handleChange} ref={refs.addressRef} />
                                        </li>
                                        <li>
                                            <input  className='detail_address' name='detailaddress'
                                                 type="text" placeholder='상세주소를 입력해주세요' 
                                                 onChange={handleChange} ref={refs.detailaddressRef}
                                                 value={memberInfo.detailaddress}/>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                        <div className='button_list'>
                            <button className='cancle_btn'>취소</button>
                            <button className='next_btn'>확인</button>
                        </div>
                    </div>
               </div>
        </div>
    </>
  );
}