var app = app || {};

(function(a) {
    
    var eventsAPI = {
        run: function(e) {
            document.addEventListener("pause",function(){
                alert("paused");
            },false);
            
            document.addEventListener("resume",function(){
                alert("resumed");
            },false);
        }        
    }
    
    a.eventsApi = eventsAPI;
}(app));