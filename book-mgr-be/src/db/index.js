const mongoose = require('mongoose');

// 给哪个数据库的
// 哪个集合
// 添加什么格式的文档

// schema
// modal

const UserSchema = new mongoose.Schema({
  nickname: String,
  password: String,
  age: Number,
});

const UserModal = mongoose.model('User', UserSchema)

const connect = () => {
  // 去连接数据库
  mongoose.connect('mongodb://127.0.0.1:27017/book-mgr')

  // 当数据库被打开时候,做一些事情
  mongoose.connection.on('open', () => {
    console.log('连接成功');

    // 创建文档
    const user = new UserModal({
      nickname: 'xiaoming',
      password: '12345',
      age: 11,
    })

    // 保存 同步到MongoDB
    user.save();
  })
};

connect();