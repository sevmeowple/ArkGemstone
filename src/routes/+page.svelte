<script lang="ts" setup>
	import { judge, levels } from '$lib/core';
	import { onMount } from 'svelte';
	let score = 0;
	let count_fire: number = 0,
		count_clst: number = 0,
		count_leaf: number = 0,
		count_sand: number = 0,
		level_fire_1: string = '0',
		level_fire_2: string = '0',
		level_fire_3: string = '0',
		level_fire_4: string = '0',
		// 三种滤纯的等级，0代表未拥有
		level_leaf_1: string = '0',
		level_leaf_2: string = '0',
		level_leaf_3: string = '0',
		// 三种交糅的等级，0代表未拥有
		level_clst_1: string = '0',
		level_clst_2: string = '0',
		level_clst_3: string = '0',
		// 三种落晶的等级，0代表未拥有
		level_sand_1: string = '0',
		level_sand_2: string = '0',
		level_sand_3: string = '0';
	let res = {
		'1': 0,
		'2': 0,
		'3': 0,
		'4': 0,
		'5': 0,
		'6': 0
	};
	function judge_here() {
		// 传入原料数量和工艺等级，返回最优排列,
		const result = judge(
			count_fire,
			count_clst,
			count_leaf,
			count_sand,
			parseInt(level_fire_1),
			parseInt(level_fire_2),
			parseInt(level_fire_3),
			parseInt(level_fire_4),
			parseInt(level_leaf_1),
			parseInt(level_leaf_2),
			parseInt(level_leaf_3),
			parseInt(level_clst_1),
			parseInt(level_clst_2),
			parseInt(level_clst_3),
			parseInt(level_sand_1),
			parseInt(level_sand_2),
			parseInt(level_sand_3)
		);
		console.log(result);
		score = result[0];
		res['1'] = result[1];
		res['2'] = result[2];
		res['3'] = result[3];
		res['4'] = result[4];
		res['5'] = result[5];
		res['6'] = result[6];
	}
	function To_up() {
		level_fire_1 = '3';
		level_fire_2 = '3';
		level_fire_3 = '3';
		level_fire_4 = '3';
		level_leaf_1 = '3';
		level_leaf_2 = '3';
		level_leaf_3 = '3';
		level_clst_1 = '3';
		level_clst_2 = '3';
		level_clst_3 = '3';
		level_sand_1 = '3';
		level_sand_2 = '3';
		level_sand_3 = '3';
	}
	onMount(() => {
		// 挂载之前附一次值,防止刷新后数据丢失
		count_fire = 0;
		count_clst = 0;
		count_leaf = 0;
		count_sand = 0;
	});
</script>

