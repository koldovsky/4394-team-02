let player = null;
let isPlaying = false;

function initializeVideoPlayer() {
    const playVideoInBackground = document.querySelectorAll('.history__video-wrapper');
    
    playVideoInBackground.forEach(playButton => {
        playButton.addEventListener('click', handleVideoClick);
    });
}

function handleVideoClick() {
    const videoId = this.getAttribute('data-video-id');
    const backgroundVideoContainer = document.querySelector('.history__background-video');
    const videoText = this.querySelector('.history__video-text');
    const playerContainer = document.getElementById('youtube-player');

    if (!videoId || !backgroundVideoContainer) return;

    if (!isPlaying) {
        if (!player) {
            if (!playerContainer) {
                const newPlayerDiv = document.createElement('div');
                newPlayerDiv.id = 'youtube-player';
                backgroundVideoContainer.appendChild(newPlayerDiv);
            }
            
            player = new YT.Player('youtube-player', {
                height: '100%',
                width: '100%',
                videoId: videoId,
                playerVars: {
                    'autoplay': 1,
                    'controls': 0,
                    'showinfo': 0,
                    'rel': 0,
                    'loop': 1,
                    'playlist': videoId,
                    'modestbranding': 1,
                    'playsinline': 1,
                    'mute': 1
                },
                events: {
                    'onReady': (event) => {
                        event.target.playVideo();
                        if (videoText) {
                            videoText.textContent = 'Pause Video';
                        }
                        backgroundVideoContainer.classList.add('history__background-video--active');
                        isPlaying = true;
                    },
                    'onError': (event) => {
                        console.error('YouTube Player Error:', event.data);
                    }
                }
            });
        } else {
            player.playVideo();
            if (videoText) {
                videoText.textContent = 'Pause Video';
            }
            backgroundVideoContainer.classList.add('history__background-video--active');
            isPlaying = true;
        }
    } else {
        if (player) {
            player.pauseVideo();
        }
        if (videoText) {
            videoText.textContent = 'Play Video';
        }
        backgroundVideoContainer.classList.remove('history__background-video--active');
        isPlaying = false;
    }
}

const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

window.onYouTubeIframeAPIReady = function() {
    initializeVideoPlayer();
};