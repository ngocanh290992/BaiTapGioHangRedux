import {combineReducers} from 'redux';
import BaiTapGioHangReducer from './BaiTapGioHangReducer'

const rooReducer = combineReducers({
    stateGioHang: BaiTapGioHangReducer
})

export default rooReducer;