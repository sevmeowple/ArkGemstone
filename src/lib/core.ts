/* eslint-disable @typescript-eslint/no-unsafe-declaration-merging */
/* eslint-disable no-case-declarations */
interface Org {
    "count_fire": number,
    "count_clst": number,
    "count_leaf": number,
    "count_sand": number,
}

interface FireOrg {
    "count_fire": number,
    "count_fire_1": number,
    "count_fire_2": number,
    "count_fire_3": number,
    "count_fire_4": number,
}

interface LeafOrg {
    "count_leaf": number,
    "count_leaf_1": number,
    "count_leaf_2": number,
    "count_leaf_3": number,
}

interface ClstOrg {
    "count_clst": number,
    "count_clst_1": number,
    "count_clst_2": number,
    "count_clst_3": number,
}

interface SandOrg {
    "count_sand": number,
}

interface OrgPro {
    "Fire": FireOrg,
    "Leaf": LeafOrg,
    "Clst": ClstOrg,
    "Sand": SandOrg,
}

interface Rates {
    "fire": number[],
    "leaf": number[],
    "clst": number[],
    "sand": number
}

class Rates implements Rates {
    constructor() {
        this.fire = [1, 2, 10, 35, 85]
        this.clst = [1, 3, 22, 105, 0]
        this.leaf = [1, 5, 50, 500, 0]
        this.sand = 1
    }
}

class OrgPro implements OrgPro {
    constructor(org: Org) {
        this.Fire = {
            "count_fire": org.count_fire,
            "count_fire_1": 0,
            "count_fire_2": 0,
            "count_fire_3": 0,
            "count_fire_4": 0,
        }
        this.Leaf = {
            "count_leaf": org.count_leaf,
            "count_leaf_1": 0,
            "count_leaf_2": 0,
            "count_leaf_3": 0,
        }
        this.Clst = {
            "count_clst": org.count_clst,
            "count_clst_1": 0,
            "count_clst_2": 0,
            "count_clst_3": 0,
        }
        this.Sand = {
            "count_sand": org.count_sand,
        }
    }
}

interface Levels {
    "level_fire_1": number,
    "level_fire_2": number,
    "level_fire_3": number,
    "level_fire_4": number,
    "level_leaf_1": number,
    "level_leaf_2": number,
    "level_leaf_3": number,
    "level_clst_1": number,
    "level_clst_2": number,
    "level_clst_3": number,
    "level_sand_1": number,
    "level_sand_2": number,
    "level_sand_3": number,
}

interface Result {
    "score": number,
    "place": string[],
    "output": OrgPro,
}

class Gemstone {
    org: Org;
    orgpro: OrgPro;
    levels: Levels;
    rates: Rates;
    places: string[][] = [];
    placeLength: number = 6;
    constructor(org: Org, levels: Levels, placeLength: number = 6) {
        this.orgpro = new OrgPro(org);
        this.org = org;
        this.levels = levels;
        this.rates = new Rates();
        this.places = this.generatekeys(levels, placeLength);
        this.placeLength = placeLength;
    }



