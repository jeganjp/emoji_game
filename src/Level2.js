import React from 'react';
import happy from './images/happy emoji.jfif';
import sad from './images/sad emoji.jfif';
import angry from './images/angry emoji.png';
import Timer from './Timer';
import { Link } from 'react-router-dom';
import level2bg from './images/Level2bg.jpg';


const Level2 = () => {
    return (
        <div style={{display:'flex',
        flexDirection:'column',
        justifyContents:'center',
        justifyItems:'center',
        alignItems:'center',
        backgroundImage:`url(${level2bg})`,
        backgroundSize:'cover'
    }}>
                <h1 style={{fontWeight:'bolder'}}>Guess the Emoji</h1>
                <Timer/>
                <div style={{padding:30,border:'solid'}}>
                <ul>
                <li type='1' style={{}}><img style={{}} src={happy} alt='happy' height={80} width={80}/>
                <input type='radio' value='happy' style={{height:20,width:20,margin:20}} /><span style={{fontSize:30}}>Happy</span>
                <input type='radio' value='sad' style={{height:20,width:20,margin:20}}/><span style={{fontSize:30}}>Sad</span>
                <input type='radio' value='angry' style={{height:20,width:20,margin:20}}/><span style={{fontSize:30}}>Angry</span>    
                </li>
                <li type='1'>
                <img src={sad} alt='sad' height={80} width={80}/>
                <input type='radio' value='happy' style={{height:20,width:20,margin:20}} /><span style={{fontSize:30}}>Happy</span>
                <input type='radio' value='sad' style={{height:20,width:20,margin:20}}/><span style={{fontSize:30}}>Sad</span>
                <input type='radio' value='angry' style={{height:20,width:20,margin:20}}/><span style={{fontSize:30}}>Angry</span>    
                </li>
                <li type='1'>
                <img style={{background:'white'}} src={angry} alt='angry' height={80} width={80}/>
                <input type='radio' value='happy' style={{height:20,width:20,margin:20}} /><span style={{fontSize:30}}>Happy</span>
                <input type='radio' value='sad' style={{height:20,width:20,margin:20}}/><span style={{fontSize:30}}>Sad</span>
                <input type='radio' value='angry' style={{height:20,width:20,margin:20}}/><span style={{fontSize:30}}>Angry</span>
                </li>
                </ul>    
                </div>
                <button type='submit'><Link to='Level3'><span style={{color:'white'}}>Submit</span></Link></button>
        </div>

    )
}

export default Level2
