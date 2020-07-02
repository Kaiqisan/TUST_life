<template>
    <div class="main">
        <div class="swiper-home">
            <scroll-view scroll-x="true" style="width: 100%">
                <view v-for="(item,index) in kind" :key="index"
                      :class="[item.num === clicked ? 'clicked-item' : 'swiper-item']"
                      @click="turns(index)">
                    {{ item.name }}
                </view>
                <!--                <view class="swiper-item land" @click="linkTo('land', [], false)">租赁服务区</view>-->
            </scroll-view>
            <div class="block-line"></div>
        </div>
        <div class="all-cont">
            <!--            <h3>{{ kind[clicked].name }}</h3>-->

            <div class="goods-list">
                <div class="goods" @click="linkTo('goods-details', [1], false)">
                    <image class="goods-img" src="../../static/images/suit.jpg"/>
                    <p class="price">￥100.00</p>
                    <p>正装租赁</p>
                    <p>科大泰达校区</p>
                    <div class="degree">九九新</div>
                </div>
                <div class="goods" @click="linkTo('goods-details', [1], false)">
                    <image class="goods-img" src="../../static/images/suit.jpg"/>
                    <p class="price">￥100.00</p>
                    <p>正装租赁</p>
                    <p>科大泰达校区</p>
                    <div class="degree">九九新</div>
                </div>
                <div class="goods" @click="linkTo('goods-details', [1], false)">
                    <image class="goods-img" src="../../static/images/suit.jpg"/>
                    <p class="price">￥100.00</p>
                    <p>正装租赁</p>
                    <p>科大泰达校区</p>
                    <div class="degree">九九新</div>
                </div>
                <div class="goods" @click="linkTo('goods-details', [1], false)">
                    <image class="goods-img" src="../../static/images/suit.jpg"/>
                    <p class="price">￥100.00</p>
                    <p>正装租赁</p>
                    <p>科大泰达校区</p>
                    <div class="degree">九九新</div>
                </div>


            </div>
        </div>
    </div>
</template>

<script>
    import { linkMethod } from '@/public/js/public-method'

    export default {
        name: 'land',
        mixins: [linkMethod],
        data() {
            return {
                clicked: 0,
                kind: [
                    {
                        name: '正装',
                        num: 0,
                        a: true
                    },
                    {
                        name: '舞台服装',
                        num: 1,
                        a: false
                    },
                    {
                        name: 'vga转接线',
                        num: 2,
                        a: false
                    },
                    {
                        name: '话筒音响',
                        num: 3,
                        a: false
                    },
                    {
                        name: '装饰材料',
                        num: 4,
                        a: false
                    }
                ],
            }
        },
        methods: {
            turns(num) {
                for (let i = 0; i < this.kind.length; i++) {
                    this.kind[i].a = false
                }
                this.clicked = num

            },
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

    .swiper-home {
        background-color: #ffffff;
        z-index: 5;
        position: fixed;
        top: 0;
        border-bottom: 1px solid #999999;
        width: 100%;
        box-sizing: border-box;
        display: flex;
        white-space: nowrap; //这个属性很重要
        height: 35px;

        .block-line {
            position: fixed;
            z-index: 6;
            top: 28px;
            width: 100%;
            height: 7px;
            background-color: #ffffff;
        }

        .swiper-item {
            padding: 6px 20px 0 20px;
            font-size: 15px;
            color: #666666;
            display: inline-block;
        }

        .land {
            color: #666666;
            font-weight: bold;
        }

        .clicked-item {
            padding: 6px 15px 0 15px;
            font-size: 15px;
            color: #2e8e9a;
            display: inline-block;
        }

        .top-cont {
            padding: 0 25px;
        }
    }

    .all-cont {
        margin: 50px 10px 25px 10px;

        h3 {
            margin-left: 5px;
        }
    }

    .goods-list {

        .goods {
            position: relative;
            width: 150px;
            overflow: hidden;
            display: inline-block;
            margin: 10px 13px 10px 13px;
            padding: 0 0 15px 0;
            /*width: 150px;*/
            /*height: 200px;*/
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 1px 1px 10px #eeeeee;

            .price {
                position: absolute;
                z-index: 2;
                background-color: rgba(255, 255, 255, 0.8);
                border-top-right-radius: 9px;
                margin: -25px 0 5px 0px;
                padding: 3px 8px;
                width: 65px;
                color: rgb(221, 0, 7);
                font-size: 16px;
                text-align: center;
            }

            .goods-img {
                width: 150px;
                height: 150px;

                image {
                    width: inherit;
                    height: inherit;
                }

                /*background-color: #2e8e9a;*/
            }

            p:nth-child(3) {
                margin: 5px 8px 5px 8px;
                font-size: 14px;
                color: #000000;
                overflow: hidden; /* 超出省略号显示 */
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                /*font-weight: bold;*/
            }

            p:nth-child(4) {
                margin: 5px 0 5px 8px;
                font-size: 12px;
                color: #666666;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1;
            }

            .degree {
                border-radius: 8px;
                /*width: 50px;*/
                /*text-align: center;*/
                /*padding: 3px 8px;*/
                font-size: 13px;
                margin: 5px 0 0 8px;
                /*background-color: rgb(231, 76, 60);*/
                color: #5BCEB0;
            }

        }
    }

    ::-webkit-scrollbar {
        width: 0;
        height: 0;
        color: transparent;
    }
</style>