<template>
    <div class="main">
        <p class="title">微信授权登录</p>
        <p>科大生活申请获取以下权限：</p>
        <p>获取您的头像，昵称，手机号等信息</p>
        <div class="btn">
            <button class="no" @click="cancel">取消</button>
            <button class="yes" open-type="getUserInfo" @getuserinfo="getUserInfo" lang="zh_CN">授权登录
            </button>
        </div>
        <i-toast id="toast"></i-toast>
    </div>
</template>

<script>
    import { $Toast } from '../../../dist/wx/static/iView/base/index'
    import { userLogin } from '@/http/api'

    export default {
        name: 'login',
        data() {
            return {
                code: '',
                status: true,
                userInfo: {},
            }
        },
        methods: {
            cancel() {
                this.$router.back()
            },
            getUserInfo(e) {
                if (this.status) {
                    this.status = false
                    $Toast({
                        content: '加载中',
                        type: 'loading'
                    })
                    this.userInfo = e.mp.detail.userInfo
                    console.log(e.mp.detail.userInfo)
                    this._login({
                        avatarUrl: this.userInfo.avatarUrl,
                        nickName: this.userInfo.nickName,
                        gender: this.userInfo.gender,
                        province: this.userInfo.province,
                        city: this.userInfo.city,
                        code: this.code
                    })
                }
            },
            _login(params) {
                userLogin(params)
                //     .then(res => {
                //
                // }).catch(err => {
                //
                // })
            }
        },
        onLoad() {
            wx.login({
                success: res => {
                    if (res.code) {
                        console.log('ok')
                        this.code = res.code
                    } else {
                        $Toast({
                            content: '登录失败',
                            type: res.errMsg
                        })
                    }
                }
            })
        },
        onUnload() {

        }
    }
</script>

<style lang="scss" scoped>
    .main {
        padding: 135px 40px 0 40px;

        .title {
            text-align: center;
            font-size: 18px;
            margin-bottom: 20px;
        }

        p:nth-child(n+2) {
            /*text-align: center;*/
            font-size: 14px;
            color: #999999;
            margin-top: 12px;
        }

        .btn {
            margin-top: 40px;
            display: flex;
            justify-content: space-between;

            .no {
                font-size: 14px;
                width: 140px;
                text-align: center;
                padding: 2px 0;
                background-color: #dddddd;
                border-radius: 7px;
            }

            .yes {
                font-size: 14px;
                width: 140px;
                text-align: center;
                padding: 2px 0;
                background-color: #fff0af;
                border-radius: 7px;
            }
        }
    }
</style>