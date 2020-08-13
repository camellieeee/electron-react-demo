import { observable, action, configure, computed, autorun } from 'mobx'

// 做一些全局配置，比如： enforceActions，表示此store种更改状态必须使用action
configure({
  enforceActions: true,
  computedConfigurable: false,
});

export default class DemoStore {
  @observable 
  count = 0; // 定义一个状态变化量，给他@observable检测上。

  @observable test = 1;

  @action // 定义一个改变状态的action
  changeCount = () => {
    console.log('改变count');
    this.count++;
  }

  @action // 定义一个改变状态的action
  changeTest = () => {
    console.log('改变test');
    this.test++;
  }

  @computed get cc() { // 定义计算值：如果相关属性count 变化了，且这个属性被使用了，则会调用此函数计算。
    console.log('属性变化了，执行此函数-cc');
    return this.count + 2;
  }

  @computed get bb() { // 分析测试代码
    console.log('属性变化了，执行此函数-bb');
    return this.count + 2;
  }
}
