<script lang="ts" module>
	import Card from '../card/card.svelte';

	let src = '/favicon.png';
	let alt = 'Badge';
</script>

<Card
	class="z-10 mx-20 -mt-16 flex max-w-64 items-center justify-center bg-gradient-to-b from-black to-gray-700 p-5"
>
	<img {src} {alt} class="size-32 text-center" />
</Card>
