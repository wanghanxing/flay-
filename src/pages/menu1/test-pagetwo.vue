<template>
  <div class="test-pagetwo">
    <el-button type="primary" class="exportPagetwo" @click="exportExcel">导出表格</el-button>
    <el-table
      id="out-table"
      :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
      max-height="400px"
    >
      <el-table-column prop="date" label="日期"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="province" label="省份"></el-table-column>
      <el-table-column prop="city" label="市区"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column prop="zip" label="邮编"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="pageSize"
        layout="sizes, prev, pager, next"
        :total="currentTotal"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import FileSaver from "file-saver";
import XLSX from "xlsx";
export default {
  name: "test-pagetwo",
  data() {
    return {
      currentPage: 1,
      pageSize: 5,
      currentTotal: 0,
      tableData: [
        {
          date: "1",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市",
          zip: 200333
        },
        {
          date: "2",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市",
          zip: 200333
        },
        {
          date: "3",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市",
          zip: 200333
        },
        {
          date: "4",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市",
          zip: 200333
        },
        {
          date: "5",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市",
          zip: 200333
        },
        {
          date: "6",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市",
          zip: 200333
        },
        {
          date: "7",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市",
          zip: 200333
        }
      ]
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.currentTotal = this.tableData.length;
    },
    handleClick(row) {
      console.log(row);
    },
    //每页条数
    handleSizeChange(val) {
      this.pageSize = val;
    },
    //当前页
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    //导出当前列表excel下载
    exportExcel() {
      var wb = XLSX.utils.table_to_book(document.querySelector("#out-table"));
      var wbout = XLSX.write(wb, {
        bookType: "xlsx",
        bookSST: true,
        type: "array"
      });
      try {
        FileSaver.saveAs(
          new Blob([wbout], { type: "application/octet-stream" }),
          this.$router.currentRoute.name + ".xlsx"
        );
      } catch (e) {
        if (typeof console !== "undefined") console.log(e, wbout);
      }
      return wbout;
    }
  }
};
</script>

<style lang='scss'>
.test-pagetwo {
  width: 100%;
  height: 90%;
  overflow: hidden;
  .el-table {
    width: 100%;
    margin-top: 20px;
    background-color: rgba(255, 255, 255, 0.1);
    border: none;

    th {
      background-color: rgba(255, 255, 255, 0.1);
      border: none;
    }
    tr {
      background-color: rgba(255, 255, 255, 0.1);
      border: none;
    }
    td {
      border: none;
    }
  }
}
</style>