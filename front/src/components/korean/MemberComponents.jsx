export function MemberTitle(props){
  return(
    <div className="login_title">
        <h2 className='login_btitle'>{props.bigtitle}</h2>
        <p className='login_stitle'>{props.smalltitle}</p>
    </div>
  );
}