$(document).ready(function () {

    $(window).on('scroll', function () {
        if($(window).scrollTop()) {
            $('.navbar-brand img').addClass('shrink');
        } else {
            $('.navbar-brand img').removeClass('shrink');
        }

        if($(window).scrollTop()) {
            $('.navbar').addClass('shrink');
        } else {
            $('.navbar').removeClass('shrink');
        }
    });

    

});

// TYPING

(function () {
    var CharacterPos = 0;
    var MsgBuffer = "";
    var TypeDelay = 200; 
    var NxtMsgDelay = 2000;
    var MsgIndex = 0;
    var delay;
    var MsgArray = ["on line casino","live betting","virtual sports "];
 
    function StartTyping() {
       var id = document.getElementById("typing-text");
       if (CharacterPos != MsgArray[MsgIndex].length) {
          MsgBuffer  = MsgBuffer + MsgArray[MsgIndex].charAt(CharacterPos);
          id.value = MsgBuffer+"_";
          delay = TypeDelay;
          id.scrollTop = id.scrollHeight; 
       } else {
          delay = NxtMsgDelay;
          MsgBuffer   = "";
          CharacterPos = -1;
          if (MsgIndex!=MsgArray.length-1){
            MsgIndex++;
          }else {
            MsgIndex = 0;
          }
        }
        CharacterPos++;
        setTimeout(StartTyping,delay);
    }
 StartTyping();
 })();

// JUMBOTRON
 function deferVideo() {

  $("video source").each(function() {
    var sourceFile = $(this).attr("data-src");
    $(this).attr("src", sourceFile);
    var video = this.parentElement;
    video.load();
  });

}
window.onload = deferVideo;


