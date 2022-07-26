import {combineReducers} from 'redux';
import BaiTapGioHangReducer from './BaiTapGioHangReducer'
import BTOanTuXiReducer from './BTOanTuXiReducer';
import BaiTapGameXucXacReducer from './BTXucXacReducer'


const rooReducer = combineReducers({
    stateGioHang: BaiTapGioHangReducer,
    stateXucXac: BaiTapGameXucXacReducer,
    BTOanTuXiReducer
})

export default rooReducer;