    functionMap: { [key: string]: () => void } = {
        "level_fire_1": () => {
            switch (this.levels.level_fire_1) {
                case 1:
                    // 将所有火元素转化为火1
                    this.orgpro.Fire.count_fire_1 += this.orgpro.Fire.count_fire;
                    this.orgpro.Fire.count_fire = 0;
                    break;
                case 2:
                    // 额外占place效果已在generatekeys中处理
                    this.orgpro.Fire.count_fire_1 += this.orgpro.Fire.count_fire;
                    this.orgpro.Fire.count_fire = 0;
                    break;
                case 3:
                    // 产出两倍
                    this.orgpro.Fire.count_fire_1 += this.orgpro.Fire.count_fire * 2;
                    this.orgpro.Fire.count_fire = 0;
                    break;
                default:
                    console.error("error: level_fire_1", this.levels.level_fire_1, " is not a valid value");
                    break;
            }
        },
        "level_fire_2": () => {
            switch (this.levels.level_fire_2) {
                case 1:
                    this.orgpro.Fire.count_fire_2 += this.orgpro.Fire.count_fire_1;
                    this.orgpro.Fire.count_fire_1 = 0;
                    break;
                // 二倍
                case 2:
                    this.orgpro.Fire.count_fire_2 += this.orgpro.Fire.count_fire_1 * 2;
                    this.orgpro.Fire.count_fire_1 = 0;
                    break;
                // 额外place效果已在generatekeys中处理
                case 3:
                    this.orgpro.Fire.count_fire_2 += this.orgpro.Fire.count_fire_1 * 2;
                    this.orgpro.Fire.count_fire_1 = 0;
                    break;
                default:
                    console.error("error: level_fire_2", this.levels.level_fire_2, " is not a valid value");
                    break;
            }
        },
        "level_fire_3": () => {
            switch (this.levels.level_fire_3) {
                case 1:
                    this.orgpro.Fire.count_fire_3 += this.orgpro.Fire.count_fire_2;
                    this.orgpro.Fire.count_fire_2 = 0;
                    break;
                // 2.4倍
                case 2:
                    this.orgpro.Fire.count_fire_3 += this.orgpro.Fire.count_fire_2 * 2.4;
                    this.orgpro.Fire.count_fire_2 = 0;
                    break;
                // 额外place效果已在generatekeys中处理
                case 3:
                    this.orgpro.Fire.count_fire_3 += this.orgpro.Fire.count_fire_2 * 2.4;
                    this.orgpro.Fire.count_fire_2 = 0;
                    break;
                default:
                    console.error("error: level_fire_3", this.levels.level_fire_3, " is not a valid value");
                    break;
            }
        },
        "level_fire_4": () => {
            switch (this.levels.level_fire_4) {
                case 1:
                    this.orgpro.Fire.count_fire_4 += this.orgpro.Fire.count_fire_3;
                    this.orgpro.Fire.count_fire_3 = 0;
                    break;
                // 1500score per 空place ,在最后计算分数时处理
                case 2:
                    this.orgpro.Fire.count_fire_4 += this.orgpro.Fire.count_fire_3;
                    this.orgpro.Fire.count_fire_3 = 0;
                    break;
                // 5000score per 空place ,在最后计算分数时处理
                case 3:
                    this.orgpro.Fire.count_fire_4 += this.orgpro.Fire.count_fire_3;
                    this.orgpro.Fire.count_fire_3 = 0;
                    break;
                default:
                    console.error("error: level_fire_4", this.levels.level_fire_4, " is not a valid value");
                    break;
            }
        },
        // 草叶1:1生成草叶1和沙子
        // 10 = >5 and 5
        "level_leaf_1": () => {
            switch (this.levels.level_leaf_1) {
                case 1:
                    this.orgpro.Leaf.count_leaf_1 += this.orgpro.Leaf.count_leaf / 2;
                    this.orgpro.Sand.count_sand += this.orgpro.Leaf.count_leaf / 2;
                    this.orgpro.Leaf.count_leaf = 0;
                    break;
                // 10 = > 8 and 2
                case 2:
                    this.orgpro.Leaf.count_leaf_1 += this.orgpro.Leaf.count_leaf * 0.8;
                    this.orgpro.Sand.count_sand += this.orgpro.Leaf.count_leaf * 0.2;
                    this.orgpro.Leaf.count_leaf = 0;
                    break;
                // 10 = > 10 and 0
                // 额外产出一倍sand
                case 3:
                    this.orgpro.Leaf.count_leaf_1 += this.orgpro.Leaf.count_leaf;
                    this.orgpro.Sand.count_sand += this.orgpro.Leaf.count_leaf;
                    this.orgpro.Leaf.count_leaf = 0;
                    break;
                default:
                    console.error("error: level_leaf_1", this.levels.level_leaf_1, " is not a valid value");
                    break;

            }
        },
        "level_leaf_2": () => {
            switch (this.levels.level_leaf_2) {
                // 10=>4 and 6
                case 1:
                    this.orgpro.Leaf.count_leaf_2 += this.orgpro.Leaf.count_leaf_1 * 0.4;
                    this.orgpro.Sand.count_sand += this.orgpro.Leaf.count_leaf_1 * 0.6;
                    this.orgpro.Leaf.count_leaf_1 = 0;
                    break;
                // 10=> 6 and 4
                case 2:
                    this.orgpro.Leaf.count_leaf_2 += this.orgpro.Leaf.count_leaf_1 * 0.6;
                    this.orgpro.Sand.count_sand += this.orgpro.Leaf.count_leaf_1 * 0.4;
                    this.orgpro.Leaf.count_leaf_1 = 0;
                    break;
                // 10=> 8 and 2同时额外产出sand
                // 这里按额外产出一倍即10=> 8 and 4
                case 3:
                    this.orgpro.Leaf.count_leaf_2 += this.orgpro.Leaf.count_leaf_1 * 0.8;
                    this.orgpro.Sand.count_sand += this.orgpro.Leaf.count_leaf_1 * 1.2;
                    this.orgpro.Leaf.count_leaf_1 = 0;
                    break;
                default:
                    console.error("error: level_leaf_2", this.levels.level_leaf_2, " is not a valid value");
                    break;

            }
        },
        "level_leaf_3": () => {
            switch (this.levels.level_leaf_3) {
                // 10=> 3 and 7
                case 1:
                    this.orgpro.Leaf.count_leaf_3 += this.orgpro.Leaf.count_leaf_2 * 0.3;
                    this.orgpro.Sand.count_sand += this.orgpro.Leaf.count_leaf_2 * 0.7;
                    this.orgpro.Leaf.count_leaf_2 = 0;
                    break;
                // 10=> 5 and 5
                case 2:
                    this.orgpro.Leaf.count_leaf_3 += this.orgpro.Leaf.count_leaf_2 * 0.5;
                    this.orgpro.Sand.count_sand += this.orgpro.Leaf.count_leaf_2 * 0.5;
                    this.orgpro.Leaf.count_leaf_2 = 0;
                    break;
                // 10=> 7 and 3
                // 额外产出一倍sand
                case 3:
                    this.orgpro.Leaf.count_leaf_3 += this.orgpro.Leaf.count_leaf_2 * 0.7;
                    this.orgpro.Sand.count_sand += this.orgpro.Leaf.count_leaf_2 * 1.3;
                    this.orgpro.Leaf.count_leaf_2 = 0;
                    break;
                default:
                    console.error("error: level_leaf_3", this.levels.level_leaf_3, " is not a valid value");
                    break;
            }
        },
        "level_clst_1": () => {
            switch (this.levels.level_clst_1) {
                // 1and1 =>1
                // 计算clst和sand最小的一个
                case 1:
                    const min = Math.min(this.orgpro.Clst.count_clst, this.orgpro.Sand.count_sand);
                    this.orgpro.Clst.count_clst_1 += min;
                    this.orgpro.Sand.count_sand -= min;
                    this.orgpro.Clst.count_clst -= min;
                    break;
                // 均分即res = sand and clst / 2
                // 均分后沙子和矿石都消失
                case 2:
                    const res = (this.orgpro.Clst.count_clst + this.orgpro.Sand.count_sand) / 2;
                    this.orgpro.Clst.count_clst_1 += res;
                    this.orgpro.Sand.count_sand = 0;
                    this.orgpro.Clst.count_clst = 0;
                    break;
                // 所有天空宝石分数增加5
                case 3:
                    const res1 = (this.orgpro.Clst.count_clst + this.orgpro.Sand.count_sand) / 2;
                    this.orgpro.Clst.count_clst_1 += res1;
                    this.orgpro.Sand.count_sand = 0;
                    this.orgpro.Clst.count_clst = 0;
                    this.rates.clst.forEach((rate, index) => {
                        this.rates.clst[index] += 5;
                    });
                    break;
                default:
                    console.error("error: level_clst_1", this.levels.level_clst_1, " is not a valid value");
                    break;
            }
        },
        "level_clst_2": () => {
            switch (this.levels.level_clst_2) {
                case 1:
                    const min = Math.min(this.orgpro.Clst.count_clst_1, this.orgpro.Sand.count_sand);
                    this.orgpro.Clst.count_clst_2 += min;
                    this.orgpro.Sand.count_sand -= min;
                    this.orgpro.Clst.count_clst_1 -= min;
                    break;
                // 加15分
                case 2:
                    const min1 = Math.min(this.orgpro.Clst.count_clst_1, this.orgpro.Sand.count_sand);
                    this.orgpro.Clst.count_clst_2 += min1;
                    this.orgpro.Sand.count_sand -= min1;
                    this.orgpro.Clst.count_clst_1 -= min1;
                    this.rates.clst.forEach((rate, index) => {
                        this.rates.clst[index] += 15;
                    });
                    break;
                // 均分+15分
                case 3:
                    const res = (this.orgpro.Clst.count_clst_1 + this.orgpro.Sand.count_sand) / 2;
                    this.orgpro.Clst.count_clst_2 += res;
                    this.orgpro.Sand.count_sand = 0;
                    this.orgpro.Clst.count_clst_1 = 0;
                    this.rates.clst.forEach((rate, index) => {
                        this.rates.clst[index] += 15;
                    });
                    break;
                default:
                    console.error("error: level_clst_2", this.levels.level_clst_2, " is not a valid value");
                    break;
            }
        },
        "level_clst_3": () => {
            switch (this.levels.level_clst_3) {
                // 天空2和火焰3合成天空3
                case 1:
                    const min = Math.min(this.orgpro.Clst.count_clst_2, this.orgpro.Fire.count_fire_3);
                    this.orgpro.Clst.count_clst_3 += min;
                    this.orgpro.Clst.count_clst_2 -= min;
                    this.orgpro.Fire.count_fire_3 -= min;
                    break;
                // 均分
                case 2:
                    const res = (this.orgpro.Clst.count_clst_2 + this.orgpro.Fire.count_fire_3) / 2;
                    this.orgpro.Clst.count_clst_3 += res;
                    this.orgpro.Clst.count_clst_2 = 0;
                    this.orgpro.Fire.count_fire_3 = 0;
                    break;
                // 若刻印产出只有1种宝石，额外获得<天空伊纳 III>数量100倍的评价分数
                // 在最后计算分数时处理
                case 3:
                    const res1 = (this.orgpro.Clst.count_clst_2 + this.orgpro.Fire.count_fire_3) / 2;
                    this.orgpro.Clst.count_clst_3 += res1;
                    this.orgpro.Clst.count_clst_2 = 0;
                    this.orgpro.Fire.count_fire_3 = 0;
                    break;
                default:
                    console.error("error: level_clst_3", this.levels.level_clst_3, " is not a valid value");
                    break;
            }
        },
        "level_sand_1": () => {
            switch (this.levels.level_sand_1) {
                // 1=>2
                case 1:
                    this.orgpro.Sand.count_sand += this.orgpro.Sand.count_sand;
                    break;
                // 1=>3
                case 2:
                    this.orgpro.Sand.count_sand += this.orgpro.Sand.count_sand * 2;
                    break;
                // 1=>5
                case 3:
                    this.orgpro.Sand.count_sand += this.orgpro.Sand.count_sand * 4;
                    break;
                default:
                    console.error("error: level_sand_1", this.levels.level_sand_1, " is not a valid value");
                    break;

            }
        },
        "level_sand_2": () => {
            switch (this.levels.level_sand_2) {
                // 1=>3
                case 1:
                    this.orgpro.Sand.count_sand += this.orgpro.Sand.count_sand * 2;
                    break;
                // 1=>5
                case 2:
                    this.orgpro.Sand.count_sand += this.orgpro.Sand.count_sand * 4;
                    break;
                // 1=>8
                case 3:
                    this.orgpro.Sand.count_sand += this.orgpro.Sand.count_sand * 7;
                    break;
                default:
                    console.error("error: level_sand_2", this.levels.level_sand_2, " is not a valid value");
                    break;
            }
        },
        "level_sand_3": () => {
            switch (this.levels.level_sand_3) {
                // 1=>5
                case 1:
                    this.orgpro.Sand.count_sand += this.orgpro.Sand.count_sand * 4;
                    break;
                // 1=>9
                case 2:
                    this.orgpro.Sand.count_sand += this.orgpro.Sand.count_sand * 8;
                    break;
                // sand得分加一
                case 3:
                    this.orgpro.Sand.count_sand += this.orgpro.Sand.count_sand * 8;
                    this.rates.sand += 1;
                    break;
            }
        }
    }

