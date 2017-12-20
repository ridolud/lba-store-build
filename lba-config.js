// development selanjutnya menggunakan file json untuk configurasi dynamic.

let LbaTheme;
if(process.env.NODE_ENV == 'development') {
	LbaTheme = require('babel-loader!../storeage/themes/hermes/dist/lba-theme-hermes.js') //dev
	require('../storeage/themes/hermes/dist/lba-theme-hermes.css') //dev
}else{
	LbaTheme = require('lba-theme-hermes')
	require('./node_modules/lba-theme-hermes/dist/lba-theme-hermes.css')
}

module.exports = {
	store : {
		name : 'Ganfall Store',
		domain : 'ganfallstore.com',
		host_name : 'localhost',
		host_user : 'root',
		host_pass : 'secret'
	},
	theme_config : {
		theme_pack : LbaTheme,
		color : {
			primary: '#222',
			info: '#222',
			success: '#222',
			danger: '#222'
		}
	}
}
