Ext.define("MyApp.store.FoodListStore", {
	extend:"Ext.data.Store",
	xtype:"foodListStore",
	config: {
		storeId:"FoodListStore",
		model:"MyApp.model.FoodListModel",
		pageSize: 5,
        autoLoad: true,
        extraParams: {
            q: 'sencha'
        },
		proxy:{
			type:"jsonp",
			url:"http://61.40.29.188:8080/sencha_project/data/foodlist.jsp",
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
