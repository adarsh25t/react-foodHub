import React,{useState} from "react";
import './Slider.css';
import { images } from "./images";
import Buttons from "../../UI/Buttons";

const Slider = ()=>{

    const [slideIndex, setSlideIndex] = useState(1);

    
    const moveDot = index => {
        setSlideIndex(index)
    }
    
    return(
        <div className="container-slider">
            {images.map((obj, index) => {
                return (
                    <div key={obj.ID}className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    style={{backgroundImage: `url(${obj.image})`}}>   
                        <div className="slider-text">
                            <h3>{obj.Title}</h3>
                            <h1>{obj.Paragraph}</h1>
                            <Buttons text={obj.btn}/>
                        </div>
                    </div>
                )
            })}


            <div className="container-dots">
                {Array.from({length: 3}).map((item, index) => (
                    <div 
                    key={index+1}
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>

        </div>
    )
}
export default Slider;