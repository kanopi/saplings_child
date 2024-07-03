/**
 * Hero Video JS.
 * @file
 */
(function (Drupal, drupalSettings) {
    /*
    * Get slider modal.
    */
    Drupal.behaviors.heroVideo = {
        attach: function (context) {
          var video = document.querySelector('.paragraph--type--sa-hero video');
          var videoControl = document.querySelector('#hero-video-control');

          // When the user clicks on the hero video
          window.onclick = function(event) {
            if (event.target.tagName == 'VIDEO' || event.target.id == 'hero-video-control' || event.target.classList.contains('bi-play') || event.target.classList.contains('bi-pause')) {
                // Start video and toggle button
                if (video.paused){
                    video.play();
                    videoControl.classList.add('pause');
                    videoControl.classList.remove('play');
                    videoControl.setAttribute('aria-label', 'Pause Video');
                // Pause video and toggle button
                } else {
                    video.pause();
                    videoControl.classList.add('play');
                    videoControl.classList.remove('pause');
                    videoControl.setAttribute('aria-label', 'Play Video');
                }
            }
          }

          // Event Listener to use Tab for Play/Pause Button
          videoControl.addEventListener('keypress', (event)=>{
            // event.keyCode or event.which  property will have the code of the pressed key
            let keyCode = event.keyCode ? event.keyCode : event.which;
            // 13 points the enter key
            if(keyCode === 13) {
              // call click function of the button
              video.click();
            }
          });

        },
      };
  })(Drupal, drupalSettings);
  