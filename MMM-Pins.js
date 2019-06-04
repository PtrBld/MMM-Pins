/* global Module */

/* Magic Mirror
 * Module: MMM-Button
 *
 * MIT Licensed.
 */

Module.register('MMM-Pins',{	
	requiresVersion: "2.1.0",
	defaults: {
		pinConfiguration: [{pin:5, direction:"out", notification:"TEST", prettyName: "Test"}]		
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
		  path: "modulename", 
		  actions: {}
		};
		for (pinConfig in this.pinConfiguration) {
			payload.actions[pinConfig.notification] = {method: "GET", notification: pinConfig.notification, prettyName: (pinConfig.prettyName || pinConfig.notification)};
		}
		this.sendNotification("REGISTER_API", payload);
	}
});
