const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const dubleJump = () => {
	mario.classList.add('dubleJump');
	mario.src = "gifs/darkscot.gif"

	setTimeout(()=>{
		mario.classList.remove('dubleJump');
		mario.src = "gifs/scotcorre.gif" 
	}, 500);
}


const jump = () => {
	mario.classList.add('jump');
	if (true) {
		mario.src = "gifs/pulo.gif" 
	}
	

	setTimeout(()=>{
		mario.classList.remove('jump');
		mario.src = "gifs/scotcorre.gif" 
	}, 500);
}

const loop = setInterval(() => {

	const pipePosition = pipe.offsetLeft;
	const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

	console.log(marioPosition);

	if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){

		pipe.style.animation = 'none';
		pipe.style.left = `${pipePosition}px`;

		mario.style.animation = 'none';
		mario.style.bottom = `${marioPosition}px`;

		mario.src = 'game-over.png';
		mario.style.width = '75px'
		mario.style.marginleft = '50px'

		clearInterval(loop);
	}

    }, 10);

document.addEventListener('keydown', jump);
document.addEventListener('keypress', dubleJump);