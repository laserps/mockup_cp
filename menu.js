//Link Icon http://www.urbanui.com/inspire/pages/ui/icons.html

var menu = [
	
	{
		name : 'Dashboard',
		link : 'index.html',
		icon : '',
	},
	{
		name : 'Log file',
		link : 'Siriraj_log.html',
		icon : '',
	},
	{
		name : 'Specimen check-in',
		link : '',
		icon : '',
		submenu : [
		{
			name : 'จุดที่ 0',
			link : 'Specimen_Check_in_0.html'
		},
		{
			name : 'จุดที่ 1',
			link : 'Specimen_Check_in_0.html'
		},
		{
			name : 'จุดที่ 2',
			link : 'Specimen_Check_in_0.html'
		},
		{
			name : 'จุดที่ 3',
			link : 'Specimen_Check_in_0.html'
		},
		{
			name : 'จุดที่ 4',
			link : 'Specimen_Check_in_0.html'
		},
		{
			name : 'จุดที่ 5',
			link : 'Specimen_Check_in_0.html'
		},
		{
			name : 'จุดที่ 6',
			link : 'Specimen_Check_in_0.html'
		},
		{
			name : 'จุดที่ 7.1',
			link : 'Specimen_Check_in_0.html'
		},
		{
			name : 'จุดที่ 7.2',
			link : 'Specimen_Check_in_0.html'
		},
		{
			name : 'จุดที่ 8.1',
			link : 'Specimen_Check_in_0.html'
		},
		{
			name : 'จุดที่ 8.2',
			link : 'Specimen_Check_in_0.html'
		},
		{
			name : 'จุดที่ 9',
			link : 'Specimen_Check_in_0.html'
		}
		]
	},
	{
		name : 'Statistic report',
		link : '',
		icon : '',
		submenu : [{
			name : '1. รายงานผล (TAT)',
			link : 'report_tat.html'
		},
		{
			name : '2. ระยะเวลา Single Queue -> OPD Register',
			link : 'Siriraj_report1.html'
		},
		{
			name : '3. ระยะเวลา OPD Register -> รับใบคืน',
			link : 'Siriraj_report2.html'
		},
		{
			name : '4. ระยะเวลา ใบรับคืน -> จ่ายเงิน',
			link : 'Siriraj_report3.html'
		},
		{
			name : '5. ระยะเวลา จ่ายเงิน -> เจาะเลือด',
			link : 'Siriraj_report4.html'
		},
		{
			name : '6. ระยะเวลา เจาะเลือด -> Check in โต๊ะ 20',
			link : 'Siriraj_report5.html'
		},
		{
			name : '7. ระยะเวลา Check in โต๊ะ 20 -> Check out ',
			link : 'Siriraj_report6.html'
		},
		{
			name : '8. ระยะเวลา Check out -> CentralLab',
			link : 'Siriraj_report7.html'
		},
		{
			name : '9. ระยะเวลา CentralLab -> Middlewares',
			link : 'Siriraj_report8.html'
		}
		]
	}
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