import '../../css/tour.css'
import { Tourtext } from './MainComponents';
export default function Tour(){
  return(
    <>
        <div id='Tour'>
            <div className='tour_content wrap'>
                <h2 className='tour_title'>서울시 관광 추천 코스</h2>
                <div>
                    <p className='tour_desc'>나만의 특별 관광과 쇼핑을 원하시는 고객분들을 위해 서울시 관광 추천 코스를 준비했습니다.<br/>
                    서울의 풍부한 즐길 거리를 인터내셔널 택시와 함께 경험해 보세요.</p>
                    <p className='tour_question'>맞춤 투어를 계획하시는 분은 고객센터(1644-2255)로 연락바랍니다.</p>
                </div>
                <ul className='tour_box_list'>
                    <li>
                        <div className='tour_box01'>
                            <Tourtext text={'반나절 투어'}/>
                        </div>
                    </li>
                    <li>
                        <div className='tour_box02'>
                            <Tourtext text={'서울 야간 투어'}/>
                        </div>
                    </li>
                    <li>
                        <div className='tour_box03'>
                            <Tourtext text={'전일 서울 투어'}/>
                        </div>
                    </li>
                    <li>
                        <div className='tour_box04'>
                            <Tourtext text={'서울 근교 투어'}/>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </>
  );
}