react-wheelsurf
-----------------

## 属性与事件

| 名称 | 类型 | 必须 | 默认 | 描述 |
|-----|-----|------|-----|-----|
|lock|Boolean|false|false|是否锁住转盘，锁住不可转动|
|onStart|Func|true|-|开始转动之前，通过参数 rotate(deg,dur) 启动|
|onFinish|Func|false|-|转动结束|
|outStyle|Object|false|-|转盘外盘样式，设置背景|
|innerStyle|Object|true|-|转盘内盘样式，设置背景|
|pointerStyle|Object|true|-|转盘指针样式，设置背景|

## 使用方法
```
import Wheelsurf from 'react-wheelsurf'

// 图片链接需为网络链接
const innerStyle = { backgroundImage: 'url(pan.png)' }
const pointerStyle = { backgroundImage: 'url(pointer.png)' }

class App extends React.Component {
  _onStart (rotate) {
    console.log('准备开始转啦啦啦')
    const deg = 360 * 2 + 120
    const dur = 6
    rotate(deg, dur)
  }
  _onFinish () {
    console.log('转盘结束啦啦啦')
  }
  render () {
    return (
      <div className={style.dial}>
        <Wheelsurf
          lock={false}
          innerStyle={innerStyle}
          pointerStyle={pointerStyle}
          onStart={this._onStart}
          onFinish={this._onFinish}
        />
      </div>
    )
  }
}
```

转盘样式也可以通过样式覆盖，不过比较推荐第一种方法
```
:global(.cjx-outTable){
  background-image: url(../images/outer.png);
}
:global(.cjx-innerTable){
  background-image: url(../images/inner.png);
}
:global(.cjx-pointer){
  background-image: url(../images/pointer.png);
} 
```