    // 检查place是否有空
    checkPlace(place: string[]) {
        let count = 0;
        place.forEach(str => {
            switch (str) {
                case "level_fire_1":
                    if (this.levels.level_fire_1 >= 2)
                        break;
                    else count += 1;
                    break;
                case "level_fire_2":
                    if (this.levels.level_fire_2 >= 3)
                        break;
                    else count += 1;
                    break;
                case "level_fire_3":
                    if (this.levels.level_fire_3 >= 3)
                        break;
                    else count += 1;
                    break;
                default:
                    count += 1;
                    break;
            }
        })
        count = this.placeLength - count;
        if (count < 0) console.error("error: count < 0");
        return count;
    }

    // 若刻印产出只有1种宝石，额外获得<天空伊纳 III>数量100倍的评价分数
    // 检查是否只有天空依娜3这一种宝石
    checkOnlyClst(): boolean {
        const counts = [
            this.orgpro.Fire.count_fire,
            this.orgpro.Fire.count_fire_1,
            this.orgpro.Fire.count_fire_2,
            this.orgpro.Fire.count_fire_3,
            this.orgpro.Fire.count_fire_4,
            this.orgpro.Leaf.count_leaf,
            this.orgpro.Leaf.count_leaf_1,
            this.orgpro.Leaf.count_leaf_2,
            this.orgpro.Leaf.count_leaf_3,
            this.orgpro.Clst.count_clst,
            this.orgpro.Clst.count_clst_1,
            this.orgpro.Clst.count_clst_2,
            this.orgpro.Sand.count_sand
        ];

        const totalCount = counts.reduce((sum, count) => sum + count, 0);

        return totalCount === 0;
    }

