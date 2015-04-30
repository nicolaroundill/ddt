//Super fun time variable section!
var bump = 1;
var deathClickHold = false;

var sceneSelector = 0;

var scene01p1 = false; //tap duck for dialogue
var scene01p2 = false; //tap death for him to come 
var scene01p3 = false; //tap death for dialogue

var scene02p1 = false; //tap duck for dialogue
var scene02p2 = false; //tap death for dialogue
var scene02p3 = false; //tap duck for dialogue
var scene02p4 = false;

var scene03p1 = false; //death
var scene03p2 = false; //duck
var scene03p3 = false; //death
var scene03p4 = false; //duck

var scene04p1 = false; //inner dialogue
var scene04p2 = false; //duck
var scene04p3 = false;
var scene04p4 = false; //death


$(document).ready(function(){
  var offsetDeath = $(".death01").offset();
  var offsetDuck = $(".duck01").offset();

  //Parallax.js code starts//
  var scene = document.getElementById('scene');
  var parallax = new Parallax(scene, {
  
    calibrateX: false,
    calibrateY: true,
    invertX: false,
    invertY: true,
    limitX: false,
    limitY: 10,
    scalarX: 2,
    scalarY: 8,
    frictionX: 1.7,
    frictionY: 0.8,
    originX: 1,
    originY: 1
  }); 
  //Parallax.js code ends// 


  //Code to "change the scene" if the tulip is clicked
  $(".tulip").on('click touch', function(){
    console.log("working");
    sceneSelector = sceneSelector + 1;
    //For a while now, Duck had had a feeling.
    
    if(scene01p1 == true){
      //'Who are you? What are you up to, creeping along behind me?'
      //Change text
      $(".text01").addClass("hide");
      $(".text02").removeClass("hide");
      //Change duck image
      $(".duck01").attr("src", "img/background/duck.png");
      //Add the animation
      $(".duck01").addClass("anim1");
      //Set this scene to false so that it won't accidentally run
      scene01p1 = false;
    }


    if(scene01p2 == true){
      //'Good,'' said Death, 'you finally noticed me. I am Death.'
      $(".text02").addClass("hide");
      $(".text03").removeClass("hide");

      $(".duck01").removeClass("anim1");
      $(".death01").addClass("anim2");

      //Make sure that duck stays in her final position after the animation
      $(".duck01").css ({
        'left' : 700
      })
      scene01p2 = false;
    }


    if(scene01p3 == true){
      //Duck was scared stiff, and who could blame her?
      $(".text03").addClass("hide");
      $(".text04").removeClass("hide");

       $(".death01").removeClass("anim2");
       $(".duck01").attr("src", "img/background/duck02.png");

      $(".death01").css ({
        'left' : 300
      })
      scene01p3 = false;
    }


    if(scene02p1 == true){
      //'You've come to fetch me?'
      $(".text04").addClass("hide");
      $(".text05").removeClass("hide");

      $(".duck01").addClass("anim3");

      $(".duck01").css ({
        'left' : 750
      })
      

      scene02p1 = false;
    }


    if(scene02p2 == true){
      //'Oh, I've been close by all your life - just in case.'
      $(".text05").addClass("hide");
      $(".text06").removeClass("hide");

      $(".duck01").removeClass("anim3");
      $(".death01").addClass("anim4");
      $(".death01").attr("src", "img/background/death02.png")

      $(".death01").css ({
        'left' : 400
      })

      scene02p2 = false;
    }


    if(scene02p3 == true){
      //'In case of what?' asked Duck.
      $(".text06").addClass("hide");
      $(".text07").removeClass("hide");

      $(".death01").removeClass("anim4");
      $(".duck01").attr("src", "img/background/duck03.png")

      scene02p3 = false;
    }


    if(scene02p4 == true){
      //'In case something happens to you. A nasty cold; an accident - you never know.
      $(".text07").addClass("hide");
      $(".text08").removeClass("hide");

      $(".death01").attr("src", "img/background/death03.png")

      scene02p4 = false;
    }


    if(scene03p1 == true){
      //'Are you going to make something happen?'
      $(".text08").addClass("hide");
      $(".text09").removeClass("hide");

      $(".duck01").attr("src", "img/background/duck04.png")

      scene03p1 = false;
    }


    if(scene03p2 == true){
      //'Life takes care of that: the coughs and colds and all the other things that happen to you ducks. Fox, for example.'
      $(".text09").addClass("hide");
      $(".text10").removeClass("hide");

      $(".death01").attr("src", "img/background/death04.png")

      scene03p2 = false;
    }


    if(scene03p3 == true){
      //Duck tried not to think about that. It gave her goosebumps.
      $(".text10").addClass("hide");
      $(".text11").removeClass("hide");

      $(".duck01").attr("src", "img/background/duck05.png")
      $(".death01").attr("src", "img/background/death05.png")

      scene03p3 = false;
    }


    if(scene03p4 == true){
      //Death gave her a friendly smile.
      $(".text11").addClass("hide");
      $(".text12").removeClass("hide");

       $(".death01").attr("src", "img/background/death06.png")

      scene03p4 = false;
    }


    if(scene04p1 == true){
      //Actually he was nice, if you forgot for a moment who he was - really quite nice.
      $(".text12").addClass("hide");
      $(".text13").removeClass("hide");

      $(".duck01").attr("src", "img/background/duck06.png")

      scene04p1 = false;
    }


    if(scene04p2 == true){
      //'Shall we go down to the pond?' she asked. 
      $(".text13").addClass("hide");
      $(".text14").removeClass("hide");

      $(".duck01").attr("src", "img/background/duck07.png")
      $(".duck01").addClass("anim5");

      scene04p2 = false;
    }


    if(scene04p3 == true){
      //Death had been dreading that.
      $(".text14").addClass("hide");
      $(".text15").removeClass("hide");

      $(".death01").attr("src", "img/background/death07.png")

      scene04p3 = false;
    }


    if(scene04p4 == true){
      
      $(".text15").removeClass("hide");  

      scene04p4 = false;
    }


    //My super awesome and totally not aweful code for changing scenes
    if (sceneSelector == 1){
      scene01p1 = true;
    }

     if (sceneSelector == 2){
      scene01p2 = true;
    }

     if (sceneSelector == 3){
      scene01p3 = true;
    }

     if (sceneSelector == 4){
      scene02p1 = true;
    }

     if (sceneSelector == 5){
      scene02p2 = true;
    }

     if (sceneSelector == 6){
      scene02p3 = true;
    }

     if (sceneSelector == 7){
      scene02p4 = true;
    }

     if (sceneSelector == 8){
      scene03p1 = true;
    }

     if (sceneSelector == 9){
      scene03p2 = true;
    }

     if (sceneSelector == 10){
      scene03p3 = true;
    }

     if (sceneSelector == 11){
      scene03p4 = true;
    }

     if (sceneSelector == 12){
      scene04p1 = true;
    }

     if (sceneSelector == 13){
      scene04p2 = true;
    }

    if (sceneSelector == 14){
      scene04p3 = true;
    }

    if (sceneSelector == 15){
      scene04p4 = true;
    }
  });
});