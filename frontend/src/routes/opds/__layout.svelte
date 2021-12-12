<script>
	import Fa from 'svelte-fa/src/fa.svelte';
	import {
		faTable,
		faUser,
		faPaperclip,
		faGasPump,
		faFax
	} from '@fortawesome/free-solid-svg-icons';
</script>

<div class="nav">
	<div><Fa icon={faTable} /> Tanks System</div>
	<a href="/login">logout</a>
</div>

<div class="sidebar">
	<div class="sidebar-item">
		<Fa icon={faUser} /> <a href="/opds/admin">My profile</a>
	</div>
	<div class="sidebar-item">
		<Fa icon={faPaperclip} /> <a href="/opds/admin/procedures">Procedures</a>
	</div>
	<div class="sidebar-item">
		<Fa icon={faFax} /> <a href="/opds/admin/plants">Plants</a>
	</div>
	<div class="sidebar-item"><Fa icon={faGasPump} /> <a href="/opds/admin/tanks">Tanks</a></div>
</div>

<div class="content">
	<slot />
</div>

<style>
	.nav {
		padding: 15px;
		background-color: #2c2c2c;
		color: white;
		position: fixed;
		top: 0;
		width: 100%;
		font-weight: bold;
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: space-between;
		box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
		font-style: italic;
	}

	.sidebar {
		position: fixed;
		height: 100vh;
		width: 200px;
		background-color: #3498db;
		color: white;
		padding: 20px 15px;
	}

	.sidebar-item {
		margin-bottom: 25px;
	}

	.sidebar-item > a {
		margin-left: 5px;
	}

	.content {
		margin-top: 48px;
		margin-left: 200px;
		padding: 30px;
	}

	a {
		color: white;
		font-weight: bold;
	}

	a:link {
		text-decoration: none;
	}

	a:visited {
		text-decoration: none;
	}

	a:hover {
		text-decoration: none;
	}

	a:active {
		text-decoration: none;
	}
</style>
