'use strict'

const Lucid = use('Lucid')

class Page extends Lucid {
	user () {
    	return this.belongsTo('App/Model/User') 
  	}
}

module.exports = Page
