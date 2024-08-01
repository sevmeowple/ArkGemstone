function judge(
  // 四种原材料的数量
  count_fire: number,
  count_clst: number,
  count_leaf: number,
  count_sand: number,
  // 工作台容量默认为满(6)
  // 四种淬雕的等级，0代表未拥有
  level_fire_1: number,
  level_fire_2: number,
  level_fire_3: number,
  level_fire_4: number,
  // 三种滤纯的等级，0代表未拥有
  level_leaf_1: number,
  level_leaf_2: number,
  level_leaf_3: number,
  // 三种交糅的等级，0代表未拥有
  level_clst_1: number,
  level_clst_2: number,
  level_clst_3: number,
  // 三种落晶的等级，0代表未拥有
  level_sand_1: number,
  level_sand_2: number,
  level_sand_3: number,
) {
  // 每种伊纳的得分
  let rate_fire = [1, 2, 10, 35, 85]

  let rate_clst = [1, 3, 22, 105, 0]

  let rate_leaf = [1, 5, 50, 500, 0]

  let rate_sand = 1

  let score = 0 //分数
  let score_max = 0
  let answer = [0, 0, 0, 0, 0]

  const card_list: number[] = [
    level_fire_1,//0
    level_fire_2,//1
    level_fire_3,//2
    level_fire_4,//3
    level_leaf_1,//4
    level_leaf_2,//5
    level_leaf_3,//6
    level_clst_1,//7
    level_clst_2,//8
    level_clst_3,//9
    level_sand_1,//10
    level_sand_2,//11
    level_sand_3 //12
  ]

  let fire_list: number[] = [count_fire, 0, 0, 0, 0]
  let clst_list: number[] = [count_clst, 0, 0, 0, 0]
  let leaf_list: number[] = [count_leaf, 0, 0, 0, 0]

  switch (level_fire_1) {
    case 2:
      fire_list[1] = fire_list[0]
      fire_list[0] = 0
      break;

    case 3:
      fire_list[1] = fire_list[0] * 2
      fire_list[0] = 0
      break;
  }

  if (level_fire_2 == 3) {
    fire_list[2] = fire_list[1] * 2
    fire_list[1] = 0
  }

  if (level_fire_3 == 3) {
    fire_list[3] = fire_list[2] * 2.4
    fire_list[2] = 0
  }

  const fire_list_save = fire_list
  const clst_list_save = clst_list
  const leaf_list_save = leaf_list

  const workbench = [0, 0, 0, 0, 0, 0]

  for (workbench[0] = -1; workbench[0] <= 12; workbench[0]++) {
    if (card_list[workbench[0]] == 0) {
      continue
    }
    for (workbench[1] = -1; workbench[1] <= 12; workbench[1]++) {
      if (card_list[workbench[1]] == 0 || workbench[1] == workbench[0]) {
        continue
      }
      for (workbench[2] = -1; workbench[2] <= 12; workbench[2]++) {
        if (card_list[workbench[2]] == 0 || workbench[2] == workbench[0] || workbench[2] == workbench[1]) {
          continue
        }
        for (workbench[3] = -1; workbench[3] <= 12; workbench[3]++) {
          if (card_list[workbench[3]] == 0 || workbench[3] == workbench[0] || workbench[3] == workbench[1] || workbench[3] == workbench[2]) {
            continue
          }
          for (workbench[4] = -1; workbench[4] <= 12; workbench[4]++) {
            if (card_list[workbench[4]] == 0 || workbench[4] == workbench[0] || workbench[4] == workbench[1] || workbench[4] == workbench[2] || workbench[4] == workbench[3]) {
              continue
            }
            for (workbench[5] = -1; workbench[5] <= 12; workbench[5]++) {
              if (card_list[workbench[5]] == 0 || workbench[5] == workbench[0] || workbench[5] == workbench[1] || workbench[5] == workbench[2] || workbench[5] == workbench[3] || workbench[5] == workbench[4]) {
                continue
              }
              for (let step = 0; step <= 5; step++) {
                switch (workbench[step]) {
                  case 0:
                    switch (card_list[0]) {
                      case 1:
                        fire_list[1] += fire_list[0]
                        fire_list[0] = 0
                        break;
                      case 2:
                        fire_list[1] += fire_list[0]
                        fire_list[0] = 0
                        break;
                      case 3:
                        fire_list[1] += fire_list[0] * 2
                        fire_list[0] = 0
                        break;
                    }
                    break;
                  case 1:
                    switch (card_list[1]) {
                      case 1:
                        fire_list[2] += fire_list[1]
                        fire_list[1] = 0
                        break;
                      case 2:
                        fire_list[2] += fire_list[1] * 2
                        fire_list[1] = 0
                        break;
                      case 3:
                        fire_list[2] += fire_list[1] * 2
                        fire_list[1] = 0
                        break;
                    }
                    break;
                  case 2:
                    switch (card_list[2]) {
                      case 1:
                        fire_list[3] += fire_list[4]
                        fire_list[3] = 0
                        break;
                      case 2:
                        fire_list[3] += fire_list[4] * 2.4
                        fire_list[3] = 0
                        break;
                      case 3:
                        fire_list[3] += fire_list[4] * 2.4
                        fire_list[3] = 0
                        break;
                    }
                    break;
                  case 3:
                    var voidloc = 0
                    for (let loc = 0; loc <= 5; loc++) {
                      if (workbench[loc] == -1) {
                        voidloc++
                      }
                    }
                    switch (card_list[3]) {
                      case 1:
                        fire_list[4] += fire_list[5]
                        fire_list[4] = 0
                        break;
                      case 2:
                        fire_list[4] += fire_list[5]
                        fire_list[4] = 0
                        score += voidloc * 1500
                        break;
                      case 3:
                        fire_list[4] += fire_list[5]
                        fire_list[4] = 0
                        score += voidloc * 5000
                        break;
                    }
                    break;
                  case 4:
                    switch (card_list[4]) {
                      case 1:
                        leaf_list[1] += leaf_list[0] * 0.5
                        count_sand += leaf_list[0] * 0.5
                        leaf_list[0] = 0
                        break;
                      case 2:
                        leaf_list[1] += leaf_list[0] * 0.8
                        count_sand += leaf_list[0] * 0.2
                        leaf_list[0] = 0
                        break;
                      case 3:
                        leaf_list[1] += leaf_list[0]
                        count_sand += leaf_list[0]
                        leaf_list[0] = 0
                        break;
                    }
                    break;
                  case 5:
                    switch (card_list[5]) {
                      case 1:
                        leaf_list[2] += leaf_list[1] * 0.4
                        count_sand += leaf_list[1] * 0.6
                        leaf_list[1] = 0
                        break;
                      case 2:
                        leaf_list[2] += leaf_list[1] * 0.6
                        count_sand += leaf_list[1] * 0.4
                        leaf_list[1] = 0
                        break;
                      case 3:
                        leaf_list[2] += leaf_list[1] * 0.8
                        count_sand += leaf_list[1] * 0.2
                        leaf_list[1] = 0
                        break;
                    }
                    break;
                  case 6:
                    switch (card_list[6]) {
                      case 1:
                        leaf_list[3] += leaf_list[2] * 0.3
                        count_sand += leaf_list[2] * 0.7
                        leaf_list[2] = 0
                        break;
                      case 2:
                        leaf_list[3] += leaf_list[2] * 0.5
                        count_sand += leaf_list[2] * 0.5
                        leaf_list[2] = 0
                        break;
                      case 3:
                        leaf_list[3] += leaf_list[2] * 0.7
                        count_sand += leaf_list[2] * 0.3
                        leaf_list[2] = 0
                        break;
                    }
                    break;
                  case 7:
                    switch (card_list[7]) {
                      case 1:
                        var min_clst_sand
                        if (clst_list[0] < count_sand) {
                          min_clst_sand = clst_list[0]
                        } else {
                          min_clst_sand = count_sand
                        }
                        clst_list[1] += min_clst_sand
                        clst_list[0] -= min_clst_sand
                        count_sand -= min_clst_sand
                        break;
                      case 2:
                        clst_list[1] = (clst_list[0] + count_sand) / 2
                        card_list[0] = 0
                        count_sand = 0
                        break;
                      case 3:
                        clst_list[1] = (clst_list[0] + count_sand) / 2
                        card_list[0] = 0
                        count_sand = 0
                        for (var rate = 0; rate <= 4; rate++) {
                          rate_clst[rate] += 5
                        }
                        break;
                    }
                    break;
                  case 8:
                    switch (card_list[8]) {
                      case 1:
                        var min_clst_leaf
                        if (clst_list[1] < leaf_list[1]) {
                          min_clst_leaf = clst_list[1]
                        } else {
                          min_clst_sand = leaf_list[1]
                        }
                        clst_list[2] += min_clst_leaf
                        clst_list[1] -= min_clst_leaf
                        leaf_list[1] -= min_clst_leaf
                        break;
                      case 2:
                        var min_clst_leaf
                        if (clst_list[1] < leaf_list[1]) {
                          min_clst_leaf = clst_list[1]
                        } else {
                          min_clst_sand = leaf_list[1]
                        }
                        clst_list[2] += min_clst_leaf
                        clst_list[1] -= min_clst_leaf
                        leaf_list[1] -= min_clst_leaf
                        for (var rate = 0; rate <= 4; rate++) {
                          rate_clst[rate] += 15
                        }
                        break;
                      case 3:
                        clst_list[2] += (clst_list[1] + leaf_list[1]) / 2
                        clst_list[1] = 0
                        leaf_list[1] = 0
                        for (var rate = 0; rate <= 4; rate++) {
                          rate_clst[rate] += 15
                        }
                        break;
                    }
                    break;
                  case 9:
                    switch (card_list[9]) {
                      case 1:
                        var min_clst_fire
                        if (clst_list[2] < fire_list[3]) {
                          min_clst_fire = clst_list[2]
                        } else {
                          min_clst_sand = fire_list[3]
                        }
                        clst_list[3] += min_clst_fire
                        clst_list[2] -= min_clst_fire
                        fire_list[3] -= min_clst_fire
                        break;
                      case 2:
                        clst_list[2] += (clst_list[2] + fire_list[3]) / 2
                        clst_list[2] = 0
                        fire_list[3] = 0
                        break;
                      case 3:
                        clst_list[2] += (clst_list[2] + fire_list[3]) / 2
                        clst_list[2] = 0
                        fire_list[3] = 0
                        break;
                    }
                    break;
                  case 10:
                    switch (card_list[10]) {
                      case 1:
                        count_sand *= 2
                        break;
                      case 2:
                        count_sand *= 3
                        break;
                      case 3:
                        count_sand *= 5
                        break;
                    }
                    break;
                  case 11:
                    switch (card_list[11]) {
                      case 1:
                        count_sand *= 3
                        break;
                      case 2:
                        count_sand *= 5
                        break;
                      case 3:
                        count_sand *= 8
                        break;
                    }
                    break;
                  case 12:
                    switch (card_list[12]) {
                      case 1:
                        count_sand *= 5
                        break;
                      case 2:
                        count_sand *= 9
                        break;
                      case 3:
                        count_sand *= 9
                        rate_sand += 1
                        break;
                    }
                    break;

                }
              }

              for (let level = 0; level <= 4; level++) {
                score += fire_list[level] * rate_fire[level]
                  + clst_list[level] * rate_clst[level]
                  + leaf_list[level] + rate_leaf[level]
              }
              score += count_sand * rate_sand
              if (
                fire_list[0] == 0
                && fire_list[1] == 0
                && fire_list[2] == 0
                && fire_list[3] == 0
                && fire_list[4] == 0

                && clst_list[0] == 0
                && clst_list[1] == 0
                && clst_list[2] == 0

                && leaf_list[0] == 0
                && leaf_list[1] == 0
                && leaf_list[2] == 0
                && leaf_list[3] == 0

                && count_sand == 0
              ) {
                score += clst_list[3] * 100
              }

              if (score > score_max) {
                answer = [score, workbench[0], workbench[1], workbench[2], workbench[3], workbench[4], workbench[5]]
                score_max = score
              }
              score = 0
              fire_list = fire_list_save
              clst_list = clst_list_save
              leaf_list = leaf_list_save
              rate_fire = [1, 2, 10, 35, 85]
              rate_clst = [1, 3, 22, 105, 0]
              rate_leaf = [1, 5, 50, 500, 0]
              rate_sand = 1
            }
          }
        }
      }
    }
  }
  /*
  answar含义为：
  answer[0]:本次得分
  answer[1]~answer[6]六个位置的卡牌
  其对应关系为：
    0:淬雕 I
    1:淬雕 II
    2:淬雕 III
    3:淬雕 IV
    4:滤纯 I
    5:滤纯 II
    6:滤纯 III
    7:交糅 I
    8:交糅 II
    9:交糅 III
    10:落晶 I
    11:落晶 II
    12:落晶 III
  */
  return answer
}
const levels = [
  "还不确定",
  "淬雕 I",
  "淬雕 II",
  "淬雕 III",
  "淬雕 IV",
  "滤纯 I",
  "滤纯 II",
  "滤纯 III",
  "交糅 I",
  "交糅 II",
  "交糅 III",
  "落晶 I",
  "落晶 II",
  "落晶 III"
];

export { judge, levels }