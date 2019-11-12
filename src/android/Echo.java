package org.apache.cordova.plugin;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import com.ghgande.j2mod.modbus.facade;

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
		
		if (action.equals("test")){
		try {
			String connectionString = args.getString(0);
			ModbusTCPMaster master = new ModbusTCPMaster(connectionString);
			master.connect();
			callbackContext.success("Connected ..");
		}
		catch (Exception e) {
			callbackContext.error("Cannot connect " + e.getMessage());
		}
		return true;
		}

		
        return false;
    }
}