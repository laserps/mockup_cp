//Link Icon http://www.urbanui.com/inspire/pages/ui/icons.html

var menu = [
	
	{
		name : 'ลงทะเบียน',																																																																																																																																																							
		link : 'index.html',
		icon : 'fa fa-unlock-alt',
	},
	{
		name : 'สถานะห้อง',
		link : 'status.html',
		icon : '',
	},
	{
		name : 'คำนวนค่าใช้จ่าย',
		link : 'calculate.html',
		icon : '',
	},
	{
		name : 'บิล',
		link : '',
		icon : '',
	},
	{
		name : 'กำหนดค่าใช้จ่าย',
		link : '',
		icon : '',
	},
	{
		name : 'แก้ไขและลบข้อมูล',
		link : '',
		icon : '',
	},
	{
		name : 'แก้ไขเกี่ยวกับเรา',
		link : '',
		icon : '',
	},
	{
		name : 'Chat',
		link : '',
		icon : '',
	},
	{
		name : 'จัดการหน้าข่าวสาร',
		link : '',
		icon : '',
	},
	{
		name : 'Kaycard',
		link : '',
		icon : '',
	},
	{
		name : 'Log file',
		link : 'Siriraj_log.html',
		icon : '',
	},
];
var data = "";

$.each(menu,function(i,v){
	
	if(v.submenu!==undefined){
		if(v.link==main_menu){
			var active = "active";
			var collapse = "collapse";
			var show = 'show';
			var expanded = true;
		}else{
			var active = "";
			var collapse = "";
			var show = '';
			var expanded = false;
		}
		data+='<li class="d-flex flex-column '+active+'">\
                <a data-toggle="collapse" href="#menu_'+i+'" class="'+collapse+' nav-link" aria-expanded="false">\
                    <i class="nav-icon '+v.icon+'"></i>\
                    <p>\
                        '+v.name+'\
                        <i class="fa fa-sort-desc submenu-toggle"></i>\
                    </p>\
                </a>\
                <div class="collapse '+show+'" id="menu_'+i+'" role="navigation" aria-expanded="'+expanded+'">\
                    <ul class="nav flex-column">';
                    $.each(v.submenu,function(j,w){
                    	if(w.link==current_page){
							var active = "active";
							var collapse = "collapse";
							var show = 'show';
							var expanded = true;
						}else{
							var active = "";
							var collapse = "";
							var show = '';
							var expanded = false;
						}
                    	data+='\
                    	<li class="'+active+'">\
                            <a class="nav-link" href="'+w.link+'">\
                                '+w.name+'\
                            </a>\
                        </li>';
                    });
            data+='\
                    </ul>\
                </div>\
            </li>';
	}else{
		if(v.link==current_page){
			var active = "active";
			var collapse = "collapse";
			var show = 'show';
			var expanded = true;
		}else{
			var active = "";
			var collapse = "";
			var show = '';
			var expanded = false;
		}
		data+='<li class="d-flex flex-column '+active+'">\
	                <a class="nav-link" href="'+v.link+'">\
	                    <i class="nav-icon '+v.icon+'"></i>\
	                    <p>'+v.name+'</p>\
	                </a>\
	            </li>';
	}
});

// console.log(data);

$('#show_menu_on_sidebar').append(data);