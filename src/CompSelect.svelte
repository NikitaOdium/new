<script>
    import ToDoItem from "./Todoitem.svelte";
    import {DataSelect} from "./Data";
    import ListToDo from "./DataStore";
    
    let selec = 0;
    
    $: ShowAll = () => {return $ListToDo}
        $: ShowTrue = () => {return $ListToDo.filter(t => t.status == true )}
        $: ShowFalse = () => {return $ListToDo.filter(t => t.status == false )}
        $: funclist = [ShowAll, ShowTrue, ShowFalse]
    
    
        function removeFromList(event)
        {
            $ListToDo.splice(event.detail.id, 1)
            $ListToDo = $ListToDo;
        }
        
    </script>
    
    
    <legend> Фильтр </legend>
    <select class="select select-error w-full max-w-xs"
            bind:value={selec}>
    
            {#each DataSelect as item}
                <option value={item.Id}>
                    {item.text}
                </option>
            {/each}
        </select>	
    
    
    {#each funclist[selec]()  as item, index}
    
        <ToDoItem  
        todoitem = {item} 
        todoIndex = {index} 
        on:ondelete = {removeFromList} 
        on:checkstatus  = {(event) => {item.status = event.detail.stat; $ListToDo = [...$ListToDo]}} 
        />
    
    {/each} 