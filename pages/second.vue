<template lang="pug">
.container(:style="`background-color:${currentColor}`")
  .grid-container
    .card-wrapper(
      v-for="cube in cubeInfo" 
      :key="cube.id"
      @mousemove="handleMouseMove"
      @mouseleave="handleMouseLeave"
      @mouseover="handleMouseOver(cube)"
    )
      .card
        .square-container
          .hidden-text {{ cube.title }}
          img.square.front(
            src="/images/framebkg.png" 
          )
          .threeD-container
            img.square.back(
              src="/images/face.png" 
            )
</template>

<script setup>
// Previous script content remains the same, just moved the title element in template
import { ref } from 'vue'

const currentColor = ref('')
const currentTitle = ref('')

const handleMouseMove = (e) => {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  
  const frontRotateX = -(y - centerY) / 10;
  const frontRotateY = (x - centerX) / 10;
  
  const backRotateX = (y - centerY) / 15;
  const backRotateY = -(x - centerX) / 15;

  const frontImg = card.querySelector('.front');
  const container3d = card.querySelector('.threeD-container');

  frontImg.style.transform = `scale(1.1) rotateX(${frontRotateX}deg) rotateY(${frontRotateY}deg)`;
  container3d.style.transform = `scale(1.1) rotateX(${backRotateX}deg) rotateY(${backRotateY}deg)`;
}

const handleMouseLeave = (e) => {
  const card = e.currentTarget;
  const frontImg = card.querySelector('.front');
  const container3d = card.querySelector('.threeD-container');

  frontImg.style.transform = 'scale(1) rotateX(0deg) rotateY(0deg)';
  container3d.style.transform = 'scale(1) rotateX(0deg) rotateY(0deg)';
  currentColor.value = '';
  currentTitle.value = '';
}

const handleMouseOver = (cube) => {
	currentColor.value = cube.color;
	currentTitle.value = cube.title;
}

const cubeInfo = [
	{
		id: 1,
		title: 'About Me',
		description: 'First cube description',
		img: '/images/face.png',
		color: '#f2cc8f'
	},
	{
		id: 2,
		title: '3D Work & Whatever Else',
		description: 'Second cube description',
		img: '/images/face.png',
		color: '#d6ccc2'
	},
	{
		id: 3,
		title: 'Professional Work',
		description: 'Third cube description',
		img: '/images/face.png',
		color: '#d6ccc2'
	},
	{
		id: 4,
		title: 'Message Me',
		description: 'Sixth cube description',
		img: '/images/face.png',
		color: '#f2cc8f'
	}
];
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@600&display=swap');

.container {
	position: relative;
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: background-color 0.3s ease;
}

.sliding-title {
	position: fixed;
	top: 20%;
	left: 0;
	font-family: 'Barrio', sans-serif;
	font-size: 4rem;
	color: #333;
	white-space: nowrap;
	transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
	pointer-events: none;
	transform: translateX(0);
}

.sliding-title.active {
	transform: translateX(200%);
}

.grid-container {
	display: grid;
	grid-template-columns: repeat(2, 250px);
	gap: 2rem;
}

.card-wrapper {
	perspective: 1000px;
	transition: transform 0.1s ease;
}

.card {
	cursor: pointer;
	position: relative;
	transform-style: preserve-3d;
}

.square-container {
  position: relative;
  width: 250px;
  height: 250px;
}

.hidden-text {
	position: absolute;
	bottom: 40px;
	width: 100%;
	text-align: center;
	color: #333;
	z-index: 0;
	font-family: 'Barrio', sans-serif;
	padding: 0 10px;
	pointer-events: none;
}

.threeD-container {
	z-index: 2;
	position: absolute;
	width: 100%;
	height: 100%;
	transition: transform 0.1s ease;
}

.square {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  image-rendering: auto;
  -ms-interpolation-mode: bicubic;
}

.front {
  z-index: 1;
  transition: transform 0.1s ease;
}

.back {
  transition: transform 0.3s ease;
}

.card-wrapper:hover .square.back {
  transform: translateY(-25%);
}

/* Adjust your media queries as needed */
@media (max-width: 768px) {
	.square-container {
		width: 200px;
		height: 200px;
	}

	.hidden-text {
		font-size: 0.9rem;
}
}
</style>