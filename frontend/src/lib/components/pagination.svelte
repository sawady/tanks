<script>
	export let page = 1;
	export let onNext;
	export let onPrev;

	function next() {
		page += 1;
		onNext(page);
	}

	function prev() {
		page = page - 1;
		if (page === 0) {
			page = 1;
		} else {
			onPrev(page);
		}
	}
</script>

<div class="pagination">
	<button class="btn-rounded btn-primary" on:click={prev}>{'<'}</button>
	<button class="btn-rounded btn-primary">{page}</button>
	<button class="btn-rounded btn-primary" on:click={next}>{'>'}</button>
</div>

<style>
	.pagination {
		margin-top: 15px;
	}
</style>
