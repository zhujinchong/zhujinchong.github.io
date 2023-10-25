<script setup>
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
</script>
<template>
    <div class="about-container">
        <div class="about">
            <div class="about-profile">
                <div class="name">ZHU JINCHONG</div>
                <div>Make each day count, Make learning a habit.</div>
                <div class="link-container">
                    <div class="link">
                        <img src="/img/envelope.svg">
                        <div>zhujinchong@foxmail.com</div>
                    </div>
                    <div class="link">
                        <img src="/about/zhiwei.svg">
                        <div>Algorithms Engineer</div>
                    </div>
                </div>
                <div class="introduction">
                    I studied software engineering at Jilin Normal University and mastered the core knowledge in this field
                    after four years of systematic learning. Subsequently, I was admitted to the graduate school of Dalian
                    University of Technology and conducted in-depth research on deep learning algorithms in the Red Ant
                    Laboratory. After completing my studies, I joined Nanjing Sinovatio Technology Co., Ltd. and have been
                    working there ever since. In the first year of working at the company, I served as a Java full-stack
                    development engineer, mainly responsible for writing and maintaining the core code of the project.
                    Later, I transferred to the Artificial Intelligence Laboratory and began to explore large-scale language
                    technology and its application in the real world. Now, my main work is to study how to translate
                    large-scale
                    language technology into practical applications and promote its development in various fields.
                </div>
            </div>
            <div class="title">Education</div>
            <div class="hr"></div>
            <div class="content">
                2018-2021: Data Imputation Based on Deep Learning
                <br />
                * ISNN 2020 《Imputation of Incomplete Data Based on Attribute Cross Fitting Model and Iterative Missing
                Value Variables》
                <br />
                * Wireless Communications and Mobile Computing 2021 《Attribute-Associated Neuron Modeling and Missing Value
                Imputation for Incomplete Data》
                <br />
                * ICCCBDA 2021 《Type Identification and Feature Selection of Chinese Poor Families
                Based on Density and Feature Aggregation Distribution》
            </div>
            <!-- <div class="title">Work Experience</div>
            <div class="hr"></div>
            <div class="content">
                2018-2021: Data Imputation Based on Deep Learning
                <br />
                * ISNN 2020 《Imputation of Incomplete Data Based on Attribute Cross Fitting Model and Iterative Missing
                Value Variables》
                <br />
                * Wireless Communications and Mobile Computing 2021 《Attribute-Associated Neuron Modeling and Missing Value
                Imputation for Incomplete Data》
                <br />
                * ICCCBDA 2021 《Type Identification and Feature Selection of Chinese Poor Families
                Based on Density and Feature Aggregation Distribution》
            </div> -->
            <div class="title">Skills</div>
            <div class="hr"></div>
            <div class="content">
                frontend: html, css, javascript, vue
                <br />
                backend: java, springboot, redis, postgresql, kafka, elasticsearch, janusgraph
                <br />
                algorithms: python, machine learning, deep learning, nlp
            </div>
        </div>
    </div>
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

.about .introduction {
    padding-top: 20px;
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