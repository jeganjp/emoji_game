import React,{useState} from 'react';
import Level1bg from './images/Level1bg.jpg';
import happy from './images/happy emoji.jfif';
import sad from './images/sad emoji.jfif';
import angry from './images/angry emoji.png';
import Timer from './Timer';
import { Link } from 'react-router-dom';
import {useAlert} from 'react-alert';

const Level1 = () => {
    const [q1answer,setQ1Answer]=useState('');
    const [q2answer,setQ2Answer]=useState('');
    const [q3answer,setQ3Answer]=useState('');
    let answer=0;
    const alert=useAlert();
    const handleChange1=(e)=>{
        // console.log(e.target.value);
        setQ1Answer(e.target.value)
    }
    const handleChange2=(e)=>{
        // console.log(e.target.value);
        setQ2Answer(e.target.value)
    }
    const handleChange3=(e)=>{
        // console.log(e.target.value);
        setQ3Answer(e.target.value)
    }
    if(q1answer==='happy')
    {
        answer+=1;
    }
    if(q2answer==='sad')
    {
        answer+=1;
    }
    if(q3answer==='angry')
    {
        answer+=1;
    }
    const finalAnswer=()=>{
        console.log(answer);
        if(answer!==3)
        {alert.show("Not qualified to next round You score is "+answer)}
        if(answer===3)
        {
            alert.show(<div>Click on continue to next level<button><Link to='Level2'><span style={{color:'white'}}>Continue</span></Link></button></div>)
        }
        
    }
    return (
        <div style={{display:'flex',
        flexDirection:'column',
        justifyContents:'center',
        justifyItems:'center',
        alignItems:'center',
        backgroundImage:`url(${Level1bg})`,
        backgroundSize:'cover'
    }}>
                <h1 style={{color:'Background',fontWeight:'bolder'}}>Guess the Emoji</h1>
                <Timer/>
                <div style={{padding:30,border:'solid'}}>
                <ul>
                <li type='1' style={{}}><img style={{}} src={happy} alt='happy' height={80} width={80}/>
                <input type='radio' value='happy' name='question1' onChange={handleChange1} style={{height:20,width:20,margin:20}} /><span style={{fontSize:30}}>Happy</span>
                <input type='radio' value='sad' name='question1' onChange={handleChange1} style={{height:20,width:20,margin:20}}/><span style={{fontSize:30}}>Sad</span>
                <input type='radio' value='angry' name='question1' onChange={handleChange1} style={{height:20,width:20,margin:20}}/><span style={{fontSize:30}}>Angry</span>    
                </li>
                <li type='1'>
                <img src={sad} alt='sad' height={80} width={80}/>
                <input type='radio' value='happy' name='question2' onChange={handleChange2} style={{height:20,width:20,margin:20}} /><span style={{fontSize:30}}>Happy</span>
                <input type='radio' value='sad' name='question2' onChange={handleChange2} style={{height:20,width:20,margin:20}}/><span style={{fontSize:30}}>Sad</span>
                <input type='radio' value='angry' name='question2' onChange={handleChange2} style={{height:20,width:20,margin:20}}/><span style={{fontSize:30}}>Angry</span>    
                </li>
                <li type='1'>
                <img style={{background:'white'}} src={angry} alt='angry' height={80} width={80}/>
                <input type='radio' value='happy' name='question3' onChange={handleChange3} style={{height:20,width:20,margin:20}} /><span style={{fontSize:30}}>Happy</span>
                <input type='radio' value='sad' name='question3' onChange={handleChange3} style={{height:20,width:20,margin:20}}/><span style={{fontSize:30}}>Sad</span>
                <input type='radio' value='angry' name='question3' onChange={handleChange3} style={{height:20,width:20,margin:20}}/><span style={{fontSize:30}}>Angry</span>
                </li>
                </ul>    
                </div>
                <button type='submit' onClick={finalAnswer}><span style={{color:'white'}}>Submit</span></button>
        </div>

    )
}

export default Level1
