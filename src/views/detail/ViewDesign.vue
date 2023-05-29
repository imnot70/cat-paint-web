<template>
	<div class="">
		<el-row>
			<el-col :span="12">
				<div class="left">
					<el-input style="width:400px;" v-model="input" placeholder="模型名称" />
					<div style="width:400px;">
						<div style="line-height:30px;margin-top:30px;">图片比例</div>
						<div>
							<el-button class="width125" type="default">1:1</el-button>
							<el-button class="width125" type="default">1:2</el-button>
							<el-button class="width125" type="default">3:4</el-button>
						</div>
						<div style="margin-top:12px;">
							<el-button class="width125" type="default">4:3</el-button>
							<el-button class="width125" type="default">16:9</el-button>
							<el-button class="width125" type="default">9:16</el-button>
						</div>
						<el-button type="primary" size="large" style="width:100%;margin-top:12px;">生成</el-button>
					</div>
					<div class="margin20" style="width:400px;">
						<div style="display:flex;">
							<span style="flex:1;">提示词</span>
							<span style="flex:1;">词典</span>
						</div>
						<div class="margin20">
							<textarea name="" id="" cols="30" rows="10"></textarea>
						</div>

						<div style="display:none;width:600px;">
							<div class="margin20" style="display:flex;">
								<el-select style="flex:1;" v-model="value" class="m-2" placeholder="采样器" size="large">
									<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
								</el-select>
								<span style="width:20px;"></span>
								<el-slider style="flex:1;" max="70" v-model="value1" />
							</div>
							<div class="margin20" style="display:flex">
								<el-select style="flex:1;" v-model="value" class="m-2" placeholder="Select" size="large">
									<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
								</el-select>
								<span style="width:20px;"></span>
								<el-slider style="flex:1;" max="7" v-model="value2" />
							</div>
						</div>
					</div>
				</div>
			</el-col>
			<el-col :span="12">
				<div class="right">
					<div style="width:260px;height:195px;">
						<img style="width:100%;height:100%;" src="../../assets/images/b.png" alt="">
					</div>
					<div style="border:1px solid #000;margin-top:20px;width:500px;height:500px;padding:10px;">
						<div style="display:flex;">
							<img style="flex:1;width:100%;height:100%" src="../../assets/images/b.png" alt="">
						</div>
					</div>
					
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script setup lang='ts'>
import { onMounted, onBeforeUnmount, reactive, ref, nextTick } from 'vue'
const value1 = ref(50)
const value2 = ref(3.5)
</script>

<style scoped lang="less">
.width125 {
	width: 125px;
}

.margin20 {
	margin-top: 20px;
}

.left {
	padding: 20px;
}
</style>