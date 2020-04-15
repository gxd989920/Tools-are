//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    arr_red: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33],
    arr_blue: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    result_red: [],
    result_blue: [],
    ranNum: 7,
    list: [{
      text: "双色球",
      iconPath: "/img/ssq.png",
      selectedIconPath: "/img/ssq.png",
      badge: "Hot"
    }
    // , {
    //   text: "双色球",
    //   iconPath: "/img/ssq.png",
    //   selectedIconPath: "/img/ssq.png",
    //   badge: "Hot"
    // }
    ]
  },
  onLoad: function () {
    console.log('1')
  },
  sjyh: function (d) {
    this.setData({
      arr_red: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33],
      arr_blue: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      result_red: [],
      result_blue: []
    })
    // 随机抽取红号
    for (let red_i = 1; red_i < this.data.ranNum; red_i++) {
      // 随机打乱次数
      let sjdlcs_red;
      if (red_i == 1) {
        sjdlcs_red = parseInt(Math.random() * 100);
      } else {
        sjdlcs_red = parseInt(Math.random() * 100) + parseInt(this.data.result_red[this.data.result_red.length - 1])
      }
      // 打乱
      for (let xx = 0; xx < sjdlcs_red; xx++) {
        this.data.arr_red.sort(() => Math.random() - 0.5);
      }
      let ran_red = Math.floor(Math.random() * (this.data.arr_red.length - 1));
      // 取出一个
      this.data.result_red.push(this.data.arr_red[ran_red]);
      let center = this.data.arr_red[ran_red];
      this.data.arr_red[ran_red] = this.data.arr_red[this.data.arr_red.length - 1];
      this.data.arr_red[this.data.arr_red.length - 1] = center;
      this.data.arr_red = this.data.arr_red.slice(0, this.data.arr_red.length - 1);
    };
    // 随机抽取蓝号
    // 随机打乱次数
    let sjdlcs_blue = parseInt(Math.random() * 100);
    for (let blue_i = 0; blue_i < sjdlcs_blue; blue_i++) {
      this.data.arr_blue.sort(() => Math.random() - 0.5);
    }
    let ran_blue = Math.floor(Math.random() * (this.data.arr_blue.length - 1));
    this.data.result_blue.push(this.data.arr_blue[ran_blue]);
    this.data.result_red.sort(function (a, b) {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    })
    this.setData({
      result_red: this.data.result_red,
      result_blue: this.data.result_blue
    })
  }
})
