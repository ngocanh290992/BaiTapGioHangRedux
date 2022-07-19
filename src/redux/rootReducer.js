import {combineReducers} from 'redux';
import BaiTapGioHangReducer from './BaiTapGioHangReducer'
import BaiTapGameXucXacReducer from './BTXucXacReducer'
const rooReducer = combineReducers({
    stateGioHang: BaiTapGioHangReducer,
    stateXucXac: BaiTapGameXucXacReducer
})

export default rooReducer;