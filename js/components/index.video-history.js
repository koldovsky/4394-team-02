function playVideo() {
    const playVideoInBackground = document.querySelectorAll('.history__video-wrapper');

    playVideoInBackground.forEach(playButton => {
        playButton.addEventListener('click', function (event) {
            const videoId = this.getAttribute('data-video-id');
            const backgroundVideoContainer = document.querySelector('.history__background-video');
            const videoText = this.querySelector('.history__video-text');

            if (videoId && backgroundVideoContainer) {
                const iframe = document.createElement('iframe');
                iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`;
                iframe.allow = 'autoplay; encrypted-media';
                iframe.allowFullscreen = true;
                iframe.classList.add('history__background-iframe');

                backgroundVideoContainer.innerHTML = '';
                backgroundVideoContainer.appendChild(iframe);

                backgroundVideoContainer.classList.add('history__background-video--active');

                if (videoText) {
                    videoText.textContent = 'Video Playing';
                }
            }
        });
    });
}

playVideo();