import '../css/price.css'
import { PublicTitle } from './MainComponents';

export default function Price(){
  return(
    <>
        <div id='Price'>
            <div className='price_content wrap'>
                <PublicTitle content={'공항이동 구간요금제'}/>
                <div className='price_desc_box'>
                    <p className='price_desc'>서울 지역구 별, 택시 종류 별 상세 요금을 확인해 주세요.</p>
                    <p className='price_desc'>결제는 <span className='price_desc_word'>현금</span> 또는 <span className='price_desc_word'>신용카드 결제(visa, amex, master)</span>가 가능합니다.<br/> 구간 요금의 경우 통행료가 포함된 금액입니다.</p>
                </div>
                <div className='price_box'>
                    <ul className='btnlists'>
                        <li className='btnlist'><button className='btnstyle btnA'><span>A</span> 중형 70,000원 모범/대형 100,000원</button></li>
                        <li className='btnlist'><button className='btnstyle btnB'><span>B</span> 중형 75,000원 모범/대형 110,000원</button></li>
                        <li className='btnlist'><button className='btnstyle btnC'><span>C</span> 중형 85,000원 모범/대형 120,000원</button></li>
                        <li className='btnlist'><button className='btnstyle btnD'><span>D</span> 중형 90,000원 모범/대형 130,000원</button></li>
                        <li className='btnlist'><button className='btnstyle btnE'><span>E</span> 중형 95,000원 모범/대형 140,000원</button></li>
                    </ul>
                    <img className='price_map' src="images/background/img-map-a.png" alt="" />
                </div>
            </div>
        </div>
    </>
  );
}