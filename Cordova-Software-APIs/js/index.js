(function() {
    document.addEventListener("deviceready", function() {
        var app = new kendo.mobile.Application(document.body);
        $("#devices-list").kendoMobileListView();
        /*document.addEventListener("pause",function(){
            
            alert("paused")    
        
        },false);
        document.addEventListener("resume",function(){
            
            alert("resume")    
        
        },false);*/
        document.addEventListener("offline",function(){
            
            alert("goes offline")    
        
        },false);
        document.addEventListener("online",function(){
            
            alert("goes online")    
        
        },false);
       // $(".listview").kendoMobileListView();
    }, false);
    
    
}());