Ext.define('MyApp.model.NotiListModel', {
	extend: 'Ext.data.Model',
	config: {
		fields:[
		        {name:"regDtm", type:"auto"},
		        {name:"notiSeq", type:"auto"},
		        {name:"regUserId", type:"auto"},
		        {name:"memo", type:"auto"},
		        {name:"notiType", type:"auto"},
		        {name:"subNotiCnt", type:"auto"},
		        ],
	}
});

