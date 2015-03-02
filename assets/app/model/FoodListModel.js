Ext.define('MyApp.model.FoodListModel', {
	extend: 'Ext.data.Model',
	config: {
		fields:[
		        {name:"memo", type:"auto"},
		        {name:"pimage", type:"auto"},
		        {name:"regDtm", type:"auto"},
		        //"pno","pname,"pimage"
		        ],	
	}
});

