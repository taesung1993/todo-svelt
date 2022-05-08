<script>
    import {createEventDispatcher} from 'svelte';

    export let memory;
    const dispatch = createEventDispatcher();
    let time = new Date();
    
    // 선언형 변수: time의 변화에 따라 자동으로 Update
    $: datetime = time.toISOString();
    $: todaySDate = `${time.getFullYear()}년 ${time.getMonth() + 1}월 ${time.getDate()}일`
    $: areSelected = !!Object.values(memory.selected).length;

    function onSendCommand(cmd) {
        dispatch('sendCommand', {
            cmd
        });
    }
</script>

<header>
    <section class="tools">
        <p class="today-date">
            <time {datetime}>
                {todaySDate}
            </time>
        </p>
        <ul class="btns">
            <li class="del-btn-wrapper">
                <button 
                    class="del-btn"
                    disabled={!areSelected}
                    on:click={() => onSendCommand('delete')}
                >
                    삭제
                </button>
            </li>
            <li class="clt-btn-wrapper">
                <button 
                    class="clt-btn"
                    disabled={!areSelected}
                    on:click={() => onSendCommand('complete')}
                    >
                    완료
                </button>
            </li>
        </ul>
    </section>
    <h1 class="title">
        TO DO LIST
    </h1>
</header>

<style>
    .tools {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }

    .tools .today-date {
        color: #C3C7CF;
        font-size: 1.3rem;
        line-height: 1.9rem;
    }

    .tools .btns {
        display: flex;
        align-items: center;
        list-style: none;
    }

    .tools .btns button {
        font-size: 1.3rem;
        line-height: 1.9rem;
        margin: 0;
        cursor: pointer;
        padding: 0.3rem 1.6rem;
        background: #A7AFFE;
        border: 0.1rem solid #ddd;
        color: #fff;
    }

    .tools .btns button[disabled] {
        opacity: 0.4;
    }

    .tools .btns button.clt-btn {
        margin-left: 0.4rem;
    }

    h1 {
        color: #4D4D5C;
        font-size: 2.2rem;
        line-height: 3rem;
        margin-top: 1.2rem;
    }
</style>