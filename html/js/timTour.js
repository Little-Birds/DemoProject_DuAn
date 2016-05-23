var duthuyen = document.getElementById("duthuyen");
var gia = document.getElementById("gia");

var formSearch = document.getElementById("tim");

if(formSearch.attachEvent){
	formSearch.attachEvent('submit', timDuThuyen);
} else formSearch.addEventListener('submit',timDuThuyen);

function timDuThuyen(e) {
    if (e.preventDefault()) e.preventDefault()
    duThuyenSelect = duthuyen.value;
    gia_select = gia.value;
    
    if(duThuyenSelect != 'all'){
        switch(duThuyenSelect){
            case 'Tour Hạ Long':
                window.location = "TourHaLong.html";
                break;
            case 'Du thuyền Hạ Long':
                alert("tim thay");
                break;
            case 'Du thuyền Bhaya':
                alert("tim thay");
                break;
            case 'Du thuyền Signature':
                alert("tim thay");
                break;
            case 'Du thuyền Golden Lotus Garden':
                alert("tim thay");
                break;
            case 'Du thuyền Indochina Sail':
                alert("tim thay");
                break;
            case 'Du thuyền Pradis':
                alert("tim thay");
                break;
            case 'Du thuyền Oriental':
                alert("tim thay");
                break;
            case 'Du thuyền Paloma':
                alert("tim thay");
                break;
            default:
                alert("khong tim thay");
        }
    } else{
        switch(gia_select){
            case '1M':
                window.location = "TourHaLong.html";
                break;
            case '2M':
                alert("tim thay");
                break;
            case '4M':
                alert("tim thay");
                break;
            case '5M':
                alert("tim thay");
                break;
            case '7M':
                alert("tim thay");
                break;
            case '10M':
                alert("tim thay");
                break;
            case '12M':
                alert("tim thay");
                break;
            case '15M':
                alert("tim thay");
                break;
            case '20M':
                alert("tim thay");
                break;
            default:
                alert("khong tim thay");
        }
    }
}

