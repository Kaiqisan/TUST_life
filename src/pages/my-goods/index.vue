<template>
	<div class="main">
		<div class="top-tab">
			<div class="top-cont" :class="[clicked === 1 ? 'top-cont-a' : '']" @click="changed(1)">待审核</div>
			<div class="top-cont" :class="[clicked === 2 ? 'top-cont-a' : '']" @click="changed(2)">未通过</div>
			<div class="top-cont" :class="[clicked === 3 ? 'top-cont-a' : '']" @click="changed(3)">已发布</div>
			<div class="top-cont" :class="[clicked === 4 ? 'top-cont-a' : '']" @click="changed(4)">已完成</div>
		</div>
		<div class="admin" >
			<p v-if="clicked !== 4">提示：点击标签编辑商品</p>
			<p v-else>提示：点击查看订单详情</p>
		</div>

		<div class="not-pass" v-for="(item, index) in goodsInfo" :key="index">
			<div class="all">
				<div class="block">
					<div class="choose click" @click="dos(index)"
						 v-if="clicked === 1 || clicked === 2 || clicked === 3">
						<image v-if="item.flag === true" src="../../static/images/choosed.png"/>
						<image v-else src="../../static/images/choosed-a.png"/>
					</div>
					<div class="img" @click="link(clicked)"></div>
					<div class="cont" @click="link(clicked)">
						<p>测试商品名</p>
						<p class="price">￥100.00</p>
						<div class="status">九成新</div>
					</div>
				</div>
				<p class="right"> > </p>
			</div>
			<p class="reason" v-if="clicked === 2" >未通过原因：收看电视的反馈开始的飞惊世毒妃就开始地方就开始地方就开始地方就开始地方接口</p>
		</div>

		<div class="foot-do" v-if="clicked === 1 || clicked === 2 || clicked === 3">
			<div class="left">
				<div class="choose" @click="selectAll">
					<image v-if="flag === true" src="../../static/images/choosed.png"/>
					<image v-else src="../../static/images/choosed-a.png"/>
				</div>
				<p>全选</p>
			</div>
			<div class="right" @click="del">删除{{hasSel === 0 ? '' : '('}}{{hasSel === 0 ? '' : hasSel}}{{hasSel === 0 ?
				'' : ')'}}
			</div>
		</div>
		<div class="block2" v-if="visi === true" @click="toCancel">
			<div class="todo" :style="{opacity: opacity}">
				<p class="remind">提示：确定要删除吗？</p>
				<p class="do" @click="surelyDel">删除</p>
				<p class="do" @click="giveUp">算了</p>
			</div>
		</div>
	</div>
</template>

