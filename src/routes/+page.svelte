<script lang="ts" setup>
	import { Gemstone, OrgPro, Rates, levela, yina } from '$lib/core';
	import type { Org, FireOrg, LeafOrg, ClstOrg, SandOrg, Levels, Result } from '$lib/core';
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	let score = 0;
	let places: string[] = [];
	let placeLength = 6;
	interface LevelsString {
		level_clst_1: string;
		level_clst_2: string;
		level_clst_3: string;
		level_fire_1: string;
		level_fire_2: string;
		level_fire_3: string;
		level_fire_4: string;
		level_leaf_1: string;
		level_leaf_2: string;
		level_leaf_3: string;
		level_sand_1: string;
		level_sand_2: string;
		level_sand_3: string;
	}
	let org: Org = {
		count_clst: 0,
		count_fire: 0,
		count_leaf: 0,
		count_sand: 0
	};
	let levels: Levels = {
		level_clst_1: 0,
		level_clst_2: 0,
		level_clst_3: 0,
		level_fire_1: 0,
		level_fire_2: 0,
		level_fire_3: 0,
		level_fire_4: 0,
		level_leaf_1: 0,
		level_leaf_2: 0,
		level_leaf_3: 0,
		level_sand_1: 0,
		level_sand_2: 0,
		level_sand_3: 0
	};
	let output: OrgPro = new OrgPro(org);

	let levelsString: LevelsString = {
		level_clst_1: '0',
		level_clst_2: '0',
		level_clst_3: '0',
		level_fire_1: '0',
		level_fire_2: '0',
		level_fire_3: '0',
		level_fire_4: '0',
		level_leaf_1: '0',
		level_leaf_2: '0',
		level_leaf_3: '0',
		level_sand_1: '0',
		level_sand_2: '0',
		level_sand_3: '0'
	};
	let res: Result;
	// levelsString转换为levels
	function levelsString2levels() {
		levels.level_clst_1 = parseInt(levelsString.level_clst_1);
		levels.level_clst_2 = parseInt(levelsString.level_clst_2);
		levels.level_clst_3 = parseInt(levelsString.level_clst_3);
		levels.level_fire_1 = parseInt(levelsString.level_fire_1);
		levels.level_fire_2 = parseInt(levelsString.level_fire_2);
		levels.level_fire_3 = parseInt(levelsString.level_fire_3);
		levels.level_fire_4 = parseInt(levelsString.level_fire_4);
		levels.level_leaf_1 = parseInt(levelsString.level_leaf_1);
		levels.level_leaf_2 = parseInt(levelsString.level_leaf_2);
		levels.level_leaf_3 = parseInt(levelsString.level_leaf_3);
		levels.level_sand_1 = parseInt(levelsString.level_sand_1);
		levels.level_sand_2 = parseInt(levelsString.level_sand_2);
		levels.level_sand_3 = parseInt(levelsString.level_sand_3);
	}
	function judge_here() {
		// 传入原料数量和工艺等级，返回最优排列,
		levelsString2levels();
		let gemstone: Gemstone = new Gemstone(org, levels, placeLength);
		res = gemstone.judge();
		score = res.score;
		places = res.place;
		output = res.output;
		console.log(res);
	}
	function To_up() {
		// levels里的所有值都变成3
		for (let key in levelsString) {
			levelsString[key] = '3';
		}
	}

	onMount(() => {
		// 挂载之前附一次值,防止刷新后数据丢失
		org = {
			count_clst: 0,
			count_fire: 0,
			count_leaf: 0,
			count_sand: 0
		};
		levels = {
			level_clst_1: 0,
			level_clst_2: 0,
			level_clst_3: 0,
			level_fire_1: 0,
			level_fire_2: 0,
			level_fire_3: 0,
			level_fire_4: 0,
			level_leaf_1: 0,
			level_leaf_2: 0,
			level_leaf_3: 0,
			level_sand_1: 0,
			level_sand_2: 0,
			level_sand_3: 0
		};
		levelsString = {
			level_clst_1: '0',
			level_clst_2: '0',
			level_clst_3: '0',
			level_fire_1: '0',
			level_fire_2: '0',
			level_fire_3: '0',
			level_fire_4: '0',
			level_leaf_1: '0',
			level_leaf_2: '0',
			level_leaf_3: '0',
			level_sand_1: '0',
			level_sand_2: '0',
			level_sand_3: '0'
		};
	});
</script>

