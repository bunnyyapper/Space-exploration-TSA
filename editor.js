/*
  Third-Party Code Attribution:
  This website uses the jQuery library hosted by Google Hosted Libraries.
  Source: https://google.com
  jQuery is openly licensed under the MIT License.
*/

$(document).ready(function(){  /* runs only after html is loaded */
 $(".galaxy").on("animationend", function(){ /* "animationend" is a built in event happens when animation done, */
     $(this).remove();   /*removes the galaxy image after animation is done */ 
    });
});
   