    // 计算,对应相乘 不要影响原始数据
    calculateOrg() {
        let score = 0;
        score += this.orgpro.Fire.count_fire * this.rates.fire[0];
        score += this.orgpro.Fire.count_fire_1 * this.rates.fire[1];
        score += this.orgpro.Fire.count_fire_2 * this.rates.fire[2];
        score += this.orgpro.Fire.count_fire_3 * this.rates.fire[3];
        score += this.orgpro.Fire.count_fire_4 * this.rates.fire[4];
        score += this.orgpro.Leaf.count_leaf * this.rates.leaf[0];
        score += this.orgpro.Leaf.count_leaf_1 * this.rates.leaf[1];
        score += this.orgpro.Leaf.count_leaf_2 * this.rates.leaf[2];
        score += this.orgpro.Leaf.count_leaf_3 * this.rates.leaf[3];
        score += this.orgpro.Clst.count_clst * this.rates.clst[0];
        score += this.orgpro.Clst.count_clst_1 * this.rates.clst[1];
        score += this.orgpro.Clst.count_clst_2 * this.rates.clst[2];
        score += this.orgpro.Clst.count_clst_3 * this.rates.clst[3];
        score += this.orgpro.Sand.count_sand * this.rates.sand;
        return score;
    }

    // 分数计算
    calculateScore(place: string[]) {
        let score = 0;
        // add1
        // 1500score per 空place ,在最后计算分数时处理
        // 检查places上和6相比是否有空place
        // 其中与生成函数的处理相同如果level_fire_1 >= 2则不占位置
        const count = this.checkPlace(place);
        // score += count * 1500;
        switch (this.levels.level_fire_4) {
            case 1:
                break;
            case 2:
                score += count * 1500;
                break;
            case 3:
                score += count * 5000;
                break;
            case 0:
                break;
            default:
                console.error("In calculateScore error: level_fire_4", this.levels.level_fire_4, " is not a valid value");
                break;
        }
        // 若刻印产出只有1种宝石，额外获得<天空伊纳 III>数量100倍的评价分数
        // 数量100倍分数相当于每个clst加100分
        // 在最后计算分数时处理
        if (this.checkOnlyClst()) {
            this.rates.clst[3] += 100;
        }
        // 计算分数
        score += this.calculateOrg();
        return score;
    }

