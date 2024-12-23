<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { GoogleAuth } from '$lib/components/ui/google-auth/index';
	import { Badge } from '$lib/components/ui/badge/index';
</script>

<Card.Root class="mx-auto mt-8 max-w-sm">
	<Badge />
	<Card.Header>
		<Card.Title class="text-2xl">Signup</Card.Title>
		<Card.Description>Enter your email to create to your account</Card.Description>
	</Card.Header>
	<Card.Content>
		<form method="POST">
			<div class="grid gap-4">
				<div class="grid gap-2">
					<Label for="email">Email</Label>
					<Input id="email" type="email" placeholder="m@example.com" required />
				</div>
				<div class="grid gap-2">
					<div class="flex items-center">
						<Label for="password">Password</Label>
					</div>
					<Input id="password" type="password" required />
				</div>
				<div class="grid gap-2">
					<div class="flex items-center">
						<Label for="cPassword">Confirm Password</Label>
					</div>
					<Input id="cPassword" type="password" required />
				</div>
				<Button type="submit" class="w-full">Create Account</Button>
				<hr />
				<GoogleAuth />
			</div>
		</form>
	</Card.Content>
</Card.Root>
