
const stateOanTuXi = {
    mangLuaChon: [
        {ma: 'keo', hinhAnh: './img/game_oan_tu_ti/keo.png', datCuoc: true},
        {ma: 'bua', hinhAnh: './img/game_oan_tu_ti/bua.png', datCuoc: false},
        {ma: 'bao', hinhAnh: './img/game_oan_tu_ti/bao.png', datCuoc: false}
    ],
    computer: {ma: 'keo', hinhAnh: './img/game_oan_tu_ti/keo.png'},
    soBanThang: 0,
    soBanChoi: 0,
    ketQua: 'kỳ quan thứ 8 của Thế Giới là gì ?',
}

const BTOanTuXiReducer = (state=stateOanTuXi, action) => {

    switch(action.type){
        case 'LUA_CHON': {
            let mangTamThoi = [...state.mangLuaChon];
            
            mangTamThoi.map((item,index)=>{

               if(item.ma === action.maChon){
                item.datCuoc = true;
               }else{
                item.datCuoc = false;
               }

                return mangTamThoi
            })

            console.log(mangTamThoi )
            state.mangLuaChon = mangTamThoi;

            return {...state}
        }
        case 'RANDOM_COMPUTER': {
            let soNgauNhien = Math.floor(Math.random()*3);
            let chonNgauNhien = state.mangLuaChon[soNgauNhien];
            state.computer = chonNgauNhien;
            return {...state}
        }
        case 'END_GAME': {
            let player = state.mangLuaChon.find(item => item.datCuoc);
            let computer = state.computer;
            switch(player.ma){
                case 'keo':
                    if(computer.ma === 'keo'){
                        state.ketQua = 'bất phân thắng bại';
                    }else if(computer.ma === 'bua'){
                        state.ketQua = 'ok mình thua';
                    }else{
                        state.soBanThang += 1;
                        state.ketQua = "I'm iron man. i love you 3000 !!!!";
                    }
                ;break;
                case 'bua':
                    if(computer.ma === 'keo'){
                        
                        state.soBanThang += 1;
                        state.ketQua = "I'm iron man. i love you 3000 !!!!";
                    }else if(computer.ma === 'bua'){
                        state.ketQua = 'bất phân thắng bại';
                    }else{
                        state.ketQua = 'ok mình thua';
                    }
                ;break;
                case 'bao':
                    if(computer.ma === 'keo'){
                        
                        state.ketQua = 'ok mình thua';
                    }else if(computer.ma === 'bua'){
                        state.soBanThang += 1;
                        state.ketQua = "I'm iron man. i love you 3000 !!!!";
                    }else{
                        state.ketQua = 'bất phân thắng bại';
                    }
                ;break;
                default:
            }
            state.soBanChoi += 1;
            return {...state}
        }
        default: return {...state}
    }
}

export default BTOanTuXiReducer;