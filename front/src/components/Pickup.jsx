import '../css/pickup.css'
import { PublicTitle, ServiceTitle } from './MainComponents';
export default function Pickup(){
  return(
    <>
        <div id='Pickup'>
            <div className='pickup_content wrap'>
                <div className='etc_service'>
                    <PublicTitle content={'기타 부가 서비스'}/>
                    <p className='etc_service_desc'>성공적인 비즈니스를 위해 인터내셔널 택시만의 차별화된 공항 서비스를 제공합니다.<br/>
                        상세 서비스 문의는 <span className='desc_important'>고객센터(1644-2255)</span>로 연락해 주세요.
                    </p>
                    <ul className='service_etc_box_list'>
                        <li>
                            <div className='service_etc_box'>
                                <i className='service_box_img'></i>
                                <h4 className='service_box_text'>공항 피켓 서비스</h4>
                            </div>
                        </li>
                        <li>
                            <div className='service_etc_box'>
                                <i className='service_box2_img'></i>
                                <h4 className='service_box_text'>전문 의전 요원</h4>
                                <p className='desc_important'>(예약 전 반드시 사전문의)</p>
                            </div>
                        </li>
                        <li>
                            <div className='service_etc_box'>
                                <i className='service_box3_img'></i>
                                <h4 className='service_box_text'>비즈니스 출장</h4>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='location'>
                    <PublicTitle content={'공항 데스크 위치'}/>
                    <p className='etc_service_desc'>인천공항(T1, T2)에 <span className='desc_important'>안내 데스크</span>가 마련되어 있습니다.<br/>
                        현장에서 바로 탑승하기를 원하시는 분들은 각 안내 데스크에 방문해 주세요.</p>
                </div>
            </div>
        </div>
    </>
  );
}