<script>
  import Input from '../components/input.svelte';

  export let onSubmit;
  export let fields;
  let obj = {};

  // Convert fields from [ { name: 'name', value: 'Value' } ] to { name : Value } which is more useful when submitting a form
  const fieldsToObject = (fields) => {
    fields.forEach(field => obj[field.name] = field.value);
    return obj;
  }

  // When submitting, turn our fields representation into a JSON body
  const handleSubmit = () => onSubmit(fieldsToObject(fields));
</script>

<style>
  :global(input, select) {
    margin: 5px;
  }
</style>

<!-- When submitting, prevent the default action which would result in a refreshed page -->
<form on:submit|preventDefault={() => handleSubmit()}>
    <!-- Loop the fields and render the correct representation based on field.type -->
    {#each fields as field}
      <Input bind:value={field.value} id={field.name} name={field.name} label={field.label} placeholder={field.placeholder} type={field.type} />
    {/each}
    <button type="submit">Submit</button>
</form>