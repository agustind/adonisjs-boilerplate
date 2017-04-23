'use strict'

const Lucid = use('Lucid')

class User extends Lucid {
	pages () {
    	return this.hasMany('App/Model/Page') 
  	}
}

module.exports = User
