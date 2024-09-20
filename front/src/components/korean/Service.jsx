import '../../css/service.css'
import { Howtouse, PublicTitle, ServiceArea, ServiceInfo, ServiceTitle } from './MainComponents';


export default function Service(){
  return(
    <>
        <div id="Service">
            <div className="service_content wrap">
                <p className='service_stitle'>이동의 가치를 더하다!</p>
                <PublicTitle content={'프리미엄 이동서비스, 인터내셔널 택시'}/>
                <ul className='service_desc_list'>
                  <li className='service_box'>
                    <img src="images/background/img-main-info04.png" alt="" />
                    <div className='servcie_box_content'>
                      <ServiceTitle content={'공항이동서비스'}/>
                      <ServiceInfo from={'공항'}
                                      to={'서울 시내'}
                                      price={'구간 요금제'}/>
                      <ServiceArea className='service_box_second'
                                      from={'공항'}
                                      to={'서울 시외'}
                                      price={'미터 요금 (20% 할증)'}/>
                      <div className='service_box_textbox'>
                        <p className='service_box_etc'>- 원활한 서비스 제공을 위해 <b>최소 24시간 전</b>에 홈페이지를 통해 예약 신청해 주세요.</p>
                        <p className='service_box_etc'>- 공항 이동의 경우 항공기 도착 후 <b>입국 소요시간(1~2시간)</b>을 고려하여 예약해 주세요.</p>
                        <p className='service_box_etc'>- 공항입국 픽업 시 피켓 서비스를 신청한 경우에 한하여 예정된 항공편의 도착시각으로부터 60분 이내의 대기 시에는 추가 요금이 발생하지 않습니다. 단, 60분을 초과하는 대기가 발생할 경우에는 차량 이용요금에 대기시간 요금이 추가로 적용됩니다. (30분 단위 중형 10,000원 / 모범·대형 15,000원 발생).</p>
                      </div>
                    </div>
                  </li>
                  <li className='service_box'>
                    <img src="images/background/img-main-info05.png" alt="" />
                    <div className='servcie_box_content'>
                      <ServiceTitle content={'일상 이동'}/>
                      <ServiceInfo from={'서울시내'}
                                      to={'서울 시내 or 시외'}
                                      price={'미터 요금 (20% 할증)'}/>
                      <div className='service_box_textbox'>
                        <p className='service_box_etc'>- 원활한 서비스 제공을 위해 <b>최소 24시간 전</b>에 홈페이지를 통해 예약 신청해 주세요.</p>
                        <p className='service_box_etc'>- 예정된 픽업 시간보다 <b>10분 이상 대기</b>가 발생할 경우, 별도의 추가요금이 부과될 수 있습니다.</p>
                      </div>
                    </div>
                  </li>
                </ul>
            </div>
        </div>
        <div className='howtouse'>
            <div className='howtouse_content wrap'>
              <PublicTitle content={'서비스 이용 방법'}/>
            </div>
            <ul>
              <li className='howtouse_step step1'>
                <Howtouse number={'01'} text={'사전 예약'}/>
                  <p className='step_desc'>이용 24시간 전, 홈페이지에서 예약을 신청해주세요.<br></br>
                    <span className='step1_etc'>이메일(reserve@intltaxi.co.kr), 콜센터(1644-2255)</span>를 통한 예약도 가능합니다.
                  </p>
              </li>
              <li className='howtouse_step' >
                <Howtouse number={'02'} text={'예약 확인'}/>
                <p className='step_desc'><span className='step_important'>‘Reservation’</span>메뉴에서 예약 내역을 확인하실 수 있습니다.<br/>
                  <span className='step2_etc'>예약확인은 홈페이지를 통해 예약한 내역만 확인 가능합니다.</span></p>
              </li>
              <li className='howtouse_step'>
                <Howtouse number={'03'} text={'차량 이용'}/>
                <p className='step3_desc'>예약시간에 배정된 택시에 탑승해 목적지까지 안전하고 편안하게 이동합니다.</p>
              </li>
            </ul>
        </div>
    </>
  );
}