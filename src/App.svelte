<script>
	import ToDoApp from "./ToDoApp.svelte";
	import AddToDoList from "./AddToDoList.svelte";
	import CompSelect from "./CompSelect.svelte";
	import Info from "./InfoToDoList.svelte";
	import tegTest from "./tegH1.svelte";
	import SignIn from "./SingIn.svelte";
	import { supauser } from "./DataStore";
	import { supabase } from "./DataStore";
	import { onMount } from "svelte";
	import FormYup from "./form.svelte";
	

	const options = [
		{ compName: 'ToDoApp', component: ToDoApp },
		{ compName: 'CompSelect', component: CompSelect },
		{ compName: 'Info', component: Info },
	    { compName: 'AddToDoList', component: AddToDoList},
	    { compName: 'tegTest', component: tegTest}
	];
	let selected = options[0];

	let data;
	onMount(async () => {
		let n = await supabase.from("ToDo").select("User_ID,Checked,Task");
		console.log("N", n);
		data = n.data;
	});

	let comp = null;
	function toggleComp() {
		comp = SignIn;
	}
	function hideSignIn() {
		comp = null;
	}
</script>

<button on:click={async () => {let n = await supabase.from("ToDo").insert(
	{User_ID: "x09a6e171-a591-49ab-8a1a-05138f902c7e",
	Checked: 0,
	Task: "Five"})}}> Test </button>

<button on:click={toggleComp}>Comp</button>

{#if $supauser.user != null }
				<p>x{$supauser.user.id}</p>
			{/if}
	
			<svelte:component this={comp} hide={hideSignIn}/>	

{#if data}

	{#each data as item}
		<div style="display:flex; flex-direction:column">
			<p>{item.User_ID}</p>
			<p>{item.Checked}</p>
			<p>{item.Task}</p>
		</div>
	{/each}
{/if}

<!-- <select bind:value={selected}>
	{#each options as option}
		<option value={option}>{option.compName}</option>
	{/each}
</select>
<svelte:component this={selected.component} />  -->
<FormYup />

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
