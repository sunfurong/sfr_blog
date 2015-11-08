/**
 * Created by sunfurong on 15/11/7.
 */
var firstApp = angular.module('myApp',[]);
var input_li1="<form>" +
    "<input type='text' name='blog_title'><br>" +
    "<input type='text' name='blog_content'>"+
    "</form>";
firstApp.controller('manageController',function($scope,$sce,$http){
    $scope.title='技术博文';
    $http.get('/ajax/text_telblog').success(function (data) {
        if(data.data.length>0){
            var string='';
            for(var i=0;i<data.data.length;i++){
                string =string+str_telblog(data.data[i].title,data.data[i].content);
            }
            $scope.content=$sce.trustAsHtml(string);
        }
    }).error(function (data, status, headers, config) { });

    $scope.updateMessage=function(e){
        switch (e){
            case 'li1':
                $scope.title='技术博文';
                $http.get('/ajax/text_telblog').success(function (data) {
                    if(data.data.length>0){
                        var string='';
                        for(var i=0;i<data.data.length;i++){
                            string =string+str_telblog(data.data[i].title,data.data[i].content);
                        }
                        $scope.content=$sce.trustAsHtml(string);
                    }
                }).error(function (data, status, headers, config) { });
                break;
            case 'li2':
                $scope.title='生活日记';
                $http.get('/ajax/text_telblog').success(function (data) {
                    if(data.data.length>0){
                        var string='';
                        for(var i=0;i<data.data.length;i++){
                            string =string+str_telblog(data.data[i].title,data.data[i].content);
                        }
                        $scope.content=$sce.trustAsHtml(string);
                    }
                }).error(function (data, status, headers, config) { });
                break;
            case 'li3':
                $scope.title='好文分享';
                $http.get('/ajax/text_telblog').success(function (data) {
                    if(data.data.length>0){
                        var string='';
                        for(var i=0;i<data.data.length;i++){
                            string =string+str_telblog(data.data[i].title,data.data[i].content);
                        }
                        $scope.content=$sce.trustAsHtml(string);
                    }
                }).error(function (data, status, headers, config) { });
                break;
            case 'li4':
                $scope.title='精彩视频';
                $http.get('/ajax/text_telblog').success(function (data) {
                    if(data.data.length>0){
                        var string='';
                        for(var i=0;i<data.data.length;i++){
                            string =string+str_telblog(data.data[i].title,data.data[i].content);
                        }
                        $scope.content=$sce.trustAsHtml(string);
                    }
                }).error(function (data, status, headers, config) { });
                break;
            case 'li5':
                $scope.title='酷炫图片';
                $http.get('/ajax/text_telblog').success(function (data) {
                    if(data.data.length>0){
                        var string='';
                        for(var i=0;i<data.data.length;i++){
                            string =string+str_telblog(data.data[i].title,data.data[i].content);
                        }
                        $scope.content=$sce.trustAsHtml(string);
                    }
                }).error(function (data, status, headers, config) { });
                break;
            case 'li6':
                $scope.title='精美网页';
                $http.get('/ajax/text_telblog').success(function (data) {
                    if(data.data.length>0){
                        var string='';
                        for(var i=0;i<data.data.length;i++){
                            string =string+str_telblog(data.data[i].title,data.data[i].content);
                        }
                        $scope.content=$sce.trustAsHtml(string);
                    }
                }).error(function (data, status, headers, config) { });
                break;
            default :
                $scope.title='技术博文';
                $http.get('/ajax/text_telblog').success(function (data) {
                    if(data.data.length>0){
                        var string='';
                        for(var i=0;i<data.data.length;i++){
                            string =string+str_telblog(data.data[i].title,data.data[i].content);
                        }
                        $scope.content=$sce.trustAsHtml(string);
                    }
                }).error(function (data, status, headers, config) { });
                getData('text_telblog',$scope.content);
                break;
        }
    };
    $scope.create=function(){
        switch ($scope.title){
            case '技术博文':

                $scope.formtitle="技术博文";
                break;
            case '生活日记':
                break;
            case '好文分享':
                break;
            case '精彩视频':
                break;
            case '酷炫图片':
                break;
            case '精美网页':
                break;
            default :
                break;
        }
    }


});

//function getData(classname,$scope,$sce){
//
//    var url="/ajax/" + classname;
//    var xhr=new XMLHttpRequest();
//    xhr.open("GET",url,true);
//    //$scope.title="233sdsdsd3";
//    xhr.onreadystatechange = function(){
//        $scope.title="233sdsdsd3";
//        if (xhr.readyState == 4) {
//            if (xhr.status == 200) {
//
//                var data = eval("(" + xhr.responseText + ")");
//
//                if(data.data.length>0){
//                    var string='';
//
//                    for(var i=0;i<data.data.length;i++){
//
//                      string =string+str_telblog(data.data[i].title,data.data[i].content);
//                    }
//                    //$scope.content=$sce.trustAsHtml('<p>dsd</p>');
//                    //$scope.content=$sce.trustAsHtml('<p>dsd</p>');
//                    //alert(1);
//                    //$scope.title="233sdsdsd3";
//                }
//
//
//            }
//        }
//    }
//    //alert(2)
//    //$scope.title="1";
//    //setTimeout(function($scope){
//    //    $scope.title="2333";
//    //},1)
//
//    xhr.send(null);
//}

function str_telblog(title,content){

var str="<div class='row ajax_row' ><div class='col-md-9'><p class='title'>"+title
    +"</p><p class='content'>"+content+"</p></div><div class='col-md-3 ajax_control' >"+
      "<button>删除</button><button>编辑</button><button>保密</button></div></div>";

    return str;
}
