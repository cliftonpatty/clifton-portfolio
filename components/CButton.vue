
<template lang="pug">

svg(
	xmlns='http://www.w3.org/2000/svg' 
	viewBox='0 0 1522.51 1528.89'
	style='transform:rotate(90deg);'
	@click='handleClick'
	:class='{ "svg-transition": true, "bounce-transition": shouldBounce }'
	)
	path(
		d='M1520.63,86.67c-3.44-26.15,9.63-63.22-21.58-76.3-1.41-.56-2.76-1-4.12-1.46-.04-2.15-.11-4.3-.13-6.45-3.01.06-6.03.17-9.04.36-21.07,1.63-42.19,1.67-63.34,1.27-109.07-.46-218.19-6.86-327.24-2.67-46.06,5.11-92.44,1.88-138.51,6.46-49.63,3.98-99.01,13.63-148.89,9.5-72.08-1.42-144.09-3.27-216.13-6.27-71.08.5-142.15,2.58-213.13,6.46-42.92,2.91-85.63-2.54-128.47-4.63-.46-.43-.89-.88-1.38-1.29-20.64-17.13-46.79-3.94-70.41-3.77-33.41,2.4-71.08,2.33-105.64,1.56C60.91.62,24.48,13.71,14.62,32.69-2.03,59.16-.95,92.13,1.18,122.23c1.44,23.07,5.17,46.33,7.65,69.39.87,28.26-3.83,56.34-2.08,84.62,1.63,21.09,1.67,42.21,1.27,63.34-.46,109.08-6.86,218.21-2.67,327.24,5.11,46.08,1.9,92.46,6.46,138.51,3.98,49.63,13.63,98.99,9.5,148.87-1.4,72.1-3.27,144.11-6.27,216.13.52,71.1,2.58,142.17,6.46,213.13,1.91,28.27.2,56.45-1.8,84.62-.68,3.53-1.29,7.02-1.97,10.35-10.43,16.15,2.82,39.5,21.66,40.2,34.86,8.4,71.22,9.27,106.91,7.58,14.61-.31,29.07-2.98,43.68-2.7,11.06,1.15,21.57,5.11,32.76,5.39,14.55-.24,33.33-.28,41.81-14.22,5.27-8.43,3.81-18.74-1.58-26.16-.06-.68-.13-1.37-.2-2.05-6.79-89.65-6.21-179.55-8.57-269.38-2.23-52.17-6.27-104.28-6.29-156.52.01-22.25-.78-44.47-1.82-66.69,76.74,6.35,154.75-2.59,231.76-1.24,91.25-.73,182.31,3.57,273.38,7.92.22,38.69,5.72,77.46,4.78,115.93-1.71,21.82-.48,43.98-3.01,65.78-9.99,25.69-17.62,64.29,17,73.88,19.26,6.48,39.55.31,58.64-3.84,27.74-4.22,55.81-5.49,83.7-8.29,64.73-.57,96.5,17.73,100.39-66.9-1.68-58.07-2.62-116.2-3.3-174.31,11.35-.34,22.71-.65,34.05-.81,53.92,2.7,108.08.77,161.78,6.84,35.01,6.33,54.13-6.34,55.12-42.79,1.01-14.24,1.63-28.71-.64-43.01-4.92-25.76-9.16-51.57-7.9-77.89,0-20.95.14-36.15,2.96-58.43,8.89-20.46-9.07-44.75-31.33-40.99-30.22-.58-60.57,2.24-90.86,1.82-38.3,1.09-76.63-1.55-114.85,2.02-6.28.58-12.56,1.09-18.85,1.59-2.23-52.82-1.88-105.66-.41-158.76-1.47-76.94-3.67-153.48,1.63-230.22-.46-33.31,1.1-65.87-.66-98.66,76.49-2.81,152.9-7.98,229.1-14.9,9.69-.74,19.39-1.32,29.09-1.82,71,3.8,142.09,4.66,213.15,6.85,1.59,2,3.35,3.88,5.52,5.48,19.86,11.73,38.75-8.81,36.35-28.87,1.78-20.87,5.1-41.53,7.09-62.39,2.59-27.02,4.19-54.2.85-81.21ZM584.22,749.05c-51.5,4.48-102.52-6.31-153.97-3.15-55.15,2.75-110.14,7.86-165.39,8.5-6.68,1.01-14.58.91-22.9.66,1.6-74.19,4.54-148.35,7.15-222.52,5.95-90.66,6.13-181.51,9.54-272.27,5.63-.42,11.25-.88,16.88-1.44,72.95-5.52,146.07-6.18,219.17-7.5,2.87,3.67,6.42,6.95,10.88,9.5,9.59,5.43,20.19,6.36,30.95,6.36,2.85,0,5.7-.06,8.55-.13,4.84-.12,9.65-.23,14.38-.02,41.52.02,83.02-.77,124.5-1.67,19.9.02,39.8.12,59.71.24-.07,4.93.09,9.82.06,14.3.19,20.84.75,41.69,2.06,62.49,2.65,43.52,7.25,86.84,8.98,130.42,1.46,16.36-2.48,34.84,5.4,49.81.14,71.22-5.29,142.63,3.94,213.47.49,4.44.72,8.93.88,13.43-60.12-.22-120.67-2.46-180.76-.49Z'
		:fill='color' )

</template>

<script setup lang="ts">

// Import the useTheme helper to expose theme getters and setters
import { useTheme } from 'vuetify';
const theme = useTheme();

// Import the useDisplay from Vuetify so we can see current breakpoint info
import { useDisplay } from 'vuetify';

//------------------------------------------------------------------------------

const rotation = ref(0)
const colorIndex = ref(0)
const shouldBounce = ref(false)

const display = useDisplay();

const emit = defineEmits(['click'])

const isMobile = computed( () =>
{
	return [ 'xs', 'sm' ].includes( display.name.value );
} );

// Using TS to define props
const props = defineProps<{
	color    : string;
}>();

//------------------------------------------------------------------------------

const handleClick = () => {
// Emit the click event
emit('click')
}

</script>

<style scoped>
.svg-transition {
transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.bounce-transition {
transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) !important;
}

.svg-transition path {
transition: fill 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

</style>