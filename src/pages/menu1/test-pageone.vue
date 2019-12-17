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
    <div class="broken-line-diagram">
      <div id="myChart" :style="{width: '100%', height: '400px'}"></div>
    </div>
    <div class="statistical-chart">
      <div ref="statisticalChart" class="statistical"></div>
      <div ref="pieChart" class="statistical-right"></div>
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
    return {};
  },
  mounted() {
    this.drawLine();
    this.statistical();
    this.pChart();
  },
  methods: {
    //折线图
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
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
      myChart.setOption(option);
    },
    //雷达图
    statistical() {
      let statisticalChart = this.$echarts.init(this.$refs.statisticalChart);
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
            color: "#fff"
          }
        },
        radar: {
          radius: "60%",
          splitNumber: 8,
          axisLine: {
            lineStyle: {
              color: "#fff",
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
        color: ["#ef4b4c", "#b1eadb"]
        // backgroundColor: {
        //   type: "radial",
        //   x: 0.4,
        //   y: 0.4,
        //   r: 0.35,
        //   colorStops: [
        //     {
        //       offset: 0,
        //       color: "#895355" // 0% 处的颜色
        //     },
        //     {
        //       offset: 0.4,
        //       color: "#593640" // 100% 处的颜色
        //     },
        //     {
        //       offset: 1,
        //       color: "#39273d" // 100% 处的颜色
        //     }
        //   ],
        //   globalCoord: false // 缺省为 false
        // }
      };
      statisticalChart.setOption(option);
    },
    //饼图
    pChart() {
      let Chart = this.$echarts.init(this.$refs.pieChart);
      let option = {
        // backgroundColor: "#0B1837",
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
      Chart.setOption(option);
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
      background: #ffffff;
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
  }
  .statistical-chart {
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    .statistical {
      width: 50%;
      height: 200px;
      border: 1px solid #ccc;
      border-radius: 5px;
      margin-right: 5px;
    }
    .statistical-right {
      width: 50%;
      height: 200px;
      border: 1px solid #ccc;
      border-radius: 5px;
      margin-left: 5px;
    }
  }
}
</style>