Ext.define("MyApp.store.NotiListStore", {
	extend:"Ext.data.Store",
	xtype:"notiListStore",
	config: {
		storeId:"NotiListStore",
		model:"MyApp.model.NotiListModel",
		pageSize: 5,
        autoLoad: true,
        extraParams: {
            q: 'sencha'
        },
        proxy:{
			type:"jsonp",
			url:"http://61.40.29.188:8080/sencha_project/data/notiList.jsp",
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
