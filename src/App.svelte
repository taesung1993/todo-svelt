<script>
	import {onMount} from 'svelte';
	import Header from './components/layouts/Header.svelte';
	import Main from './components/layouts/Main.svelte';
	import Footer from './components/layouts/Footer.svelte';

	let memory = {
		ing: {},
		done: {},
		selected: {}
	}

	let todos = [
        {
            id: 1,
            done: false,
            text: '스벨트 공부하기'
        },
        {
            id: 2,
            done: false,
            text: '운동하기'
        },
        {
            id: 3,
            done: false,
            text: 'Angular Universal 공부하기'
        }
    ]

	$: ings = Object.values(memory.ing);
	$: dones = Object.values(memory.done);

	onMount(() => {
		divideTodos();
	})

	function divideTodos() {
		memory.done = {};
		memory.ing = {};

		for(let i=0; i<todos.length; i++) {
			const isDone = todos[i].done;
			const todoId = todos[i].id;
			if(isDone) {
				memory.done[todoId] = todos[i];
			} else {
				memory.ing[todoId] = todos[i];
			}
		}

		memory = memory;
	}

	function onCreateTodo(event) {
		const detail = event.detail;
		const newId = todos.length + 1;
		const newTodo = {
			id: newId,
			done: false,
			text: detail.text
		}
		todos = [...todos, newTodo];
		divideTodos();
	}

	function onReceivedCommand(event) {
		const cmd = event.detail.cmd;
		if(cmd === 'delete') {
			todos = todos.filter((todo) => !memory.selected[todo.id]);
		} else {
			todos = todos.map((todo) => {
				if(memory.selected[todo.id]) {
					todo.done = true;
				}
				return todo;
			});
		}
		memory.selected = {};
		divideTodos();
	}

	function onUpdateMemory(event) {
		memory = event.detail.memory;
	}

</script>

<section class="container">
	<Header {memory} 
			on:sendCommand={onReceivedCommand}/>
	<Main 
		{ings} {dones} {memory} 
		on:updateMemory={onUpdateMemory}
	/>
	<Footer on:create={onCreateTodo}/>
</section>

<style>
	.container {
		position: absolute;
		top: 40%;
		left: 50%;
		transform: translate(-50%, -40%);
		width: 100%;
		max-width: 42rem;
		border: 0.1rem solid #ddd;
		padding: 2.4rem;
	}
</style>