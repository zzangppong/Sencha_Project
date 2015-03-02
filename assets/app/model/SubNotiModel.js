Ext.define('MyApp.model.SubNotiModel', {
	extend: 'Ext.data.Model',
	config: {
		fields:[
		        {name:"subNotiSeq", type:"auto"},
		        {name:"notiSeq", type:"auto"},
		        {name:"regDtm", type:"date(Y-d-m)"},
		        {name:"regUserId", type:"auto"},
		        {name:"memo", type:"auto"},
		        ],
	}
});

