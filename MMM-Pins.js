/* global Module */

/* Magic Mirror
 * Module: MMM-Button
 *
 * MIT Licensed.
 */

Module.register('MMM-Pins',{	
	requiresVersion: "2.1.0",
	defaults: {
		pinConfiguration: []		
	},	
	
	// Override notification handler.
	notificationReceived: function(notification, payload) {
		for (pinConfig in this.pinConfiguration) {
			if(pinConfig.notification === notification){
				this.sendSocketNotification("TOGGLE_PIN", {pin:pinConfig.pin, direction:pinConfig.direction});
				break;
			}
		}
	},	
	start: function() {
		Log.info('Starting module: ' + this.name);
		let payload = {
		  module: this.name, 
		  path: "pins", 
		  actions: {}
		};
		for (pinConfig in this.pinConfiguration) {
			payload.actions[pinConfig.notification] = {notification: pinConfig.notification, prettyName: (pinConfig.prettyName || pinConfig.notification)};
		}
		Log.log(payload);
		this.sendNotification("REGISTER_API", payload);
	}
});
