<script>
    let time = new Date();
    
    // 선언형 변수: time의 변화에 따라 자동으로 Update
    $: datetime = time.toISOString();
    $: todaySDate = `${time.getFullYear()}년 ${time.getMonth() + 1}월 ${time.getDate()}일`
</script>

<header>
    <p class="today-date">
        <time {datetime}>
            {todaySDate}
        </time>
    </p>
    <h1 class="title">
        TO DO LIST
    </h1>
</header>

<style>
    .today-date {
        color: #C3C7CF;
        font-size: 1.3rem;
        line-height: 1.9rem;
    }

    h1 {
        color: #4D4D5C;
        font-size: 2.2rem;
        line-height: 3rem;
        margin-top: 1.2rem;
    }
</style>