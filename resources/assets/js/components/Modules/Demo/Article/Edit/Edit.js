import wangEditor from 'wangeditor'
export default {
    name: 'edit-article',
    data() {
        return {
            article_data: {
                title: '',
                cate: '其他',
                tabs: ['html'],
                status: true,
                content: '',
            },
            temp: {
                content: ''
            },
            rules: {
                title: [{
                    required: true,
                    message: '文章标题不能为空！',
                    trigger: 'blur'
                }],
                cate: [{
                    required: true,
                    message: '文章分类不能为空！',
                    trigger: 'change'
                }],
                tabs: [{
                    type: 'array',
                    required: true,
                    message: '请至少选择一个文章标签！',
                    trigger: 'change'
                }],
                content: [{
                    required: true,
                    message: '文章不能为空！',
                    trigger: 'blur'
                }]
            },
            wangEditor: {
                bar: [
                    'source', '|',
                    'bold', 'underline', 'italic', 'strikethrough', 'eraser', 'forecolor', 'bgcolor', '|',
                    'quote', 'fontfamily', 'fontsize', 'head', 'unorderlist', 'orderlist', 'alignleft', 'aligncenter', 'alignright', '|',
                    'link', 'unlink', 'table', 'emotion', '|',
                    'img',
                    'video',
                    // 'location',
                    'insertcode', '|',
                    'undo', 'redo', 'fullscreen'
                ]
            }
        }
    },
    methods:{
        onSubmit(formName) {
            var ref = this.$refs[formName];
            ref.validate((valid) => {
                console.log(valid);
            });
        },
        reset_article(article) {
            console.log(article)
        },
    },
    mounted() {
        var editor = new wangEditor('article');
        editor.config.menus = this.wangEditor.bar;
        editor.create();
    }
}