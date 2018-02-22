//---------------------LEVEL 3 APP CONTROLS-------------------------//

var BGOne = document.getElementById("BG1");
var BGTwo = document.getElementById("BG2");
var BGThree = document.getElementById("BG3");
var BGFour = document.getElementById("BG4");

BGOne.addEventListener("click", function (){
   document.getElementById("ch1").style.backgroundImage = "url(imgs/i1.jpg)";
    document.getElementById("ch2").style.backgroundImage = "url(imgs/i2.jpg)";
    document.getElementById("ch3").style.backgroundImage = "url(imgs/i3.jpg)";
});

BGTwo.addEventListener("click", function (){
   document.getElementById("ch1").style.backgroundImage = "url(imgs/i4.jpg)";
    document.getElementById("ch2").style.backgroundImage = "url(imgs/i5.jpg)";
    document.getElementById("ch3").style.backgroundImage = "url(imgs/i6.jpg)";
});

BGThree.addEventListener("click", function (){
   document.getElementById("ch1").style.backgroundImage = "url(imgs/i7.jpg)";
    document.getElementById("ch2").style.backgroundImage = "url(imgs/i8.jpg)";
    document.getElementById("ch3").style.backgroundImage = "url(imgs/i9.jpg)";
});

BGFour.addEventListener("click", function (){
   document.getElementById("ch1").style.backgroundImage = "url(imgs/i10.jpg)";
    document.getElementById("ch2").style.backgroundImage = "url(imgs/i11.jpg)";
    document.getElementById("ch3").style.backgroundImage = "url(imgs/i12.jpg)";
});

//---------------------LEVEL 4a APP1 ZOOM-------------------------//

var chOne = document.getElementById("ch1");
var chTwo = document.getElementById("ch2");
var chThree = document.getElementById("ch3");

BGOne.addEventListener("click", function (){
   chOne.addEventListener("mouseenter", function (){
       document.getElementById("zoom").style.backgroundImage = "url(imgs/i1.jpg)";
   });

    chTwo.addEventListener("mouseenter", function (){
       document.getElementById("zoom").style.backgroundImage = "url(imgs/i2.jpg)";
   }); 

    chThree.addEventListener("mouseenter", function (){
       document.getElementById("zoom").style.backgroundImage = "url(imgs/i3.jpg)";
   });});

BGTwo.addEventListener("click", function (){
   chOne.addEventListener("mouseenter", function (){
       document.getElementById("zoom").style.backgroundImage = "url(imgs/i4.jpg)";
   });

    chTwo.addEventListener("mouseenter", function (){
       document.getElementById("zoom").style.backgroundImage = "url(imgs/i5.jpg)";
   }); 

    chThree.addEventListener("mouseenter", function (){
       document.getElementById("zoom").style.backgroundImage = "url(imgs/i6.jpg)";
   });});

BGThree.addEventListener("click", function (){
   chOne.addEventListener("mouseenter", function (){
       document.getElementById("zoom").style.backgroundImage = "url(imgs/i7.jpg)";
   });

    chTwo.addEventListener("mouseenter", function (){
       document.getElementById("zoom").style.backgroundImage = "url(imgs/i8.jpg)";
   }); 

    chThree.addEventListener("mouseenter", function (){
       document.getElementById("zoom").style.backgroundImage = "url(imgs/i9.jpg)";
   });});

BGFour.addEventListener("click", function (){
   chOne.addEventListener("mouseenter", function (){
       document.getElementById("zoom").style.backgroundImage = "url(imgs/i10.jpg)";
   });

    chTwo.addEventListener("mouseenter", function (){
       document.getElementById("zoom").style.backgroundImage = "url(imgs/i2.jpg)";
   }); 

    chThree.addEventListener("mouseenter", function (){
       document.getElementById("zoom").style.backgroundImage = "url(imgs/i3.jpg)";
   });});

//-----------------------LEVEL 4b Menu Controls------------------------------//
var BGZoom = document.getElementById("zoom").style;

document.getElementById("BGButton").addEventListener("click", function () {
     document.getElementById("bg").style.backgroundImage = BGZoom.backgroundImage;
    
});

document.getElementById("Reset").addEventListener("click", function () {
     document.getElementById("bg").style.backgroundImage = "none";
    
});

document.getElementById("Show").addEventListener("click", function () {
     document.getElementById("app1").style.display = "block";
    
});
document.getElementById("Hide").addEventListener("click", function () {
     document.getElementById("app1").style.display = "none";
    
});


