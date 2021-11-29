import { Fragment } from "react";
import Navbar from "../components/NavBar/Navbar";
import Slider from "../components/Slider/Slider";


const Home = ()=>{
    return(
        <Fragment>
            <Navbar />
            <Slider/>
        </Fragment>
    )
}
export default Home;