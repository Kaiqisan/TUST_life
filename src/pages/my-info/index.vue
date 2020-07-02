<template>
	<div class="main">
		<div class="head">
			<div class="left">
				<div class="sculpture">
					<image src="../../static/images/模拟用户头像.jpg"/>
				</div>
				<p class="nick">花生米</p>
			</div>

			<p>点击修改头像 ></p>
		</div>
		<div class="info">
			<div class="info-cont">
				<p>姓名</p>
				<label>
					<input v-model="stuInfo.name" placeholder="请输入姓名" :maxlength="4" type="text"/>
				</label>
			</div>
			<div class="info-cont">
				<p>学号</p>
				<label>
					<input v-model="stuInfo.stuId" placeholder="请输入学号" :maxlength="8" type="text"/>
				</label>
			</div>
			<div class="info-cont">
				<p>手机号</p>
				<label>
					<input v-model="stuInfo.phoneNum" placeholder="请输入手机号" :maxlength="11" type="text"/>
				</label>
			</div>
			<div class="info-cont">
				<p>校区</p>
				<div class="sel">
					<picker :range="areaList" @change="change($event, 2)" :value="stuInfo.area">
						<div class="picker">
							<div class="cont" :style="{color: stuInfo.area? '#000000' : 'rgb(128, 128, 128)'}">{{
								stuInfo.area ? stuInfo.area : '请选择校区' }}
							</div>
							<p> > </p>
						</div>
					</picker>
				</div>
			</div>
		</div>

		<div class="info">
			<div class="info-cont">
				<p>昵称</p>
				<input v-model="stuInfo.nick" placeholder="请输入昵称" :maxlength="28" type="text"/>
			</div>
			<div class="info-cont">
				<p>性别</p>
				<div class="sel">
					<picker :range="sexList" @change="change($event, 1)" :value="stuInfo.sex">
						<div class="picker">
							<div class="cont" :style="{color: stuInfo.sex? '#000000' : 'rgb(128, 128, 128)'}">{{
								stuInfo.sex ? stuInfo.sex : '请选择性别' }}
							</div>
							<p> > </p>
						</div>
					</picker>
				</div>
			</div>
		</div>
		<div class="sign">
			<p class="remind">我的兴趣</p>
			<textarea placeholder="添加置换兴趣标签" :maxlength=sign.max></textarea>
		</div>
		<button class="sub" @click="sub">提交</button>
		<i-toast id="toast"></i-toast>
	</div>
</template>

