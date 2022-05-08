<script>
    import ConfirmIcon from './icons/Confirm.svelte';

    export let id;
    export let text;
    export let done;
    export let last;
</script>

<li class:last={last} class:done={done}>
    <section class="text-section">
        <div>{text}</div>
    </section>
    <section class="btn-section">
        <div class="btn-wrapper">
            <button 
                class="confirm-btn" 
                class:done={done}
                on:click
            >
                {#if done}
                  <ConfirmIcon color="#A7AFFE"/>
                {/if}
            </button>
        </div>
    </section>
</li>

<style>
    li {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1.6rem;
        margin-bottom: 1.2rem;
        font-weight: 500;
        background: #f9f9f9;
    }

    li .text-section div {
        font-size: 1.6rem;
        line-height: 2.3rem;
        color: #1c1c1c;
    }

    li.done {
        background: #A7AFFE;
    }

    li.done .text-section div {
        color: #4D4D5C;
    }

    li.last {
        margin-bottom: 0;
    }

    li .confirm-btn {
        width: 2.2rem;
        height: 2.2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        border-radius: 50%;
        border: 0.2rem solid #999;
        cursor: pointer;
    }

    li .confirm-btn.done {
        background: #fff;
        border: none;
        box-shadow: 0 0 0.1rem rgba(0, 0, 0, 0.15);
        padding-left: 0.5rem;
    }
</style>