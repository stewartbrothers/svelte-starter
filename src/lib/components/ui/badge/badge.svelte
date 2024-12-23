<script lang="ts" module>
	import Card from '../card/card.svelte';

	let src = '/logo.png';
	let alt = 'AdsLatte Login';
</script>

<Card
	class="z-10 mx-24 -mt-8 flex max-w-64 items-center justify-center bg-white border-slate-700 rounded-2xl p-5"
>
	<img {src} {alt} class="size-24 text-center" />
</Card>
