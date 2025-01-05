<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
</script>

<Card.Root class="w-[350px]">
	<form method="POST" action="?/create">
		<Card.Header>
			<Card.Title>Create Accostunt</Card.Title>
			<Card.Description>Setup a new account</Card.Description>
		</Card.Header>
		<Card.Content>
			<div class="grid w-full items-center gap-4">
				<div class="flex flex-col space-y-1.5">
					<Label for="name">Name</Label>
					<Input id="name" placeholder="Name of your project" />
				</div>
			</div>
		</Card.Content>
		<Card.Footer class="justify-right flex">
			<Button>Create</Button>
		</Card.Footer>
	</form>
</Card.Root>
