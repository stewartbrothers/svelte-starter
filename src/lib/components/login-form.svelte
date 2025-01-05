<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { GoogleAuth } from '$lib/components/ui/google-auth/index';
	import { FBAuth } from '$lib/components/ui/fb-auth/index';
	import { Badge } from '$lib/components/ui/badge/index';
</script>

<div class="container mx-auto max-w-sm px-4">
	<Card.Root class="mx-auto max-w-sm">
		<Badge />
		<Card.Header>
			<Card.Title class="text-2xl">Login</Card.Title>
			<Card.Description>Enter your email below to login to your account</Card.Description>
		</Card.Header>
		<Card.Content>
			<div class="grid gap-4">
				<div class="grid gap-2">
					<Label for="email">Email</Label>
					<Input
						id="email"
						tabindex="1"
						type="email"
						name="email"
						placeholder="me@example.com"
						required
					/>
				</div>
				<div class="grid gap-2">
					<div class="flex items-center">
						<Label for="password">Password</Label>
						<a href="##" class="ml-auto inline-block text-sm underline" tabindex="4">
							Forgot your password?
						</a>
					</div>
					<Input id="password" tabindex="2" name="password" type="password" required />
				</div>
				<Button type="submit" class="w-full" tabindex="3">Login</Button>
				<hr />
				<GoogleAuth />
				<FBAuth />
			</div>
			<div class="mt-4 text-center text-sm">
				Don't have an account?
				<a href="/" class="underline"> Sign up </a>
			</div>
		</Card.Content>
	</Card.Root>
</div>
