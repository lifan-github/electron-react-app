import React, {Component} from 'react';

export default class Swiper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dir: [
        { name: 'middle'},
        { name: 'start'},
        { name: 'normal'},
        { name: 'end'},
      ]
    }
  }

  // 图片点击逻辑
  slide(name, index) {
    // 记录当前节点
    this.setState({ current: index });
    // 数组操作方法
    this.imgArr(name);
  }

  imgArr(name) { // 数组处理
    let dirCopy = this.state.dir;
    if (name === 'start') {  // 点击左侧那张
      const pop = dirCopy.pop(); // 从数组尾部弹出一个元素
      dirCopy.unshift(pop); // 尾部元素添加到数组头部
    } else if (name === 'end') { // 点击右侧那张
      const shift = dirCopy.shift(); // 从数组头部弹出一个元素
      dirCopy.push(shift);  // 添加到数组尾部
    }
    console.log(dirCopy,'-----------')
    this.setState({ dir: dirCopy }); // 保存重新排列的数组 并触发render
  }

  pointFunc(index) { // 按钮点击
    const { current } = this.state;
    const dirCopy = this.state.dir;
    if (index < current) { // 鼠标经过左侧的按钮
      for (let i = 0; i < (current - index); i += 1) { // 判断距离
        const shift = dirCopy.shift(); // 进行数组操作
        dirCopy.push(shift);
      }
    } else if (index > current) { // 鼠标经过右侧的按钮
      for (let i = 0; i < (index - current); i += 1) {
        const pop = dirCopy.pop();
        dirCopy.unshift(pop);
      }
    }
    this.setState({ dir: dirCopy }); // 触发react-render重新渲染页面
    this.setState({ current: index }); // 记录当前图片节点
  }

  render() {
    const { dir } = this.state;
    return (
      <div className="root">
        <div className="slideBox">
          {
            dir.map((item, index) => {
              return (
                <div key={index} className={`slide ${item.name}`}>
                  <img src={require(`../../../images/swiper-${index + 1}.png`)} alt=""/>
                  <div
                    className={item.name === 'middle' ? '' : 'masking'}
                    onClick={() => this.slide(item.name, index)}>
                    {''}
                  </div>
                </div>
              )
            })
          }
          {/*导航按钮*/}
          <div className="point">
            {
              this.state.dir.map((item, key) => {
                return (
                  <span
                    key={key}
                    className={item.name === 'start' ? 'hover' : ''}
                    onMouseEnter={() => this.pointFunc(key - 1)}
                  >{}</span>
                );
              })
            }
          </div>
        </div>
      </div>
    )
  }
}