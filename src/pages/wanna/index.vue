<template>
	<div class="main">
		<div class="all">
			<div @click="linkTo('goods-details', [], false)">
				<div class="admin">
					<p>花生米</p>
					<p> > </p>
				</div>
				<div class="block">
					<div class="img">
						<image src="../../static/images/乒乓球拍.jpg"/>
					</div>
					<div class="cont">
						<p>乒乓球拍</p>
						<p class="area">科大泰达校区</p>
						<p class="price">￥50.00</p>
						<div class="status">九成新</div>
					</div>
				</div>
			</div>
			<div class="like" @click="del">
				<image src="../../static/images/like.png"/>
			</div>
		</div>
		<div class="block2" v-if="flag === true" @click="toCancel">
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
    // import { clickOutside } from '@/public/js/clickoutside'

    export default {
        name: 'wanna',
        mixins: [linkMethod],
        data() {
            return {
                flag: false,
                opacity: 0,
                isBg: false,
                screenHeight: null,
                screenWidth: null
            }
        },
        methods: {
            del() {
                this.flag = true
                setTimeout(() => {
                    this.opacity = 1
                }, 1)
            },
            surelyDel() {

            },
            toCancel(e) {
                if (!(e.clientX >= 27 && e.clientX <= this.screenWidth - 27 && e.clientY >= 190 && e.clientY <= 320)) {
                    this.giveUp()
                }
            },
            giveUp() {
                this.flag = false
                this.opacity = 0

            },
            reload() {
                Object.assign(this.$data, this.$options.data())
			},
			checkLogin() {
                let state = this.$store.state.loginState
				if (state === 0) {
				    this.linkTo('login', [], false)
				}
			}
        },
        onLoad() {
            this.flag = false
            this.opacity = 0
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
        onShow() {
			let that = this
			that.checkLogin()
			that.reload()

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

	.all {
		padding: 10px 15px 15px 15px;
		margin: 10px;
		background-color: #ffffff;
		border-radius: 7px;
		display: flex;
		justify-content: space-between;

		.like {
			margin: auto 0;
			padding-right: 10px;

			image {
				width: 25px;
				height: 25px;
			}
		}

		.block {
			margin-top: 15px;
			display: flex;
			justify-content: left;

			.img {
				width: 80px;
				height: 80px;
				background-color: #fff0af;
				border-radius: 9px;
				overflow: hidden;

				image {
					width: inherit;
					height: inherit;
				}
			}

			.cont {
				margin-left: 15px;

				.area {
					font-size: 12px;
					color: #666666;
				}

				.status {
					color: #ffffff;
					background-color: #E74C3C;
					font-size: 12px;
					margin-top: 5px;
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

	.admin {
		margin-left: 5px;
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

		p:nth-child(2) {
			margin-left: 15px;
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