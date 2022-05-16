<script>
    import {todos} from '../../store/todos';
    let text;
    let target;

    function handleSubmit() {
        if(text) {
            todos.addTodo(text);
        }
        target.value = '';
    }
</script>

<footer>
    <form on:submit|preventDefault={handleSubmit}>
        <section class="input-section">
            <input 
                type="text" 
                bind:value={text}
                bind:this={target}
            >
        </section>
        <section class="submit-section">
            <button>추가</button>
        </section>
    </form>
</footer>

<style>
    footer {
        margin-top: 2.4rem;
    }

    footer form {
        display: grid;
        grid-template-columns: 0.7fr 0.3fr;
    }

    footer form section {
        height: 3.6rem;
    }

    footer form section.submit-section {
        margin-left: 1.2rem;
    }

    footer form input {
        width: 100%;
        height: 100%;
        border: 0.1rem solid #ddd;
        font-size: 1.4rem;
        line-height: 1.9rem;
        padding: 0.8rem;
    }

    footer form input:focus {
        outline: none;
        border: 0.1rem solid #A7AFFE;
    }

    footer form button {
        width: 100%;
        height: 100%;
        cursor: pointer;
        background: #A7AFFE;
        color: #fff;
        font-size: 1.4rem;
        line-height: 1.9rem;
        border: 0.1rem solid #ddd;
        margin: 0;
        padding: 0;
    }
</style>