<slot />

<style global>
	* {
		box-sizing: border-box;
	}

	*:focus {
		outline: none;
	}

	body {
		font-family: Arial;
		margin: 0;
		color: #777;
	}

	.title {
		text-align: center;
		color: #777;
	}

	.form {
		text-align: center;
	}

	.control-group {
		margin-bottom: 10px;
	}

	input {
		background-color: #ecf0f1;
		border: 2px solid transparent;
		border-radius: 3px;
		font-size: 16px;
		font-weight: 200;
		padding: 10px 10px;
		width: 250px;
		transition: border 0.5s;
	}

	input:focus {
		border: 2px solid #3498db;
		box-shadow: none;
	}

	.btn {
		border: 2px solid transparent;
		color: #ffffff;
		font-size: 16px;
		line-height: 25px;
		padding: 10px 0;
		text-decoration: none;
		text-shadow: none;
		border-radius: 3px;
		box-shadow: none;
		transition: 0.25s;
		display: block;
		min-width: 130px;
		margin: 0 auto;
		cursor: pointer;
	}

	.btn-rounded {
		border: 2px solid transparent;
		color: #ffffff;
		border-radius: 3px;
		transition: 0.25s;
		margin: 0 auto;
		cursor: pointer;
	}

	.btn-large {
		width: 250px;
	}

	.btn-primary {
		background: #3498db;
	}

	.btn-primary:hover {
		background-color: #2980b9;
	}

	table {
		border-collapse: collapse;
		width: 100%;
	}

	th,
	td {
		text-align: left;
		padding: 8px;
	}

	tr:nth-child(even) {
		background-color: #f2f2f2;
	}

	th {
		background-color: #3498db;
		color: white;
	}

	.header {
		float: right;
		margin-bottom: 15px;
	}
</style>
