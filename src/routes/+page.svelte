<script lang="ts">
	import UserSignup from "$lib/components/signup-form.svelte";
	import { Button } from "$lib/components/ui//button/index.js";
</script>

<div
	class="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0"
>
	<Button
		href="/auth"
		variant="ghost"
		class="absolute right-4 top-4 md:right-8 md:top-8"
	>
		Login
	</Button>
	<div class="bg-muted relative hidden h-full flex-col p-10 text-white lg:flex dark:border-r">
		<div
			class="absolute inset-0 bg-cover bg-black bg-center"
			style="background-image: url('/adslatte.png');"
		></div>
		<div class="relative z-20 flex items-center text-3xl font-bold">
			<!-- <Command class="mr-2 h-6 w-6" /> -->
			<h1 class="text-3xl">AdsLatte</h1>
		</div>
		<!-- <div class="relative z-20 mt-auto rounded-2xl w-1/2 border border-white bg-zinc-800 p-2">
			<blockquote class="space-y-2">
				<p class="text-lg">
					Come in and take a load off
				</p>
				<footer class="text-sm">Have a drink</footer>
			</blockquote>
		</div> -->
	</div>
	<div class="lg:p-8">
		<div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
			<UserSignup />
			<p class="text-muted-foreground px-8 text-center text-sm">
				By continuing, you agree to our
				<a href="/terms" class="hover:text-primary underline underline-offset-4">
					Terms of Service
				</a>
				and
				<a href="/privacy" class="hover:text-primary underline underline-offset-4">
					Privacy Policy
				</a>
				.
			</p>
		</div>
	</div>
</div>