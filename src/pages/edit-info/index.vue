<template>
    <div class="main">
        <p class="reminds">提示:可以把商品名输得长一些以便于被搜到</p>
        <div class="head">
            <div class="head-cont">
                <p>商品名</p>
                <label>
                    <textarea maxlength="100" placeholder="请输入商品名"/>
                </label>
                <div class="picture">
                    <div class="add">
                        <image src="../../static/images/add.png"/>
                    </div>
                    <div class="add">
                        <image src="../../static/images/add.png"/>
                    </div>
                    <div class="add">
                        <image src="../../static/images/add.png"/>
                    </div>
                    <div class="add">
                        <image src="../../static/images/add.png"/>
                    </div>
                    <div class="add">
                        <image src="../../static/images/add.png"/>
                    </div>
                    <div class="add">
                        <image src="../../static/images/add.png"/>
                    </div>
                </div>
            </div>
        </div>
        <p class="reminds">提示:请仔细输入商品信息</p>
        <div class="sign">
            <div class="sign-cont">
                <p>价格</p>
                <label>
                    <input type="number" maxlength="4" placeholder="请输入价格"/>
                </label>
            </div>
            <picker :range="kinds" @change="change" :value="goodsInfo.kind">
                <div class="sign-cont">
                    <p>种类</p>
                    <div class="choose" :style="{color: goodsInfo.kind? '#000000': '#777777'}">{{ goodsInfo.kind?
                        goodsInfo.kind : '请选择种类' }}
                    </div>
                    <p class="choose-logo">></p>
                </div>
            </picker>

            <div class="sign-cont">
                <p>数量</p>
                <label>
                    <input type="number" maxlength="3" placeholder="请输入数量"/>
                </label>
            </div>
            <picker :range="degree" @change="change2" :value="goodsInfo.degree">
                <div class="sign-cont">
                    <p>品质</p>
                    <div class="choose" :style="{color: goodsInfo.degree? '#000000': '#777777'}">{{ goodsInfo.degree?
                        goodsInfo.degree : '请选择品质' }}
                    </div>
                    <p class="choose-logo">></p>
                </div>
            </picker>
            <p class="reminds2" @click="linkTo('get-degree', [], false)">我如何判断商品的品质？</p>
        </div>
        <p class="reminds">提示：您可以输入商品的一些特征，以及购买注意事项</p>
        <div class="head">
            <div class="head-cont">
                <p>商品描述</p>
                <label>
                    <textarea class="describe" maxlength="200" placeholder="请输入商品名"/>
                </label>
            </div>
        </div>
        <div class="sub">提交</div>
    </div>
</template>

<script>
    import { linkMethod } from '@/public/js/public-method.js'

    export default {
        name: 'inputInfo',
        mixins: [linkMethod],
        data() {
            return {
                kinds: ['生活用品', '图书类', '食品', '化妆品', '体育器材', '衣物', '玩具', '动物', '虚拟商品'],
                degree: ['全新', '九九新', '九成新', '八成新', '七成新', '六成及以下', '此商品无法判断'],
                goodsInfo: {
                    name: '',
                    imgs: [],
                    kind: '',
                    price: '',
                    num: '',
                    degree: '',
                    describe: ''
                }
            }
        },
        methods: {
            change(e) {
                let a = e.mp.detail.value
                this.goodsInfo.kind = this.kinds[a]
            },
            change2(e) {
                let a = e.mp.detail.value
                this.goodsInfo.degree = this.degree[a]
            },
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
        overflow: auto;
    }

    .sub {
        width: 90%;
        padding: 10px 0;
        text-align: center;
        background-color: #fff0af;
        border-radius: 20px;
        margin: 10px auto;
    }

    .reminds {
        color: #999999;
        font-size: 12px;
        margin: 10px 0 4px 19px;
    }

    .reminds2 {
        font-size: 12px;
        margin: 10px 0 4px 0px;
        color: #7E57FB;
    }

    .head {
        margin: 2px 15px 10px 15px;
        padding: 5px 15px 15px 15px;
        background-color: #ffffff;
        border-radius: 8px;

        .head-cont {
            padding: 10px 0 10px 0;
            border-bottom: 1px solid #999999;
            margin-top: 5px;

            .picture {
                padding: 10px 10px 0 0;

                .add {
                    width: 90px;
                    height: 90px;
                    background-color: #EFEFEF;
                    margin-left: 10px;
                    margin-top: 10px;
                    display: inline-block;

                    image {
                        width: 50px;
                        height: 50px;
                        margin: 20px 0 0 20px;
                    }
                }
            }

            p {
                color: #444444;
                font-size: 15px;
            }

            label {
                textarea {
                    font-size: 13px;
                    margin-right: 40px;
                    margin-top: 10px;
                    width: 310px;
                    height: 100px;
                    line-height: 20px;
                }

                .describe {
                    height: 200px;
                }
            }

        }
    }

    .sign {
        margin: 5px 15px 10px 15px;
        padding: 5px 15px 15px 15px;
        background-color: #ffffff;
        border-radius: 8px;

        .sign-cont {
            padding: 10px 0 10px 0;
            border-bottom: 1px solid #999999;
            margin-top: 5px;
            display: flex;
            justify-content: space-between;

            .choose-logo {
                margin-left: 0;
            }

            .choose {
                margin-right: 40px;
                width: 143px;
                /*padding: 10px 0;*/
                color: #777777;
                font-size: 15px;
            }

            p {
                color: #999999;
                font-size: 14px;
            }

            label {
                input {
                    margin-right: 40px;
                    width: 200px;
                    font-size: 15px;
                }
            }

        }
    }
</style>