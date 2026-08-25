/* youtube.js - Musik latar (BGM) via YouTube Iframe API */

var player;
let isPlaying = false;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('ytplayer', {
        height: '0', width: '0',
        videoId: SITE_CONFIG.youtubeVideoId,
        playerVars: {
            'autoplay': 1,
            'loop': 1,
            'playlist': SITE_CONFIG.youtubeVideoId,
            'controls': 0,
            'showinfo': 0,
            'rel': 0,
            'origin': window.location.origin || 'https://katarunit28.vercel.app'
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    event.target.setVolume(SITE_CONFIG.defaultVolume);
}

function togglePlay() {
    if (!player || !player.getPlayerState) return;
    const icon = document.getElementById('playPauseIcon');
    if (isPlaying) {
        player.pauseVideo();
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
    } else {
        player.playVideo();
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
    }
    isPlaying = !isPlaying;
}

function changeVolume(val) {
    if (player && player.setVolume) {
        player.setVolume(val);
    }
}
