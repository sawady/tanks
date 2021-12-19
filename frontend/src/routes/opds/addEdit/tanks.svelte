<script>
// @ts-nocheck
  import Form from '../../../lib/components/form.svelte';

  //   Our field representation, let's us easily specify several inputs
  let fields = [
    {
      name: "serialNumber",
      type: "text",
      value: "",
      placeholder: "Enter serial number...",
      label: "Serial Number",
    },
    {
      name: "lot",
      type: "text",
      value: "",
      placeholder: "Enter lot...",
      label: "Lot",
    },
    {
      name: "manufacturer",
      type: "text",
      value: "",
      placeholder: "Enter manufacturer...",
      label: "Manufacturer",
    },
    {
      name: "gasType",
      type: "text",
      value: "",
      placeholder: "Enter gas type...",
      label: "Gas Type",
    },
  ];

  async function addTank(body) {
    console.log(body);
    await fetch(`http://localhost:3001/tanks`, {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      mode: 'cors',
      body: JSON.stringify(body)
    })
		.then(r => r.json())
		.then(data => {
      // Redirigir al listado
			console.log(data);
		});
  }
</script>

<Form
  onSubmit={(body) => {
    addTank(body);
  }}
  {fields} />