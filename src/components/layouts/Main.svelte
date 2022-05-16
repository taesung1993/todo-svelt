<script>
    import {todos} from '../../store/todos';
    import TodoItem from '../todo-item.svelte';

    $: doingList = $todos.filter((td) => !td.done);
    $: completedList = $todos.filter((td) => td.done);

    function onSelect(todo) {
        if(todos.isSelected(todo)) {
            todos.unSelectTodo(todo);
        } else {
            todos.selectTodo(todo);
        }
    }
</script>

<main>
    {#if doingList.length}
        <ul class="todos">
            {#each doingList as todo, index (todo.id)}
                <TodoItem 
                {todo} 
                last={index === doingList.length - 1}
                selected={todos.isSelected(todo)}
                on:click={() => onSelect(todo)}
            />
            {/each}
        </ul>
    {/if}
    
    {#if completedList.length}
        {#if doingList.length}
            <hr/>
        {/if}
        <ul class="todos">
            {#each completedList as todo, index (todo.id)}
                <TodoItem 
                {todo} 
                last={index === completedList.length - 1}
                on:click={() => onSelect(todo)}
            />
            {/each}
        </ul>
    {/if}
</main>

<style>
    main {
        margin-top: 2.4rem;
    }

    hr {
        margin: 2.4rem 0;
        border-color: #ddd;
    }
</style>