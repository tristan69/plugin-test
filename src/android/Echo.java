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
		
		if (action.equals("testtest")){
		try {
			
			public static void main(String[] args) {
				protected static ModbusTCPMaster master;
				try {
					master = new ModbusTCPMaster("1.2.3.4");
					master.connect();
					logger.info("Read coil 1 status [1.2.3.4:502] - %b", master.readCoils(0, 1).getBit(0));
				}
				catch (Exception e) {
					logger.error("Cannot initialise tests - %s", e.getMessage());
				}
				finally {
					if (master != null) {
						master.disconnect();
					}
				}
			}
				
		} catch (JSONException e){
			callbackContext.error("Failed to parse parameters");
		}
		return true;
		}
		
        return false;
    }
}