//----------------------LEVEL 5 SIMPLE CALCULATIONS --------------------//
document.getElementById("zoom").addEventListener("click", function () {
    document.getElementById("zoomcontrols").style.display="block";
});


var x = 100;
var y = 70;
var width = 10;
var height = 7;

document.getElementById("plus").addEventListener("click", function () {
    
       if(x < 91 || y <64 ) {
            x += width; 
            y += height;
           
       } else if (x > 11 || y > 8 ) {
           
       }
       document.getElementById("zoom").style.width= x + "%";
       document.getElementById("zoom").style.height= y + "%";                               
});

document.getElementById("minus").addEventListener("click", function () {
    
       if(x < 91 || y <64 ) {
           
           
       } else if (x > 11 || y > 8 ) {
            x -= width; 
            y -= height;
           
       }
       document.getElementById("zoom").style.width= x + "%";
       document.getElementById("zoom").style.height= y + "%";

});


//----------------------LEVEL 6a-------------------------------//

document.getElementById("numInput").addEventListener("change", function () {
    var numValue = parseInt(numInput.value);
    
    if(numValue > 12 || numValue < 1) {
        alert ("Doesn't exist!");
    } else {
        document.getElementById("bg").style.backgroundImage = "url(imgs/i"+numValue+".jpg)";
    }
    
});

//-------------------------LEVEL 6b-----------------------------//


var ch1 = document.getElementById("ch1");
var ch2 = document.getElementById("ch2");
var ch3 = document.getElementById("ch3");

document.getElementById("Prev").addEventListener("click", function () {
     if(ch1.style.backgroundImage == 'url("imgs/i1.jpg")') {
        ch1.style.backgroundImage = 'url("imgs/i10.jpg")';
        ch2.style.backgroundImage = 'url("imgs/i11.jpg")';
        ch3.style.backgroundImage = 'url("imgs/i12.jpg")';
        
    } 
    else if(ch1.style.backgroundImage == 'url("img/i4.jpg")') {
        ch1.style.backgroundImage = 'url("imgs/i1.jpg")';
        ch2.style.backgroundImage = 'url("imgs/i2.jpg")';
        ch3.style.backgroundImage = 'url("imgs/i3.jpg")';
        
    } 
    else if(ch1.style.backgroundImage == 'url("img/i7.jpg")') {
        ch1.style.backgroundImage = 'url("imgs/i4.jpg")';
        ch2.style.backgroundImage = 'url("imgs/i5.jpg")';
        ch3.style.backgroundImage = 'url("imgs/i6.jpg")'; 
    }
    else if(ch1.style.backgroundImage == 'url("imgs/i10.jpg")') {
        ch1.style.backgroundImage = 'url("imgs/i7.jpg")';
        ch2.style.backgroundImage = 'url("imgs/i8.jpg")';
        ch3.style.backgroundImage = 'url("imgs/i9.jpg")'; 
    }
        
});

document.getElementById("Next").addEventListener("click", function () {
     if(ch1.style.backgroundImage == 'url("imgs/i1.jpg")') {
        ch1.style.backgroundImage = 'url("imgs/i4.jpg")';
        ch2.style.backgroundImage = 'url("imgs/i5.jpg")';
        ch3.style.backgroundImage = 'url("imgs/i6.jpg")';
        
    } 
    else if(ch1.style.backgroundImage == 'url("imgs/i4.jpg")') {
        ch1.style.backgroundImage = 'url("imgs/i7.jpg")';
        ch2.style.backgroundImage = 'url("imgs/i8.jpg")';
        ch3.style.backgroundImage = 'url("imgs/i9.jpg")';
        
    } 
    else if(ch1.style.backgroundImage == 'url("imgs/i7.jpg")') {
        ch1.style.backgroundImage = 'url("imgs/i10.jpg")';
        ch2.style.backgroundImage = 'url("imgs/i11.jpg")';
        ch3.style.backgroundImage = 'url("imgs/i12.jpg")'; 
    }
    else if(ch1.style.backgroundImage == 'url("imgs/i10.jpg")') {
        ch1.style.backgroundImage = 'url("imgs/i1.jpg")';
        ch2.style.backgroundImage = 'url("imgs/i2.jpg")';
        ch3.style.backgroundImage = 'url("imgs/i3.jpg")'; 
    }
        
});