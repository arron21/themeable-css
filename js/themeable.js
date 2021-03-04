(function(){
    document.addEventListener('touchstart', handleTouchStart, false);        
    document.addEventListener('touchmove', handleTouchMove, false);

    var xDown = null;                                                        
    var yDown = null;  
    window.addEventListener('DOMContentLoaded',function () {
        document.getElementsByClassName('closesidenav')[0].addEventListener('click', function(){
            const sidenav = document.getElementsByClassName('sidenav')[0];
            sidenav.classList.remove('active')
        });
    });

    function handleTouchStart(evt) {                                         
        xDown = evt.touches[0].clientX;                                      
        yDown = evt.touches[0].clientY;                                      
    };                                                

    function handleTouchMove(evt) {
        if ( ! xDown || ! yDown ) {
            return;
        }

        const sidenav = document.getElementsByClassName('sidenav')[0];

        var xUp = evt.touches[0].clientX;                                    
        var yUp = evt.touches[0].clientY;

        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;

        if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
            if ( xDiff > 0 ) {
                sidenav.classList.remove('active')

                /* left swipe */ 
            } else {
                sidenav.classList.add('active')

                /* right swipe */
            }                       
        } else {
            if ( yDiff > 0 ) {
                /* up swipe */ 
            } else { 
                /* down swipe */
            }                                                                 
        }
        /* reset values */
        xDown = null;
        yDown = null;                                             
    };
})();