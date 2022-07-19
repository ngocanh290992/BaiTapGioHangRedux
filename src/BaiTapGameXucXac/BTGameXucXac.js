import React, { Component } from 'react'
import '../BaiTapGameXucXac/BTGameXucXac.css'
import ThongTinGame from './ThongTinGame'
import XucXac from './XucXac'
import {connect} from 'react-redux'

class BTGameXucXac extends Component {
  render() {
    return (
      <div className='game '>
        <div className='game_title text-center mt-5 display-3'>
          GAME XÚC XẮC - ĂN ĐẤM
        </div>
        <div className='game_body row mt-5'>
          <div className='col-4 text-right'>
            <button onClick={()=>{this.props.datCuoc(true)}} className='btnGame '>TÀI</button>
          </div>
          <div className='col-4 text-center'>
            <XucXac/>
          </div>
          <div className='col-4'>
            <button onClick={()=>{this.props.datCuoc(false)}} className='btnGame '>XỈU</button>
          </div>
        </div>
        <div className='game_infomation text-center '>
          <ThongTinGame/>
          <button onClick={()=>{this.props.playGame()}} className='btn btn-success'>Play Game</button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    datCuoc: (taiXiu) => {
      let action = {
        type: 'DAT_CUOC',
        taiXiu
      }
      dispatch(action)
    },
    playGame: ()=>{
      let action = {
        type: 'PLAY_GAME',
      }
      dispatch(action)
    }

  }
}


export default connect(null,mapDispatchToProps)(BTGameXucXac)
