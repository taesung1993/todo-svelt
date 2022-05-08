<script>
    import {createEventDispatcher} from 'svelte';
    import TodoItem from '../todo-item.svelte';
    export let memory;
    export let ings;
    export let dones;

    const dispatch = createEventDispatcher();

    $: lastIndex = ings.length - 1;

    function onSelect(todo) {
        const todoId = todo.id;
        const isSelected = !!memory.selected[todoId];

        if(isSelected) {
            delete memory.selected[todoId];
        } else {
            memory.selected[todoId] = todo;
        }

        dispatch('updateMemory', {
                memory: memory
        });
    }

</script>

<main>
    {#if ings.length}
        <ul class="todos">
            {#each ings as todo, index (todo.id)}
                <TodoItem 
                {...todo} 
                last={index === lastIndex}
                memory={memory}
                on:click={() => onSelect(todo)}
            />
            {/each}
        </ul>
    {/if}
    
    {#if dones.length}
        {#if ings.length}
            <hr/>
        {/if}
        <ul class="todos">
            {#each dones as todo, index (todo.id)}
                <TodoItem 
                {...todo} 
                last={index === lastIndex}
                memory={memory}
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