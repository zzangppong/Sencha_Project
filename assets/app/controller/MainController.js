Ext.define('MyApp.controller.MainController', {
    extend: 'Ext.app.Controller',
    requires: [
               'Ext.device.Camera',
               'Ext.device.Connection'
           ],
    config: {
    	refs:{
    		naviBar:{
    			selector:"#naviBar",
    			xtype:"naviBar",
    			autoCreate:true
    		},
    		tabMenu:{
    			selector:"#tabMenu",
    			xtype:"tabMenu",
    			autoCreate:true
    		},
    		subNotiListId:'#notiListId',
    		main:{
    			selector:"#main",
    			xtype:"main",
    			autoCreate:true
    		},
/*    		loginView:{
    			selector:"#loginView",
    			xtype:"loginView",
    			autoCreate:true
    		},
*/    		foodListView:{
    			selector:"#foodListView",
    			xtype:"foodListView",
    			autoCreate:true
    		},
    		subNotiListView:{
    			selector:"#subNotiListId",
    			xtype:"list",
    			autoCreate:true
    		},
    		cameraPanelView:{
    			selector:"#CameraPanel",
    			xtype:"cameraPanel",
    			autoCreate:true
    		},
    		mapView:{
    			selector:"#mapInfoId",
    			xtype:"map",
    			autoCreate:true
    		},
    		createNotiView:{
    			selector:"createNotiView",
    			xtype:"createNotiView",
    			autoCreate:true
    		},
    		notiTypeId:'#notiTypeId',
    		notiMemoId:'#notiMemoId',
    		createNotiProcId:'#createNotiProcId',
    		notiCancelId:'#notiCancelId',
    		img: "#imgId",
    		
    	},
        control:{
        	//로그인버튼
        	"#loginId":{
        		tap:"loginBtn"
        	},
        	//main
        	"#mainId":{
        		tap:"mainBtn"
        	},
        	//back 버튼
        	"#backId":{
        		tap:"mainBtn"
        	},
        	"#foodListId":{
        		activate:"foodListProc",
        	},
        	"#notiListId" : {
        		activate : "notiListProc",
				
			},
			"subNotiListId" : {
				itemtap: "subNotiListProc",
				
			},
			"#sendSubNotiId" : {
				tap: "sendSubNotiCreate",
				
			},
			"#createFoodId" : {
				tap: "createFoodProc",
				
			},
			"#mapInfoId" : {
				activate: "mapProc",
				
			},
			"#logInOutId" : {
				tap: "logInOutProc",
				
			},
			"#createNotiId" : {
				tap: "createNotiProc",
				
			},
			/*"notiItemId" : {
				itemtap : "notiItemProc",
				
			},*/
        	/*"#kakaoLinkId":{
        		tap:"kakaoLinkProc"
        	},*/
			"#createNotiProcId" : {
				tap : "notiApply",
				
			},
			"#notiCancelId" : {
				tap : "notiCancel",
				
			},
			"#cameraCaptureId": {
				tap: "onCameraCaptureTap" 
			},
			"#albumId": {
				tap: "onAlbumTap" 
			},
			"#captureId": {
				tap: "sendPhoto" 
			}
        }
    },
    showMain:function(){
    	var naviBar = this.getNaviBar();
    	//headerBar 의 backId 버튼에 접근
    	var backId = naviBar.child('#backId');
    	backId.hide();
    	var logInOutId = naviBar.child('#logInOutId');
    	logInOutId.hide();
    	Ext.Viewport.add(naviBar);
    	
    	var main = this.getMain();
    	Ext.Viewport.add(main);
    },
    onBtnInfo:function(){
    
    },
    loginBtn:function(){
    	var loginController = this.getApplication().getController("LoginController");
		var loginView = loginController.getLoginView();
		
		//user id 와 pw 초기화
		var userId = loginController.getUserId();
		var password = loginController.getPassword();
		userId.setValue("");
		password.setValue("");
		
		Ext.Viewport.setActiveItem(loginView);
    	
    	//headerBar 의 back 표시
    	var naviBar = this.getNaviBar();
    	var backId = naviBar.child('#backId');
    	backId.show();    	
    	var mainId = naviBar.child('#mainId');
    	mainId.hide();
    },
    mainBtn:function(){
    	//Ext.Viewport.removeAll();
    	//tabMenu display
    	var tabMenu = this.getTabMenu();
    	var foodStore = Ext.getStore("FoodListStore");
    	foodStore.loadPage(1);
    	foodStore.load();
    	//list food
    	Ext.Viewport.setActiveItem(tabMenu);
    	
    	//headerBar 의 back 표시
    	var naviBar = this.getNaviBar();
    	var backId = naviBar.child('#backId');
    	backId.show();
    	
    	//headerBar 의 mainId 비표시
    	var mainId = naviBar.child('#mainId');
    	mainId.hide();
    	
    	var createFoodId =  Ext.getCmp("createFoodViewId");
    	createFoodId.show();
    	
    },
    createNotiProc:function(){
    	//var CreateNotiView =  Ext.getCmp("CreateNotiView");
    	var createNotiView = this.getCreateNotiView();
    	Ext.Viewport.setActiveItem(createNotiView);
    },
    notiApply:function(){
    	var userSessionId = window.sessionStorage.getItem("userId");
    	if(userSessionId == null || userSessionId == ""){
    		Ext.Msg.alert("알림","로그인 또는 회원가입을 해야합니다.");
    		
    		//입력 초기화
			this.getNotiTypeId().setValue(2);
			this.getNotiMemoId().setValue("")
			
    		return;
    	}
    	var notiTypeId = this.getNotiTypeId();
    	var notiMemoId = this.getNotiMemoId();
    	var fileNm = "";
    	
    	Ext.Viewport.setMasked({
    		xtype:'loadmask',
    		message:'로딩중...'
    	});
    	
    	Ext.data.JsonP.request({
    		url:"http://61.40.29.188:8080/sencha_project/data/createNoti.jsp",
    		params:{
		    			notiType:notiTypeId.getValue(),
		    			memo:notiMemoId.getValue(),
		    			fileNm:fileNm,
		    			regUserId:userSessionId
    			},
    		callbackKey:"serverKey",
    		success:function(result){
    			Ext.Viewport.setMasked(false);
    			
    			//입력 초기화
    			notiTypeId.setValue(1);
    			notiMemoId.setValue("")
    			
    			//reload
    			var NotiListStore = Ext.getStore("NotiListStore");
    			NotiListStore.load();
    			
    			var mainController = MyApp.app.getApplication().getController("MainController");
    			mainController.notiListProc();
    		},
    		failure:function(result){
    			Ext.Viewport.setMasked(false);
    			Ext.Msg.alert("알림","서버 접속 또는 서버 실행 오류");
    		}
    	});
    	
    },
    notiCancel:function(){
    	var tabMenu = this.getTabMenu();
    	Ext.Viewport.setActiveItem(tabMenu);
    	//var notiListCmp =  Ext.getCmp("notiListId");
    	var NotiListStore = Ext.getStore("NotiListStore");
    	//page 초기화
    	NotiListStore.loadPage(1);
    	
    	NotiListStore.load();
      	var createFoodId =  Ext.getCmp("createFoodViewId");
    	createFoodId.hide();
    },
    notiListProc:function(){
    	var tabMenu = this.getTabMenu();
    	Ext.Viewport.setActiveItem(tabMenu);
    	//var notiListCmp =  Ext.getCmp("notiListId");
    	var NotiListStore = Ext.getStore("NotiListStore");
    	//page 초기화
    	NotiListStore.loadPage(1);
    	
    	NotiListStore.load();
      	var createFoodId =  Ext.getCmp("createFoodViewId");
    	createFoodId.hide();
    	
    	
    },
    foodListProc:function(){
    	var createFoodId =  Ext.getCmp("createFoodViewId");
    	createFoodId.show();
    },
    subNotiListProc:function(list,index,item,e){
    	var subNotiListCmpt =  Ext.getCmp("subNotiListId");
    	
    	var notiStore = Ext.getStore("NotiListStore");
    	var notiModel = notiStore.getAt(index);
    	var subNotiStore = Ext.getStore("SubNotiStore");
    	if(notiModel.data.notiType != 1){
    		subNotiStore.setParams({notiSeq:notiModel.data.notiSeq});
    		subNotiStore.loadPage(1);
    		subNotiStore.load();
    		//리스트 시퀀스를 세션정보에 저장
    		var notiSeqId = window.sessionStorage.setItem("notiSeqId",notiModel.data.notiSeq);
    		Ext.Viewport.setActiveItem(subNotiListCmpt);
    	}
    	
    },
    sendSubNotiCreate:function(){
    	var userSessionId = window.sessionStorage.getItem("userId");
    	if(userSessionId == null || userSessionId == ""){
    		Ext.Msg.alert("알림","로그인 또는 회원가입을 해야합니다.");
    		return;
    	}
    	
    	var subNotiTextId =  Ext.getCmp("subNotiTextId");
    	var subNotiStore = Ext.getStore("SubNotiStore");
    	
    	var notiSeqId = window.sessionStorage.getItem("notiSeqId");
    	
    	//통신
    	Ext.Viewport.setMasked({
    		xtype:'loadmask',
    		message:'로딩중...'
    	});
    	
    	Ext.data.JsonP.request({
    		url:"http://61.40.29.188:8080/sencha_project/data/createSubNoti.jsp",
    		params:{
		    			notiSeq:notiSeqId,
		    			memo:subNotiTextId.getValue(),
		    			userId:userSessionId
    			},
    		callbackKey:"serverKey",
    		success:function(result){
    			Ext.Viewport.setMasked(false);
    			
    			//입력 초기화
    			subNotiTextId.setValue("");
    			
    			//reload
    	    	subNotiStore.setParams({notiSeq:notiSeqId});
    	    	subNotiStore.load();
    		},
    		failure:function(result){
    			Ext.Viewport.setMasked(false);
    			Ext.Msg.alert("알림","서버 접속 또는 서버 실행 오류");
    		}
    	});
    	
    },
    createFoodProc:function(){
    	var userId = window.sessionStorage.getItem("userId");
    	var tabMenu = this.getTabMenu();
    	
    	var cameraPanelView = this.getCameraPanelView();
    	//cameraPanelView.reset();
    	//var foodListView = this.getFoodListView();
    	//foodListView.setActiveItem(cameraPanelView);
    	
    	Ext.Viewport.setActiveItem(cameraPanelView);
    	
/*    	if(userId == null || userId == ""){
    		Ext.Msg.alert("알림","로그인 또는 회원가입을 해야합니다.");
    		return;
    	}else{
    		Ext.Msg.alert("알림","준비 중입니다.");
    		return;
    	}*/
    	
    	/*Ext.device.Camera.capture({
    	    success: function(image) {
    	          //handle the image
    	    },
    	    quality: 75,
    	    width: 300,
    	    height: 300,
    	    destination: 'data',
    	    source: 'camera',
    	    encoding: 'jpg'
    	});*/
    	/*Ext.device.Camera.capture({
    	    source: 'camera',
    	    destination: 'file',

    	    success: function(url) {
    	        //show the newly captured image in a full screen Ext.Img component:
    	        Ext.create('Ext.Img', {
    	            src: url,
    	            fullscreen: true
    	        });
    	    }
    	});*/
    	/*Ext.device.Camera.capture({
    	    success: function(image) {
    	        imageView.setSrc(image);
    	    },
    	    quality: 75,
    	    width: 200,
    	    height: 200,
    	    destination: 'data'
    	});*/
    	
    	
    	/*  navigator.camera.getPicture(onPhotoDataSuccess, onFail,{
    		quality:50,
    		sourceType:navigator.camera.PictureSourceType.CAMERA,
    		destinationType:navigator.camera.DestinationType.DATA_URL,
    	});*/
    },
    mapProc:function(){
    	//var mapComponent =  Ext.getCmp("#mapInfoId");
    	var mapComponent =  this.getMapView();
    	
    	
    	//if(navigator.geolocation){
    	//	navigator.geolocation.getCurrentPosition(
    	//			function (position){
    					//장비위도 경도 얻기
    					//37.553136, 126.979396
    					var lat = 37.553136;
    					var lng = 126.979396;
    					var latlng = new google.maps.LatLng(lat,lng);
    					var infowindow = new google.maps.InfoWindow({
    						content: "<span>여길까요?</span>"
    					});
    					
    					//장비 위치를 지도의 중앙으로 설정
    					var googleMap = mapComponent.getMap();
    					googleMap.setZoom(15);
    					googleMap.setCenter(latlng);
    					//장비의 위치에 마커 표시
    					var marker = new google.maps.Marker({
    						position:latlng,
    						map:googleMap,
    					});
    					
    					infowindow.open(googleMap,marker);
    	//			},
    	//			function(error){
    	//				Ext.Msg.alert(error.message);
    	//			}
    	//	);
    	//}else{
    	//	Ext.Msg.alert("이부라우저는 Geolocation을 지원하지 않습니다.");
    	//}
    	
    },
    
    /*mapProc:function(){
    	var mapComponent = Ext.create("Ext.Map");
    	if(navigator.geolocation){
    		navigator.geolocation.getCurrentPosition(
    				function (position){
    					//장비위도 경도 얻기
    					//37.553136, 126.979396
    					var lat = 37.553136;
    					var lng = 126.979396;
    					var latlng = new google.maps.LatLng(lat,lng);
    					var infowindow = new google.maps.InfoWindow({
    						content: "<span>여길까요?</span>"
    					});
    					
    					//장비 위치를 지도의 중앙으로 설정
    					var googleMap = mapComponent.getMap();
    					googleMap.setZoom(16);
    					googleMap.setCenter(latlng);
    					
    					
    					//장비의 위치에 마커 표시
    					var marker = new google.maps.Marker({
    						position:latlng,
    						map:googleMap,
    					});
    					
    					infowindow.open(googleMap,marker);
    				},
    				function(error){
    					Ext.Msg.alert(error.message);
    				}
    		);
    	}else{
    		Ext.Msg.alert("이부라우저는 Geolocation을 지원하지 않습니다.");
    	}
    	//Ext.Viewport.add(mapComponent);
    	Ext.Viewport.setActiveItem(mapComponent);
    },*/
    logInOutProc:function(){
    	var naviBar = this.getNaviBar();
    	
    	var logInOutId = naviBar.child('#logInOutId');
    	logInOutId.hide();
    	
    	var loginId = naviBar.child('#loginId');
    	loginId.show();
    	
    	//session초기화
    	window.sessionStorage.clear();
    	
    	//kakao 로그아웃
    	//Kakao.Auth.logout();
    	Kakao.cleanup();
    	
    	window.close();
    },
    onCameraCaptureTap: function() {
    	navigator.camera.getPicture(this.onPhotoDataSuccess, this.onFail, {
			quality: 50, 
			sourceType: navigator.camera.PictureSourceType.CAMERA,
			destinationType: navigator.camera.DestinationType.DATA_URL,
		});
	},
	onPhotoDataSuccess:function(imageData) {
		var img = MyApp.app.getApplication().getController("MainController").getImg();
		img.setStyle("block");
		//img.setStyle("width:60px;height:60px;");
		img.setSrc("data:image/jpeg;base64," + imageData);
	},
	onPhotoURISuccess:function(imageURI) {
    	var img = MyApp.app.getApplication().getController("MainController").getImg();
    	img.setStyle("block");
		img.setSrc(imageURI);
	},
	onFail:function(message) {
		alert('Failed because: ' + message);
	},
	sendPhoto:function() {
		var img = MyApp.app.getApplication().getController("MainController").getImg();
		var imageURI = img.getSrc();
		
		var options = new FileUploadOptions();
		options.fileKey="file";
		options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
		options.mimeType="image/jpeg";
		var params = new Object();
		params.param1 = "value1";
		params.param2 = "value2";
		options.params = params;
		var fileTransfer = new FileTransfer();
		fileTransfer.upload(
			imageURI, 
			"http://61.40.29.188:8080/sencha_project/data/upload.jsp", 
			function(fileUploadResult) {
				alert("Code = " + fileUploadResult.responseCode + "\n" + 
					  "Response = " + fileUploadResult.response + "\n" +
					  "Sent = " + fileUploadResult.bytesSent);
			}, 
			function(error) {
				alert("Error Code = " + error.code);
			}, 
			options
		);
    },
	onAlbumTap: function() {
		navigator.camera.getPicture(this.onPhotoURISuccess, this.onFail, { 
			quality: 50, 
			sourceType: navigator.camera.PictureSourceType.SAVEDPHOTOALBUM, 
			destinationType: navigator.camera.DestinationType.FILE_URI
		});

/*		navigator.camera.getPicture(
		
			function(imageURI){
				var img = this.getImg();
				img.setSrc(url);
			},
			function(message){
				Ext.Msg.alert("Failed because: " + message);
			},
		);*/
		
		/*var img = this.getImg();
		Ext.device.Camera.capture(
			{
				source: "album",
				destination: 'file',
				success: function(url) {
					img.setSrc(url);
				}
			}
		);*/
	}
    /*kakaoLinkProc : function() {
		alert(1212);
    	var kakaoCon =  Ext.getCmp("kakaoConId");
    	Kakao.init('b665a8b38694e9abb0b5d86d81d43c52');
		
    	Kakao.Link.createTalkLinkButton({
		      container: '#kakao-link-btn',
		      label: 'xxxxx 레스토랑에 초대합니다.',
		      image: {
		        src: 'http://dn.api1.kage.kakao.co.kr/14/dn/btqaWmFftyx/tBbQPH764Maw2R6IBhXd6K/o.jpg',
		        width: '300',
		        height: '200'
		      },
		      webButton: {
		        text: kakaoCon,
		        url: 'http://61.40.29.188:8080/sencha_project' // 앱 설정의 웹 플랫폼에 등록한 도메인의 URL이어야 합니다.
		      }
		});
		Kakao.cleanup();
	},*/
});