import About from "../components/About";
import Bottom from "../components/Bottom";
import Lineup from "../components/Lineup";
import Pickup from "../components/Pickup";
import Price from "../components/Price";
import Service from "../components/Service";
import Tour from "../components/Tour";

export default function Main(){
  return(
    <div>
       <About/>
       <Lineup/>
       <Service/>
       <Price/>
       <Pickup/>
       <Tour/>
       <Bottom/>
    </div>
  );
}