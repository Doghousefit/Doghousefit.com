import { useState } from 'react';
import NewslettersExample from './visuals/NewsletterExample.png';
import NewslettersExample1 from './visuals/NewsletterExample1.png';
import NewslettersExample2 from './visuals/NewsletterExample2.png';


const ImageCarousel = () => {
    const [index, setIndex] = useState(2);
    
    const handleImageChange = (index) => {
        console.log(index);
        setIndex(index);
    }

    return (
        <div className="image-carousel">
            <div className="images">
                <img 
                    src={NewslettersExample} 
                    alt="Newsletter Example 1" 
                    className="hidden" 
                    draggable='false'
                />
                <img 
                    src={NewslettersExample} 
                    alt="Newsletter Example 1" 
                    className={index === 1 ? 'active': index === 2 ? 'left' : 'right'} 
                    draggable='false' 
                    onClick={() => handleImageChange(1)}
                />
                <img 
                    src={NewslettersExample1} 
                    alt="Newsletter Example 2" 
                    className={index === 2 ? 'active': index === 3 ? 'left' : 'right'} 
                    draggable='false' 
                    onClick={() => handleImageChange(2)}
                />
                <img 
                    src={NewslettersExample2} 
                    alt="Newsletter Example 3" 
                    className={index === 3 ? 'active': index === 1 ? 'left' : 'right'} 
                    draggable='false' 
                    onClick={() => handleImageChange(3)}
                />
            </div>
            <div className="indicators">
                <span className={index === 1 ? 'dot active': 'dot'} onClick={() => handleImageChange(1)}></span>
                <span className={index === 2 ? 'dot active': 'dot'} onClick={() => handleImageChange(2)}></span>
                <span className={index === 3 ? 'dot active': 'dot'} onClick={() => handleImageChange(3)}></span>
            </div>
        </div>
    );
}

export default ImageCarousel;