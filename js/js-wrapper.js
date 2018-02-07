(function($){
    $.Wrapper = function(){
        return this;
    }

    $.Wrapper.prototype = {
        'init': function(){
            console.log("this will call init of all classes");
            //Calling all init of all classes
            this.home = new $.HomePage(this).init();
        }        
    }
})(jQuery)


function initDir(){   
   jQuery(document).ready(function(){
        (function($){
            var wrap = new $.Wrapper();
            wrap.init();
        })(jQuery);
   });
}