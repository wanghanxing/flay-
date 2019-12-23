<template>
  <div class="test-pageone">
    <div class="population-one">
      <span class="classification">
        <i class="el-icon-s-custom icon"></i>
        <i class="classification-centent">Population classification</i>
      </span>
      <span class="classification">
        <i class="el-icon-s-promotion icon"></i>
        <i class="classification-centent">Information Statistics</i>
      </span>
      <span class="classification">
        <i class="el-icon-s-home icon"></i>
        <i class="classification-centent">Big data analysis</i>
      </span>
      <span class="classification">
        <i class="el-icon-s-data icon"></i>
        <i class="classification-centent">Total analysis and statistics</i>
      </span>
    </div>
    <div class="broken-line-diagram" ref="myChartfather">
      <div id="myChart" class="myChartLast"></div>
    </div>
    <div class="statistical-chart">
      <div ref="statisticalChart" class="statistical"></div>
      <div ref="pieChart" class="statistical-right"></div>
    </div>
    <div class="test-pageone-bottom">
      <div class="test-pageone-bottom-left test-pageone-bottom-content">
        <span>
          <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
            <li v-for="i in 20" class="infinite-list-item" :key="i">{{i}}</li>
          </ul>
        </span>
        <span>123</span>
      </div>
      <div class="test-pageone-bottom-right test-pageone-bottom-content">
        <div>
          <el-carousel :interval="4000" type="card" height="220px">
            <el-carousel-item v-for="(item,index) in imgHeaders" :key="index">
              <img :src="item.src" alt />
            </el-carousel-item>
          </el-carousel>
          <span>
            A BOLD ATTEMPT IS HALF SUCCESS,
            A BOLD ATTEMPT IS HALF SUCCESS,
            A BOLD ATTEMPT IS HALF SUCCESS,
            A BOLD ATTEMPT IS HALF SUCCESS,
            A BOLD ATTEMPT IS HALF SUCCESS
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
require("echarts-gl");
export default {
  name: "test-pageone",
  components: {},
  data() {
    return {
      count: 0,
      myChart: {},
      statisticalChart: {},
      Chart: {},
      imgHeaders: [
        {
          src:
            "http://pic4.zhimg.com/50/v2-848b1a190d937e270e8d062d00865493_hd.jpg"
        },
        {
          src:
            "http://pic4.zhimg.com/50/v2-848b1a190d937e270e8d062d00865493_hd.jpg"
        },
        {
          src:
            "http://pic4.zhimg.com/50/v2-848b1a190d937e270e8d062d00865493_hd.jpg"
        },
        {
          src:
            "http://pic4.zhimg.com/50/v2-848b1a190d937e270e8d062d00865493_hd.jpg"
        },
        {
          src:
            "http://pic4.zhimg.com/50/v2-848b1a190d937e270e8d062d00865493_hd.jpg"
        },
        {
          src:
            "http://pic4.zhimg.com/50/v2-848b1a190d937e270e8d062d00865493_hd.jpg"
        },
        {
          src:
            "http://pic4.zhimg.com/50/v2-848b1a190d937e270e8d062d00865493_hd.jpg"
        },
        {
          src:
            "http://pic4.zhimg.com/50/v2-848b1a190d937e270e8d062d00865493_hd.jpg"
        }
      ]
    };
  },
  created() {
    this.$nextTick(() => {
      this.drawLine();
      this.statistical();
      this.pChart();
    });
  },
  mounted() {
    let that = this;
    window.onresize = function() {
      that.myChart.resize();
      that.statisticalChart.resize();
      that.Chart.resize();
    };
  },
  methods: {
    load() {
      this.count += 1;
    },
    //折线图
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      this.myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      var xAxisData = [];
      var data = [];
      var data2 = [];
      for (var i = 0; i < 50; i++) {
        xAxisData.push(i);
        data.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
        data2.push((Math.sin(i / 5) * (i / 5 + 10) + i / 6) * 3);
      }
      let option = {
        backgroundColor: "rgba(255,255,255,.3)",
        xAxis: [
          {
            show: false,
            data: xAxisData
          },
          {
            show: false,
            data: xAxisData
          }
        ],
        visualMap: {
          show: false,
          min: 0,
          max: 50,
          dimension: 0,
          inRange: {
            color: [
              "#4a657a",
              "#308e92",
              "#b1cfa5",
              "#f5d69f",
              "#f5898b",
              "#ef5055"
            ]
          }
        },
        yAxis: {
          axisLine: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: "#4a657a"
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#08263f"
            }
          },
          axisTick: {
            show: false
          }
        },
        series: [
          {
            name: "back",
            type: "bar",
            data: data2,
            z: 1,
            itemStyle: {
              normal: {
                opacity: 0.4,
                barBorderRadius: 5,
                shadowBlur: 3,
                shadowColor: "#111"
              }
            }
          },
          {
            name: "Simulate Shadow",
            type: "line",
            data: data,
            z: 2,
            showSymbol: false,
            animationDelay: 0,
            animationEasing: "linear",
            animationDuration: 1200,
            lineStyle: {
              normal: {
                color: "transparent"
              }
            },
            areaStyle: {
              normal: {
                color: "#08263a",
                shadowBlur: 50,
                shadowColor: "#000"
              }
            }
          },
          {
            name: "front",
            type: "bar",
            data: data,
            xAxisIndex: 1,
            z: 3,
            itemStyle: {
              normal: {
                barBorderRadius: 5
              }
            }
          }
        ],
        animationEasing: "elasticOut",
        animationEasingUpdate: "elasticOut",
        animationDelay: function(idx) {
          return idx * 20;
        },
        animationDelayUpdate: function(idx) {
          return idx * 20;
        }
      };
      this.myChart.setOption(option);
    },
    //雷达图
    statistical() {
      this.statisticalChart = this.$echarts.init(this.$refs.statisticalChart);
      let option = {
        title: {
          text: ""
        },
        tooltip: {},
        legend: {
          top: 20,
          itemWidth: 12,
          itemHeight: 12,
          data: ["预算分配（Allocated Budget）", "实际开销（Actual Spending）"],
          textStyle: {
            color: "#666"
          }
        },
        radar: {
          radius: "60%",
          splitNumber: 8,
          axisLine: {
            lineStyle: {
              color: "#666",
              opacity: 0.2
            }
          },
          splitLine: {
            lineStyle: {
              color: "#fff",
              opacity: 0.2
            }
          },
          splitArea: {
            areaStyle: {
              color: "rgba(127,95,132,.3)",
              opacity: 1,
              shadowBlur: 45,
              shadowColor: "rgba(0,0,0,.5)",
              shadowOffsetX: 0,
              shadowOffsetY: 15
            }
          },
          indicator: [
            {
              name: "Sales",
              max: 6000
            },
            {
              name: "Administration",
              max: 16000
            },
            {
              name: "Information Techology",
              max: 30000
            },
            {
              name: "Customer Support",
              max: 35000
            },
            {
              name: "Development",
              max: 50000
            },
            {
              name: "Marketing",
              max: 25000
            }
          ]
        },
        series: [
          {
            name: "预算 vs 开销（Budget vs spending）",
            type: "radar",
            symbolSize: 0,
            areaStyle: {
              normal: {
                shadowBlur: 13,
                shadowColor: "rgba(0,0,0,.2)",
                shadowOffsetX: 0,
                shadowOffsetY: 10,
                opacity: 1
              }
            },
            data: [
              {
                value: [5000, 7000, 12000, 11000, 15000, 14000],
                name: "预算分配（Allocated Budget）"
              },
              {
                value: [2500, 12000, 8000, 8500, 12000, 12000],
                name: "实际开销（Actual Spending）"
              }
            ]
          }
        ],
        color: ["#ef4b4c", "#b1eadb"],
        backgroundColor: "rgba(255,255,255,.3)"
      };
      this.statisticalChart.setOption(option);
    },
    //饼图
    pChart() {
      this.Chart = this.$echarts.init(this.$refs.pieChart);
      let option = {
        // backgroundColor: "#0B1837",
        backgroundColor: "rgba(255,255,255,.3)",
        color: [
          "#EAEA26",
          "#906BF9",
          "#FE5656",
          "#01E17E",
          "#3DD1F9",
          "#FFAD05"
        ],
        grid: {
          left: -100,
          top: 50,
          bottom: 10,
          right: 10,
          containLabel: true
        },
        tooltip: {
          trigger: "item",
          formatter: "{b} : {c} ({d}%)"
        },
        legend: {
          type: "scroll",
          orient: "vartical",
          // x: "right",
          top: "center",
          right: "15",
          // bottom: "0%",
          itemWidth: 16,
          itemHeight: 8,
          itemGap: 16,
          textStyle: {
            color: "#A3E2F4",
            fontSize: 12,
            fontWeight: 0
          },
          data: ["IDS", "VPN", "交换机", "防火墙", "WAF", "堡垒机"]
        },
        polar: {},
        angleAxis: {
          interval: 1,
          type: "category",
          data: [],
          z: 10,
          axisLine: {
            show: false,
            lineStyle: {
              color: "#0B4A6B",
              width: 1,
              type: "solid"
            }
          },
          axisLabel: {
            interval: 0,
            show: true,
            color: "#0B4A6B",
            margin: 8,
            fontSize: 16
          }
        },
        radiusAxis: {
          min: 40,
          max: 120,
          interval: 20,
          axisLine: {
            show: false,
            lineStyle: {
              color: "#0B3E5E",
              width: 1,
              type: "solid"
            }
          },
          axisLabel: {
            formatter: "{value} %",
            show: false,
            padding: [0, 0, 20, 0],
            color: "#0B3E5E",
            fontSize: 16
          },
          splitLine: {
            lineStyle: {
              color: "#0B3E5E",
              width: 2,
              type: "solid"
            }
          }
        },
        calculable: true,
        series: [
          {
            type: "pie",
            radius: ["5%", "10%"],
            hoverAnimation: false,
            labelLine: {
              normal: {
                show: false,
                length: 30,
                length2: 55
              },
              emphasis: {
                show: false
              }
            },
            data: [
              {
                name: "",
                value: 0,
                itemStyle: {
                  normal: {
                    color: "#0B4A6B"
                  }
                }
              }
            ]
          },
          {
            type: "pie",
            radius: ["90%", "95%"],
            hoverAnimation: false,
            labelLine: {
              normal: {
                show: false,
                length: 30,
                length2: 55
              },
              emphasis: {
                show: false
              }
            },
            name: "",
            data: [
              {
                name: "",
                value: 0,
                itemStyle: {
                  normal: {
                    color: "#0B4A6B"
                  }
                }
              }
            ]
          },
          {
            stack: "a",
            type: "pie",
            radius: ["20%", "80%"],
            roseType: "area",
            zlevel: 10,
            label: {
              normal: {
                show: true,
                formatter: "{c}",
                textStyle: {
                  fontSize: 12
                },
                position: "outside"
              },
              emphasis: {
                show: true
              }
            },
            labelLine: {
              normal: {
                show: true,
                length: 20,
                length2: 55
              },
              emphasis: {
                show: false
              }
            },
            data: [
              {
                value: 10,
                name: "IDS"
              },
              {
                value: 5,
                name: "VPN"
              },
              {
                value: 15,
                name: "Switch"
              },
              {
                value: 25,
                name: "firewall"
              },
              {
                value: 20,
                name: "WAF"
              },
              {
                value: 35,
                name: "fortMachine"
              }
            ]
          }
        ]
      };
      this.Chart.setOption(option);
    }
  }
};
</script>

