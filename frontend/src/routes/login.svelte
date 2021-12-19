<script>
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faUser } from '@fortawesome/free-solid-svg-icons';
	import { goto } from '$app/navigation';

	function login() {
		goto('/opds/admin');
	}
</script>

<div class="login">
	<div class="login-screen">
		<div class="title">
			<h1><Fa icon={faUser} /> Login</h1>
		</div>
		<div class="form">
			<div class="control-group">
				<input type="text" class="login-field" value="" placeholder="username" id="login-name" />
			</div>

			<div class="control-group">
				<input
					type="password"
					class="login-field"
					value=""
					placeholder="password"
					id="login-pass"
				/>
			</div>

			<div class="control-group">
				<select name="cars" id="cars">
					<option value="PLANT">Plant</option>
					<option value="OPDS">OPDS</option>
				</select>
			</div>

			<button class="btn btn-primary btn-large" on:click={login}>login</button>
			<!-- <a class="login-link" href="#">Lost your password?</a> -->
		</div>
	</div>
</div>

<style>
	.login {
		background-color: #3498db;
		height: 100vh;
		padding: 100px;
	}

	.login-screen {
		background-color: #fff;
		padding: 20px;
		border-radius: 5px;
		width: 300px;
		margin: auto;
	}

	.login-link {
		font-size: 12px;
		color: #444;
		display: block;
		margin-top: 12px;
	}
</style>
