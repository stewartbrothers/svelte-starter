<script lang="ts">
	import AppSidebar from '$lib/components/app-sidebar.svelte';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import type { LayoutData } from './$types';
	import { user } from '$lib/stores/user.svelte';
	import { account } from '$lib/stores/account.svelte';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();

	$user.username = data.user.username;
	$user.email = data.user.email;
	$user.avatar = data.user.avatar;
	$user.name = data.user.name;

	if (data.account) {
		$account = data.account;
	}
</script>

<Sidebar.Provider>
	<AppSidebar {user} accounts={data.accounts} menu={data.menu} />
	<Sidebar.Inset>
		<header class="flex h-16 shrink-0 items-center gap-2">
			<div class="flex items-center gap-2 px-4">
				<Sidebar.Trigger class="-ml-1" />
				<Separator orientation="vertical" class="mr-2 h-4" />
				<!-- <Breadcrumb.Root>
					<Breadcrumb.List>
						<Breadcrumb.Item class="hidden md:block">
							<Breadcrumb.Link href="#">Building Your Application</Breadcrumb.Link>
						</Breadcrumb.Item>
						<Breadcrumb.Separator class="hidden md:block" />
						<Breadcrumb.Item>
							<Breadcrumb.Page>Data Fetching</Breadcrumb.Page>
						</Breadcrumb.Item>
					</Breadcrumb.List>
				</Breadcrumb.Root> -->
			</div>
		</header>
		<div class="flex flex-1 flex-col gap-4 p-4 pt-0">
			{@render children()}
		</div>
	</Sidebar.Inset>
</Sidebar.Provider>
