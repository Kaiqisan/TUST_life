<template>
    <div class="main">
        <div class="tab-top">
            <div class="front">
                <div class="tab-cont-a" @click="sel(0)" :class="[selected === 0 ? 'active' : '']">我的百宝箱</div>
                <p>|</p>
                <div class="tab-cont" @click="sel(1)" :class="[selected === 1 ? 'active' : '']">我的活动/预定</div>
            </div>

        </div>

        <div class="express">百宝箱使用说明</div>
        <div class="act">
            <image src="../../static/images/banner 01.jpg"/>
            <image src="../../static/images/banner02.png"/>
            <image src="../../static/images/banner04.jpg"/>
            <image src="../../static/images/banner 05.jpg"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'treasure-chest',
        data() {
            return {
                selected: 0,
            }
        },
        methods: {
            sel (i) {
                if (i === 0) {
                    this.selected = 0
                } else if (i === 1) {
                    this.selected = 1
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .main {
        background-color: #FAFAFA;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow-x: hidden;
    }

    .express {
        margin: 50px 25px 5px 25px;
        padding: 5px 0;
        /*background-color: #ffffff;*/
        text-align: right;
        color: #206175;
        font-size: 13px;
    }

    .tab-top {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        /*margin-top: 10px;*/
        .front {
            background-color: #ffffff;
            display: flex;
            justify-content: space-between;
            padding: 4px 0 9px 0;

            p {
                margin-top: 5px;
            }

            .tab-cont {
                font-size: 16.5px;
                margin-right: 13%;
                padding: 5px 0;
            }

            .tab-cont-a {
                padding: 5px 0;
                font-size: 16.5px;
                margin-left: 13%;
            }

            .active {
                color: #206175;
                border-bottom: 3px solid #206175;
            }
        }


    }

    .i {
        position: fixed;
        width: 80px;
        height: 3px;
        background-color: #206175;
        margin: -3px 0 0 40px;
    }

    .act {
        text-align: center;
        width: 100%;

        image {
            /*width: inherit;*/
            height: 100px;
            margin: 10px 0;
            box-shadow: 1px 1px 5px #666666;
            /*padding: 0 10px 0 0;*/
        }
    }
</style>