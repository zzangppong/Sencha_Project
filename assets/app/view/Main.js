Ext.define('MyApp.view.Main', {
    extend: 'Ext.Carousel',
    xtype:'main',
    config: {
    	fullscreen: true,
    	defaults: {
	        styleHtmlContent: true,
	    },
    	items: 
		    [
		    	{
		            html : '<img src="resources/useImage/list1.PNG" style="width:100%;height:100%;text-align: center;"/>',
		            height:'80%',
		            items:[
		                   {
		                	   xtype: 'fieldset',
		   		               docked:'bottom',
		                	   instructions:"맞있는 새우 요리입니다.",
		                   }
		                   ]
		        },
		        {
		        	html : '<img src="resources/useImage/list2.png" style="width:100%;height:100%;text-align: center;"/>',
		        	height:'80%',
		        	items:[
		                   {
		                	   xtype: 'fieldset',
		   		               docked:'bottom',
		                	   instructions:"맞있는 비빔밥",
		                   }
		                   ]
		        		
		        },
		        {
		        	html : '<img src="resources/useImage/list3.PNG" style="width:100%;height:100%;text-align: center;"/>',
		        	height:'80%',
		        	items:[
		                   {
		                	   xtype: 'fieldset',
		   		               docked:'bottom',
		                	   instructions:"최고의 랍스타",
		                   }
		                   ]
		        }
		    ]
    },
});
