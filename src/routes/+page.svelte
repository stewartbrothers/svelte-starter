<script lang="ts">
	import { Button } from '$lib/components/ui//button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { GoogleAuth } from '$lib/components/ui/google-auth/index';
	import { Badge } from '$lib/components/ui/badge/index';

	let { data } = $props();
</script>

<div
	class="lg:max-w-4/5 container relative m-10 mx-auto h-[900px] flex-col items-center justify-center rounded-2xl bg-stone-100 dark:bg-zinc-950 sm:grid md:grid lg:grid-cols-2 lg:px-0"
>
	<Button href="/auth" variant="ghost" class="absolute right-4 top-4 md:right-8 md:top-8">
		Login
	</Button>
	<div
		class="relative hidden h-full flex-col rounded-l-2xl border bg-muted bg-cover bg-center p-10 text-white dark:border-r lg:flex"
		style="background-image: url('/adslatte.png');"
	>
		<div class="relative z-20 flex items-center text-3xl font-bold">
			<h1 class="text-3xl">AdsLatte</h1>
		</div>
	</div>
	<div class="lg:p-8">
		<div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
			<form method="POST">
				<Card.Root class="mx-auto mt-8 max-w-sm">
					<Badge />
					<Card.Header>
						<Card.Title class="text-2xl">Signup</Card.Title>
						<Card.Description>Enter your email to create to your account</Card.Description>
					</Card.Header>
					<Card.Content>
						<div class="grid gap-4">
							<div class="grid gap-2">
								<Label for="email">Email</Label>
								<Input id="email" type="email" name="email" placeholder="me@example.com" required />
							</div>
							<div class="grid gap-2">
								<div class="flex items-center">
									<Label for="password">Password</Label>
								</div>
								<Input id="password" name="password" type="password" required />
							</div>
							<div class="grid gap-2">
								<div class="flex items-center">
									<Label for="cPassword">Confirm Password</Label>
								</div>
								<Input id="cPassword" name="cPassword" type="password" required />
							</div>
							<Button type="submit" class="w-full">Create Account</Button>
							<hr />
							<GoogleAuth />
						</div>
					</Card.Content>
				</Card.Root>
			</form>
			<p class="px-8 text-center text-sm text-muted-foreground">
				By continuing, you agree to our
				<a href="/terms" class="underline underline-offset-4 hover:text-primary">
					Terms of Service
				</a>
				and
				<a href="/privacy" class="underline underline-offset-4 hover:text-primary">
					Privacy Policy
				</a>
				.
			</p>
		</div>
	</div>
</div>