<style lang='scss'>
.test-pageone {
  width: 100%;
  height: 90%;
  padding: 10px;
  overflow-y: auto;
  box-sizing: border-box;
  .population-one {
    width: 100%;
    display: flex;
    flex-direction: row;
    span {
      flex: 1;
      border: 1px solid #5f8e8e;
      background-color: #ffffff;
      text-align: center;
      border-radius: 5px;
      box-shadow: 5px 5px 10px #666;
      font-size: 12px;
      margin: 10px 20px;
      padding: 10px;
      display: flex;
      flex-direction: row;
      .icon {
        font-size: 36px;
        color: #5f8e8e;
      }
    }
    span:hover {
      background-color: #d3e4e4;
      transform: scale(1.1, 1.1);
    }
  }
  .broken-line-diagram {
    width: 100%;
    margin: 20px 0;
    .myChartLast {
      width: 100%;
      height: 400px;
      border: 1px solid #ccc;
      border-radius: 5px;
      overflow: hidden;
    }
  }
  .statistical-chart {
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    .statistical {
      flex: 1;
      width: 50%;
      height: 200px;
      border: 1px solid #ccc;
      border-radius: 5px;
      margin-right: 5px;
      overflow: hidden;
    }
    .statistical-right {
      flex: 1;
      width: 50%;
      height: 200px;
      border: 1px solid #ccc;
      border-radius: 5px;
      margin-left: 5px;
      overflow: hidden;
    }
  }
  .test-pageone-bottom {
    width: 100%;
    display: flex;
    padding: 20px;
    height: 400px;
    box-sizing: border-box;
    .test-pageone-bottom-left {
      display: flex;
      flex-direction: column;
      margin-right: 5px;
      span {
        flex: 1;
        padding: 10px;
        box-sizing: border-box;
        border: 1px solid #ccc;
        border-radius: 5px;
        background-color: rgba(235, 241, 246, 0.4);
        overflow-y: auto;
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
          li {
            border-bottom: 1ox solid #ccc;
          }
        }
      }
      span:hover {
        transform: scale(1.01, 1.01);
        box-shadow: 0px 0px 20px #000;
      }
      span:nth-child(1) {
        margin-bottom: 20px;
      }
    }
    .test-pageone-bottom-right {
      border: 1px solid #ccc;
      border-radius: 5px;
      padding: 10px;
      background-color: rgba(235, 241, 246, 0.4);
      margin-left: 5px;
      font-size: 12px;
      color: #666;
      .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
      }
      .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
      }
      .el-carousel__item:nth-child(2n + 1) {
        background-color: #d3dce6;
      }
      img {
        height: 100%;
      }
    }
    .test-pageone-bottom-right:hover {
      transform: scale(1.01, 1.01);
      box-shadow: 0px 0px 20px #000;
    }
    .test-pageone-bottom-content {
      text-align: center;
      flex: 1;
    }
  }
}
</style>