import React,{useState} from 'react';

const About = () => {

// we can use more than one useStates 
    const [myStyle, setMyStyle] = useState({
        backgroundColor: 'white',
        color: 'black'
    });
    
    const [btntext, setBtnText] = useState("Dark mode");

    const changeMode =()=>{
        if(myStyle.color === 'black'){
            setMyStyle({
                backgroundColor: 'black',
                color: 'white'
            })
            setBtnText('Light mode')
        }
        else{
            setMyStyle({
                backgroundColor: 'white',
                color: 'black'
            })
            setBtnText('Dark mode')
        }
               
    };

    return(
    <>
        <div className='container' style={myStyle}>
            <h1>this is a dark mode</h1>
            <button onClick={changeMode} className='btn btn-success'>{btntext}</button>
        </div>
    </>
);
    
}

export default About;