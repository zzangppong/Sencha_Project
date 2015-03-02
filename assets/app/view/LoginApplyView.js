Ext.define('MyApp.view.LoginApplyView', {
    extend: 'Ext.form.Panel',
    xtype:'loginApplyView',
    requires: [
        'Ext.Panel',
        'Ext.Button',
    ],
    config: {
    	fullscreen: true,
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
		            title: '회원가입',
		            items: [
						{
							xtype: 'container',
						    layout: 'hbox',
							items:[
							       {
							    	   xtype: 'textfield',
					                    id : 'userId',
					                    value:'',
					                    label: '아이디',
					                    flex:3,
					                    labelWidth:'45%'
							       },
						           {
						        	   xtype:'button',
						        	   id:'loginCheckid',
							       	   ui:'decline',
			                    	   width:80,
			                    	   text:'중복체크',
			                    	   flex:1,
			                    	   margin:7
						           }
							]
						},
		                {
		                    xtype: 'passwordfield',
		                    id : 'userPw',
		                    value:'',
		                    label: '비밀번호'
		                },
		                {
		                	xtype: 'passwordfield',
		                	id : 'userPwCheck',
		                	value:'',
		                	label: '비밀번호확인'
		                },
		                {
		                	xtype: 'textfield',
		                	id : 'userName',
		                	value:'',
		                	label: '이름'
		                },
		                {
		                    xtype: 'datepickerfield',
		                    label: '생년월일',
		                    id: 'userBirthDay',
		                    value: new Date()
		                },
		                {
                        	id:'genderType',
                        	xtype: 'selectfield',
                            label: '성별',
                            options: [
                                {text: '남',  value: '1'},
                                {text: '여',  value: '2'},
                            ]
                        },
		                /*{
		                	xtype: 'panel',
		                	id:'genderType',
		                	items:[
		                	        {
		                	            xtype: 'radiofield',
		                	            value: '1',
		                	            name:'gender',
		                	            label: '남',
		                	            checked: true
		                	        },
		                	        {
		                	            xtype: 'radiofield',
		                	            value: '2',
		                	            name:'gender',
		                	            label: '여'
		                	        },
		                	]
		                		
		                },*/
		                {
		                	xtype: 'emailfield',
		                	label: 'Email',
		                	id: 'email',
		                },
		                {
		                	xtype: 'numberfield',
		                	label: '연락처',
		                	id: 'phone',
		                },
		                /*{
		                    xtype: 'toolbar',
		                    docked: 'bottom',
		                    items: [
		                        {
		                            text: 'getValue',
		                            handler: function() {
		                                var datePickerField = Ext.ComponentQuery.query('datepickerfield')[0];
		                                Ext.Msg.alert(null, datePickerField.getValue());
		                            }
		                        },
		                        { xtype: 'spacer' },
		                        {
		                            text: 'getFormattedValue',
		                            handler: function() {
		                                var datePickerField = Ext.ComponentQuery.query('datepickerfield')[0];
		                                Ext.Msg.alert(null, datePickerField.getFormattedValue());
		                            }
		                        }
		                    ]
		                },*/
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
			                    	   	text:'완료',
			                    	   	ui:'action',
			                    	   	width:100,
			                    	   	id:'userApplyId'
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
			                    	   	id:'cancelId'
			                       },
			                ],
		                    
		                },
		                {
		                    xtype: 'spacer',
		                    height:20
		                },
		            ]

		        }
		    ]
    }
});
