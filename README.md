### react-redux项目介绍

* 项目clone后

  `yarn install`

* 启动运行默认端口是3000

  `yarn satrt`


### 具体流程

**react-redux**

  * react-redux的安装:`yarn add react-redux`

  * 在index.js引入react-redux:

    ```
    import {Provider} from 'react-redux';
    import store from './store'
    const App =(
      <Provider store={store}>
        <TodoList/>
      </Provider>
    )
    ReactDom.render(App,document.getElementById('root'));
    ```

  *Provider把store提供给了Provider里面所有的内部组件（比如：TodoList）*


  * TodoList如何获取store，在TodoList.js中

    ```
    import {connect} from 'react-redux';
    ...
    render(){
          const {value,handleInputChange,list,handleClick,handleDelete} = this.props;
          return(
              <div>
                  <div>
                      <input value={value}
                      onChange={handleInputChange}/>
                      <button onClick={handleClick}>确定</button>
                  </div>
                  <ul>
                      {list.map((item,index)=>{
                          return(
                              <li 
                              key={index}
                              onClick={handleDelete}>{item}</li>
                          )
                      })}
                  </ul>
              </div>
          )
      }
      ...

    //连接规则(TodoList与store连接)store.state
    const mapStateToProps = (state)=>{
      return {
        value:state.value

      }
    }
    //store.dispatch,props
    const mapDispatchToProps = (dispatch)=>{
      return{
        changeValue(e){
          const action ={
            type:'change',
            value:e.target.value
          }
          dispatch(action)
        }

      }
    }
    export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
    ```

* 在reducer里接收action并处理数据返回
  ```
  ...
  if(action.type==='change'){
          const newState = JSON.parse(JSON.stringify(state));
          newState.inputValue = action.value
          return newState;

      }
      ...
  ```