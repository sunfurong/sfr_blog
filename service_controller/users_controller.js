/**
 * Created by sunfurong on 15/11/7.
 */
var crypto=require('crypto');
var User = require('../models/user/user');
var Text = require('../models/text/text');
exports.signup=function(req,res){
    var user = new User({
        username:req.body.username,
        password:req.body.password,
        email:req.body.email
    });
    User.get(req.body.username,function(e,r){
        if(e){
            console.error("signup error:"+e);
            return;
        }
        if(r){
            console.error("user has");
            return;
        }
        user.save(function(e,r){
            if(e){
                console.error("signup error:"+e);
                return;
            }
            if(r){
                console.error("signup success!");
                res.redirect('/');

            }
        })
    })
};
exports.login=function(req,res){
    var username=req.body.username;
    var password = req.body.password;
    User.get(username,function(e,r){
        if(e){
            console.error("signup error:"+e);
            return;
        }
        if(r){
           console.log(r);
            if(r.password==password){
                res.redirect('/manage');
            }else{
                console.error("password error!");
            }
        }
    })
};
exports.post=function(req,res){
    var text=new Text({
        class:req.body.class,
        title:req.body.title,
        content:req.body.content
    });
    text.save(function(e,r){
        if(e){
            console.error("post save error:"+e);
            return;
        }
        if(r){
            console.log("post save success!");
            res.redirect('/manage');
        }
    })
}