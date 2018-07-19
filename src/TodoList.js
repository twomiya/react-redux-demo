import React, { Component } from 'react';
import {connect} from 'react-redux';
class TodoList extends Component{

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
}
const mapStateToProps=(state)=>{
    return{
        value:state.inputValue,
        list:state.list
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        handleInputChange(e){
            const action ={
                type:'change',
                value:e.target.value
            }
            dispatch(action)
        },
        handleClick(){
            const action ={
                type:'add'
            }
            dispatch(action)
        },
        handleDelete(index){
            const action = {
                type:'delete',
                index
            }
            dispatch(action)

        }

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);