<div class="root">
	<!-- <head></head> -->
	<div class="head">
		<p>ArkGemstone</p>
		<div class="sponsor">
			如果你觉得本网页有用，请在
			<a href="https://github.com/sevmeowple/ArkGemstone" target="_blank">
				<img src={`${base}/assets/github.png`} alt="GitHub" class="github-icon" />
			</a>
			上给我们一个Star！
		</div>
	</div>

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
						bind:value={org.count_fire}
						class="modern-input fire-input"
						placeholder="火焰伊纳"
					/>
				</div>
				<div class="input-container">
					<label for="input2" class="input-label">天空伊纳</label>
					<input
						type="number"
						id="input2"
						bind:value={org.count_clst}
						class="modern-input sky-input"
						placeholder="天空伊纳"
					/>
				</div>
				<div class="input-container">
					<label for="input3" class="input-label">草叶伊纳</label>
					<input
						type="number"
						id="input3"
						bind:value={org.count_leaf}
						class="modern-input leaf-input"
						placeholder="草叶伊纳"
					/>
				</div>
				<div class="input-container">
					<label for="input4" class="input-label">沙伊纳</label>
					<input
						type="number"
						id="input4"
						bind:value={org.count_sand}
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
							<select class="select" bind:value={levelsString.level_fire_1}>
								<option value="0">没有淬雕 I</option>
								<option value="1">初级淬雕 I</option>
								<option value="2">中级淬雕 I</option>
								<option value="3">高级淬雕 I</option>
							</select>
						</label>
						<label class="label">
							<select class="select" bind:value={levelsString.level_fire_2}>
								<option value="0">没有淬雕 II</option>
								<option value="1">初级淬雕 II</option>
								<option value="2">中级淬雕 II</option>
								<option value="3">高级淬雕 II</option>
							</select>
						</label>
						<label class="label">
							<select class="select" bind:value={levelsString.level_fire_3}>
								<option value="0">没有淬雕 III</option>
								<option value="1">初级淬雕 III</option>
								<option value="2">中级淬雕 III</option>
								<option value="3">高级淬雕 III</option>
							</select>
						</label>
						<label class="label">
							<select class="select" bind:value={levelsString.level_fire_4}>
								<option value="0">没有淬雕 IV</option>
								<option value="1">初级淬雕 IV</option>
								<option value="2">中级淬雕 IV</option>
								<option value="3">高级淬雕 IV</option>
							</select>
						</label>
					</div>
					<div class="craft-section">
						<label class="label">
							<select class="select" bind:value={levelsString.level_leaf_1}>
								<option value="0">没有滤纯 I</option>
								<option value="1">初级滤纯 I</option>
								<option value="2">中级滤纯 I</option>
								<option value="3">高级滤纯 I</option>
							</select>
						</label>
						<label class="label">
							<select class="select" bind:value={levelsString.level_leaf_2}>
								<option value="0">没有滤纯 II</option>
								<option value="1">初级滤纯 II</option>
								<option value="2">中级滤纯 II</option>
								<option value="3">高级滤纯 II</option>
							</select>
						</label>
						<label class="label">
							<select class="select" bind:value={levelsString.level_leaf_3}>
								<option value="0">没有滤纯 III</option>
								<option value="1">初级滤纯 III</option>
								<option value="2">中级滤纯 III</option>
								<option value="3">高级滤纯 III</option>
							</select>
						</label>
					</div>
					<div class="craft-section">
						<label class="label">
							<select class="select" bind:value={levelsString.level_clst_1}>
								<option value="0">没有交糅 I</option>
								<option value="1">初级交糅 I</option>
								<option value="2">中级交糅 I</option>
								<option value="3">高级交糅 I</option>
							</select>
						</label>
						<label class="label">
							<select class="select" bind:value={levelsString.level_clst_2}>
								<option value="0">没有交糅 II</option>
								<option value="1">初级交糅 II</option>
								<option value="2">中级交糅 II</option>
								<option value="3">高级交糅 II</option>
							</select>
						</label>
						<label class="label">
							<select class="select" bind:value={levelsString.level_clst_3}>
								<option value="0">没有交糅 III</option>
								<option value="1">初级交糅 III</option>
								<option value="2">中级交糅 III</option>
								<option value="3">高级交糅 III</option>
							</select>
						</label>
					</div>
					<div class="craft-section">
						<label class="label">
							<select class="select" bind:value={levelsString.level_sand_1}>
								<option value="0">没有落晶 I</option>
								<option value="1">初级落晶 I</option>
								<option value="2">中级落晶 I</option>
								<option value="3">高级落晶 I</option>
							</select>
						</label>
						<label class="label">
							<select class="select" bind:value={levelsString.level_sand_2}>
								<option value="0">没有落晶 II</option>
								<option value="1">初级落晶 II</option>
								<option value="2">中级落晶 II</option>
								<option value="3">高级落晶 II</option>
							</select>
						</label>
						<label class="label">
							<select class="select" bind:value={levelsString.level_sand_3}>
								<option value="0">没有落晶 III</option>
								<option value="1">初级落晶 III</option>
								<option value="2">中级落晶 III</option>
								<option value="3">高级落晶 III</option>
							</select>
						</label>
					</div>
					<div class="craft-section">
						<label class="label">
							<span>操作台可工作流槽位</span>
							<select class="select" bind:value={placeLength}>
								{#each Array(7)
									.fill(0)
									.map((_, i) => i) as index}
									<option value={index}>{index}</option>
								{/each}
							</select>
						</label>
					</div>
				</div>
			</div>
		</div>
		<div class="part2">
			<div class="notice">
				<p>1. 如果得到的最优排列超出6个，说明你的几个淬雕里有不占用铭刻位置的升级，是正常现象</p>
				<p>
					2. 如果出现了直觉这种排列有问题，可以先自己验算一遍，因为有的排列顺序颠倒分数还是一样的
				</p>
			</div>
			<div class="score">
				<div class="score-title">最优排列分数</div>
				<div class="score-number">{score}</div>
			</div>
			<div class="content">
				<div class="title_part2">
					<div class="title">最优排列</div>
					<!-- 循环显示place -->
					{#each places as place}
						<div class="level">{levela[place]}</div>
					{/each}
				</div>
				<div class="output">
					<div class="title">产物信息</div>
					<!-- 显示FireOrg -->
					<!-- {#each Object.entries(output.Fire) as [key, value]}
						{#if value !== 0}
							<div class="output-item">
								<img src={`${base}/assets/${key}.png`} alt={yina[key]} />: {value}
							</div>
						{/if}
					{/each} -->
					<ul class="list">
						{#each Object.entries(output.Fire) as [key, value]}
							{#if value !== 0}
								<li class="output-item">
									<span><img src={`${base}/assets/${key}.png`} alt={yina[key]} /> </span>
									  <span>{value}</span>
								</li>
							{/if}
						{/each}

						<!-- 显示LeafOrg -->
						<!-- {#each Object.entries(output.Leaf) as [key, value]}
						{#if value !== 0}
							<div class="output-item">
								<img src={`${base}/assets/${key}.png`} alt={yina[key]} />: {value}
							</div>
						{/if}
					{/each} -->

						{#each Object.entries(output.Leaf) as [key, value]}
							{#if value !== 0}
								<li class="output-item">
									<span><img src={`${base}/assets/${key}.png`} alt={yina[key]} /> </span>
									  <span>{value}</span>
								</li>
							{/if}
						{/each}

						<!-- 显示ClstOrg -->
						<!-- {#each Object.entries(output.Clst) as [key, value]}
						{#if value !== 0}
							<div class="output-item">
								<img src={`${base}/assets/${key}.png`} alt={yina[key]} />: {value}
							</div>
						{/if}
					{/each} -->

						{#each Object.entries(output.Clst) as [key, value]}
							{#if value !== 0}
								<li class="output-item">
									<span><img src={`${base}/assets/${key}.png`} alt={yina[key]} /> </span>
									  <span>{value}</span>
								</li>
							{/if}
						{/each}

						<!-- 显示SandOrg -->
						<!-- {#each Object.entries(output.Sand) as [key, value]}
						{#if value !== 0}
							<div class="output-item">
								<img src={`${base}/assets/${key}.png`} alt={yina[key]} />: {value}
							</div>
						{/if}
					{/each} -->

						{#each Object.entries(output.Sand) as [key, value]}
							{#if value !== 0}
								<li class="output-item">
									<span><img src={`${base}/assets/${key}.png`} alt={yina[key]} /> </span>
									  <span>{value}</span>
								</li>
							{/if}
						{/each}
					</ul>
				</div>
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

	.head p {
		margin: 0;
		font-size: 1.5rem;
		font-weight: bold;
		color: #333;
	}

	.sponsor {
		font-size: 1rem;
		color: #666;
		display: inline-flex;
		align-items: center;
	}

	.sponsor a {
		display: inline-flex;
		align-items: center;
		text-decoration: none;
		color: #53ffbd;
	}

	.github-icon {
		width: 20px;
		height: 20px;
		margin-left: 5px;
		vertical-align: middle;
		transition: filter 0.3s ease;
	}

	.sponsor a:hover .github-icon {
		filter: drop-shadow(0 0 5px #53ffbd);
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
		padding: 20px;
		box-sizing: border-box;
		border-radius: 10px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	}

	.notice {
		background-color: #f0e4d7;
		padding: 10px;
		border-radius: 10px;
		box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
		margin-bottom: 20px;
		text-align: left;
		width: 100%;
		box-sizing: border-box;
	}

	.notice p {
		font-size: 16px;
		color: #5c422b;
		margin: 5px 0;
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

	.content {
		display: flex;
		width: 100%;
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
		width: 50%;
		box-sizing: border-box;
		margin-right: 10px;
	}

	.title {
		font-size: 24px;
		font-weight: bold;
		color: #5c422b;
		margin-bottom: 10px;
	}

	.level {
		font-size: 20px;
		color: #5c422b;
	}

	.output {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: #f0e4d7;
		padding: 20px;
		border-radius: 10px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		width: 50%;
		box-sizing: border-box;
	}

	.output-item {
		font-size: 20px;
		color: #5c422b; /* 沙漠棕色 */
		margin: 10px 0;
		border: 1px solid #d4a373; /* 沙色边框 */
		border-radius: 8px;
		padding: 10px;
		display: flex;
		align-items: center;
		background-color: #f4e7d3; /* 沙色背景 */
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
	}

	.output-item:hover {
		transform: translateY(-5px);
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
	}

	.output-item img {
		margin-right: 10px;
		width: 30px;
		height: 30px;
		border-radius: 50%;
		border: 1px solid #ddd;
	}

	.output-item span:last-child {
		font-weight: bold;
		margin-left: auto;
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
