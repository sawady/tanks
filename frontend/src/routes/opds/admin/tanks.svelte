<script>
	import Table from '../../../lib/components/table.svelte';
	import Pagination from '../../../lib/components/pagination.svelte';
	import { onMount } from 'svelte';

	let items;
	onMount(async () => {
		await fetch(`http://localhost:3001/tanks`)
		.then(r => r.json())
		.then(data => {
			items = data.items;
		});
	})

	const columns = [
		{
			title: 'Serial Number',
			field: 'serialNumber'
		},
		{
			title: 'Lot',
			field: 'lot'
		},
		{
			title: 'Manufacturer',
			field: 'manufacturer'
		},
		{
			title: 'Gas Type',
			field: 'gasType'
		}
	];

	function onNext(page) {
		console.log('despues ' + page);
	}

	function onPrev(page) {
		console.log('antes ' + page);
	}
</script>

<h1>Tanks</h1>

<div class="header">
	<button class="btn btn-primary">Add tank</button>
</div>

<Table {columns} {items} />

<Pagination {onNext} {onPrev} />
