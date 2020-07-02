<template>
    <div class="main">
<!--        <div v-if="loginState === 1">-->
<!--            <div class="login" @click="linkTo('login', [], false)">-->
<!--                <image class="logo" src="../../static/images/login.png"/>-->
<!--                <p>登录/注册</p>-->
<!--            </div>-->
<!--            <div class="help">-->
<!--                <div class="help-left">-->
<!--                    <image class="logo" src="../../static/images/help.png"/>-->
<!--                    <p>关于我们</p>-->
<!--                </div>-->
<!--                <div class="help-right">></div>-->
<!--            </div>-->
<!--        </div>-->
        <div>
            <div class="header">
                <div class="left">
                    <div class="sculpture">
						<image style="width: 30px;height: 30px; margin: 19px 0 0 19px" v-if="loginState === 0" src="../../static/images/default-admin.png" />
                        <image v-else src="../../static/images/模拟用户头像.jpg" />

                    </div>
                    <div class="header-cont">
                        <p class="name">{{loginState === 0 ? '请您先登录' : '你好，花生米'}}</p>
                        <div class="edit" @click="linkEdit">点击编辑个人信息</div>
                    </div>
                </div>
            </div>
            <image class="bg" src="/static/images/mine-bg.jpg" />
            <div v-for="(item, index) in list" :key="index">
                <div class="cont" @click="links(index)">
                    <div class="my">
                        <p>{{item.name}}</p>
                        <p> > </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { linkMethod } from '@/public/js/public-method'

    export default {
        name: 'mine',
        mixins: [linkMethod],
        methods: {
            checkLogin() {
                let state = this.getLoginState()
				if (state === 0) {
				    this.linkTo('login', [], false)
				}
			},
			links(index) {
                this.checkLogin()
				if (this.getLoginState() === 1) {
				    this.linkTo(this.list[index].link, [this.list[index].params? this.list[index].params : null], this.list[index].isTab)
				}

			},
			linkEdit() {
                this.checkLogin()
				if (this.getLoginState() === 1) {
				    this.linkTo('my-info', [], false)
				}
			},
			getLoginState() {
                this.lists = [...this.list, ...this.link]
                return this.$store.state.loginState
            },

        },
        data() {
            return {
                lists: [],
                list: [
                    {
                        name: '我的心愿',
                        link: 'wanna',
                        isTab: true
                    },
					{
                        name: '我的待审核',
                        link: 'my-goods',
						params: 1,
                        isTab: false
                    },
					{
                        name: '我的未通过',
                        link: 'my-goods',
						params: 2,
                        isTab: false
                    },
					{
                        name: '我的发布',
                        link: 'my-goods',
						params: 3,
                        isTab: false
                    },
                    {
                        name: '我的已完成',
                        link: 'my-goods',
						params: 4,
                        isTab: false
                    }
                ],
                link: [
                    {
                        name: '登录',
                        link: 'login',
                        isTab: false
                    },
                    {
                        name: '我的信息',
                        link: 'my-info',
                        isTab: false
                    }
                ],
                isLogin: null,
            }
        },
        computed: {
            loginState() {
                this.lists = [...this.list, ...this.link]
                // console.log(this.lists)
                return this.$store.state.loginState
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
    }


    .login {
        margin: 15px auto;
        padding: 10px 15px;
        width: 80%;
        background-color: #FFCB70;
        border-radius: 10px;
        display: flex;
        justify-content: left;

        .logo {
            width: 30px;
            height: 30px;
        }

        p {
            margin: 4px 0 0 15px;
            color: #000000;
        }
    }

    .help {
        padding: 0 25px 0 25px;
        margin-top: 18px;
        display: flex;
        justify-content: space-between;

        .help-left {
            display: flex;
            justify-content: left;

            .logo {
                width: 20px;
                height: 20px;
            }

            p {
                font-size: 13px;
                color: #999999;
                margin-left: 10px;
            }
        }

        .help-right {
            color: #999999;
        }
    }

    .header {
        padding: 20px 25px 20px 25px;
        /*background-color: #b5e3c7;*/
        display: flex;
        justify-content: space-between;


        .left {
            display: flex;
            justify-content: left;

            .sculpture {
                margin: auto 0;
                width: 70px;
                height: 70px;
                background-color: #ffffff;
                border-radius: 40px;
                overflow: hidden;

                image {
                    width: inherit;
                    height: inherit;
                }
            }

            .header-cont {
                margin-top: 5px;
                margin-left: 20px;

                p {
                    max-width: 250px;
                    color: #222222;
                    word-break: keep-all;
                    word-wrap: break-word;
                    white-space: pre-line;
                }

                .edit {
                    text-align: center;
                    color: #222222;
                    font-size: 13px;
                    padding: 2px 16px 4px 17px;
                    margin-top: 14px;
                    border: 1px solid #222222;
                    border-radius: 7px;
                    /*width: 0px;*/
                }
            }
        }


    }

    .cont {
        margin: 12px;
        padding: 16px 20px;
        background-color: #ffffff;
        border-radius: 7px;

        .my {
            width: 100%;
            display: flex;
            justify-content: space-between;


            p {
                font-size: 15px;
            }

            p:nth-child(2) {
                color: #999999;
            }
        }

    }

    .bg {
        width: 100%;
        height: 110px;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -2;
        opacity: 0.8;
    }
</style>