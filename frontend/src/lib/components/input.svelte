<script>
  export let value;
  export let placeholder;
  export let label;
  export let name;
  export let id;
  export let type;
</script>

<label for={id}>{label}</label>
{#if type === 'password'}
  <input
    type="password"
    {id}
    {placeholder}
    {name}
    bind:value
  />
{:else if type === 'email'}
  <input
    type="email"
    {id}
    {placeholder}
    {name}
    bind:value
  />
{:else if type === 'number'}
  <input
    type="number"
    {id}
    {placeholder}
    {name}
    bind:value
  />
{:else if type === 'date'}
  <input
    type="date"
    {id}
    {placeholder}
    {name}
    bind:value
  />
{:else}
  <input
    type="text"
    {id}
    {placeholder}
    {name}
    bind:value
  />
{/if}