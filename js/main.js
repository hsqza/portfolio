(function(){

    $(document).ready(function() {
        switchDiv();
    });
    
    $(window).resize(function() {
        switchDiv();
    });
    
    function switchDiv() {
        if ($(window).width() < 575){
            $("#technology > div:nth-child(2)").css({
                'display': 'flex',
                'flex-direction': 'column-reverse'
            });
        } else {
            $("#technology > div:nth-child(2)").css({
                'display': 'flex',
                'flex-direction': 'row'
            });
        }
    }

})();