<script>
    import { linkMethod } from '@/public/js/public-method'

    export default {
        name: 'my-goods',
        mixins: [linkMethod],
        data() {
            return {
                visi: false,
                opacity: 0,
                screenHeight: null,
                screenWidth: null,
                hasSel: 0,
                clicked: 1,
                flag: false,
                goodsInfo: [
                    { flag: false }, { flag: false }, { flag: false }, { flag: false }
                ]
            }
        },
        onLoad(query) {
            this.clicked = Number(query.query)
            wx.getSystemInfo({
                success: res => {
                    // console.log(res.model)
                    // console.log(res.pixelRatio)
                    this.screenWidth = res.windowWidth
                    this.screenHeight = res.windowHeight
                    // console.log(res.language)
                    // console.log(res.version)
                    // console.log(res.platform)
                }
            })
        },
        onUnload() {
            Object.assign(this.$data, this.$options.data())
        },
        methods: {
            changed(i) {
                this.clicked = i
            },
            selectAll() {
                if (this.flag === true) {
                    this.flag = false
                    this.hasSel = 0
                    for (let i = 0; i < this.goodsInfo.length; i++) {
                        this.goodsInfo[i].flag = false
                    }
                } else {
                    this.flag = true
                    this.hasSel = this.goodsInfo.length
                    for (let i = 0; i < this.goodsInfo.length; i++) {
                        this.goodsInfo[i].flag = true
                    }

                }
            },
            dos(i) {
                this.goodsInfo[i].flag = !this.goodsInfo[i].flag
                if (this.goodsInfo[i].flag === true) {
                    this.hasSel++
                } else {
                    this.hasSel--
                }
                for (let a = 0; a < this.goodsInfo.length; a++) {
                    if (this.goodsInfo[a].flag === false) {
                        this.flag = false
                        return
                    }
                }
                this.flag = true

            },
            surelyDel() {
                // 发送要删掉的东西 api
            },
            giveUp() {
                this.visi = false
                this.opacity = 0

            },
            del() {
                if (this.hasSel === 0) {
                    return
                }
                this.visi = true
                setTimeout(() => {
                    this.opacity = 1
                }, 1)
            },
            toCancel(e) {
                if (!(e.clientX >= 27 && e.clientX <= this.screenWidth - 27 && e.clientY >= 190 && e.clientY <= 320)) {
                    this.giveUp()
                }
            },
            link(clicked) {
                if (clicked === 1 || clicked === 2 || clicked === 3) {
                    this.linkTo('input-info', [clicked], false)
                } else if (clicked === 4) {

                }
            }
        },

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
		overflow-x: auto;
	}

	.choose {
		width: 15px;
		height: 15px;
		/*border: 1px solid #206175;*/
		border-radius: 10px;

		image {
			width: 19px;
			height: 19px;
			margin: auto auto;
		}
	}

	.click {
		margin: auto 15px auto 0;
	}

	.foot-do {
		width: 100%;
		position: fixed;
		display: flex;
		justify-content: space-between;
		z-index: 1;
		bottom: 0;
		padding: 10px 0;
		background-color: #ffffff;
		border-top: 1px solid #eeeeee;

		.left {
			display: flex;
			justify-content: left;
			margin: auto 10px auto 25px;

			p {
				font-size: 14px;
				margin-left: 10px;
				margin-top: -1px;
			}
		}

		.right {
			width: 100px;
			text-align: center;
			border-radius: 8px;
			margin-right: 25px;
			padding: 12px 0;
			background-color: #206175;
			color: #ffffff;
		}
	}

	.top-tab {
		padding: 0 30px;
		display: flex;
		justify-content: space-between;
		background-color: #ffffff;

		.top-cont {
			padding: 15px 0 10px 0;
		}

		.top-cont-a {
			border-bottom: 3px solid #206175;
			color: #206175;
		}
	}

	.admin {
		margin: 7px 0 7px 15px;
		display: flex;
		justify-content: left;

		p {
			color: #999999;
			font-size: 13px;
		}

		p:nth-child(1) {
			max-width: 300px;
			word-break: keep-all; // 自动换行
			word-wrap: break-word;
			white-space: pre-line;
		}
	}

	.not-pass {
		padding: 7px 15px 10px 15px;
		margin: 10px;
		background-color: #ffffff;
		border-radius: 7px;

		.reason {
			font-size: 15px;
			margin: 5px 30px 1px 31px;
			color: rgb(225, 0, 30);
		}

		.all {
			display: flex;
			justify-content: space-between;

			.right {
				margin: auto 0;
				font-size: 14px;
				color: #999999;
			}

			.block {
				margin-top: 7px;
				display: flex;
				justify-content: left;


				.img {
					width: 80px;
					height: 80px;
					background-color: #fff0af;
					border-radius: 9px;
				}

				.cont {
					margin-left: 15px;

					.status {
						color: #ffffff;
						background-color: #E74C3C;
						font-size: 12px;
						margin-top: 13px;
						border-radius: 5px;
						padding: 2px 0;
						/*border: 2px solid #D35400;*/
						text-align: center;
					}

					.price {
						color: rgb(221, 81, 68);
						font-size: 13px;
						margin-top: 5px;
						font-weight: bold;
					}
				}
			}
		}
	}


	.block2 {
		background-color: rgba(50, 50, 50, 0.4);
		position: fixed;
		z-index: 2;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		overflow-x: auto;

		.todo {
			transition: 0.5s;
			opacity: 0;
			margin: 190px auto;
			width: 260px;
			padding: 20px 27px;
			border-radius: 8px;
			background-color: #ffffff;

			.remind {
				font-size: 13.5px;
				color: #666666;
			}

			.do {
				margin-top: 15px;
			}
		}
	}
</style>