import React, { Component } from 'react'
import './BTGOanTuXi.css'
import Computer from './Computer'
import KetQuaGame from './KetQuaGame'
import Player from './Player'
import {connect} from 'react-redux'

class BTGOanTuXi extends Component {
    render() {
        return (
            <div className='ngocAnh'>
                <div className='row mt-5'>
                    <div className='col-4'>
                        <Player/>
                    </div>
                    <div className='col-4'>
                        <KetQuaGame/>
                        <button onClick={()=>{this.props.datCuoc()}} className='btn btn-success mt-5'>Play Game</button>
                    </div>
                    <div className='col-4'>
                        <Computer/>
                    </div>
                </div>

            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        
        datCuoc: () => {

            let count = 0;
            let randomComputerItem = setInterval(()=>{

                dispatch({
                    type:'RANDOM_COMPUTER'
                })
                count++;
                if(count>15){
                    clearInterval(randomComputerItem);
                    dispatch({
                        type: 'END_GAME'
                    })
                }
            },100)
        }
    }
}

export default connect(null,mapDispatchToProps)(BTGOanTuXi)
