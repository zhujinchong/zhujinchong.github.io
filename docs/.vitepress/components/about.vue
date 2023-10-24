<script setup>
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
</script>
<template>
    <div class="home-wrapper">
        <div class="my-profile">
            <img src="/img/profile1.png" alt="Avatar">
        </div>
        <div class="my-title">Jinchong</div>
        <div class="my-tagline">Make each day count, Make learning a habit.</div>
        <div class="my-links">
            <div class="my-link"><img src="/img/envelope.svg" title="zhujinchong@gmail.com"></div>
            <div class="my-link">
                <a href="https://github.com/mingriyingying" target="_blank"><img src="/img/github.svg"></a>
            </div>
            <div class="my-link">
                <a href="https://github.com/mingriyingying/mingriyingying.github.io/issues" target="_blank">
                    <img src="/img/chat-text.svg"></a>
            </div>
            <div class="my-link"><img src="/img/rss.svg"></div>
        </div>
    </div>
</template>
<style>
.home-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100%;
    /* border: solid black; */
}

.my-profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 3%;
    /* padding: 20px; */
    border-radius: 50%;
    /* 设置圆形头像的边框半径 */
    background-color: #f5f5f5;
    /* 设置背景颜色 */
}

.my-profile img {
    width: 200px;
    /* 设置头像的宽度 */
    height: 200px;
    /* 设置头像的高度 */
    border-radius: 50%;
    /* 设置圆形头像的边框半径 */
    object-fit: cover;
    /* 保持头像的比例 */
}

.my-title {
    line-height: 64px;
    font-size: 56px;
    font-weight: 700;
    padding-top: 12px;
}

.my-tagline {
    line-height: 36px;
    font-size: 24px;
    font-weight: 500;
    padding-top: 12px;
    opacity: 0.8;
    /* color: rgba(60, 60, 67, 0.78); */
}

.my-links {
    padding-top: 12px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

}

.my-links .my-link {
    margin: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.my-links .my-link img {
    width: 20px;
    height: 20px;
}
</style>