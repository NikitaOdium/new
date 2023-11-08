<script>
	import ToDoItem from "./Todoitem.svelte";
	import {DataSelect} from "./Data";
    import ListToDo from "./DataStore";
    import Info from "./InfoToDoList.svelte";
    import AddToDoList from "./AddToDoList.svelte";

	let selected = 0;

	
    

	$: ShowAll = () => {return $ListToDo}
	$: ShowTrue = () => {return $ListToDo.filter(t => t.status == true )}
	$: ShowFalse = () => {return $ListToDo.filter(t => t.status == false )}
	$: funclist = [ShowAll, ShowTrue, ShowFalse]
	
	function removeFromList(event)
	{
		$ListToDo.splice(event.detail.id, 1)
		$ListToDo = $ListToDo;
    }
	

	//on:checkstatus = {(event) => {item.status =! item.status}} 
</script>

<div class = "flexclass" >
	<div>

<AddToDoList />

<fieldset>
	<legend> Фильтр </legend>

<select
		bind:value={selected}>

		{#each DataSelect as item}
			<option value={item.Id}>
				{item.text}
			</option>
		{/each}
	</select>
	
</fieldset>
{#each funclist[selected]()  as item, index}

	<ToDoItem  
	todoitem = {item} 
	todoIndex = {index} 
	on:ondelete = {removeFromList} 
	on:checkstatus  = {(event) => {item.status = event.detail.stat; $ListToDo = [...$ListToDo]}} 
	/>

{/each} 

<Info />

	</div>
</div>

<style> 

	.flexclass{
			display: flex;
			justify-content: center;
			flex-wrap: wrap;
		  	align-content: center;
			height: 100vh;
			background: rgb(25, 47, 107);
			color: white;
			
	}
</style> 