<div class="root">
	<!-- <head></head> -->
	<div class="head">ArkGemstone</div>
	<main>
		<div class="part1">
			<div class="box1">
				<div class="org">你的原料</div>
				<!-- input绑定四种原料,且限制只允许数字 -->
				<div class="input-container">
					<label for="input1" class="input-label">火焰伊纳</label>
					<input
						type="number"
						id="input1"
						bind:value={count_fire}
						class="modern-input fire-input"
						placeholder="火焰伊纳"
					/>
				</div>
				<div class="input-container">
					<label for="input2" class="input-label">天空伊纳</label>
					<input
						type="number"
						id="input2"
						bind:value={count_clst}
						class="modern-input sky-input"
						placeholder="天空伊纳"
					/>
				</div>
				<div class="input-container">
					<label for="input3" class="input-label">草叶伊纳</label>
					<input
						type="number"
						id="input3"
						bind:value={count_leaf}
						class="modern-input leaf-input"
						placeholder="草叶伊纳"
					/>
				</div>
				<div class="input-container">
					<label for="input4" class="input-label">沙伊纳</label>
					<input
						type="number"
						id="input4"
						bind:value={count_sand}
						class="modern-input sand-input"
						placeholder="沙伊纳"
					/>
				</div>
			</div>
			<div class="box2">
				<div class="cd">你的工艺</div>
				<div class="craft-container">
					<div class="craft-section">
						<label class="label">
							<select class="select" bind:value={level_fire_1}>
								<option value="0">没有淬雕 I</option>
								<option value="1">初级淬雕 I</option>
								<option value="2">中级淬雕 I</option>
								<option value="3">高级淬雕 I</option>
							</select>
						</label>
						<label class="label">
							<select class="select" bind:value={level_fire_2}>
								<option value="0">没有淬雕 II</option>
								<option value="1">初级淬雕 II</option>
								<option value="2">中级淬雕 II</option>
								<option value="3">高级淬雕 II</option>
							</select>
						</label>
						<label class="label">
							<select class="select" bind:value={level_fire_3}>
								<option value="0">没有淬雕 III</option>
								<option value="1">初级淬雕 III</option>
								<option value="2">中级淬雕 III</option>
								<option value="3">高级淬雕 III</option>
							</select>
						</label>
						<label class="label">
							<select class="select" bind:value={level_fire_4}>
								<option value="0">没有淬雕 IV</option>
								<option value="1">初级淬雕 IV</option>
								<option value="2">中级淬雕 IV</option>
								<option value="3">高级淬雕 IV</option>
							</select>
						</label>
					</div>
					<div class="craft-section">
						<label class="label">
							<select class="select" bind:value={level_leaf_1}>
								<option value="0">没有滤纯 I</option>
								<option value="1">初级滤纯 I</option>
								<option value="2">中级滤纯 I</option>
								<option value="3">高级滤纯 I</option>
							</select>
						</label>
						<label class="label">
							<select class="select" bind:value={level_leaf_2}>
								<option value="0">没有滤纯 II</option>
								<option value="1">初级滤纯 II</option>
								<option value="2">中级滤纯 II</option>
								<option value="3">高级滤纯 II</option>
							</select>
						</label>
						<label class="label">
							<select class="select" bind:value={level_leaf_3}>
								<option value="0">没有滤纯 III</option>
								<option value="1">初级滤纯 III</option>
								<option value="2">中级滤纯 III</option>
								<option value="3">高级滤纯 III</option>
							</select>
						</label>
					</div>
					<div class="craft-section">
						<label class="label">
							<select class="select" bind:value={level_clst_1}>
								<option value="0">没有交糅 I</option>
								<option value="1">初级交糅 I</option>
								<option value="2">中级交糅 I</option>
								<option value="3">高级交糅 I</option>
							</select>
						</label>
						<label class="label">
							<select class="select" bind:value={level_clst_2}>
								<option value="0">没有交糅 II</option>
								<option value="1">初级交糅 II</option>
								<option value="2">中级交糅 II</option>
								<option value="3">高级交糅 II</option>
							</select>
						</label>
						<label class="label">
							<select class="select" bind:value={level_clst_3}>
								<option value="0">没有交糅 III</option>
								<option value="1">初级交糅 III</option>
								<option value="2">中级交糅 III</option>
								<option value="3">高级交糅 III</option>
							</select>
						</label>
					</div>
					<div class="craft-section">
						<label class="label">
							<select class="select" bind:value={level_sand_1}>
								<option value="0">没有落晶 I</option>
								<option value="1">初级落晶 I</option>
								<option value="2">中级落晶 I</option>
								<option value="3">高级落晶 I</option>
							</select>
						</label>
						<label class="label">
							<select class="select" bind:value={level_sand_2}>
								<option value="0">没有落晶 II</option>
								<option value="1">初级落晶 II</option>
								<option value="2">中级落晶 II</option>
								<option value="3">高级落晶 II</option>
							</select>
						</label>
						<label class="label">
							<select class="select" bind:value={level_sand_3}>
								<option value="0">没有落晶 III</option>
								<option value="1">初级落晶 III</option>
								<option value="2">中级落晶 III</option>
								<option value="3">高级落晶 III</option>
							</select>
						</label>
					</div>
				</div>
			</div>
		</div>
		<div class="part2">
			<div class="score">
				<div class="score-title">最优排列分数</div>
				<div class="score-number">{score}</div>
			</div>
			<div class="title_part2">
				<!-- 显示对应levels里的索引 -->
				<div class="title">最优排列</div>
				{#each Object.keys(res) as key}
					<div class="title">{'第' + key + '种'}</div>
					<div class="level">{levels[res[key]]}</div>
				{/each}
			</div>
		</div>
		<div class="button-container">
			<button on:click={judge_here}>计算</button>
			<button on:click={To_up}>一键高级</button>
		</div>
	</main>
</div>

<style scoped>
	.root {
		position: relative;
		height: 100vh;
		width: 100vw;
		background-color: #ddc6a6;
		display: flex;
		flex-direction: column;
	}

	.head {
		position: absolute;
		top: 5%;
		width: 100vw;
		font-size: 35px;
		text-align: center;
		color: #5c422b;
	}

	main {
		display: flex;
		width: 100%;
		height: calc(80% - 70px); /* 除去 button 的高度 */
		flex-grow: 1; /* 占据剩余空间 */
	}

	.part1,
	.part2 {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.part1 {
		flex: 5;
		display: flex;
		justify-content: space-between;
	}

	.box1,
	.box2 {
		flex: 1;
	}

	.box1 {
		margin-left: 5%;
	}

	.part2 {
		flex: 3;
	}

	input,
	select {
		max-width: 200px;
	}
	input {
		color: black;
	}

	.input-container {
		display: flex;
		flex-direction: column;
		margin-bottom: 10px;
	}

	.input-label {
		margin-bottom: 5px;
		font-weight: bold;
	}

	.modern-input {
		padding: 10px;
		border: 1px solid #ccc;
		border-radius: 5px;
		font-size: 16px;
		width: 100%;
		box-sizing: border-box;
	}

	.modern-input:focus {
		outline: none;
		box-shadow: 0 0 5px rgba(92, 66, 43, 0.5);
	}

	.fire-input {
		border-color: #ff4500;
	}

	.fire-input:focus {
		box-shadow: 0 0 5px rgba(255, 69, 0, 0.5);
	}

	.sky-input {
		border-color: #800080;
	}

	.sky-input:focus {
		box-shadow: 0 0 5px rgba(128, 0, 128, 0.5);
	}

	.leaf-input {
		border-color: #43deae;
	}

	.leaf-input:focus {
		box-shadow: 0 0 5px rgba(67, 222, 174, 0.5);
	}

	.sand-input {
		border-color: #d2b48c;
	}

	.sand-input:focus {
		box-shadow: 0 0 5px rgba(210, 180, 140, 0.5);
	}

	.craft-container {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.craft-section {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}

	.label {
		width: calc(50% - 4px);
		box-sizing: border-box;
	}

	.label select {
		margin-top: 4px;
	}

	.part2 {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		/* background-color: #e0d4c7; */
		padding: 20px;
		box-sizing: border-box;
		border-radius: 10px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	}

	.score {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-bottom: 20px;
		padding: 10px;
		background-color: #f0e4d7;
		border-radius: 10px;
		box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
	}

	.score-title {
		font-size: 20px;
		font-weight: bold;
		color: #5c422b;
	}

	.score-number {
		font-size: 24px;
		color: #5c422b;
		margin-top: 5px;
	}

	.title_part2 {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: #f0e4d7;
		padding: 20px;
		border-radius: 10px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		width: 100%;
		box-sizing: border-box;
	}

	.title {
		font-size: 24px;
		font-weight: bold;
		color: #5c422b;
		margin-bottom: 10px;
	}

	.title_part2 .title:last-child {
		margin-bottom: 0; /* 去掉最后一个标题的下间距 */
	}
	.level {
		font-size: 20px;
		color: #5c422b;
	}
	.button-container {
		position: absolute;
		bottom: 20px;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		flex-direction: column;
		width: 50%; /* 根据需要调整宽度 */
	}

	button {
		width: 100%; /* 占据整个父元素的宽度 */
		padding: 10px 20px;
		font-size: 18px;
		background-color: #5c422b;
		color: #fff;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		margin-bottom: 10px; /* 按钮之间的间距 */
	}

	button:last-child {
		margin-bottom: 0; /* 去掉最后一个按钮的下间距 */
	}

	button:hover {
		background-color: #4e3621;
	}
</style>
