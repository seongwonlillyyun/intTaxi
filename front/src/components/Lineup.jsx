import { LineupContent, TaxiSlides } from "./MainComponents";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../css/lineup.css';

export default function Lineup(){
  return(
    <>
        <div id="Lineup">
            <div className="lineup_content wrap">
                <ul>
                    <li className="lineup_desc">
                        <img className="lineup_img" src="images/background/img-main-info01.png" alt="" />
                        <LineupContent stitle={'자유로운 소통'}
                                        btitle={'한국에서의 모든 이동을 자유롭고 편안하게'}
                                        desc={'영어, 일본어, 중국어 등 외국어를 자유자재로 구사하는 전문 드라이버와 함께 소통의 불편함 없이 편안하게 이동할 수 있어요.'}/>
                    </li>
                    <li className="lineup_desc">
                        <img className="lineup_img" src="images/background/img-main-info02.png" alt="" />
                        <LineupContent style={{flexDirection:'row-reverse'}}
                                         stitle={'신뢰할 수 있는 요금 정책'}
                                        btitle={'부당요금에 대한 걱정은 더 이상 NO!'}
                                        desc={'누구나 신뢰하며 이용할 수 있도록 서울 권역 고정요금 체계를 마련했어요. 정직하게 운행하는 인터내셔널 택시, 마음 편하게 이용해 보세요.'}/>
                    </li>
                    <li className="lineup_desc">
                        <img className="lineup_img" src="images/background/img-main-info03.png" alt="" />
                        <LineupContent stitle={'고객 맞춤 서비스'}
                                        btitle={'이동의 시작과 끝, 모두 만족할 수 있도록'}
                                        desc={'다양한 차종이 준비되어 있어 어떤 상황이든 쾌적하게 이동할 수 있어요. 성공적인 비즈니스를 위한 공항 피켓 서비스, 전문 의전 등 기타 부가 서비스도 준비되어 있어요.'}/>
                    </li>
                </ul>
            </div>
        </div>  
        <div className="lineup_taxi_lineup">
                <div className="wrap">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide>
                        <TaxiSlides
                            img={'1'}
                            classfirst={'taxi_btn taxi_btn_active'}
                            classsecond={'taxi_btn'}
                            classthird={'taxi_btn'}
                            desc={'자유로운 소통과 친절함으로 즐거운 이동을'}
                            customer={3}
                            bag={3}
                            />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TaxiSlides
                            img={'2'}
                            classfirst={'taxi_btn'}
                            classsecond={'taxi_btn taxi_btn_active'}
                            classthird={'taxi_btn'}
                            desc={'베테랑 드라이버와 함께 편안하고 효율적인 이동을'}
                            customer={3}
                            bag={4}
                            />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TaxiSlides
                            img={'3'}
                            classfirst={'taxi_btn'}
                            classsecond={'taxi_btn'}
                            classthird={'taxi_btn taxi_btn_active'}
                            desc={'단체이동, 많은 짐도 걱정 없이 안전하고 쾌적한 이동을'}
                            customer={7}
                            bag={7}
                            />
                    </SwiperSlide>
                </Swiper>
                </div>
        </div>
    </>
  );
}