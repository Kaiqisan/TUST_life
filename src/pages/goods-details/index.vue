<template>
    <div class="main">
        <div class="head-img">
            <image src="/static/images/图书3.jpg" />
        </div>
        <div class="bg">
            <div class="head">
                <span>￥</span><span>999.99</span>
                <p class="title">毛概2018版</p>
            </div>
            <div class="cont">
                <p class="header">参数</p>
                <div class="parameter">
                    <p>品质：九五新</p>
                    <p>类型：图书</p>
                </div>
            </div>
            <div class="cont">
                <p class="header">卖家信息：</p>
                <p class="conts">昵称：kaiqisan</p>
                <p class="conts">姓名：陈昊琦</p>
                <p class="relate">联系卖家</p>
            </div>
            <div class="cont">
                <p class="header">商品描述：</p>
                <p class="conts">里面会有一些上课摘记，请注意</p>
            </div>
            <div class="cont">
                <p class="header">备注：</p>
                <p class="conts">这个人很懒，他什么都没有写</p>
            </div>
        </div>
        <div class="todo">
            <div class="btn" @click="like">加入心愿</div>
            <div class="btn" @click="buy">现在购入</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'index',
        methods: {
            like() {

            },
            buy() {

            }
        }
    }
</script>

<style lang="scss" scoped>
    .main {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: #FAFAFA;
        z-index: -2;
        overflow-x: auto;
    }

    .bg {
        background-color: #FAFAFA;
        padding-bottom: 55px;
    }

    .head-img {
        width: 100%;
        height: 375px;
        background-color: #459c9c;
        position: fixed;
        z-index: -1;
        left: 0;
        top: 0;
        overflow: hidden;

        image {
            width: inherit;
            height: inherit;
        }
    }

    .head {
        /*height: 900px;*/
        /*width: 100%;*/
        margin-top: 375px;
        background-color: #ffffff;
        padding: 15px 15px 20px 15px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;

        span:nth-child(1) {
            color: rgb(221, 0, 27);
            font-size: 15px;
        }

        span:nth-child(2) {
            color: rgb(221, 0, 27);
            font-size: 24px;
        }

        .title {
            font-size: 16px;
            font-weight: bold;
            margin-top: 5px;
        }
    }

    .cont {
        background-color: #ffffff;
        padding: 15px 15px 20px 15px;
        margin-top: 10px;
        border-radius: 10px;

        .relate {
            font-weight: bold;
            margin-top: 8px;
            font-size: 13px;
            color: #7C8CFF;
        }

        .conts {
            margin-top: 8px;
            font-size: 13px;
            color: #999999;
            line-height: 18px;
        }

        .header {
            font-size: 15px;
            font-weight: bold;
        }

        .parameter {
            margin-top: 10px;

            p {
                margin-top: 8px;
                font-size: 13px;
                color: #999999;
            }
        }
    }

    .todo{

        position: fixed;
        left: 0;
        bottom: 0;
        background-color: #FAFAFA;
        display: flex;
        justify-content: space-between;
        border-top: 1px solid #eeeeee;
        padding: 0 0 8px 0;
        /*border-top-left-radius: 50px;*/
        /*border-top-right-radius: 50px;*/
        width: 100%;

        .btn {
            width: 190px;
            padding: 8px 0;
            text-align: center;
            border-radius: 20px;
            margin: 8px 5px 0 5px;
            font-size: 14px;
            font-weight: bold;
        }

        .btn:nth-child(1) {
            background-color: #ffffff;
        }

        .btn:nth-child(2) {
            background-color: #459c9c;
        }
    }
</style>