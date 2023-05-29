<template>
	<div class="main">
		<el-card>
			<el-row>
				<el-col :span="8">
					<div class="grid-content ep-bg-purple-dark" style="width:260px;height:195px;">
						<img style="width:100%;height:100%" src="../../assets/images/b.png" alt="">
					</div>
				</el-col>
				<el-col :span="16">
					<div style="position:absolute;top:50%;transform:translateY(-50%)" class="grid-content ep-bg-purple-dark">
						<div>昵称：</div>
						<div>UID</div>
						<div>积分</div>
					</div>
				</el-col>
			</el-row>
		</el-card>
		<el-card>
			<el-tabs type="card" v-model="activeName" class="demo-tabs">
				<el-tab-pane label="作品列表" name="first">
					<div class="imgList">
						<div>
							<img src="../../assets/images/b.png" alt="">
						</div>
						<div>
							<img src="../../assets/images/b.png" alt="">
						</div>
						<div>
							<img src="../../assets/images/b.png" alt="">
						</div>
						<div>
							<img src="../../assets/images/b.png" alt="">
						</div>
						<div>
							<img src="../../assets/images/b.png" alt="">
						</div>
					</div>
				</el-tab-pane>
				<el-tab-pane label="喜爱" name="second">
					<div class="imgList">
						<div>
							<img src="../../assets/images/b.png" alt="">
						</div>
						<div>
							<img src="../../assets/images/b.png" alt="">
						</div>
						<div>
							<img src="../../assets/images/b.png" alt="">
						</div>
						<div>
							<img src="../../assets/images/b.png" alt="">
						</div>
						<div>
							<img src="../../assets/images/b.png" alt="">
						</div>
					</div>
				</el-tab-pane>
			</el-tabs>
		</el-card>
	</div>
</template>

<script setup lang='ts'>
import { onMounted, onBeforeUnmount, reactive, ref, nextTick } from 'vue'
const activeName = ref('first')
</script>

<style scoped lang="less">
.imgList{
	display:flex;
	flex-flow:row wrap;
	div{
		width:20%;
		padding:5px;
	}
	img{
		width:100%;
	}
}
</style>
