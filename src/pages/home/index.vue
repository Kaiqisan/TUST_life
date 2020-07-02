<template>
    <div class="home">
        <!--        <div class="swiper-home">-->
        <!--            <scroll-view scroll-x="true" style="width: 100%">-->
        <!--                <view v-for="(item,index) in kind" :key="index" :class="[item.num === clicked ? 'clicked-item' : 'swiper-item']"-->
        <!--                      @click="turns(index)">-->
        <!--                    {{ item.name }}-->
        <!--                </view>-->
        <!--            </scroll-view>-->
        <!--        </div>-->
        <div class="swiper-home">
            <div v-for="(item,index) in top" :key="index" class="top-cont"
                 :class="[item.num === clicked ? 'clicked-item' : 'swiper-item']" @click="turns(index)">{{ item.name }}
            </div>
            <div class="top-cont swiper-item" @click="linkTo('treasure-chest', [], false)">百宝箱</div>
        </div>
        <div class="ad">
            <image src="../../static/images/banner000.png" mode="scaleToFill"/>
        </div>
        <input type="text" class="search" @click="linkTo('search', [], false)" placeholder="搜索二手货" readonly="true">
        <div class="search-ui">
            <image class="search-img" mode="scaleToFill" src="../../static/images/search.png" width="15px"/>
            <image src="../../static/images/kinds.png" class="kinds" @click="linkTo('kinds', [], false)"/>
        </div>
        <div class="cont">
            <h3>{{ top[clicked].name }}</h3>
            <div class="goods-list">
                <div class="goods" @click="linkTo('goods-details', [1], false)">
                    <image class="goods-img" src="../../static/images/图书3.jpg"/>
                    <p class="price">￥1.00</p>
                    <p>毛概教材2018版</p>
                    <p>科大泰达校区</p>
                    <div class="degree">九九新</div>
                </div>
                <div class="goods" @click="linkTo('goods-details', [1], false)">

                    <image class="goods-img" src="../../static/images/瑜伽垫.jpg"/>

                    <p class="price">￥1.00</p>
                    <p>瑜伽垫</p>
                    <p>科大河西校区</p>
                    <div class="degree">九九新</div>
                </div>
                <div class="goods" @click="linkTo('goods-details', [1], false)">

                    <image class="goods-img" src="../../static/images/乒乓球拍.jpg"/>

                    <p class="price">￥1.00</p>
                    <p>乒乓球拍</p>
                    <p>科大泰达校区</p>
                    <div class="degree">全新</div>
                </div>
                <div class="goods" @click="linkTo('goods-details', [1], false)">

                    <image class="goods-img" src="../../static/images/玩具兔子.jpg"/>

                    <p class="price">￥1.00</p>
                    <p>玩具兔子</p>
                    <p>科大泰达校区</p>
                    <div class="degree">九成新</div>
                </div>


            </div>
        </div>
    </div>
</template>

<script>
    import { linkMethod } from '@/public/js/public-method'

    export default {
        name: 'home',
        mixins: [linkMethod],
        data() {
            return {
                kind: [
                    {
                        name: '推荐',
                        num: 0,
                        a: true
                    },
                    {
                        name: '生活用品',
                        num: 1,
                        a: false
                    },
                    {
                        name: '图书',
                        num: 2,
                        a: false
                    },
                    {
                        name: '化妆品',
                        num: 3,
                        a: false
                    },
                    {
                        name: '衣物',
                        num: 4,
                        a: false
                    },
                    {
                        name: '厨具',
                        num: 5,
                        a: false
                    },
                    {
                        name: '电器',
                        num: 6,
                        a: false
                    },
                    {
                        name: '文具',
                        num: 7,
                        a: false
                    }
                ],
                top: [
                    {
                        name: '推荐',
                        num: 0,
                        a: true
                    },
                    {
                        name: '新上线',
                        num: 1,
                        a: false
                    },
                    {
                        name: '全部商品',
                        num: 2,
                        a: false
                    }
                ],
                clicked: 0
            }
        },
        methods: {
            turns(num) {
                for (let i = 0; i < this.top.length; i++) {
                    this.top[i].a = false
                }
                this.clicked = num

            },
        }
    }
</script>

<style lang="scss" scoped>
    .home {
        background-color: #FAFAFA;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow-x: hidden;

        .ad {
            margin: 35px 0 15px 0;
            height: 100px;
            width: 100%;
            /*background-color: #2e8e9a;*/
            image {
                height: 110px;
                width: 100%;
            }
        }

        .search {
            background-color: #ffffff;
            float: left;
            font-size: 13px;
            width: 240px;
            padding: 5px 15px 5px 35px;
            margin-top: 10px;
            margin-left: 15px;
            border: 1px solid #cccccc;
            border-radius: 7px;
            box-shadow: 1px 1px 10px #eeeeee;
        }

        .search-ui {
            display: flex;
            justify-content: space-between;

            .search-img {
                width: 25px;
                height: 25px;
                margin-left: -285px;
                margin-top: 15px;
            }

            .kinds {
                width: 40px;
                height: 40px;
                margin-right: 20px;
                margin-top: 5px;
            }
        }


        .cont {
            margin-top: 15px;

            padding: 0 10px 10px 10px;

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
        }
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
        justify-content: space-between;
        white-space: nowrap; //这个属性很重要
        height: 35px;

        .swiper-item {
            padding: 6px 15px 0 15px;
            font-size: 15px;
            color: #666666;
            display: inline-block;
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

    ::-webkit-scrollbar {
        width: 0;
        height: 0;
        color: transparent;
    }
</style>
