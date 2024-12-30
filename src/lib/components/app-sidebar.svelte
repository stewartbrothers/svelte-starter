<script lang="ts">
	import NavMenu from '$lib/components/nav-menu.svelte';
	import NavSecondary from '$lib/components/nav-secondary.svelte';
	import NavUser from '$lib/components/nav-user.svelte';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import Command from 'lucide-svelte/icons/command';
	import type { ComponentProps } from 'svelte';

	let {
		ref = $bindable(null),
		user,
		account,
		menu,
		secondary,
		...restProps
	}: ComponentProps<typeof Sidebar.Root> = $props();
</script>

<Sidebar.Root bind:ref variant="inset" {...restProps}>
	<Sidebar.Header>
		<Sidebar.Menu>
			<Sidebar.MenuItem>
				<Sidebar.MenuButton size="lg">
					{#snippet child({ props })}
						<a href="##" {...props}>
							<div
								class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground"
							>
								<Command class="size-4" />
							</div>
							<div class="grid flex-1 text-left text-sm leading-tight">
								<span class="truncate font-semibold">{account.name}</span>
								<!-- <span class="truncate text-xs">{data.account.type}</span> -->
							</div>
						</a>
					{/snippet}
				</Sidebar.MenuButton>
			</Sidebar.MenuItem>
		</Sidebar.Menu>
	</Sidebar.Header>
	<Sidebar.Content>
		{#each menu as item}
			<NavMenu items={item.items} title={item.title} />
		{/each}
		<!-- <NavProjects projects={data.projects} /> -->
		<NavSecondary items={secondary} class="mt-auto" />
	</Sidebar.Content>
	<Sidebar.Footer>
		<NavUser {user} />
	</Sidebar.Footer>
</Sidebar.Root>
