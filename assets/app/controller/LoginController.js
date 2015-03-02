Ext.define('MyApp.controller.LoginController', {
	extend : 'Ext.app.Controller',
	config : {
		refs : {
			loginView : {
				selector : "#loginView",
				xtype : "loginView",
				autoCreate : true
			},
			userId : {
				selector : "#userId",
				xtype : "textfield",
				autoCreate : true
			},
			password : {
				selector : "#password",
				xtype : "passwordfield",
				autoCreate : true
			},
			loginApplyView : {
				selector : "#loginApplyView",
				xtype : "loginApplyView",
				autoCreate : true
			},
			userId:'#userId',
			userPw:'#userPw',
			userName:'#userName',
			userBirthDay:'#userBirthDay',
			genderType:'#genderType',
			email:'#email',
			phone:'#phone',
			loginKakakoId:'#loginKakakoId',
		},
		control : {
			// 로그인버튼
			"#loginProcId" : {
				tap : "loginProc",
				
			},
			"#loginApplyId" : {
				tap : "loginApplyProc",
				
			},
			"#userApplyId" : {
				tap : "userApplyProc",
				
			},
			"#cancelId" : {
				tap : "cancelProc",
				
			},
			"#loginKakakoId" : {
				tap : "kakaoLoginProc",
				
			},
			"#loginCheckid" : {
				tap : "loginCheckProc",
				
			},
        	//로그인버튼
        	"#loginId":{
        		tap:"loginBtn"
        	},
		}
	},
	loginProc : function() {
		//프로그래스바
		Ext.Viewport.setMasked({
			xtype:'loadmask',
			message:'로딩중...'
		});
		var userId = this.getUserId();
		var password = this.getPassword();
		var mainController = this.getApplication().getController("MainController");
		
		
		//로그인체크
		Ext.data.JsonP.request({
			url:"http://61.40.29.188:8080/sencha_project/data/userInfo.jsp",
			params:{
						userId:userId.getValue()
						,password:password.getValue()
					},
			
			callbackKey:"serverKey",
			success:function(result){
				Ext.Viewport.setMasked(false);
				//page이동처리 - 로그인 정상
				if(result.data == 1){
					//로그인정보 session 처리 
					if(window.sessionStorage){
						window.sessionStorage.setItem("userId",userId.getValue());
						window.sessionStorage.setItem("password",password.getValue());
					}else{
						Ext.Msg.alert("알림","Session Storage 미지원");
					}
					
					//메인화면 전환
					var mainController = MyApp.app.getApplication().getController("MainController");
			    	//tabMenu display
			    	var tabMenu = mainController.getTabMenu();
			    	var foodStore = Ext.getStore("FoodListStore");
			    	foodStore.load();
			    	Ext.Viewport.setActiveItem(tabMenu);
			    	//headerBar 의 back 표시
			    	var naviBar = mainController.getNaviBar();
			    	
			    	var backId = naviBar.child('#backId');
			    	backId.show();
			    	//headerBar 의 mainId 비표시
			    	var mainId = naviBar.child('#mainId');
			    	mainId.hide();
			      	
			    	var logInOutId = naviBar.child('#logInOutId');
			    	logInOutId.show();
			    	
			    	var loginId = naviBar.child('#loginId');
			    	loginId.hide();
			    	
			    	var createFoodId =  Ext.getCmp("createFoodViewId");
			    	createFoodId.show();
			    	
				//아이디 오류
				}else if(result.data == 2){
					Ext.Msg.alert("알림","아이디 오류  입니다.");
				//비밀번호오류
				}else if(result.data == 3){
					Ext.Msg.alert("알림","비밀번호 오류 입니다.");
				}
			},
			failure:function(result){
				Ext.Viewport.setMasked(false);
				Ext.Msg.alert("알림","서버 접속 또는 서버 실행 오류");
			}
		});
		
	},
	loginApplyProc : function() {
		var loginApplyView = this.getLoginApplyView();
		Ext.Viewport.setActiveItem(loginApplyView);
		//초기화
		var userId =  Ext.getCmp("userId");
		var userPw =  Ext.getCmp("userPw");
		var userPwCheck =  Ext.getCmp("userPwCheck");
		userId.setValue("");
		userPw.setValue("");
		userPwCheck.setValue("");
		this.getUserName().setValue("");
		this.getUserBirthDay().setValue(new Date());
		this.getEmail().setValue("");
		this.getPhone().setValue("");
		
	},
	kakaoLoginProc : function() {
		Kakao.init('b665a8b38694e9abb0b5d86d81d43c52');
		// 로그인 성공시 API를 호출합니다.
		Kakao.Auth.login({
			success:function(obj){
				var accessToken = Kakao.Auth.getAccessToken();
				var refreshToken = Kakao.Auth.getRefreshToken();
				if(refreshToken){
					Kakao.API.request({
						url: '/v1/user/me',
						success: function(res) {
							//alert(JSON.stringify(res));
							var str = JSON.stringify(res);
							//document.write(str);

							var contact = JSON.parse(str);
							//var contact2 = JSON.parse(contact.properties);
							var temp = eval(contact);
							//alert(temp.properties.nickname);
							//alert(temp.properties.thumbnail_image);

							//$('#nickId').html(temp.properties.nickname);
							//$('#imageId').attr("src",temp.properties.thumbnail_image);
							
							//메인화면 전환
							var mainController = MyApp.app.getApplication().getController("MainController");
					    	//tabMenu display
					    	var tabMenu = mainController.getTabMenu();
					    	var foodStore = Ext.getStore("FoodListStore");
					    	foodStore.load();
					    	Ext.Viewport.setActiveItem(tabMenu);
					    	//headerBar 의 back 표시
					    	var naviBar = mainController.getNaviBar();
					    	
					    	var backId = naviBar.child('#backId');
					    	backId.show();
					    	//headerBar 의 mainId 비표시
					    	var mainId = naviBar.child('#mainId');
					    	mainId.hide();
					      	
					    	var logInOutId = naviBar.child('#logInOutId');
					    	logInOutId.show();
					    	
					    	var loginId = naviBar.child('#loginId');
					    	loginId.hide();
					    	
					    	var createFoodId =  Ext.getCmp("createFoodViewId");
					    	createFoodId.show();
						},
						fail: function(error) {
							alert(JSON.stringify(error))
						}
					});
				}
			}
		});
		Kakao.cleanup();
		
		
	},
	userApplyProc : function() {
		var userId =  Ext.getCmp("userId");
		var userPw =  Ext.getCmp("userPw");
		var userPwCheck =  Ext.getCmp("userPwCheck");
		var userName =  Ext.getCmp("userName");
		var userBirthDay =  Ext.getCmp("userBirthDay");
        //radio 값 가져오기
		var genders = Ext.ComponentQuery.query('radiofield[name=gender]');
		var email =  Ext.getCmp("email");
		var phone =  Ext.getCmp("phone");
		
		//사용자ID
		if(userId.getValue() == ''){
			Ext.Msg.alert("알림","ID를 입력해 주십시오.");
			return;
		}
		//비빌번호체크
		if(userPw.getValue() != userPwCheck.getValue()){
			Ext.Msg.alert("알림","비밀번호를 재확인 해주십시오.");
			return;
		}
		//사용자명
		if(userName.getValue() == ''){
			Ext.Msg.alert("알림","이름을 입력해 주십시오.");
			return;
		}
		//email
		if(email.getValue() == ''){
			Ext.Msg.alert("알림","Email을 입력해 주십시오.");
			return;
		}
		//연락처
		if(phone.getValue() == ''){
			Ext.Msg.alert("알림","련락처를 입력해 주십시오.");
			return;
		}
		
		//ajax 통신
		Ext.Viewport.setMasked({
			xtype:'loadmask',
			message:'로딩중...'
		});
		
		
		//로그인체크
		Ext.data.JsonP.request({
			url:"http://61.40.29.188:8080/sencha_project/data/createUserProc.jsp",
			params:{
						userId:userId.getValue()
						,userPw:userPw.getValue()
						,userName:userName.getValue()
						,userBirthDay:Ext.util.Format.date(userBirthDay.getValue(),"Y-d-m")
						,genderType:genders[0].getGroupValue()
						,email:email.getValue()
						,phone:phone.getValue()
					},
			
			callbackKey:"serverKey",
			success:function(result){
				Ext.Viewport.setMasked(false);
				//page이동처리 - 로그인 정상
				if(result.data == 1){
					//로그인정보 session 처리 
					if(window.sessionStorage){
						window.sessionStorage.setItem("userId",userId.getValue());
						window.sessionStorage.setItem("password",userPw.getValue());
						window.sessionStorage.setItem("userName",userName.getValue());
						
						//메인화면 전환
						var mainController = MyApp.app.getApplication().getController("MainController");
				    	//tabMenu display
				    	var tabMenu = mainController.getTabMenu();
				    	var foodStore = Ext.getStore("FoodListStore");
				    	foodStore.load();
				    	Ext.Viewport.setActiveItem(tabMenu);
				    	//headerBar 의 back 표시
				    	var naviBar = mainController.getNaviBar();
				    	
				    	var backId = naviBar.child('#backId');
				    	backId.show();
				    	//headerBar 의 mainId 비표시
				    	var mainId = naviBar.child('#mainId');
				    	mainId.hide();
				      	
				    	var logInOutId = naviBar.child('#logInOutId');
				    	logInOutId.show();
				    	
				    	var loginId = naviBar.child('#loginId');
				    	loginId.hide();
				    	
				    	var createFoodId =  Ext.getCmp("createFoodViewId");
				    	createFoodId.show();
						
					}else{
						Ext.Msg.alert("알림","Session Storage 미지원");
					}
				}else{
					
				}
			},
			failure:function(result){
				Ext.Viewport.setMasked(false);
				Ext.Msg.alert("알림","서버 접속 또는 서버 실행 오류");
			}
		});
		
	},
	cancelProc : function() {
		var loginView = this.getLoginView();
		Ext.Viewport.setActiveItem(loginView);
	},
	loginCheckProc : function() {
		var userId =  Ext.getCmp("userId");
		if(userId.getValue() == ""){
			Ext.Msg.alert("알림","ID를 입력해 주십시오.");
			return;
		}
		
		//프로그래스바
		Ext.Viewport.setMasked({
			xtype:'loadmask',
			message:'로딩중...'
		});
		
		
		//로그인체크
		Ext.data.JsonP.request({
			url:"http://61.40.29.188:8080/sencha_project/data/loginCheck.jsp",
			params:{
						userId:userId.getValue()
					},
			
			callbackKey:"serverKey",
			success:function(result){
				Ext.Viewport.setMasked(false);
				//아이디 오류
				if(result.data == 1){
					Ext.Msg.alert("알림","중복ID가 존재합니다.");
				//비밀번호오류
				}else{
					Ext.Msg.alert("알림","사용할수 있는 ID입니다.");
				}
			},
			failure:function(result){
				Ext.Viewport.setMasked(false);
				Ext.Msg.alert("알림","서버 접속 또는 서버 실행 오류");
			}
		});
	},
});