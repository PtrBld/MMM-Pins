'use strict';

/* Magic Mirror
 * Module: MMM-Pins
 *
 * MIT Licensed.
 */

const NodeHelper = require('node_helper');
const Gpio = require('onoff').Gpio;

module.exports = NodeHelper.create({
  start: function () {
        this.started = false;
},

  socketNotificationReceived: function(notification, payload) {
	const self = this
    if (notification === 'PIN_CONFIG' && self.started === false) {
	  let pinConfigs = payload;
	  if (Gpio.accessible) {
		self.gpio = []
		for (let index = 0; index < pinConfigs.length; ++index) {
			let pinConfig = pinConfigs[index];
          	self.gpio[String(pinConfig.pin)] = new Gpio(pinConfig.pin, pinConfig.direction);
		}
	  }
	  self.started = true;				
	}
    else if (notification === 'TOGGLE_PIN') {     
		let pinNumber = payload;	  
		let pin = self.gpio[String(pinNumber)];
		let value = pin.readSync();
		if (value !== 1) {
			value = 1;
		}
		else{
			value = 0;
		}
		pin.writeSync(value);
		console.log(`Pin ${pinNumber} switched to ${value}`);
    };
  }
  
});
