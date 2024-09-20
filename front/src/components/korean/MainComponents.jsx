import { ReactComponent as Member } from "../../svg/ic-member.svg";
import { ReactComponent as Bag } from "../../svg/ic-bag.svg";
import { ReactComponent as Together } from "../../svg/ic-together.svg";
import { ReactComponent as Line } from "../../svg/ic-line-blue.svg";

export function Points({number, left}){
  return(
        <span className='points' style={{width:`${number}px`, marginLeft:`${left}`}}>
            <em/>
        </span>
  );
}


export function LineupContent(props){
  return(
    <div className="lineup_box">
      <Points number={50} left={0}/>
      <p className="lineup_stitle">{props.stitle}</p>
      <h3 className="lineup_btitle">{props.btitle}</h3>
      <p className="lineup_title_desc">{props.desc}</p>
    </div>
  );
}

export function TaxiSlides(props){
  TaxiSlides.defaultProps={
    classfirst:'taxi_btn',
    classsecond:'taxi_btn',
    classthird:'taxi_btn'
  }
  return(
    <div className="taxi_slide">
      <ul className="taxi">
        <li>
            <h3 className="swiper_title">인터내셔널 택시 라인업</h3>
        </li>
        <li className="taxi_btn_list">
           <button className={`${props.classfirst}`}>중형택시</button>
            <button className={`${props.classsecond}`}>모범택시</button>
            <button className={`${props.classthird}`}>대형택시</button>
        </li>
        <li>
          <p className="taxi_desc">{props.desc}</p>
        </li>
        <li className="taxi_infos">
          <div className="taxi_info">
            <Member/>
              <p>탑승 가능 {props.customer}명</p>
            </div>
            <div className="taxi_info">
              <Bag/>
              <p>수하물 {props.bag}개</p>
            </div>
        </li>
        </ul>
          <img src={`images/background/img-tax0${props.img}.png`} alt="" />
      </div>
  );
}

export function ServiceTitle({content}){
  return(
    <p className='service_box_title'>{content}</p>
  );
}
export function ServiceArea(props){
  return(
    <div className='service_info_desc service_second'>
                            {props.from}
                            <Together/>
                            {props.to}:
                            <span className='service_info_result'>{props.price}</span>
                          </div>
  );
}
export function ServiceInfo(props){
  return(
    <dl className='service_info_box'>
                        <dt className='service_info_title'>이용 요금<Line/></dt>
                        <dd>
                        <div className='service_info_desc'>
                            {props.from}
                            <Together/>
                            {props.to}:
                            <span className='service_info_result'>{props.price}</span>
                          </div>
                        </dd>
                      </dl>
  );
}

export function Howtouse(props){
  return(
    <div className='howtouse_circle_box'>
      <span className='howtouse_circle'>{props.number}</span>
      <p className='howtouse_circle_title'>{props.text}</p>
    </div>
  );
}
export function PublicTitle({content}){
  return(
    <h2 className='publictitle'>{content}</h2>
  );
}

export function Tourtext({text}){
  return(
    <span className='tour_box_bg'>
       <p className='tour_box_txt'>{text}</p>
    </span>
  );
}