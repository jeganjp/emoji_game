import React from 'react';
// import ingamebg from './images/6335.jpg';
import happy from './images/happy emoji.jfif';
import sad from './images/sad emoji.jfif';
import angry from './images/angry emoji.png';
import Timer from './Timer';
import { Link } from 'react-router-dom';

const Level1 = () => {
    return (
        <div style={{display:'flex',
        flexDirection:'column',
        justifyContents:'center',
        justifyItems:'center',
        alignItems:'center',
        background:'yellow'
        // backgroundImage:`url(${ingamebg})`,
        // backgroundSize:'cover'
    }}>
                <h1 style={{color:'Background',fontWeight:'bolder'}}>Guess the Emoji</h1>
                <Timer/>
                <div style={{alignSelf:'baseline'}}>
                <ul>
                <li type='1' style={{}}><img style={{}} src={happy} alt='happy' height={80} width={80}/>
                <input type='radio' value='happy' style={{height:20,width:20}} /><span style={{fontSize:30}}>Happy</span>
                <input type='radio' value='sad' style={{height:20,width:20}}/><span style={{fontSize:30}}>Sad</span>
                <input type='radio' value='angry' style={{height:20,width:20}}/><span style={{fontSize:30}}>Angry</span>    
                </li>
                <li type='1'>
                <img src={sad} alt='sad' height={80} width={80}/>
                <input type='radio' value='happy' style={{height:20,width:20}} /><span style={{fontSize:30}}>Happy</span>
                <input type='radio' value='sad' style={{height:20,width:20}}/><span style={{fontSize:30}}>Sad</span>
                <input type='radio' value='angry' style={{height:20,width:20}}/><span style={{fontSize:30}}>Angry</span>    
                </li>
                <li type='1'>
                <img style={{background:'white'}} src={angry} alt='angry' height={80} width={80}/>
                <input type='radio' value='happy' style={{height:20,width:20}} /><span style={{fontSize:30}}>Happy</span>
                <input type='radio' value='sad' style={{height:20,width:20}}/><span style={{fontSize:30}}>Sad</span>
                <input type='radio' value='angry' style={{height:20,width:20}}/><span style={{fontSize:30}}>Angry</span>
                </li>
                </ul>    
                </div>
                <button type='submit'><Link to='Level2'>Submit</Link></button>
        </div>

    )
}

export default Level1
