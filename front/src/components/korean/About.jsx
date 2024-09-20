import '../../css/about.css'
import { ReactComponent as Seoul } from "../../svg/ic-main-mark01.svg";
import { ReactComponent as Customer } from "../../svg/ic-main-mark02.svg";
import { ReactComponent as World } from "../../svg/ic-main-mark03.svg";
import { Points } from './MainComponents';
export default function About(){

  return(
    <>
        <div id="About">
            <div className="about_content wrap">
                <div className='about_title'>
                        <Points number={113} left={80}/>
                    <h2 className='about_big_title'>전세계인을 위한 프리미엄 이동서비스 International Taxi</h2>
                    <p style={{fontSize:'20px', marginTop:'10px'}}>인터내셔널 택시는 글로벌 이동 서비스의 새로운 기준을 제시합니다.</p>
                </div>
                <ul className='about_three'>
                    <li className='about_first about_bgimage'>
                        <Seoul style={{margin:"40px auto 0"}}/>
                        <p className='about_desc'>서울시 공식 지정 외국인 택시 서비스</p>
                    </li>
                    <li className='about_second about_bgimage'>
                        <Customer style={{margin:"40px auto 0"}}/>
                        <p className='about_desc'>누적 이용객 수 1,000,000명 돌파</p>
                        <p className='about_desc_add'>(2021.12 기준)</p>
                    </li>
                    <li className='about_third about_bgimage'>
                        <World style={{margin:"40px auto 0"}}/>
                        <p className='about_desc'>4개 국어 구사 전문 드라이버 보유</p>
                    </li>
                </ul>
            </div>
        </div>
    </>
  );
}