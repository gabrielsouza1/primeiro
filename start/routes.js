'use strict'

const { RouteResource } = require('@adonisjs/framework/src/Route/Manager')

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('home')
//modos de rotas..route.on é routa principal e route.get gera rotas secundarias ou futuras
Route.get('/test', () => 'Hello world')
Route.get('/test/:id', function({ params }) {
    return `this is the id ${params.id}`;
})
Route.get('/task', 'TaskController.index')