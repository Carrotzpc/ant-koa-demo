/*
 * A demo for http://ant.design/
 *
 * v0.1.0 - 2015-12-15
 * @author Carrotzpc
*/

'use strict';

const koa     = require('koa')
const logger  = require('koa-logger')
const Router  = require('koa-router')
const render  = require('koa-ejs')
const serve   = require('koa-static')
const webpack = require('webpack')

const app = koa()

// middleware
app.use(logger())

// webpack
const webpackDevMiddleware = require('koa-webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig        = require('./webpack.config')
const compiler = webpack(webpackConfig)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }))
app.use(function* (next) {
  yield webpackHotMiddleware(compiler).bind(null, this.req, this.res)
  yield next
})

// serve files from ./dist
app.use(serve(__dirname + '/dist'))

// views
render(app, {
  root: __dirname,
  layout: false,
  viewExt: 'html',
  debug: true,
  cache: false
})

app.use(function *() {
  yield this.render('index', { title: '首页', body: '<h1>ant-koa-demo</h1>' });
})

// listen
app.listen(3001)
console.log('listening on port 3001')
