const artistName = document.querySelector('.artist-name');
const musicName = document.querySelector('.music-name');
const musicController = document.querySelector('audio');

const currentMusic = {
    title: 'Alcapone',
    artist: 'Jovem Dex',
    filename: '/assets/musics/jovem-dex-alcapone.mp3'
};

artistName.innerHTML = currentMusic.artist;
musicName.innerHTML = currentMusic.title;
musicController.src = currentMusic.filename;
 