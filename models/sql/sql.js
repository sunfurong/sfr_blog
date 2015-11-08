/**
 * Created by sunfurong on 15/11/7.
 */
var createUserTable ="CREATE TABLE user ("+
    "id INT(11),"+
    "name VARCHAR(255),"+
    "password VARCHAR(255),"+
    "email VARCHAR(255)"+
    ");";
module.exports = {
    createUserTable:createUserTable
}