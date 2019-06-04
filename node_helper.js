'use strict';

/* Magic Mirror
 * Module: MMM-Pins
 *
 * MIT Licensed.
 */

const NodeHelper = require('node_helper');
module.exports = NodeHelper.create({
  start: function () {},

  socketNotificationReceived: function(notification, payload) {
    if (notification === 'TOGGLE_PIN') {     
		this.config = payload;	  
		let GPIO = require('onoff').Gpio;
		const pin = new GPIO(this.config.pin, this.config.direction);
		let value = pin.readSync() ^ 1;
		if (!value) {
			value = 1;
		}
		pin.writeSync(value);
		console.log(`Pin ${this.config.pin} switched to ${value}`);
    };
  }
  
});
