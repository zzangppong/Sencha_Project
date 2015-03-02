Ext.define("MyApp.view.CameraPanel", {
	extend:"Ext.Panel",
	xtype:"cameraPanel",
	requires: ["Ext.Img"],
	config:{
		title: "ImageView",
		iconCls: "search",
		layout: "fit",
		//scrollable:"both",
		items:[
			{
				xtype:"toolbar",
				docked:"bottom",
				layout: "vbox",
				items: [
					{text:"사진",id:"cameraCaptureId", action:"cameraCapture"},
					{text:"엘범",id:"albumId", action:"album"},
					{text:"등록",id:"captureId"}
				]
			},
			{ xtype:"img", id:"imgId", style:"background-color:gray" }
		]
    }
});


//capture - 1
/*Ext.define('MyApp.view.CameraPanel', {
	 extend: 'Ext.Container', 
     xtype:'cameraPanel',
	 config: { 
         height: 120, 
         minHeight: 100, 
         style: 'overflow: hidden', 
         ui: '', 
         layout: { 
             align: 'center', 
             type: 'vbox' 
         }, 
         overflow: 'hidden', 
         tpl: [ 
             '<img src="resources/useImage/camera.PNG" width="160" />' 
         ], 
         items: [ 
             { 
                 xtype: 'component', 
                 html: '' 
             }, 
             { 
                 xtype: 'button', 
                 bottom: 5, 
                 itemId: 'mybutton', 
                 right: 5, 
                 iconCls: 'add', 
                 iconMask: true 
             } 
         ], 
         listeners: [ 
             { 
                 fn: 'onMybuttonTap', 
                 event: 'tap', 
                 delegate: '#mybutton' 
             } 
         ] 
     }, 
 
 
     onMybuttonTap: function(button, e, options) { 
        Ext.device.Camera.capture({ 
             source: 'camera', 
             destination: 'file', 
 

             success: function(url) { 
                 this.fireEvent('change', this, url); 
             }, 
             failure: function() { 
                 Ext.Msg.alert('Error', 'There was an error when acquiring the picture.'); 
             }, 
             scope: this 
         }); 
     }
});*/

//capture - 2
/*Ext.define('MyApp.view.CameraPanel', {
    extend: 'Ext.Component',
    xtype: 'cameraPanel',

    config: {
        captured: false,
        //width: 140,
        //height: 100,
        //cls: 'picture-capture',
        html: [
            '<div class="icon" style="text-align:center;"><i class="icon-camera"></i>사진 등록</div>',
            '<div style="text-align:center;">',
            	'<img style="width:100%;height:100%;" src="resources/useImage/camera.PNG" border="0">',
            	'<input type="file" capture="camera" accept="image/*" />', //Step 1
            '</div>',
        '</div>'
        ].join('')
    },
    items:[
           {
        	   xtype:"button",
        	   text:'등록',
           },
    ],

    initialize: function() {
        this.callParent(arguments);

        this.file = this.element.down('input[type=file]');
        this.img = this.element.down('img');

        this.file.on('change', this.setPicture, this); //Step 2

        //FIX for webkit
        window.URL = window.URL || window.webkitURL; //Step 3
    },

    setPicture: function(event) {
        var files = event.target.files;
        if (files.length === 1 && files[0].type.indexOf("image/") === 0) {
            this.img.setStyle('display', 'block');
            this.img.set({
                src: URL.createObjectURL(files[0]) //Step 4
            });
            this.setCaptured(true);
        }
        
        //alert(files[0]);
        //alert(URL.createObjectURL(files[0]));
    },

    reset: function() {
        this.img.setStyle('display', 'none');
        this.img.set({
            src: ''
        });
        this.setCaptured(false);
    },

    getImageDataUrl: function() { //Step 6
        var img = this.img.dom,
            imgCanvas = document.createElement("canvas"),
            imgContext = imgCanvas.getContext("2d");

        if (this.getCaptured()) {
            // Make sure canvas is as big as the picture
            imgCanvas.width = img.width;
            imgCanvas.height = img.height;

            // Draw image into canvas element
            imgContext.drawImage(img, 0, 0, img.width, img.height);

            // Return the image as a data URL
            return imgCanvas.toDataURL("image/png");
        }
    }
});*/
