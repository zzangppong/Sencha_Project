Ext.define('MyApp.view.TabMenu', {
    extend: 'Ext.tab.Panel',
    xtype: 'tabMenu',
    config: {
    	fullscreen: true,
    	layout:{
    		type:'card',
    		animation:'fade'
    	},
    	tabBar:{
    		docked:'top',
    		defaults:{
    			flex:1
    		}
    	},
    	items: [
    	        {
    	        	title: '요리',
    	        	id:'foodListId',
    	        	
    	        	useSimpleItems: false,
    	            variableHeights: true,
    	            infinite: true,
    	            disableSelection: true,
    	            allowDeselect: false,
    	            loadingText: 'Loading data...',
    	            plugins: [{
    	                xclass: 'Ext.plugin.ListPaging',
    	                autoPaging: false
    	            }],
    	            masked: false,
    	            mode: 'SINGLE',
    	            scrollable: {
    	                direction: 'vertical',
    	                directionLock: true
    	            },
    	        	
    	        	xtype:"list",
    	        	flex:1,
    	        	store:"FoodListStore",
    	        	itemTpl:[
    	        	         "<div style='width:100%;'>",
    	        	         "<table  style='width:100%;border:1px;'>",
    	        	         "<tr>",
    	        	         "<td style='text-align:left;padding-left:5px'><img style='width:40px;height:40px;'" +
    	        	         "src='resources/useImage/{pimage}' border='0'>",
    	        	         "</td>",
    	        	         "<td style='padding-left:5px'>{memo}</td>",
    	        	         "</tr>",
    	        	         "</table>",
    	        	         "</div>"
    	        	],
    	        	items:[
    	        	       {
    	        	       	xtype:"toolbar",
    	        	       	docked: 'bottom',
    	        	       	id:'createFoodViewId',
    	        	       	items: [
    	        	       	        { xtype: 'spacer' },
    	        	       	        { xtype: 'button',
    	        	   	        	  text:'등록',
    	        	              	  ui:'action',
    	        	                  width:100,
    	        	               	  id:'createFoodId'
    	        	                },
    	        	                { xtype: 'spacer' }
    	        	               ],
    	        	       }
    	             ],

    	        },
    	        {
    	        	title: '게시판',
    	        	id:'notiListId',
    	        	xtype:"list",
    	        	flex:2,
    	        	store:"NotiListStore",
    	        	itemId:"notiItemId",
    	        	
    	        	useSimpleItems: false,
    	            variableHeights: true,
    	            infinite: true,
    	            disableSelection: true,
    	            allowDeselect: false,
    	            loadingText: 'Loading data...',
    	            //emptyText: '검색 Data가 없습니다.',
    	            plugins: [{
    	                xclass: 'Ext.plugin.ListPaging',
    	                autoPaging: false
    	            }],
    	            masked: false,
    	            mode: 'SINGLE',
    	            scrollable: {
    	                direction: 'vertical',
    	                directionLock: true
    	            },
    	            
    	        	itemTpl:[
    	        	         '<tpl if="notiType == 1"  >',
    	        	         "<div style='width:100%;'>",
	    	        	         "<table  style='width:100%;'>",
	    	        	         "<colgroup>",
	    	        	         	"<col style='width:55%;'>",
	    	        	         	"<col style='width:45%;'>",
	    	        	         "</colgroup>",
	    	        	         "<tr>",
	    	        	         "<td style='padding-left:5px;font-size:17px;'>",
	    	        	         "<b>공지사항</b>",
	    	        	         "</td>",
	    	        	         "<td style='padding-left:5px;font-size:12px;'>",
	    	        	         "작성일:{regDtm}",
	    	        	         "</td>",
	    	        	         "</tr>",
	    	        	         "</table>",
	    	        	         "<br>",
	    	        	         "<table  style='width:100%;'>",
	    	        	         "<tr>",
	    	        	         "<td style='padding-left:5px;font-size:15px;'>",
	    	        	         "<textarea style='width:100%;height:100%;' rows=3 disabled>{memo}</textarea>",
	    	        	         "</td>",
	    	        	         "</tr>",
	    	        	         "</table>",
	    	        	         "</div>",
    	        	         '</tpl>',
    	        	         '<tpl if="notiType == 2"  >',
	    	        	         "<div style='width:100%;'>",
	    	        	         "<table  style='width:100%;'>",
	    	        	         "<colgroup>",
	    	        	         	"<col style='width:55%;'>",
	    	        	         	"<col style='width:45%;'>",
	    	        	         "</colgroup>",
	    	        	         "<tr>",
	    	        	         "<td style='padding-left:5px;font-size:15px;'>",
	    	        	         "<b>{regUserId} ({subNotiCnt})</b>",
	    	        	         "</td>",
	    	        	         "<td style='padding-left:5px;font-size:12px;'>",
	    	        	         "작성일:{regDtm}",
	    	        	         "</td>",
	    	        	         "</tr>",
	    	        	         "</table>",	
	    	        	         "<br>",	
	    	        	         "<table  style='width:100%;'>",
	    	        	         "<colgroup>",
	    	        	         	"<col style='width:80%;'>",
	    	        	         	"<col style='width:20%;'>",
	    	        	         "</colgroup>",
	    	        	         "<tr>",
	    	        	         //"<td style='padding-left:5px;font-size:15px;color:#000000;' >",
	    	        	         "<textarea style='width:100%;height:100%;' rows=3 disabled>{memo}</textarea>",
	    	        	         "</td>",
	    	        	         "</tr>",
	    	        	         "</table>",
	    	        	         /*"<table  style='width:100%;' border=1>",
		    	        	         "<tr>",
		    	        	         "<td style='padding-left:5px;font-size:15px;'>",
		    	        	         "테스트",
		    	        	         "</td>",
		    	        	         "</tr>",
	    	        	         "</table>",*/
	    	        	         "</div>",
    	        	         '</tpl>'
    	        	         ],
    	        	         items:[
    	        	                {
    	        	                	xtype:'list',
    	        	                	id:'subNotiListId',
    	        	                	store:"SubNotiStore",
    	        	                	useSimpleItems: false,
    	        	    	            variableHeights: true,
    	        	    	            infinite: true,
    	        	    	            disableSelection: true,
    	        	    	            allowDeselect: false,
    	        	    	            loadingText: 'Loading data...',
    	        	    	            //emptyText: '검색 Data가 없습니다.',
    	        	    	            plugins: [{
    	        	    	                xclass: 'Ext.plugin.ListPaging',
    	        	    	                autoPaging: false
    	        	    	            }],
    	        	    	            masked: false,
    	        	    	            mode: 'SINGLE',
    	        	    	            scrollable: {
    	        	    	                direction: 'vertical',
    	        	    	                directionLock: true
    	        	    	            },
    	        	                	
    	        	                	itemTpl:[
    	        	                	         "<div style='width:100%;'>",
    	        	                	         "<table  style='width:100%;'>",
    	        	                	         "<colgroup>",
    	     	    	        	         		"<col style='width:55%;'>",
    	     	    	        	         		"<col style='width:45%;'>",
    	     	    	        	         	"</colgroup>",
    	        	                	         "<tr>",
    	        	                	         "<td style='padding-left:8px;font-size:15px;'>",
    	        	                	         "<b>{regUserId}</b>    ",
    	        	                	         "</td>",
    	        	                	         "<td style='padding-left:5px;font-size:12px;'>",
    	        	    	        	         "작성일:{regDtm}",
    	        	    	        	         "</td>",
    	        	                	         "</tr>",
    	        	                	         "</table>",
    	        	                	         "<br>",	
    	        	    	        	         "<table  style='width:100%;'>",
    	        	    	        	         "<colgroup>",
    	        	    	        	         	"<col style='width:80%;'>",
    	        	    	        	         	"<col style='width:20%;'>",
    	        	    	        	         "</colgroup>",
    	        	                	         "<tr>",
    	        	                	         "<td style='padding-left:5px;font-size:15px;'>",
    	        	    	        	         "{memo}",
    	        	    	        	         "</td>",
    	        	                	         "</tr>",
    	        	                	         "</table>",
    	        	                	         "</div>"
    	        	                	 ],
    	        	                	 hidden:true,
    	        	                	 items:[
    	        	                	         {
    	        	                	          	xtype:"toolbar",
    	        	                	           	docked: 'bottom',
    	        	                	          	items: [
    	        	                	           	        { xtype: 'spacer' },
    	        	                	           	        { xtype: 'textfield',id:'subNotiTextId'},
    	        	                	           	        { 
    	        	                	           	          xtype: 'button',
    	        	                	       	        	  text:'보내기',
    	        	                	                	  ui:'decline',
    	        	                	                	  width:100,
    	        	                	                	  id:'sendSubNotiId'
    	        	                	                	 }
    	        	                	                    ]
    	        	                	          }
    	        	                    ]
    	        	                },
    	        	                /*{
    	        	                    xtype: 'button',
    	        	                    scrollDock: 'bottom',
    	        	                    docked: 'bottom',
    	        	                    text: 'Load More...'
    	        	                },*/
    	        	                {
    	        	        	       	xtype:"toolbar",
    	        	        	       	docked: 'bottom',
    	        	        	       	id:'createNotiViewId',
    	        	        	       	items: [
    	        	        	       	        { xtype: 'spacer' },
    	        	        	       	        { xtype: 'button',
    	        	        	   	        	  text:'등록',
    	        	        	              	  ui:'action',
    	        	        	                  width:100,
    	        	        	               	  id:'createNotiId'
    	        	        	                },
    	        	        	                { xtype: 'spacer' }
    	        	        	               ],
    	        	        	    }
    	        	         ],
    	        },
    	        {
    	        	title:'매장위치',
    	        	flex:3,
    	        	xtype:'map',
    	        	id:'mapInfoId',
    	        },
    	        {
    	        	title:'친구추천',
    	        	flex:4,
    	        	id:'kakaoLinkId',
    	        	xtype:"panel",
    	        	items:[
    	        	       {
    	        	        
    	        	        xtype: 'container',
						    layout: 'hbox',
						    items:[
							       {
							    	   xtype: 'textfield',
					                   top:'11%',
							    	   id : 'kakaoConId',
							    	   style:{
							    		   'font-size':'15px' 
							    	   },
							    	   value:'',
					                   label: '내용',
							       },
						           {
						        	   xtype:'panel',
						        	   docked:'right',
							       	   //ui:'decline',
			                    	   width:80,
			                    	   html:[
			     							'<a id="kakao-link-btn" href="javascript:clickKaKaoLinkProc();">'
			     							,'<img style="width:55%;height:55%;" src="http://dn.api1.kage.kakao.co.kr/14/dn/btqa9B90G1b/GESkkYjKCwJdYOkLvIBKZ0/o.jpg" />'
			     							,'</a>'
			         	        	      ],
						           }
							],
    	        	       },
    	        	],
    	        	
    	        	/*html:[
							'<a id="kakao-link-btn" href="javascript:;">'
							,'<img src="http://dn.api1.kage.kakao.co.kr/14/dn/btqa9B90G1b/GESkkYjKCwJdYOkLvIBKZ0/o.jpg" />'
							,'</a>'
    	        	      ]*/
    	        },

    	        ],
    },
});

function clickKaKaoLinkProc(){
	
	var kakaoCon =  Ext.getCmp("kakaoConId");
	Kakao.init('b665a8b38694e9abb0b5d86d81d43c52');
	
	Kakao.Link.createTalkLinkButton({
	      container: '#kakao-link-btn',
	      label: 'xxxxx 레스토랑에 초대합니다.',
	      image: {
	        src: 'http://61.40.29.188:8080/sencha_project/resources/useImage/list1.PNG',
	        width: '300',
	        height: '200'
	      },
	      webButton: {
	        text: kakaoCon.getValue(),
	        url: 'http://61.40.29.188:8080/sencha_project' // 앱 설정의 웹 플랫폼에 등록한 도메인의 URL이어야 합니다.
	      }
	});
	//Kakao.cleanup();
}


