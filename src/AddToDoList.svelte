<script>
    import ListToDo from "./DataStore";

    let newItem = "";

    function addToList()
	{
		$ListToDo = [...$ListToDo, {text: newItem, status: false}];
		newItem = '';
	}

</script>

<h1> Список дел </h1>

<input bind:value={newItem} type="text" placeholder="new todo item..">
<button on:click={addToList} disabled={!newItem}>
    Add
</button>