Ext.define('MyApp.view.CreateNotiView', {
    extend: 'Ext.Panel',
    xtype:'createNotiView',
    requires: [
        'Ext.Panel'
    ],
    config: {
    	fullscreen: true,
/*    	left:0,
    	right:0,
    	bottom:0,
    	height:100,*/
    	layout:{
	    	type:'vbox',
	    	align:'stretch',
	    },
    	defaults: {
	        styleHtmlContent: true
	    },
	    items: [
				{
					xtype: 'fieldset',
					title: '게시판',
					items: [
					        {
					        	id:'notiTypeId',
					        	xtype: 'selectfield',
					        	options: [
					        	          {text: '일반',  value: '2'},
					        	          /*{text: '공지',  value: '1'},*/
					        	          ]
					        },
					        ]
				},
		        {
		            xtype: 'fieldset',
		            title: '글쓰기',
		            items: [
		                {
		                    xtype: 'textareafield',
	                        label: '',
	                        maxRows: 6,
	                        id: 'notiMemoId',
	                        name: 'notiMemoId'
		                },
		                {
		                    xtype: 'spacer',
		                    height:20
		                },
		                {
		                    xtype: 'panel',
		                    layout:{type:'hbox',align:'middle',pack:'center'},
			                items:[
			                       {
			                    	   	xtype: 'button',
			                    	   	text:'등록',
			                    	   	ui:'action',
			                    	   	width:100,
			                    	   	id:'createNotiProcId'
			                       },
			                       {
			   		               		xtype: 'spacer',
			   		               		width:20
			                       },
			                       {
			                    	   	xtype: 'button',
			                    	   	text:'취소',
			                    	   	ui:'action',
			                    	   	width:100,
			                    	   	id:'notiCancelId'
			                       },
			                ],
		                    
		                },
		                {
		                	xtype: 'spacer',
		                	height:20
		                },
		            ]

		        },
		    ],
    }
});
