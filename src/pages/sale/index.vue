<template>
    <div class="main">
        <image class="img" src="/static/images/sale-bg.png"/>
        <div class="btn" @click="startIt">点我出售二手商品</div>
    </div>
</template>

<script>
    export default {
        name: 'sale',
        methods: {
            startIt() {
                this.$router.push('/pages/input-info/index')
            }
        }
    }
</script>

<style scoped lang="scss">
    .main {

        width: 100%;
        height: 100%;
        background-color: #ffffff;
        overflow: auto;
    }

    .img {
        width: 270px;
        height: 270px;
        margin: 20% 45px 0 45px;
    }

    .btn {
        margin: auto;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 30px;
        background-color: #459c9c;
        border-radius: 24px;
        width: 290px;
        padding: 15px 0;
        text-align: center;
        font-size: 19px;
    }
</style>
