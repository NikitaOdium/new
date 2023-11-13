<script>

    import Info from "./InfoToDoList.svelte";
    import AddToDoList from "./AddToDoList.svelte";
	import SelectedCom from "./CompSelect.svelte";
	
</script>

<div class = "flexclass" >
	<div >

<AddToDoList />
<SelectedCom />
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
			background: rgb(112, 77, 121);
			color: rgb(255, 255, 255);		
	}
</style> 