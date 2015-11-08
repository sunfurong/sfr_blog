/**
 * Created by sunfurong on 15/11/8.
 */
var mysqlcon = require('../db/sqlconnect');
var moment = require("moment");
function Text(text) {
    this.class = text.class;
    this.title=text.title;
    this.content=text.content;
};

module.exports = Text;

//存储文本信息
Text.prototype.save = function(callback) {

    var text={
        class:this.class,
        title:this.title,
        content:this.content
    };
    console.log(text);
    //打开数据库
    var text_class;
    switch (text.class){
        case '技术博文':
            text_class="text_telblog";
            break;
        case '生活日记':
            text_class="text_lifeblog";
            break;
        case '好文分享':
            text_class="text_artshare";
            break;
        case '精彩视频':
            text_class="text_vedieshare";
            break;
        case '酷炫图片':
            text_class="text_imgshare";
            break;
        case '精美网页':
            text_class="text_htmlshare";
            break;
        default :
            text_class="text_telblog";
            break;
    }
new Date()
    var sql_string="insert into "+ text_class+" (title,content,date) value(" +"'"+text.title+"','"+text.content+"','"+moment().format("YYYY-MM-DD HH:mm:ss") +"'"+")";
    console.log(sql_string);
    mysqlcon.handleError();
    mysqlcon.query(sql_string,function (err){
        if (err) {
            return callback(err);//错误，返回 err 信息
        }else{
            if(text.length!=0)
                callback(null, text); //成功！返回查询的用户信息
            else
                callback(null,null);
        }
    });
    mysqlcon.end();
};

//读取所有的blog text
Text.getAll=function(tablename,callback){
    //打开数据库
    var sql_string = "select * from "+tablename;
    console.log(sql_string);
    mysqlcon.handleError();
    mysqlcon.query(sql_string,function(err,rows){
        if(err){
            return callback(err);//错误，返回 err 信息
        }else{
            if(rows.length!=0)
                callback(null, rows); //成功！返回查询的用户信息
            else
                callback(null,null);

        }
    })
};