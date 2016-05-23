var user_search = document.getElementById("place");

var search_form = document.getElementById("searchForm");

if(search_form.attachEvent){
	search_form.attachEvent('submit', search);
} else search_form.addEventListener('submit',search);

function search(e){
    if(e.preventDefault()) e.preventDefault();
	userSearch = user_search.value;
    userSearch = userSearch.toLowerCase();
	
	switch(userSearch){
		case 'vịnh hạ long':
			window.location = 'vinhhalong.html';
			break;
		case 'vinh ha long':
			window.location = 'vinhhalong.html';
			break;
		case 'tam cốc bích động':
			window.location = 'TamCocBichDong.html';
			break;
		case 'tam coc bich dong':
			window.location = 'TamCocBichDong.html';
			break;
		case 'phong nha kẻ bàng':
			window.location = 'PhongNhaKeBang.html';
			break;
		case 'phong nha ke bang':
			window.location = 'PhongNhaKeBang.html';
			break;
		case 'du lich sinh thai':
			window.location = 'dulichsinhthai.html';
			break;
		case 'du lịch sinh thái':
			window.location = 'dulichsinhthai.html';
			break;	
		case 'du lich bien':
			window.location = 'dulichbien.html';
			break;
		case 'du lịch biển':
			window.location = 'dulichbien.html';
			break;
		default:
			alert("Không tìm thấy. Hãy nhập lại");
			
	}
}
