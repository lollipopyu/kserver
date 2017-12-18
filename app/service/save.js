const Service = require('egg').Service;

class SaveService extends Service {
  async insert(){
    const {ctx} = this;
    const params = ctx.request.body;
    // console.log('params',params)
    // 插入
    const result = await this.app.mysql.insert('posts', params); // 在 post 表中，插入 title 为 Hello World 的记录
    return result;
  }
  async find(){
    const results = await this.app.mysql.select('posts');
    return results;
  }
}

module.exports = SaveService;