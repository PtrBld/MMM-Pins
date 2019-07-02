# MMM-Pins
This is an extension for the [MagicMirror](https://github.com/MichMich/MagicMirror). It can toggle pins specified in the config.

You can specify any number of pins with different trigger messages. All messages will be registered with the [MMM-Remote Module](https://github.com/Jopyth/MMM-Remote-Control) automatically. It can also play sounds using [MMM-Sounds](https://github.com/jc21/MMM-Sounds) module when a pin is toggled.

Therefore we need to have [MMM-Remote Module](https://github.com/Jopyth/MMM-Remote-Control) and [MMM-Sounds](https://github.com/jc21/MMM-Sounds) (optional) installed and configured with our mirror.

## Installation
1. Navigate into your MagicMirror's `modules` folder and execute `git clone https://github.com/ptrbld/MMM-Pins.git`. A new folder will appear navigate into it.
2. Execute `npm install` to install the node dependencies.

## Using the module
First of all connect some leds, etc. to your pins on the pi Raspberry PI. I am using this module currently to turn some 5v leds on and off with TIP120 darlington transistors.

To use this module, add it to the modules array in the `config/config.js` file:
````javascript
modules: [
	{
		module: 'MMM-Pins',
		config: {
			// See 'Configuration options' for more information.
		}
	}
]
````

## Configuration options
### Basic

The following properties can be configured:

<table width="100%">
	<!-- why, markdown... -->
	<thead>
		<tr>
			<th>Option</th>
			<th width="100%">Description</th>
		</tr>
	<thead>
	<tbody>
		<tr>
			<td><code>pinConfiguration</code></td>
			<td>Array of pin objects you want to toggle by notification.<br>
				<br><b>Possible values:</b> <code>[{pin:5, direction:"out", notification:"MY_NOTIFICATION", sound:"ANY_SOUNDFILE" prettyName: "Test"}, ...]</code>
			</td>
		</tr>
	</tbody>
</table>

### Single Pin Configuration

<table width="100%">
	<!-- why, markdown... -->
	<thead>
		<tr>
			<th>Option</th>
			<th width="100%">Description</th>
		</tr>
	<thead>
	<tbody>
		<tr>
			<td><code>pin</code></td>
			<td>The pin number you want to toggle</td>
		</tr>
		<tr>
			<td><code>direction</code></td>
			<td>If it is a input or output pin (values: <code>"in" | "out"</code></td>
		</tr>
		<tr>
			<td><code>notification</code></td>
			<td>Any notification name that should trigger the toggle event. The notifications are registered with the [MMM-Remote](https://github.com/Jopyth/MMM-Remote-Control) module and received by this module.</td>
		</tr>
		<tr>
			<td><code>sound</code></td>
			<td>Sound that should be played using the [MMM-Sounds](https://github.com/jc21/MMM-Sounds) module when pin is triggered</td>
		</tr>
		<tr>
			<td><code>prettyName</code></td>
			<td>Name used in the remote view of the [MMM-Remote](https://github.com/Jopyth/MMM-Remote-Control) module</td>
		</tr>
	</tbody>
</table>

## Dependencies
- [onoff](https://www.npmjs.com/package/onoff) (installed via `npm install`)

The MIT License (MIT)
=====================

Copyright © 2016 PtrBld

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the “Software”), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

**The software is provided “as is”, without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and noninfringement. In no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software or the use or other dealings in the software.**
