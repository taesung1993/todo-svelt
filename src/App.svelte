<script>
	import Header from './components/layouts/Header.svelte';
	import Main from './components/layouts/Main.svelte';
	import Footer from './components/layouts/Footer.svelte';

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
            done: true,
            text: 'Angular Universal 공부하기'
        }
    ]

	function onCreateTodo(event) {
		const detail = event.detail;
		const newId = todos.length + 1;
		const newTodo = {
			id: newId,
			done: false,
			text: detail.text
		}
		todos = [...todos, newTodo];
	}
</script>

<section class="container">
	<Header/>
	<Main {todos}/>
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