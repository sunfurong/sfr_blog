/**
 * Created by sunfurong on 15/11/7.
 */

var mysqlcon = require('../db/sqlconnect');
function User(user) {
    this.username = user.username;
    this.password = user.password;
    this.email = user.email;
};

module.exports = User;

//存储用户信息
User.prototype.save = function(callback) {
    //要存入数据库的用户文档
    var user = {
        username: this.username,
        password: this.password,
        email: this.email
    };
    console.log(user);
    //打开数据库

    var sql_string="insert into user(username,password,email) value(" +"'"+user.username+"','"+user.password+"','"+user.email+"'"+")";
    console.log(sql_string);
    mysqlcon.handleError();
    mysqlcon.query(sql_string,function (err){
        if (err) {
            return callback(err);//错误，返回 err 信息
        }else{
            if(user.length!=0)
                callback(null, user); //成功！返回查询的用户信息
            else
                callback(null,null);
        }
    });
    mysqlcon.end();
};

//读取用户信息
User.get = function(name, callback) {
    //打开数据库
    var sql_string="select * from user where username = '"+name+"'";
    console.log(sql_string);
    mysqlcon.handleError();
    mysqlcon.query(sql_string,function(err, rows){
        if (err) {
            return callback(err);//错误，返回 err 信息
        }else{
            if(rows.length!=0)
                callback(null, rows[0]); //成功！返回查询的用户信息
            else
                callback(null,null);

        }
    });
    mysqlcon.end();
};