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
			
		ModbusTCPMaster master;
		try {
			master = new ModbusTCPMaster("", "", "");
			master.connect();
		}
		catch (Exception e) {
			logger.error("Cannot connect to slave - %s", e.getMessage());
		}				
			
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