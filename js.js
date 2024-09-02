document.addEventListener('DOMContentLoaded', function() {

    var background = document.getElementById("background");
    
    var screenX = window.screen.width;
    var screenY = window.screen.height;
    
    background.style.width = screenX.toString() + "px";
    background.style.height = screenY.toString() + "px";
    

    window.onload = function () {

        const interval = setInterval(function(){
            
            var windowSizeX = window.innerWidth;
            var windowSizeY = window.innerHeight;
            var windowPosX = window.screenLeft;
            var windowPosY = window.screenTop;
            
            background.style.backgroundPositionX =  -windowPosX - 10 + "px "; 
            background.style.backgroundPositionY =  -windowPosY + "px "; 
    
            
            console.log("the screen size : "," X:",screenX,"  Y:",screenY);
            console.log("the window size : "," X:",windowSizeX,"  Y:",windowSizeY);
            console.log("position of the window from  : "," left:",windowPosX,"  top:",windowPosY);
    
        }, 40);
    
        setTimeout(() => {
            console.log('cleared');
            clearInterval(interval);
        }, 1000000);
    
    }; // for a custume times in a second
    



    // function animate() {
        
    //     var windowSizeX = window.innerWidth;
    //     var windowSizeY = window.innerHeight;
    //     var windowPosX = window.screenLeft;
    //     var windowPosY = window.screenTop;
        
    //     background.style.backgroundPositionX =  -windowPosX - 10 + "px "; 
    //     background.style.backgroundPositionY =  -windowPosY + "px "; 

        
    //     console.log("the screen size : "," X:",screenX,"  Y:",screenY);
    //     console.log("the window size : "," X:",windowSizeX,"  Y:",windowSizeY);
    //     console.log("position of the window from  : "," left:",windowPosX,"  top:",windowPosY);
        
    //     requestAnimationFrame(animate);
    // }
    // requestAnimationFrame(animate);  // for every frames the system passes
    
    
});
    
    
    
