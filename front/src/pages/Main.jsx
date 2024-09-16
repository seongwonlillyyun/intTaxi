import About from "../components/About";
import Lineup from "../components/Lineup";
import Pickup from "../components/Pickup";
import Price from "../components/Price";
import Service from "../components/Service";

export default function Main(){
  return(
    <div>
       <About/>
       <Lineup/>
       <Service/>
       <Price/>
       <Pickup/>
    </div>
  );
}