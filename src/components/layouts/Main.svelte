<script>
    import TodoItem from '../todo-item.svelte';
    export let todos;

    $: lastIndex = todos.length - 1;

    function handleClick(todo, index) {
        const isDone = todo.done;
        if(isDone) {
            return;
        }
        todo.done = true;
        todos[index] = todo;
        todos = todos;
    }
</script>

<main>
    <ul class="todos">
        {#each todos as todo, index (todo.id)}
            <TodoItem 
            {...todo} 
            last={index === lastIndex}
            on:click={() => handleClick(todo, index)}
        />
        {/each}
    </ul>
    {todos.length}
</main>