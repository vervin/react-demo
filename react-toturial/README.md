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
















