<script lang="ts">
	import { Button } from '$lib/components/ui/button/index';
</script>

<div class="hidden flex-col md:flex">
	<div class="border-b">
		<div class="flex h-16 items-center px-4">Welcome</div>
		<div class="items-right flex h-16 px-4">
			<Button href="/auth">Login</Button>
		</div>
	</div>
</div>

Welcome
<Button href="/auth">Login</Button>