<script>
    // import { user } from '../../public/js/public-info.js'
    import { $Toast } from '../../../dist/wx/static/iView/base'

    export default {
        name: 'my-info',
        data() {
            return {
                sex: '',
                info: {},
                // user,
                stuInfo: {
                    name: '',
                    stuId: '',
                    phoneNum: '',
                    nick: '',
                    sex: '',
                    area: '',
                },
                sign: '',
                sexList: ['男', '女'],
                areaList: ['科大泰达校区', '科大河西校区'],
                status: true
            }
        },
        methods: {
            fix() {
            },
            change(e, i) {
                if (i === 1) {
                    this.stuInfo.sex = this.sexList[e.mp.detail.value]
                } else if (i === 2) {
                    this.stuInfo.area = this.areaList[e.mp.detail.value]
                }
            },
            sub() {
                let pattern = /[^\u4e00-\u9fa5 ]/
                let pattern2 = /^[0-9]*$/
                let pattern3 = /^\S*$/
                if (this.status) {
                    this.status = false
                    if (this.stuInfo.name && (pattern.test(this.stuInfo.name) || this.stuInfo.name.length === 4 || this.stuInfo.name.length === 1 || !pattern3.test(this.stuInfo.name))) {
                        $Toast({
                            content: '请正确输入名字',
                            type: 'warning'
                        })
                        this.status = true
                    } else if (this.stuInfo.stuId && (this.stuInfo.stuId.length !== 8 || !pattern2.test(this.stuInfo.stuId) || !pattern3.test(this.stuInfo.stuId))) {
                        $Toast({
                            content: '请正确输入学号',
                            type: 'warning'
                        })
                        this.status = true
                    } else if (this.stuInfo.phoneNum && (!pattern2.test(this.stuInfo.phoneNum) || this.stuInfo.phoneNum.length !== 11 || !pattern2.test(this.stuInfo.phoneNum))) {
                        $Toast({
                            content: '请正确输入手机号',
                            type: 'warning'
                        })
                        this.status = true
                    } else if (!this.stuInfo.nick) {
                        $Toast({
                            content: '请输入昵称',
                            type: 'warning'
                        })
                    } else {
                        // 等接口
                        $Toast({
                            content: '提交成功',
                            type: 'success'
                        })
                        this.status = true
                    }

                    this.status = true
                }
            },
            copyArray(arr) {
                return arr.map((e) => {
                    if (typeof e === 'object') {
                        return Object.assign({}, e)
                    } else {
                        return e
                    }
                })
            }
        },
        onLoad() {
        },
        onUnload() {
            this.stuInfo = {
                name: '',
                stuId: '',
                phoneNum: '',
                nick: '',
                sex: '',
                area: '',
            }
        },
        computed: {
            // go() {
            //     console.log(this.user)
            //     // this.user = {}
            //     // this.user = user
            //     for (let i = 0; i < this.user.length; i++) {
            //         if (this.user[i].name === '个性签名') {
            //             this.sign = this.user[i]
            //             this.user.splice(i, 1)
            //             // console.log(this.user)
            //         } else if (this.user[i].isBasic === true) {
            //             this.user[i].placeholder = `请输入${this.user[i].name}`
            //             this.list.basic.push(this.user[i])
            //         } else {
            //             if (this.user[i].isSelect === false) {
            //                 this.user[i].placeholder = `请输入${this.user[i].name}`
            //                 this.list.extra.push(this.user[i])
            //             } else {
            //                 this.user[i].placeholder = `请选择${this.user[i].name}`
            //                 this.list.extra.push(this.user[i])
            //             }
            //         }
            //     }
            //
            //     return this.list
            // }
        },
        // onUnload() {
        //     this.list = {
        //         basic: [],
        //         extra: []
        //     }
        // }
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

	.head {
		margin: 15px 15px 15px 15px;
		background-color: #ffffff;
		padding: 5px 15px 15px 15px;
		border-radius: 8px;
		display: flex;
		justify-content: space-between;

		.left {
			display: flex;
			justify-content: left;

			.sculpture {
				width: 55px;
				height: 55px;
				background-color: #b5e3c7;
				border-radius: 30px;
				margin-top: 5px;
				overflow: hidden;

				image {
					width: inherit;
					height: inherit;
				}
			}

			.nick {
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 1;
				overflow: hidden;
				color: #206175;
				width: 150px;
				height: 20px;
				margin-left: 20px;
				font-size: 17px;
			}
		}


		p {
			color: #999999;
			font-size: 12.5px;
			margin: auto 0;
		}
	}

	.info {
		margin: 20px 15px 10px 15px;
		background-color: #ffffff;
		padding: 5px 15px 15px 15px;
		border-radius: 8px;

		.info-cont {
			padding: 10px 0 10px 0;
			display: flex;
			justify-content: space-between;
			border-bottom: 1px solid #999999;
			margin-top: 5px;

			.sel {
				.picker {
					width: 240px;
					display: flex;
					justify-content: space-between;

					.cont {
						color: rgb(128, 128, 128);
					}
				}
			}

			p {
				color: #999999;
				font-size: 14px;
			}

			input {
				margin-right: 40px;
				width: 200px;
			}
		}
	}

	.sign {
		margin: 20px 15px 10px 15px;
		background-color: #ffffff;
		border-radius: 8px;
		overflow: hidden;

		textarea {
			margin-top: 5px;
			padding: 10px 10px;
			height: 70px;
		}

		p {
			background-color: #b5e3c7;
			padding: 10px 0 10px 10px;
			color: #333333;
			font-size: 14px;
		}

	}

	.sub {
		margin: 20px 15px 10px 15px;
		background-color: #b5e3c7;
	}
</style>