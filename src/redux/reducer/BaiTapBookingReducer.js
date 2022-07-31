import { DAT_GHE, HUY_GHE } from "../types/BaiTapBookingTypes";

const stateDefault = {
    danhSachGheDangDat: [
        // {soGhe: "A1", gia: 10000}
    ]
}

const BTBookingReducer = (state=stateDefault, action) => {
    switch (action.type){
        case DAT_GHE:{

            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
            let indexGheDangDat = danhSachGheDangDatUpdate.findIndex(gheDangDat=>gheDangDat.soGhe === action.ghe.soGhe);
            if (indexGheDangDat !== -1){
                danhSachGheDangDatUpdate.splice(indexGheDangDat,1)
            }else{
                danhSachGheDangDatUpdate.push(action.ghe)
            }

            state.danhSachGheDangDat = danhSachGheDangDatUpdate;

            return {...state}
        }
        case HUY_GHE: {
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
            let indexGheDangDat = danhSachGheDangDatUpdate.findIndex(gheDangDat=>gheDangDat.soGhe === action.ghe.soGhe);
            if (indexGheDangDat !== -1){
                danhSachGheDangDatUpdate.splice(indexGheDangDat,1)
            }

            state.danhSachGheDangDat = danhSachGheDangDatUpdate;


            return {...state}
        }

        default: return {...state}
    }
}

export default BTBookingReducer;