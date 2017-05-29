import React , { PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import { browserHistory } from 'react-router';
//import courses
import CourseList from './CourseList';

class CoursesPage extends React.Component
{
//constructor to set state
constructor(props,context){

super(props,context);

this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);

}


//child function 3 :: called by render
courseRow(course, index){
return <div key={index}>{course.title} </div>;
}
redirectToAddCoursePage(){
    browserHistory.push('/course');
}
//render functon for load course
render(){
   const {courses} = this.props;
return(

<div>
<h1>Our Product</h1>

<input
 type="submit"
 className="btn btn-primary"
 value="Add Course"
 onClick={this.redirectToAddCoursePage} />
<CourseList courses={courses} />

    </div>

);
}

}

//propsType :: provide proptype validation
CoursesPage.propTypes ={
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