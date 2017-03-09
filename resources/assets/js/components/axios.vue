<template>
  <div>
    <el-table
      :data="tableData"
      v-loading.body="loading"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
    <div style='float:right;margin: 20px;'>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[50, 200, 300, 400]"
        :page-size="100"
        layout="sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>  
  </div>  
</template>
<script>
    export default {
      name: 'axios',
      data() {
        return {
          currentPage: 1,
          tableData: [],
          loading: true
        }
      },
      created(){
        this.axios.get('/axios-test').then(res=>{
          this.tableData = [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }];
          this.loading = false;
          console.log(err);
        }).catch(err=>{

        })
      },
      methods: {
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
          this.currentPage = val;
          console.log(`当前页: ${val}`);
        }
      }
    }
</script>