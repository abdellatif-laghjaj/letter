const update_now_btn = document.querySelector('.update-now-btn');

//hnaya atbadal link bdak link liba4i ntaya
const youtube_url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';

update_now_btn.addEventListener('click', openYouTube(youtube_url));

function openYouTube(youtube_url) {
    window.open(youtube_url, '_blank');
}