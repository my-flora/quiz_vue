<template>
  <div class="user-manage">
    <!-- 查询区：用户名输入框 + 查询用户 + 添加用户 -->
    <div class="query-bar">
      <el-input
        v-model="queryUsername"
        placeholder="请输入用户名"
        clearable
        class="query-input"
      ></el-input>
      <el-button type="success" @click="queryUser">查询用户</el-button>
      <el-button type="success" @click="addUser">添加用户</el-button>
    </div>

    <!-- 用户列表表格 -->
    <el-table :data="userList" border stripe class="user-table">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="username" label="用户名" width="180"></el-table-column>
      <el-table-column prop="password" label="密码"></el-table-column>
      <el-table-column label="操作" width="160">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="editUser(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="deleteUser(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页控件 -->
    <el-pagination
      layout="prev, pager, next"
      :total="100"
      :page-size="10"
      background
      class="pagination"
    ></el-pagination>

    <!-- 添加/编辑用户弹窗 -->
    <el-dialog title="新用户" :visible.sync="userDialogVisible" width="420px">
      <el-form label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="userForm.username"></el-input>
        </el-form-item>
        <el-form-item label="初始密码">
          <el-input v-model="userForm.password" show-password></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input v-model="userForm.confirmPassword" show-password></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer">
        <el-button @click="userDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="confirmUser">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'UserManage',
  data() {
    return {
      // 查询关键词（仅前端演示，不真正查询）
      queryUsername: '',
      // 虚拟用户数据
      userList: [
        { date: '2016-05-02', username: '王小虎', password: '123456' },
        { date: '2016-05-04', username: '李小明', password: '654321' },
        { date: '2016-05-01', username: '张大山', password: 'abc123' },
        { date: '2016-05-03', username: '赵小红', password: 'qwer789' }
      ],
      // 添加用户弹窗是否显示
      userDialogVisible: false,
      // 弹窗表单数据
      userForm: {
        username: '',
        password: '',
        confirmPassword: ''
      }
    }
  },
  methods: {
    // 前端演示：不实现真实查询
    queryUser() {},
    // 打开添加用户弹窗
    addUser() {
      this.userDialogVisible = true
    },
    // 前端演示：点击编辑复用同一弹窗
    editUser() {
      this.userDialogVisible = true
    },
    // 前端演示：不实现真实删除
    deleteUser() {},
    // 点击确定关闭弹窗（前端演示，不真正保存）
    confirmUser() {
      this.userDialogVisible = false
    }
  }
}
</script>

<style scoped>
.query-bar {
  margin-bottom: 20px;
}

.query-input {
  width: 220px;
  margin-right: 10px;
}

.user-table {
  margin-bottom: 0;
}

.pagination {
  margin-top: 20px;
  text-align: left;
}
</style>
