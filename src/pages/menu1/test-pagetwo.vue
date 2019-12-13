<template>
  <div class="test-pagetwo">
    <el-table :data="tableData">
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
  </div>
</template>

<script>
export default {
  name: "test-pagetwo",
  methods: {
    handleClick(row) {
      console.log(row);
    }
  },

  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市",
          zip: 200333
        }
      ]
    };
  }
};
</script>

<style lang='scss'>
.test-pagetwo {
  width: 100%;
  height: 100%;
  overflow-x: auto;
  .el-table {
    width: 100%;
    margin-top: 20px;
    background-color: rgba(255, 255, 255, 0.1);
    border: none;

    th{
    background-color: rgba(255, 255, 255, 0.1);
    border: none;

    }
     tr {
      background-color: rgba(255, 255, 255, 0.1);
    border: none;

    }
    td{
      border:none;
    }
  }
}
</style>