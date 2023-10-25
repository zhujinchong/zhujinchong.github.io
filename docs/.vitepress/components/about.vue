<script setup>
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
</script>
<template>
    <div class="about-container">
        <div class="about">
            <div class="about-profile">
                <div class="name">James HongKong</div>
                <div>Make each day count, Make learning a habit.</div>
                <div class="link-container">
                    <div class="link">
                        <img src="/img/envelope.svg">
                        <div>zhujinchong@foxmail.com</div>
                    </div>
                    <div class="link">
                        <img src="/img/telephone.svg">
                        <div>no</div>
                    </div>
                </div>
            </div>
            <div class="title">Education</div>
            <div class="hr"></div>
            <div class="content">
                In a culmination of many years of MT research at Facebook, we’re excited to announce a
                major milestone: the first single massively MMT model that can directly translate 100×100 languages in any
                direction without
                relying on only English-centric data. Our single multilingual model performs as well as traditional
                bilingual models and achieved a 10 BLEU point improvement over English-centric multilingual models.
            </div>
            <div class="title">Education</div>
            <div class="hr"></div>
            <div class="content">
                In a culmination of many years of MT research at Facebook, we’re excited to announce a
                major milestone: the first single massively MMT model that can directly translate 100×100 languages in any
                direction without
                relying on only English-centric data. Our single multilingual model performs as well as traditional
                bilingual models and achieved a 10 BLEU point improvement over English-centric multilingual models.
            </div>
        </div>
    </div>
    <!-- <div class="home-wrapper">
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
    </div> -->
</template>
<style>
.about-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}

.about {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* justify-content: center; */
    width: 80%;
    height: 100%;
}

.about .name {
    line-height: 64px;
    font-size: 45px;
    font-weight: 700;
    padding-top: 20px;
}

.about .link-container {
    display: flex;
}

.about .link {
    display: flex;
    padding-right: 20px;
}

.about .link img {
    padding-right: 5px;
}

.about .title {
    line-height: 36px;
    font-size: 24px;
    font-weight: 700;
    padding-top: 20px;
}

.about .hr {
    padding-top: 12px;
    width: 100%;
    border: 0;
    border-top: 3px solid black;
}

.about .content {
    padding-top: 12px;
    line-height: 20px;
    font-size: 18px;
}
</style>