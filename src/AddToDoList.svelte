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
<div>
    <input class="input input-bordered join-item " bind:value={newItem} type="text" placeholder="new todo item..">
    <button class= "tooltip tooltip-right btn btn-active" data-tip="Add item"
on:click={addToList} disabled={!newItem}>
    Add
</button>
</div>

    