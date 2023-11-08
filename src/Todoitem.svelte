<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

    export let  todoitem;
    export let todoIndex;
	
	// function boolcheck(statusChek)
	// {
	// 	dispatch('checkstatus',
	// 	{
	// 		stat: statusChek.target.checked
	// 	}
	// 	)
	// }

	function filterevent(todoIndex){
		
		dispatch('ondelete',
		{
			id:  todoIndex
		})
	}
</script> 

<remove> </remove>
<div class = "tableflex">

	<!-- <input bind:checked={todoitem.status} type="checkbox"> -->
	<input on:change={(event) =>  dispatch('checkstatus', 
	{stat: event.target.checked})} 
	checked = {todoitem.status} type = "checkbox"/>
	
	<div class:checked={todoitem.status}>
		{todoitem.text}
	</div>	
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class = "delbutton" on:click={() => filterevent(todoIndex)}>&times;
    </div>
</div>


<style>
    .tableflex div:nth-child(2)
	{
		width: 100%;
	}

	.tableflex 
	{
		display: flex;
		justify-content: center;
		align-items: center;	
	}

    .delbutton
	{
		font-size: 1.6em;
		font-style: italic;
		color: rgb(226, 111, 66);
	}
</style>