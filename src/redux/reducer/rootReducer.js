import {combineReducers} from 'redux';
import BaiTapGioHangReducer from './BaiTapGioHangReducer'
import BTOanTuXiReducer from './BTOanTuXiReducer';
import BaiTapGameXucXacReducer from './BTXucXacReducer'
import BaiTapBookingReducer from './BaiTapBookingReducer'

const rooReducer = combineReducers({
    stateGioHang: BaiTapGioHangReducer,
    stateXucXac: BaiTapGameXucXacReducer,
    BTOanTuXiReducer,
    BaiTapBookingReducer
})

export default rooReducer;