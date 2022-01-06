export default {
  title: 'Others/Dialog 对话框',
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    showDialog() {
      this.isShow = true;
    },
  },
  template: `
    <div>
      <button @click.prevent="showDialog">打开弹窗</button>
      <ElDialog
        :visible.sync="isShow"
        title="对话框标题"
      >
        内容
      </ElDialog>
    </div>
  `,
});

export const Overview = Template.bind({});
