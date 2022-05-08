<script>
    import TodoItem from '../todo-item.svelte';
    export let todos;
    export let memory;

    $: lastIndex = todos.length - 1;

    function onSelect(todo) {
        const todoId = todo.id;
        const isSelected = !!memory.selected[todoId];

        if(isSelected) {
            delete memory.selected[todoId];
        } else {
            memory.selected[todoId] = todo;
        }
        
        memory = memory;
    }
</script>

<main>
    <ul class="todos">
        {#each todos as todo, index (todo.id)}
            <TodoItem 
            {...todo} 
            last={index === lastIndex}
            memory={memory}
            on:click={() => onSelect(todo, index)}
        />
        {/each}
    </ul>
</main>

<style>
    main {
        margin-top: 2.4rem;
    }
</style>