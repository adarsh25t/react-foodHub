import React,{useState} from "react";
import './Slider.css';
import { images } from "./images";

const Slider = ()=>{

    const [slideIndex, setSlideIndex] = useState(1);

    
    const moveDot = index => {
        setSlideIndex(index)
    }
    
    return(
        <div className="container-slider">
            {images.map((obj, index) => {
                return (
                    <div
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <h1>{obj.text}</h1>
                        <img className="images"
                        src={obj.image} 
                        />
                        
                    </div>
                )
            })}


            <div className="container-dots">
                {Array.from({length: 5}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}
export default Slider;