<template>
    <div class="main">
        <div class="search">
            <input type="text" placeholder="输入你想搜的物品名" :auto-focus="isFocus" v-model="searchCont" maxlength="20"/>
        </div>
        <div class="search2">
            <p>输入以下关键词试试看</p>
            <div class="recommend">
                <p @click="goRecommend(index)" v-for="(item, index) in recommend" :key="index">{{item}}</p>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'search',
        data() {
            return {
                isFocus: false,
                searchCont: '',
                searchStatus: '',
                recommend: ['2', '测试', '生活用品', '撤硕'],

            }
        },
        methods: {
            goRecommend(i) {
                this.searchCont = this.recommend[i]
            }
        },
        onLoad() {
            this.isFocus = true

        },
        onUnload() {
            this.isFocus = false
        },
        watch: {
            searchCont(val) {
                clearTimeout(this.searchStatus)
                setTimeout(() => {
                    console.log(val);
                }, 700)
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
        overflow-x: auto;
    }

    .search {
        padding: 10px;
        background-color: #ffffff;

        input {
            background-color: #fafafa;
            padding: 5px 18px;
            border-radius: 15px;
            font-size: 14px;
        }


    }

    .search2 {
        margin-top: 10px;
        padding: 10px 10px 10px 20px;
        background-color: #ffffff;

        p {
            color: #999999;
            font-size: 13px;

        }

        .recommend {
            margin-top: 10px;

            p {
                font-size: 11px;
                margin-top: 10px;
                background-color: #FAFAFA;
                color: #666666;
                width: 70px;
                padding: 5px 0;
                text-align: center;
                display: inline-block;
            }

            p:nth-child(3n+2) {
                margin-left: 15px;
            }

            p:nth-child(3n+3) {
                margin-left: 15px;
            }
            p:nth-child(3n+4) {
                margin-left: 15px;
            }
        }
    }
</style>