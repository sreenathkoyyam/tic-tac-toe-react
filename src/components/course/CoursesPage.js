import React , { PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';



class CoursesPage extends React.Component
{
    //constructor to set state
constructor(props,context){

super(props,context);
this.state={
    course:{
        title: ""
    }
};
//bind functions 
this.onTitleChange=this.onTitleChange.bind(this);
this.onClickSave=this.onClickSave.bind(this);

}

//child function 1 :: called by render
onTitleChange(event)
{
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course:course});

}
//child function 2 :: called by render
onClickSave(){

  //  alert(`Saving${this.state.course.title}` );
 // this.props.createCourse(this.state.course);
 this.props.actions.createCourse(this.state.course);
}
//child function 3 :: called by render
courseRow(course, index){
return <div key={index}>{course.title} </div>;
}

//render functon
render(){
   
return(
<div>
<h1>Our Product</h1>
{this.props.courses.map(this.courseRow)}
<h2>Add Courses</h2>

<input type = "text" onChange={this.onTitleChange} value={this.state.course.title} />

<input type = "submit" onClick={this.onClickSave} value="Save" />
    </div>

);
}

}

//propsType :: provide proptype validation
CoursesPage.PropTypes ={
//dispatch: PropTypes.func.isRequired,
courses: PropTypes.array.isRequired,
actions: PropTypes.object.isRequired

};

//Redux-connect related function

function mapStateToProps (state, ownProps){
   // debugger;
    return{
courses: state.courses

    };
}
function mapDispatchToProps(dispatch){
    return{
//createCourse: course =>dispatch(courseActions.createCourse(course))
actions: bindActionCreators(courseActions,dispatch)
    };
}
//export using Redux-connect
export default connect(mapStateToProps,mapDispatchToProps)(CoursesPage);