'use strict';

const Controller = require('egg').Controller;

class SaveController extends Controller {
  async insert() {
  	const result = await this.ctx.service.save.insert();
    this.ctx.set('Access-Control-Allow-Origin','*');
    // console.log('123', this.ctx.request.body);

    this.ctx.body = result;
    //await this.ctx.render('list.tpl', dataList);
  }
  async show(){
  	const results = await this.ctx.service.save.find();
  	const dataList = {
  		list:results
  	}
  	console.log(1111111,results)
  	await this.ctx.render('list.tpl', dataList);
  }
}

module.exports = SaveController;
