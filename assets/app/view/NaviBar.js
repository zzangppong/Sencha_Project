Ext.define('MyApp.view.NaviBar', {
    extend: 'Ext.Toolbar',
    xtype:'naviBar',
    requires: [
        'Ext.Toolbar'
    ],
    config: {
    	docked:'top',
    	items: 
		    [
		     	
			     {
			    	 iconCls:"home",
			    	 text:"메인",
			    	 id:"mainId"
			     },
			    {
			    	 ui:"back",
			    	 text:"뒤로",
			    	 id:"backId",
			    },
		     	{
		    	 xtype:"spacer"
		     	},
		    	{
		     		text:"로그인",
		     		id:"loginId",
		    	},
		     	{
		     		text:"로그아웃",
		     		id:"logInOutId",
		     	}
		    ]
    },

});