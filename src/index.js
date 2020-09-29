import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Control=({value,children,onIncrease,onDecrease})=>{
    return(
        <div className="control">
            <button onClick={onDecrease}>-</button>
            <div>
                <span className="value">{value}</span>
                <span className="children">{children}</span>
            </div>
            <button onClick={onIncrease}>+</button>
        </div>
    )
}

function AudioControlWithOneObject(){
    const[{volume,bass,mid,treble},setValues]=useState({
        volume:53,
        bass:17,
        mid:51,
        treble:32
    });

    const increase=key=>()=>{
        setValues(values=>({
            ...values,
            [key]:values[key]+1
        }));
    }

    const decrease=key=>()=>{
        setValues(values=>({
            ...values,
            [key]:values[key]-1
        }));
    }

    return (
        <div className="audio-controls">
            <Control
            value={volume}
            onIncrease={increase('volume')}
            onDecrease={decrease('volume')}>
                Volume
            </Control>
            <Control
            value={bass}
            onIncrease={increase('bass')}
            onDecrease={decrease('bass')}>
                Bass
            </Control>
            <Control
            value={mid}
            onIncrease={increase('mid')}
            onDecrease={decrease('mid')}>
                Mid
            </Control>
            <Control
            value={treble}
            onIncrease={increase('treble')}
            onDecrease={decrease('treble')}>
                treble
            </Control>
        </div>
    )
}

ReactDOM.render(<AudioControlWithOneObject />,document.querySelector('#root'))

