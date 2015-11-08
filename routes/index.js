var express = require('express');
/* GET home page. */
//var mysqlcon = require('../models/db/mysqlconnect');
module.exports = function (app) {
  var users=require('../service_controller/users_controller');
  var ajaxManage=require('../service_controller/ajax_controller');
  //首页
  app.get('/', function (req, res) {
    res.render('index', {

    });
  });

  app.get('/signup',function(req,res){
    res.render('user/signup',{});
  });

  app.get('/login',function(req,res){
    res.render('user/login',{});
  });

  app.get('/manage',function(req,res){
    res.render('manage/manage',{});
  });

  app.get('/ajax/*',ajaxManage.deal)
  app.post('/manage_input',users.post);
  app.post('/signup',users.signup);
  app.post('/login',users.login);
};