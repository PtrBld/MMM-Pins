'use strict';

/* Magic Mirror
 * Module: MMM-Pins
 *
 * MIT Licensed.
 */

const NodeHelper = require('node_helper');
module.exports = NodeHelper.create({
  start: function () {
                let GPIO = require('onoff').Gpio;
                const pin = new GPIO(22, "out");
		pin.writeSync(1);
},

  socketNotificationReceived: function(notification, payload) {
    if (notification === 'TOGGLE_PIN') {     
		this.config = payload;	  
		let GPIO = require('onoff').Gpio;
		const pin = new GPIO(this.config.pin, this.config.direction);
		let value = pin.readSync();
		if (value !== 1) {
			value = 1;
		}
		else{
			value = 0;
		}
		pin.writeSync(value);
		console.log(`Pin ${this.config.pin} switched to ${value}`);
    };
  }
  
});
