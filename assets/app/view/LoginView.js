Ext.define('MyApp.view.LoginView', {
    extend: 'Ext.Panel',
    xtype:'loginView',
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
	    },
    	defaults: {
	        styleHtmlContent: true
	    },
	    items: [
		        {
		            xtype: 'fieldset',
		            title: '로그인',
		            instructions:"회원 가입시 각종 이벤트 및 포인트 혜택이 있습니다.",
		            items: [
		                {
		                    xtype: 'textfield',
		                    name : 'userId',
		                    id : 'userId',
		                    value:'',
		                    label: '아이디',
		                },
		                {
		                    xtype: 'passwordfield',
		                    id : 'password',
		                    name : 'password',
		                    value:'',
		                    label: '비밀번호'
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
			                    	   	text:'로그인',
			                    	   	ui:'action',
			                    	   	width:100,
			                    	   	id:'loginProcId'
			                       },
			                       {
			   		               		xtype: 'spacer',
			   		               		width:20
			                       },
			                       {
			                    	   	xtype: 'button',
			                    	   	text:'회원가입',
			                    	   	ui:'action',
			                    	   	width:100,
			                    	   	id:'loginApplyId'
			                       },
			                ],
		                    
		                },
		                {
		                	xtype: 'spacer',
		                	height:20
		                },
		                {
                    	   	id:'loginKakakoId',
                    	   	xtype:'image',
                    	   	html:'<a id="kakao-login-btn"><img src="resources/useImage/kakao_account_login_btn_medium_narrow_ov.png"></a>',
                       },
		            ]

		        }
		    ],
    }
});
