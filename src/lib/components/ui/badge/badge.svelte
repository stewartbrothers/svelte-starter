<script lang="ts">
	import Card from '../card/card.svelte';

	let { src = 'logo.png', alt = 'AdsLatte Login', badgeCss = '' } = $props();
</script>

<Card
	class="z-10 mx-24 -mt-8 flex max-w-64 items-center justify-center rounded-2xl border-stone-500 {badgeCss} p-5"
>
	<img {src} {alt} class="size-24 text-center" />
</Card>