    reset() {
        this.orgpro = new OrgPro(this.org);
        this.rates = new Rates();
        // this.places = this.generatekeys(this.levels);
    }
    // 重新构建
    rebuild(org: Org, levels: Levels, placeLength: number = 6) {
        this.orgpro = new OrgPro(org);
        this.org = org;
        this.levels = levels;
        this.rates = new Rates();
        this.places = this.generatekeys(levels, placeLength);
        this.placeLength = placeLength;
    }
    // 所有的place策略生成
    generatekeys(levels: Levels, placeLength: number): string[][] {
        const keys: string[][] = [];
        const fire = ["level_fire_1", "level_fire_2", "level_fire_3", "level_fire_4"];
        const leaf = ["level_leaf_1", "level_leaf_2", "level_leaf_3"];
        const clst = ["level_clst_1", "level_clst_2", "level_clst_3"];
        const sand = ["level_sand_1", "level_sand_2", "level_sand_3"];
        const others = ["level2", "level3"];

        let allElements = [...fire, ...leaf, ...clst, ...sand, ...others];

        // 根据 levels 对象过滤掉值为 0 的元素
        allElements = allElements.filter(element => levels[element] !== 0);

        // 如果 level_fire_1, level_fire_2, level_fire_3 的值大于等于 2，则从 allElements 中移除
        const prependElements: string[] = [];
        if (levels.level_fire_1 >= 2) {
            allElements = allElements.filter(element => element !== "level_fire_1");
            prependElements.push("level_fire_1");
        }
        if (levels.level_fire_2 >= 3) {
            allElements = allElements.filter(element => element !== "level_fire_2");
            prependElements.push("level_fire_2");
        }
        if (levels.level_fire_3 >= 3) {
            allElements = allElements.filter(element => element !== "level_fire_3");
            prependElements.push("level_fire_3");
        }

        function generateCombinations(elements: string[], current: string[]) {
            if (current.length === placeLength) {
                if (prependElements.length > 0) {
                    keys.push([...prependElements, ...current]);
                } else {
                    keys.push([...current]);
                }
                return;
            }

            for (let i = 0; i < elements.length; i++) {
                if (!current.includes(elements[i])) {
                    current.push(elements[i]);
                    generateCombinations(elements, current);
                    current.pop();
                }
            }
        }

        generateCombinations(allElements, []);

        // 如果没有生成任何组合且有 prependElements，则直接添加 prependElements
        if (keys.length === 0 && prependElements.length > 0) {
            keys.push([...prependElements]);
        }

        return keys;
    }


