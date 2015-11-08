/**
 * Created by sunfurong on 15/11/8.
 */
var Text=require('../models/text/text');
function getdata(req,res){
    Text.getAll("text_telblog",function(e,r){
        if(e){
            console.error("get datas from text_telblog error:"+e);
            return ;
        }
        if(r){
            var data = {
                data: r
            };
            console.log(r);
            res.json(data);
        }
    })
}
module.exports = {
    getdata: getdata
};