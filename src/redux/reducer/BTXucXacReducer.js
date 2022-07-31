
const stateDefault = {
    taiXiu: false,
    mangXucXac: [
        {ma: 1, hinhAnh: './img/game_xuc_xac/1.png'},
        {ma: 2, hinhAnh: './img/game_xuc_xac/2.png'},
        {ma: 3, hinhAnh: './img/game_xuc_xac/3.png'}
    ],
    soBanThang: 0,
    tongSoBanChoi: 0
}

const BTXucXacReducer = (state=stateDefault, action) => {

    switch(action.type){
        case 'DAT_CUOC':
                state.taiXiu = action.taiXiu;
                return {...state}
        case 'PLAY_GAME':{
            let mangXucXacNgauNhien = [];
            for (let i = 0; i<3 ; i++){
                
                let soNgauNhien = Math.floor(Math.random() * 6) +1;

                let xucXacNgauNhien = {ma: soNgauNhien, hinhAnh: `./img/game_xuc_xac/${soNgauNhien}.png`};

                mangXucXacNgauNhien.push(xucXacNgauNhien);
            }
            state.mangXucXac=mangXucXacNgauNhien;

            state.tongSoBanChoi += 1;

            let tongSoDiem = mangXucXacNgauNhien.reduce((tongDiem, xucXac, index)=>{
                return tongDiem += xucXac.ma;
            },0);

            if((tongSoDiem > 11 && state.taiXiu)||(tongSoDiem <= 11 && !state.taiXiu)){
                state.soBanThang += 1;
            }

            return {...state}
        }
        default: return {...state}
    }
}

export default BTXucXacReducer;