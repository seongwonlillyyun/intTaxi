import { MemberTitle } from '../components/korean/MemberComponents';
import '../css/login.css'
export default function Login(){
  return(
    <>
        <div id="Login">
            <div className="login_content wrap">
                <MemberTitle
                  bigtitle='로그인' smalltitle='로그인 후 택시 서비스를 쉽게 이용해보세요!'/>
                <div className='login_box'>
                  <ul className='login_list'>
                    <li className='id_title'>
                      <p className='title_text'>아이디</p>
                    </li>
                    <li>
                      <input className='id_box' type="text"
                        placeholder='아이디를 입력해주세요' />
                    </li>
                    <li className='pw_title'>
                      <p className='title_text'>비밀번호</p>
                    </li>
                    <li>
                      <input className='pw_box' type="password" 
                        placeholder='비밀번호를 입력해주세요'/>
                    </li>
                    <li>
                      <button className='login_btn'>로그인</button>
                    </li>
                    <li>
                      <button className='signup_btn'>회원가입</button>
                    </li>
                    <li>
                      <p>카카오로 시작하기</p>
                    </li>
                  </ul>
                </div>
            </div>
        </div>
    </>
  );
}