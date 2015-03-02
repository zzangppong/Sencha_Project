Ext.define("MyApp.store.SubNotiStore", {
	extend:"Ext.data.Store",
	xtype:"subNotiStore",
	config: {
		storeId:"SubNotiStore",
		model:"MyApp.model.SubNotiModel",
		pageSize: 5,
        autoLoad: true,
        extraParams: {
            q: 'sencha'
        },
		proxy:{
			type:"jsonp",
			url:"http://61.40.29.188:8080/sencha_project/data/subNotiList.jsp",
			pageParam: 'page',
            limitParam: 'rpp',
			callbackKey:"serverKey",
			reader:{
				type:"json",
				rootProperty:"data"
			}
	}	
	}
});
