<script>
	// import SignIn from "./SignIn.svelte";
	// import SignUp from "./Signup.svelte";

	import Form from "./form.svelte";

	import { supauser } from "./store";
	import Signup from "./Sign_In.svelte";
	import Todo from "./todo.svelte"

	let comp = null;

	function toggleComp() {
		comp = Signup; //SignIn //Form
	}
	function hideSignIn() {
		comp = null;
	}
	
		
	const progress = Math.random()

	
		
</script>


<main
	class="border border-gray-400 flex flex-col align-middle justify-between min-h-screen h-auto p-2 m-2"
>
	<!-- заготовка для top-меню -->

	<ul class="flex flex-row h-10 content-center flex-wrap px-3 bg-cyan-500 text-black">
		<li>
			<button on:click={toggleComp}>Вход</button>
		</li>
		<li>
			<button on:click={() => (comp = null)}>Скрыть</button>
		</li>
		{#if $supauser.user}
		    <li>
			    <button on:click={() => (comp = Todo)}>Список дел</button>
		    </li>
		{/if}
	</ul>

	<!-- <div class="flex flex-col items-center justify-center">
		
		{#if $supauser.user != null}
			<p>x{$supauser.user.id}</p>
		{/if}
	</div> -->
	<!-- tmp для проверки центрирования -->
	<!-- <p class="self-center">middle tmp</p> -->

	<!-- место для компонентов -->
	<div class="w-1/2  bg-sky-500/75 m-auto">
	    <svelte:component this={comp} hide={hideSignIn} class="m-auto " />
		
    </div>
	
	<div class=" circle p-2 bg-blue-300  text-black">
	</div>
</main>

<style>
	:global(body) {
		height: 100vh;
		background-color: rgb(235, 245, 245);
	}

	/* навигацию сделать компонентом */
	ul.flex li {
		margin-left: 1rem;
	}

	@media (max-width: 640px) {
		main {
			background-color: bisque;
		}
	}
	.circle {
  		
		  background: #c51c1c;
border: 0.1875em solid #000000;
border-radius: 50%;
box-shadow: 0.375em 0.375em 0 0 rgba(15, 28, 63, 0.125);
height: 5em;
width: 5em;
--width: 100px;
		--height: 100px;
		position: absolute;
		width: var(--width);
		height: var(--height);
		left: calc(50% - var(--width) / 2);
		top: calc(50% - var(--height) / 2);
		border-radius: 100px;
		
		
}


	
</style>

