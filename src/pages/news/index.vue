<template>
	<div class="main">
		<div class="search" @click="search">
			<image src="/static/images/search.png"/>
			<p>搜索</p>
		</div>
		<div class="cont" v-for="(item, index) in goods" :key="index" @touchstart="touchStart($event, index)"
			 @touchmove="touchMove($event, index)" @touchend="touchEnd($event, index)"
			 :style="{transform: 'translateX('+ lists[index].move + 'px)',width: width+ 'px', transition: time + 's'}">
			<div class="left">
				<div class="sculpture">
					<image src="/static/images/模拟用户头像2.jpg"/>
				</div>
				<div class="msg">
					<p class="name">kaiqisan</p>
					<p class="msg-cont">亲，在吗？</p>
				</div>
			</div>
			<div class="right">
				<p>10:00</p>
				<div class="do">
					<div class="set-top">置顶</div>
					<div class="del">删除</div>
				</div>
			</div>
		</div>


	</div>
</template>

<script>
    import { linkMethod } from '@/public/js/public-method'

    export default {
        name: 'news',
        mixins: [linkMethod],
        data() {
            return {
                // move: 0,  // -185
                width: '',
                startX: null,
				time: 0.15,
                opened: null,
                status: true,
                a: null,
                screenWidth: null,
                screenHeight: null,
                goods: [1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                lists: [
                    {
                        move: 0,
                    },
                    {
                        move: 0,
                    },
                    {
                        move: 0,
                    },
                    {
                        move: 0,
                    },
                    {
                        move: 0,
                    },
                    {
                        move: 0,
                    },
                    {
                        move: 0,
                    },
                    {
                        move: 0,
                    },
                    {
                        move: 0,
                    },
                    {
                        move: 0,
                    },
                    {
                        move: 0,
                    },

                ]
            }
        },
        methods: {
            search() {
                if (this.opened !== null) {
                    this.lists[this.opened].move = 0
                }
                this.linkTo('search', [], false)
            },
            touchStart(e, i) {
                this.startX = e.mp.changedTouches[0].pageX
                if (this.opened !== i && this.opened !== null) {
                    this.lists[this.opened].move = 0
                }
                this.time = 0.05
            },
            touchMove(e, i) {
                if (this.status) {
                    this.status = false
                    this.a = e.mp.changedTouches[0].pageX - this.startX + this.lists[i].move
                } else {
                    this.a = e.mp.changedTouches[0].pageX - this.startX
                }

                if (this.opened === null && this.a < 0) {
                    this.lists[i].move = this.a
                    if (this.lists[i].move <= -185) {
                        this.lists[i].move = -185
                    }
                } else if (this.opened === i && this.a > 0) {
                    this.lists[i].move = -185 + this.a
                    if (-185 + this.a >= 0) {
                        this.lists[i].move = 0
                    }
                }
                if (this.opened !== i && this.opened !== null) {
                    this.lists[this.opened].move = 0
                }

                if (e.mp.changedTouches[0].pageX <= 4 || e.mp.changedTouches[0].pageX >= this.screenWidth - 4) {
                    if (this.lists[i].move <= -100) {
                        this.lists[i].move = -185
                        this.opened = i
                        this.status = true
                    } else if (this.lists[i].move > -100) {
                        this.lists[i].move = 0
                        this.opened = null
                        this.status = true
                    }
                }

            },
            touchEnd(e, i) {
                this.time = 0.15
                if (this.opened === null) {
                    if (this.lists[i].move <= -50) {
                        this.lists[i].move = -185
                        this.opened = i
                        this.status = true
                    } else {
                        this.lists[i].move = 0
					}
                } else {
                    if (this.lists[i].move >= -140) {
                        this.lists[i].move = 0
                        this.opened = null
                        this.status = true
                    } else {
                        this.lists[i].move = -185
					}
                }
            },
            reload() {
                // Object.assign(this.$data, this.$options.data())
                for (let i = 0; i < this.lists.length; i++) {
                    this.lists[i].move = 0
                }
            }
        },
        onLoad() {
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
            this.width = this.screenWidth + 175
        },
        onShow() {
            let that = this
            that.reload()
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
		overflow-y: auto;
		overflow-x: hidden;
	}

	.search {
		margin: 10px 10px 10px 10px;
		padding: 5px 0;
		display: flex;
		justify-content: center;
		background-color: #ffffff;
		border-radius: 15px;


		image {
			width: 20px;
			height: 20px;
		}

		p {
			color: #999999;
			margin-left: 5px;
		}
	}

	.cont {
		transition: 0.15s;
		width: 550px;
		/*margin-top: 10px;*/
		display: flex;
		justify-content: space-between;
		padding: 0 10px;
		/*border: 1px solid #666666;*/

		.left {
			padding: 10px 0;
			display: flex;
			justify-content: left;

			.sculpture {
				width: 55px;
				height: 55px;
				border-radius: 30px;
				background-color: #459c9c;
				overflow: hidden;

				image {
					width: inherit;
					height: inherit;
				}
			}

			.msg {
				margin: auto 8px;

				.name {
					font-size: 14px;
				}

				.msg-cont {
					font-size: 13px;
					color: #666666;
					margin-top: 4px;
				}
			}
		}

		.right {
			display: flex;
			justify-content: left;

			p {
				margin: auto 30px auto 0;
				font-size: 10px;
				color: #666666;
			}

			.do {
				.set-top {
					width: 87.5px;
					padding: 27px 0 27px 0;
					display: inline-block;
					background-color: #fff0af;
					text-align: center;
				}

				.del {
					width: 87.5px;
					padding: 27px 0 27px 0;
					display: inline-block;
					background-color: rgb(221, 0, 27);
					text-align: center;
				}
			}
		}
	}
</style>