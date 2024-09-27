import '../../css/signup.css'
import { MemberTitle } from './MemberComponents';
export default function Signup2(){
  return(
    <>
        <div id="Signup1">
            <div className="wrap">
               <MemberTitle
                bigtitle='회원가입이 완료되었습니다.'
                smalltitle='로그인하시고 서비스를 쉽게 이용해보세요!'/>
                <img className='welldone_img' src="https://wishes.photos/wp-content/uploads/2023/09/Leonardo-diCaprio-Congratulations-Man-Meme.webp" alt="" />
                <div className='button_list'>
                    <button className='cancle_btn'>홈</button>
                    <button className='next_btn'>로그인</button>
                </div>
            </div>
        </div>
    </>
  );
}