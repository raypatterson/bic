'use strict';

const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const log = require('@bicjs/bic-logger').get('plugin', 'open browser');
const cfg = require('@bicjs/bic-config').get();

module.exports = webpackConfig => {

	if (cfg.open === true) {

		log.profile('start');

		webpackConfig.plugins.push(new OpenBrowserPlugin({
			url: cfg.server.url
		}));

		log.info('added');

		log.profile('start');

	}

};
