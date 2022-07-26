import React, { Component } from 'react'
import './BTGOanTuXi.css'
import {connect} from 'react-redux'

class Player extends Component {
  render() {
    return (
      <div className='playerGame'>
        <div className='theThink'>
            <img style={{width:75, height:75}} src={this.props.mangLuaChon.find(item=>item.datCuoc).hinhAnh} alt={this.props.mangLuaChon.find(item=>item.datCuoc).ma}/>
        </div>
        <div className='speech-bubble'></div>
        <img style={{width:150, height: 150}} src='./img/game_oan_tu_ti/player.png' alt='player'/>
        <div className='row'>
          {this.props.mangLuaChon.map((item, index) => {

            let border = {};

            if(item.datCuoc){
              border = {border:'3px solid orange'}
            }

            return <div key={index} className='col-4'>
            <button style={border} onClick={()=>{this.props.playerChon(item.ma)}} className='btnItem'>
                <img style={{width:50, height:50}} src={item.hinhAnh} alt={item.ma}/>
            </button>
        </div>
          })}
            
           
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    mangLuaChon: state.BTOanTuXiReducer.mangLuaChon ,
    
  }
}

const mapDispatchToProps = dispatch => {
  return {
    playerChon: (maChon) => {
      let action = {
        type: 'LUA_CHON',
        maChon
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Player)