'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.on('/').render('welcome')
Route.get('/about', 'PagesController.about') // renders view
Route.get('/test_request', 'PagesController.test_request') // renders view
Route.get('/redirect_home', 'PagesController.redirect_home') // renders view
Route.get('/pages', 'PagesController.index') // goes to controller
