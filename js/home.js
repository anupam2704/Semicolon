(function($){
    $.HomePage = function(wrapToken){
        this.wrapper = wrapToken;
    }
    $.HomePage.prototype = {
        'init': function(){
            //console.log("this is inside home page");
            this.bindAlert();
        },
        'bindAlert': function(){
            $("#check").on("click", function(){
                //alert("click works");
            });
        }
    }
})(jQuery);