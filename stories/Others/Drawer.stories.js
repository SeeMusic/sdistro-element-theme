export default {
  title: 'Others/Drawer 抽屉',
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    showDrawer() {
      this.isShow = true;
    },
  },
  template: `
    <div>
      <button @click.prevent="showDrawer">打开抽屉</button>
      <ElDrawer
        title="抽屉标题"
        :visible.sync="isShow"
      >
        <div class="sd-drawer__container">
          <div class="sd-drawer__content">
            <p>内容</p>
            <p>内容</p>
            <p>内容</p>
          </div>
        </div>
      </ElDrawer>
    </div>
  `,
});

export const Overview = Template.bind({});
