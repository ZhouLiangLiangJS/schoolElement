<template>
  <div class="main">
    <div class="title">添加常见问题</div>
    <div class="title">标题：</div>
    <input class="titleInp" type="text" v-model="title" placeholder="请输入标题">
    <div class="title">正文：</div>
    <quill-editor class="editor" ref="myTextEditor" v-model="content" :options="editorOption" @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)" @ready="onEditorReady($event)" @change="onEditorChange($event)">
    </quill-editor>
    <div class="qr center-x">
      <el-button>保 存</el-button>
      <el-button style="color: #707070;background-color: #FFFFFF;" @click="$router.go(-1)">返 回</el-button>
    </div>
    <Info></Info>
  </div>
</template>


<script>
  import Info from './info.vue'
  export default {
    components: {
      Info
    },
    data() {
      return {
        content: null,
        title: '',
        editorOption: {
          modules: {
            toolbar: [
              ["bold", "italic", "underline", "strike"], // 加粗 斜体 下划线 删除线
              ["blockquote", "code-block"], // 引用  代码块
              [{
                header: 1
              }, {
                header: 2
              }], // 1、2 级标题
              [{
                list: "ordered"
              }, {
                list: "bullet"
              }], // 有序、无序列表
              [{
                script: "sub"
              }, {
                script: "super"
              }], // 上标/下标
              [{
                indent: "-1"
              }, {
                indent: "+1"
              }], // 缩进
              // [{'direction': 'rtl'}],                         // 文本方向
              [{
                size: ["small", false, "large", "huge"]
              }], // 字体大小
              [{
                header: [1, 2, 3, 4, 5, 6, false]
              }], // 标题
              [{
                color: []
              }, {
                background: []
              }], // 字体颜色、字体背景颜色
              [{
                font: []
              }], // 字体种类
              [{
                align: []
              }], // 对齐方式
              ["clean"], // 清除文本格式
              ["link", "image", "video"] // 链接、图片、视频
            ], //工具菜单栏配置
          },
          placeholder: '请在这里添加产品描述', //提示
          readyOnly: false, //是否只读
          theme: 'snow', //主题 snow/bubble
          syntax: true, //语法检测
        }
      }
    },
    methods: {
      // 失去焦点
      onEditorBlur(editor) {},
      // 获得焦点
      onEditorFocus(editor) {},
      // 开始
      onEditorReady(editor) {},
      // 值发生变化
      onEditorChange(editor) {
        this.content = editor.html;
        console.log(editor);
      },
    },
    computed: {
      editor() {
        return this.$refs.myTextEditor.quillEditor;
      }
    },
    mounted() {
      // console.log('this is my editor',this.editor);
    }
  }
</script>

<style scoped>
  .main {
    padding: 5%;
  }

  .title {
    font-weight: 900;
    color: #707070;
    line-height: 40px;
  }

  .titleInp {
    width: 100%;
    height: 40px;
    background-color: #FFFFFF;
    border: 0;
    padding: 0 50px;
    box-sizing: border-box;
  }

  .ql-container {
    background-color: #FFFFFF;
  }

  .editor {
    line-height: normal !important;
    height: 60vh;
    overflow: hidden;
    border-bottom: 1px solid #ccc;
  }

  .qr {
    padding-bottom: 10px;
    margin-top: 20px;
  }

  .qr button {
    padding: 0;
    border-radius: 0;
    background-color: #52BF8A;
    color: #FFFFFF;
    box-shadow: 0px 3px 2px #00000029;
    font-weight: 900;
    line-height: 35px;
    padding: 0 50px;
    margin-right: 30px;
    border: 0;
  }

  .ql-snow .ql-tooltip[data-mode=link]::before {
    content: "请输入链接地址:";
  }

  .ql-snow .ql-tooltip.ql-editing a.ql-action::after {
    border-right: 0px;
    content: '保存';
    padding-right: 0px;
  }

  .ql-snow .ql-tooltip[data-mode=video]::before {
    content: "请输入视频地址:";
  }

  .ql-snow .ql-picker.ql-size .ql-picker-label::before,
  .ql-snow .ql-picker.ql-size .ql-picker-item::before {
    content: '14px';
  }

  .ql-snow .ql-picker.ql-size .ql-picker-label[data-value=small]::before,
  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before {
    content: '10px';
  }

  .ql-snow .ql-picker.ql-size .ql-picker-label[data-value=large]::before,
  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before {
    content: '18px';
  }

  .ql-snow .ql-picker.ql-size .ql-picker-label[data-value=huge]::before,
  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {
    content: '32px';
  }

  .ql-snow .ql-picker.ql-header .ql-picker-label::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item::before {
    content: '文本';
  }

  .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="1"]::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]::before {
    content: '标题1';
  }

  .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="2"]::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]::before {
    content: '标题2';
  }

  .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="3"]::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]::before {
    content: '标题3';
  }

  .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="4"]::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]::before {
    content: '标题4';
  }

  .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="5"]::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]::before {
    content: '标题5';
  }

  .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="6"]::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]::before {
    content: '标题6';
  }

  .ql-snow .ql-picker.ql-font .ql-picker-label::before,
  .ql-snow .ql-picker.ql-font .ql-picker-item::before {
    content: '标准字体';
  }

  .ql-snow .ql-picker.ql-font .ql-picker-label[data-value=serif]::before,
  .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {
    content: '衬线字体';
  }

  .ql-snow .ql-picker.ql-font .ql-picker-label[data-value=monospace]::before,
  .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {
    content: '等宽字体';
  }
</style>
