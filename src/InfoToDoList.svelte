<script>
    import ListToDo from "./DataStore";
    
        $: All = $ListToDo.length
        $: Done = $ListToDo.filter(t => t.status == true ).length
        $: NotDone = $ListToDo.filter(t => t.status == false ).length
    
    </script>
    
    <div>
    
    <p>{All} Всего заданий</p>
    <p>{Done} Готовых заданий</p>
    <p>{NotDone} Не готовых заданий</p>
    
    </div>
    
    