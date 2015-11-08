/**
 * Created by sunfurong on 15/11/8.
 */
var text_telblog=require('../business/text_telblog')
exports.deal=function(req,res){
    var name= req.url.split('/')[2];
    console.log(name);
    switch (name){
        case 'text_telblog':
            text_telblog.getdata(req,res);
            break;
        case 'text_lifeblog':

            break;
        case 'text_artshare':

            break;
        case 'text_vedieshare':

            break;
        case 'text_imgshare':

            break;
        case 'text_htmlshare':

            break;
        default :

            break;
    }
}