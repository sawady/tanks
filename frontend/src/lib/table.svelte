<script lang="ts">
	export let columns: { title: string; field: string }[] = [];
	export let items = [];
</script>

<table>
	<tr>
		{#each columns as column}
			<th>{column.title}</th>
		{/each}
	</tr>
	{#each items as item}
		<tr>
			{#each columns as column}
				<td>{item[column.field]}</td>
			{/each}
		</tr>
	{/each}
</table>
