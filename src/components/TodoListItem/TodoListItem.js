import React from 'react';
import './TodoListItem.css';

export default class TodoListItem extends React.Component {

   state = {
        done: true,  
        important: true,
    };
    onLabelClick = () => {
        this.setState ({
            done: true
        })
        
    }


    render() {

        const { done, important} = this.state;
        const { text } = this.props;

     
         let classNames = `TodoListItem`;
         if (done){
             classNames += ' done';
         }
         if (important){
             classNames += 'important';
         }
        return (
            <div className = {classNames} >
                <span onClick={this.onLabelClick}>
                    {text} 
                </span>
                <div>
                    <button className ='btn btn btn-outline-danger remove_btn'>
                    <i className="fa fa-trash-o"></i>
                    </button>
                    <button className='btn btn-outline-primary'>
                    <i className="fa fa-exclamation"></i>
                    </button>
                </div>
               
            </div>
        )
         
    }
}



