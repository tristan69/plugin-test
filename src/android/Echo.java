package org.apache.cordova.plugin;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import com.ghgande.j2mod.modbus.*;
import com.ghgande.j2mod.modbus.facade.*;
import com.ghgande.j2mod.modbus.io.*;
import com.ghgande.j2mod.modbus.msg.*;
import com.ghgande.j2mod.modbus.net.*;
import com.ghgande.j2mod.modbus.procimg.*;
import com.ghgande.j2mod.modbus.slave.*;
import com.ghgande.j2mod.modbus.util.*;

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
			ModbusTCPMaster master;
			String responseText = "Test ok, ";
			callbackContext.success(responseText);
		} catch (JSONException e){
			callbackContext.error("Test fail");
		}
		return true;
		}
		
        return false;
    }
}