<template lang='pug'>
.parent-container(:style='{ backgroundColor: backgroundColor }')
	.center-container
		//- Rotating wrapper starts at -90 and rotates in increments
		.rotating-wrapper(:style='{ transform: `rotate(${rotation - 90}deg)` }')
			.button-section
				c-button(:color='currentColor', @click="handleClickInParent")
			//- Work Option (appears at 90 degrees)
			Transition(name="slide")
				.option-section(
					v-if="showWorkOption"
					key="work"
				)
					.option-content
						.text-h6.text-uppercase Work & Such
			//- About Option (appears at 180 degrees)
			Transition(name="slide")
				.option-section(
					v-if="showAboutOption"
					key="about"
				)
					.option-content
						.text-h6.text-uppercase About Me
			//- Contact Option (appears at 270 degrees)
			Transition(name="slide")
				.option-section(
					v-if="showContactOption"
					key="contact"
				)
					.option-content
						.text-h6.text-uppercase Send Me a Message
</template>

<script setup>
const colorIndex = ref(0)
const rotation = ref(0)

const colors = [
	'#FF6B6B',	// coral red
	'#4ECDC4',	// turquoise
	'#45B7D1',	// sky blue
	'#96CEB4',	// sage green
	'#D4A5A5',	// dusty rose
]

const currentColor = computed(() => colors[colorIndex.value % colors.length])
const backgroundColor = computed(() => {
	const bgColorIndex = (colorIndex.value + 2) % colors.length
	return `${colors[bgColorIndex]}40`
})

// Computed properties to determine which option to show
const showWorkOption = computed(() => rotation.value === 90)
const showAboutOption = computed(() => rotation.value === 180)
const showContactOption = computed(() => rotation.value === 270)

const handleClickInParent = () => {
	colorIndex.value++
	const newRotation = (rotation.value + 90) % 360
	rotation.value = newRotation
}
</script>

<style scoped>
.parent-container {
	min-height: 100vh;
	min-height: 100dvh;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	padding: 1rem;
	margin: 0;
	position: relative;
	overflow-x: hidden;
	transition: background-color 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.center-container {
	position: relative;
	display: flex;
	align-items: center;
}

.rotating-wrapper {
	display: flex;
	align-items: center;
	transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
	transform-origin: center center;
}

.button-section {
	height: 150px;
	width: 150px;
	position: relative;
	z-index: 2;
	display: flex;
	align-items: center;
	justify-content: center;
}

.option-section {
	position: absolute;
	left: 100%;
	display: flex;
	align-items: center;
	width: 300px;
}

.option-content {
	padding: 1rem;
	padding-left: 2rem;
	white-space: nowrap;
}

/* Slide transition */
.slide-enter-active,
.slide-leave-active {
	transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
	width: 300px;
}

.slide-enter-from,
.slide-leave-to {
	width: 0;
	opacity: 0;
}

.slide-enter-to,
.slide-leave-from {
	width: 300px;
	opacity: 1;
}

.text-h6 {
	cursor: pointer;
	transition: opacity 0.3s ease;
}

.text-h6:hover {
	opacity: 0.7;
}
</style>