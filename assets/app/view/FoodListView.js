Ext.define('MyApp.view.FoodListView', {
    extend: 'Ext.Panel',
    xtype:'foodListView',
    requires: [
        'Ext.dataview.List'
    ],
    /*config: {
    	items:[{
    		xtype:"list",
    		store:"FoodListStore",
    		itemTpl:[
 					"<div style='width:100%;'>",
 						"<table  style='width:100%;'>",
 							"<tr>",
 								"<td style='width:50px; padding-left:5px'>{pno}</td>",
 								"<td style='padding-left:5px'>{pname}</td>",
 								"<td style='text-align:right;padding-left:5px'>",
 								"</td>",
 							"</tr>",
 						"</table>",
 					"</div>"
 				]
    	}]
    }*/
});