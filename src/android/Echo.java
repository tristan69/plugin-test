package org.apache.cordova.plugin;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class Echo extends CordovaPlugin {

@Override
public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
		if (action.equals("echo")){
		try {
			String responseText = "Echo world, " + args.getString(0);
			callbackContext.success(responseText);
		} catch (JSONException e){
			callbackContext.error("Failed to parse parameters");
		}
		return true;
		}
        return false;
    }
}

/*
private void echo(String message, CallbackContext callbackContext) {
    if (message != null && message.length() > 0) {
        callbackContext.success(message);
    } else {
        callbackContext.error("Expected one non-empty string argument.");
    }
}

private void show(String msg, CallbackContext callbackContext) {
	if (msg == null || msg.length() == 0) {
		callbackContext.error("Empty message!");
	} else {
		Toast.makeText(webView.getContext(), msg, Toast.LENGTH_LONG).show();
		callbackContext.success(msg);
	}
}

*/