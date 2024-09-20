import About from "../components/korean/About";
import Bottom from "../components/korean/Bottom";
import Lineup from "../components/korean/Lineup";
import Pickup from "../components/korean/Pickup";
import Price from "../components/korean/Price";
import Service from "../components/korean/Service";
import Tour from "../components/korean/Tour";

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