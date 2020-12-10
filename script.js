$(document).ready(function () {
    var apiKey = ''
    var queryURL = ''

    $('#anime-home-btn').on('click', function () {
        console.log('button was clicked')
    })

    $('#liveaction-home-btn').on('click', function () {
        console.log('button was clicked')
    })
})

// Code below is for the video player
   // This code loads the IFrame Player API code asynchronously.
   var tag = document.createElement('script');

   tag.src = "https://www.youtube.com/iframe_api";
   var firstScriptTag = document.getElementsByTagName('script')[0];
   firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

   // This function creates an <iframe> (and YouTube player) after the API code downloads.
   var player;
   function onYouTubeIframeAPIReady() {
     player = new YT.Player('player', {
       height: '390',
       width: '640',
       videoId: 'EzOr8Gglf3k',
       events: {
         'onReady': onPlayerReady,
         'onStateChange': onPlayerStateChange
       }
     });
   }

   // The API will call this function when the video player is ready.
   function onPlayerReady(event) {
     event.target.playVideo();
   }

   // The API calls this function when the player's state changes.
   // The function indicates that when playing a video (state=1),
   // the player should play for six seconds and then stop.
   var done = false;
   function onPlayerStateChange(event) {
     if (event.data == YT.PlayerState.PLAYING && !done) {
       setTimeout(stopVideo, 6000);
       done = true;
     }
   }
   function stopVideo() {
     player.stopVideo();
   }