const musicTitle = document.querySelector('.musicTitle');
const aud = document.querySelector('#aud');
const mTitle = document.querySelector('.mTitle')
const musicIcon = document.querySelector('.musicIcon');
const backward = document.querySelector('.backward');
const playing = document.querySelector('.playing');
const forward = document.querySelector('.forward');
const playBlock = document.querySelector('#playBlock');
const musicSection  = document.querySelector('.musicSection ');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress-bar')

const musicPresent = ['1','2','3'];
let indexOfSong = 0;
function loadSongs(obj){
	mTitle.textContent = `${obj} Song`;
	musicIcon.src = `assets/img/${obj}.jpeg`;
	aud.src = `assets/music/${obj}.mp3`
}
loadSongs(musicPresent[indexOfSong]);
playing.addEventListener('click',()=>{
	const playingMusic  = musicSection.classList.contains('moving');
	if(playingMusic){
		
		pause();
	}
	else{
		
		play();
	}
});
// ------
function play(){
			musicSection.classList.add('moving');
			playing.querySelector('i.fas').classList.remove('fa-play');
			playing.querySelector('i.fas').classList.add('fa-pause');
			aud.play();
        }
// -----
function pause(){
			musicSection.classList.remove('moving');
			playing.querySelector('i.fas').classList.add('fa-play');
			playing.querySelector('i.fas').classList.remove('fa-pause');
			aud.pause();
}
// -----
function nextSong(){
		indexOfSong++;
	if (indexOfSong>musicPresent.length-1) {
		indexOfSong=0;
	}
	loadSongs(musicPresent[indexOfSong]);
	play();
}
forward.addEventListener('click',nextSong);
backward.addEventListener('click',()=>{
	indexOfSong--;
	if (indexOfSong<0) {
		indexOfSong = musicPresent.length-1;
	}
	loadSongs(musicPresent[indexOfSong]);
	play();
})
// ------------
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

// ------
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = aud.duration;

  aud.currentTime = (clickX / width) * duration;
}

aud.addEventListener('timeupdate', updateProgress);

//=====
progressBar.addEventListener('click', setProgress);

// ========
aud.addEventListener('ended', nextSong);