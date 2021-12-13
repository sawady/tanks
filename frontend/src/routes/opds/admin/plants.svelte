<script>
	import Table from '../../../lib/table.svelte';
	import Pagination from '../../../lib/pagination.svelte';

	const columns = [
		{
			title: 'Name',
			field: 'name'
		},
		{
			title: 'CUIT',
			field: 'cuit'
		},
		{
			title: 'Address',
			field: 'address'
		}
	];

	const items = [
		{
			name: 'Cosugas',
			cuit: '123123123',
			address: 'Colon 355 1º E'
		},
		{
			name: 'Renault',
			cuit: '123123123',
			address: 'Colon 355 1º E'
		},
		{
			name: 'Ford',
			cuit: '123123123',
			address: 'Colon 355 1º E'
		}
	];

	function onNext(page) {
		console.log('despues ' + page);
	}

	function onPrev(page) {
		console.log('antes ' + page);
	}
</script>

<h1>Plants</h1>

<div class="header">
	<button class="btn btn-primary">Add plant</button>
</div>

<Table {columns} {items} />

<Pagination {onNext} {onPrev} />
