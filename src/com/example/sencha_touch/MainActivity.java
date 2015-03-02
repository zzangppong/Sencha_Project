package com.example.sencha_touch;

import org.apache.cordova.DroidGap;

import android.os.Bundle;
import android.view.WindowManager;

public class MainActivity extends DroidGap {
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
    	getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
    	super.onCreate(savedInstanceState);
        super.loadUrl("file:///android_asset/index.html");
    }
}
