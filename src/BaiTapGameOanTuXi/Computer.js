import React, { Component } from 'react'
import './BTGOanTuXi.css'
import { connect } from 'react-redux'

class Computer extends Component {
  render() {

    let keyframe = `@keyframes randomItem${Date.now()} {
      0%   {top: -25px;}
      25%  {top: 25px;}
      50%  {top: -25px;}
      75%  {top: 25px;}
      100% {top: 0px;}
    }`

    return (
      <div className='playerGame'>
        <style>
          {keyframe}
        </style>
        <div className='theThink' style={{position: 'relative'}} >
          <img style={{
            position:'absolute',
            animation:`randomItem${Date.now()} 0.5s`,
            width: 75, 
            height: 75, 
            transform: 'rotate(270deg)', 
            left:'25%',
            marginTop:'10px'
            }} 
            src={this.props.computer.hinhAnh} 
            alt={this.props.computer.ma} />
        </div>
        <div className='speech-bubble'></div>
        <img style={{ width: 150, height: 150 }} src='./img/game_oan_tu_ti/playerComputer.png' alt='playerComputer' />

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    computer: state.BTOanTuXiReducer.computer
  }
}

export default connect(mapStateToProps)(Computer)
