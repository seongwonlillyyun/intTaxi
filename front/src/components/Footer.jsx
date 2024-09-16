import { ReactComponent as SeoulLogo } from "../svg/seoul-logo.svg";
import '../css/footer.css'
export default function Footer(){
  return(
   <>
    <div id="Footer">
        <div className="footer_content">
            <ul>
                <li className="footer_content_title">
                    <button className="footer_resv_btn">제휴사 예약하기<span className="btn_deco">></span></button>
                    <SeoulLogo/>
                </li>
                <li>
                    <p>주식회사 휙고 | 대표: 이강휘, 홍시현</p>
                    <p>서울특별시 중구 퇴계로 97 고려대연각타워 303호, 402호</p>
                    <p>사업자등록번호:673-88-01256 | 통신판매업신고:제2021-서울중구-2150호</p>
                    <p>전화 : 1644-2255 | 이메일 : reserve@intltaxi.co.kr</p>
                </li>
                <li style={{margin:'20px 0'}}>
                    <p>이용약관 | 개인정보처리방침 | 서비스 이용조건</p>
                </li>
                <li>
                    <p>Copyright © Hwik Go Co., Ltd. All Rights Reserved.</p>
                </li>
            </ul>
        </div>
    </div>
   </>
  );
}