import React, {useState} from 'react';

function Slides({slides}) {
    //Set state
    const [count, setCount] = useState(0)

    const handleClick = (event) => {
        const clickAction = event.target.name

        switch(clickAction)
        {
            case 'Restart':
                setCount(0)
                break;
            case 'Prev':
                setCount(count -1)
                break;
            case 'Next':
                setCount(count + 1)
                break;
        }
    }

    return (
        <div>
            <div id="navigation" className="text-center">
                <button name="Restart" data-testid="button-restart" className="small outlined" onClick={handleClick}>Restart</button>
                <button name="Prev"  data-testid="button-prev" className="small" onClick={handleClick} disabled={count == 0 ? true : false}>Prev</button>
                <button name="Next" data-testid="button-next" className="small" onClick={handleClick} disabled={count == slides.length - 1 ? true : false}>Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slides[count].title}</h1>
                <p data-testid="text">{slides[count].text}</p>
            </div>
        </div>
    );
}

export default Slides;
