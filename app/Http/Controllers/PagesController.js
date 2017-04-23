'use strict'

//const Database = use('Database')
const Page = use('App/Model/Page')
const request = require('request');

class PagesController {
	* index(req, res){
		let title = 'This is a list of pages'
		//let pages = ['page1', 'page2', 'page3'];
		//let pages = yield Database.select('*').from('pages')
		//let pages = yield Page.all()
		let pages = yield Page.with('user').fetch()
		yield res.sendView('pages/index', {title: title, pages: pages.toJSON() })
	}

	* test_request(req, res){
		request('http://www.google.com', function (error, response, body) {
			console.log('request worked ok!!');
			console.log('error:', error); // Print the error if one occurred 
			console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
			res.send('ok')
			//console.log('body:', body); // Print the HTML for the Google homepage. 
		});
	}

	* redirect_home(req, res){
		// res.notFound()
		//res.json({ name: 'doe' })
		res.redirect('/')
	}

	* about(req, res){
		yield res.sendView('pages/about')
	}
}

module.exports = PagesController