    scoreonce(place: string[]) {
        let score = 0;
        place.forEach(str => {
            const func = this.functionMap[str];
            if (func) {
                func();
            }
            else {
                // console.error("Scoreonce error: ", str, " is not a valid key");
            }
        })
        score = this.calculateScore(place);
        return score;
    }
    judge(): Result {
        // 遍历所有的place策略
        let maxscore = 0;
        let maxplace: string[] = [];
        let maxorgpro: OrgPro = new OrgPro(this.org);
        this.places.forEach(place => {
            const score = this.scoreonce(place);
            if (score > maxscore) {
                maxscore = score;
                maxplace = place;
                maxorgpro = this.orgpro;
            }
            this.reset();
        })
        return {
            "score": maxscore,
            "place": maxplace,
            "output": maxorgpro
        }
    }
}

const levela = {
    "level_fire_1": "淬雕 I",
    "level_fire_2": "淬雕 II",
    "level_fire_3": "淬雕 III",
    "level_fire_4": "淬雕 IV",
    "level_leaf_1": "滤纯 I",
    "level_leaf_2": "滤纯 II",
    "level_leaf_3": "滤纯 III",
    "level_clst_1": "交糅 I",
    "level_clst_2": "交糅 II",
    "level_clst_3": "交糅 III",
    "level_sand_1": "落晶 I",
    "level_sand_2": "落晶 II",
    "level_sand_3": "落晶 III",
}
const yina = {
    "count_fire": "火焰伊纳",
    "count_clst": "天空伊纳",
    "count_leaf": "草叶伊纳",
    "count_sand": "沙伊纳",
    "count_fire_1": "火焰伊纳 I",
    "count_fire_2": "火焰伊纳 II",
    "count_fire_3": "火焰伊纳 III",
    "count_fire_4": "火焰伊纳 IV",
    "count_leaf_1": "草叶伊纳 I",
    "count_leaf_2": "草叶伊纳 II",
    "count_leaf_3": "草叶伊纳 III",
    "count_clst_1": "天空伊纳 I",
    "count_clst_2": "天空伊纳 II",
    "count_clst_3": "天空伊纳 III",
}


// class导出
export { Gemstone, OrgPro, Rates, levela, yina }
export type { Org, FireOrg, LeafOrg, ClstOrg, SandOrg, Levels, Result }
