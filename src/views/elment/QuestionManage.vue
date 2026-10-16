<template>
  <div class="question-manage">
    <!-- 查询区：题目关键词输入框 + 查询题目 + 添加题目 -->
    <div class="query-bar">
      <el-input
        v-model="queryKeyword"
        placeholder="请输入题目关键词"
        clearable
        class="query-input"
      ></el-input>
      <el-button type="success" @click="queryQuestion">查询题目</el-button>
      <el-button type="success" @click="addQuestion">添加题目</el-button>
    </div>

    <!-- 题目列表表格 -->
    <el-table :data="questionList" border stripe class="question-table">
      <el-table-column label="序号" width="80">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column prop="question" label="问题"></el-table-column>
      <el-table-column prop="options" label="选项"></el-table-column>
      <el-table-column prop="answer" label="答案" width="120"></el-table-column>
      <el-table-column label="操作" width="160">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="editQuestion(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="deleteQuestion(scope.row)">删除</el-button>
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

    <!-- 添加/编辑题目弹窗 -->
    <el-dialog title="题目" :visible.sync="questionDialogVisible" width="460px">
      <el-form label-width="80px">
        <el-form-item label="问题内容">
          <el-input v-model="questionForm.question"></el-input>
        </el-form-item>
        <el-form-item label="选项A">
          <el-input v-model="questionForm.optionA"></el-input>
        </el-form-item>
        <el-form-item label="选项B">
          <el-input v-model="questionForm.optionB"></el-input>
        </el-form-item>
        <el-form-item label="选项C">
          <el-input v-model="questionForm.optionC"></el-input>
        </el-form-item>
        <el-form-item label="选项D">
          <el-input v-model="questionForm.optionD"></el-input>
        </el-form-item>
        <el-form-item label="答案">
          <el-input v-model="questionForm.answer"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer">
        <el-button @click="questionDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="confirmQuestion">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'QuestionManage',
  data() {
    return {
      // 查询关键词（仅前端演示，不真正查询）
      queryKeyword: '',
      // 虚拟题目数据
      questionList: [
        { question: '法国的首都是什么？', options: '巴黎,伦敦,柏林,马德里', answer: '巴黎' },
        { question: '中国的首都是什么？', options: '上海,北京,广州,深圳', answer: '北京' },
        { question: '1 + 1 等于多少？', options: '1,2,3,4', answer: '2' },
        { question: '水的化学式是？', options: 'H2O,CO2,O2,H2O2', answer: 'H2O' }
      ],
      // 添加/编辑题目弹窗是否显示
      questionDialogVisible: false,
      // 弹窗表单数据
      questionForm: {
        question: '',
        optionA: '',
        optionB: '',
        optionC: '',
        optionD: '',
        answer: ''
      }
    }
  },
  methods: {
    // 前端演示：不实现真实查询
    queryQuestion() {},
    // 打开添加题目弹窗
    addQuestion() {
      this.questionDialogVisible = true
    },
    // 前端演示：点击编辑复用同一弹窗
    editQuestion() {
      this.questionDialogVisible = true
    },
    // 前端演示：不实现真实删除
    deleteQuestion() {},
    // 点击确定关闭弹窗（前端演示，不真正保存）
    confirmQuestion() {
      this.questionDialogVisible = false
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

.question-table {
  margin-bottom: 0;
}

.pagination {
  margin-top: 20px;
  text-align: left;
}
</style>
