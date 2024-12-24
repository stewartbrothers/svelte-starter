<script lang="ts" module>
	import Card from '../card/card.svelte';

	let src = '/logo.png';
	let alt = 'AdsLatte Login';
</script>

<Card
	class="z-10 mx-24 -mt-8 flex max-w-64 items-center justify-center rounded-2xl border-stone-500 bg-white p-5"
>
	<img {src} {alt} class="size-24 text-center" />
</Card>
