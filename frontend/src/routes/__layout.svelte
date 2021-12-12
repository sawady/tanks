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
		width: 250px;
		margin: 0 auto;
	}

	.btn-primary {
		background: #3498db;
	}

	.btn-primary:hover {
		background-color: #2980b9;
	}
</style>
