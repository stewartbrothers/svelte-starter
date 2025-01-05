<script lang="ts">
	import * as Sheet from '$lib/components/ui/sheet';
	import * as Table from '$lib/components/ui/table/index.js';
	import { Button } from '$lib/components/ui/button/index.js';

	let { data } = $props();
</script>

<Table.Root>
	<!-- <Table.Caption>Hello World!</Table.Caption> -->
	<Table.Header>
		<Table.Row>
			<Table.Head>Name</Table.Head>
			<Table.Head>URL</Table.Head>
			<Table.Head>Thumbnail</Table.Head>
			<Table.Head>Created</Table.Head>
			<Table.Head>Description</Table.Head>
			<Table.Head>Tags</Table.Head>
			<Table.Head>Code</Table.Head>
			<Table.Head>Time</Table.Head>
			<Table.Head>Status</Table.Head>
			<Table.Head>Has Overlays</Table.Head>
			<Table.Head>Version</Table.Head>
			<Table.Head>Category</Table.Head>
			<Table.Head>Ratio</Table.Head>
			<Table.Head>Format</Table.Head>
			<Table.Head>Type</Table.Head>
			<Table.Head>Hash</Table.Head>
			<Table.Head>In Use</Table.Head>
			<Table.Head>Content Type</Table.Head>
		</Table.Row>
	</Table.Header>
	<Table.Body>
		{#each data.rows as row}
			<Table.Row>
				<Table.Cell>{row.name}</Table.Cell>
				<Table.Cell>{row.url}</Table.Cell>
				<Table.Cell>{row.thumbnail}</Table.Cell>
				<Table.Cell>{row.created}</Table.Cell>
				<Table.Cell>{row.description}</Table.Cell>
				<Table.Cell>{row.tags}</Table.Cell>
				<Table.Cell>{row.code}</Table.Cell>
				<Table.Cell>{row.time}</Table.Cell>
				<Table.Cell>{row.status}</Table.Cell>
				<Table.Cell>{row.hasOverlays}</Table.Cell>
				<Table.Cell>{row.version}</Table.Cell>
				<Table.Cell>{row.category}</Table.Cell>
				<Table.Cell>{row.ratio}</Table.Cell>
				<Table.Cell>{row.format}</Table.Cell>
				<Table.Cell>{row.type}</Table.Cell>
				<Table.Cell>{row.hash}</Table.Cell>
				<Table.Cell>{row.inUse}</Table.Cell>
				<Table.Cell>{row.contentType}</Table.Cell>
			</Table.Row>
		{/each}</Table.Body
	>
</Table.Root>

<Sheet.Root>
	<Sheet.Trigger>Sheet</Sheet.Trigger>
	<Sheet.Content>
		<Sheet.Header>
			<Sheet.Title>I am Sheet</Sheet.Title>
			<Sheet.Description>Description</Sheet.Description>
		</Sheet.Header>
		<Sheet.Footer>
			<Button>Save</Button>
		</Sheet.Footer>
	</Sheet.Content>
</Sheet.Root>
