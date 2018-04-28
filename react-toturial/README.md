## API

### createElement()
```
React.createElement(
  type,  // 虚拟dom的名称，通常是一些标签名称，比如：div a p span
  [props],//虚拟dom的属性，比如：className id title value
  [...children] //表示虚拟dom的子节点。     
)
```
### render()
```
ReactDOM.render(
  element,  //虚拟dom元素
  container, //真是的dom元素
  [callback] //一个回调函数
)
```
## 组件

> 1.组件是做什么的？
>> 如果一个虚拟dom复用多次的时候，通常我们将它封装在一个组件当中，通常用组件封装一组虚拟dom，这一组虚拟dom通常称他为虚拟dom树。
> 2组件如何创建？
### createClass()

> 已废弃 见 [00hello.html](https://github.com/vervin/react-demo/blob/master/react-toturial/00hello.html)

* 新版使用es6

>创建变量使用const
```
const ele = <p>es6</p>
ReactDOM.render(
ele,
document.getElementById("reactContainer")
)
```

>创建组件使用class

```
class Welcome extends React.Component{
    render(){
        renturn (
            <div>This is a Es6 defind component!</div>
        )
    }
}
ReactDOM.render(
    <Welcome/>,
    document.getElementById("app")
);
```
### Jsx语法引用
> 1.为什么引用jsx语法？
>>  解决了创建虚拟dom成本过大的问题。
> 2.什么是jsx语法？
>> 简单地说，就是jsx语法让我们可以再js中写xhtml
> 3.如何引用jsx语法？
>>引用一个库文件browser.min.js或者browser.js都行
在编写React的script标签的type属性为text/babel