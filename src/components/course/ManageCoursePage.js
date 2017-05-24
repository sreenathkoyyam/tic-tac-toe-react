import React , { PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm.js';


class ManageCoursesPage extends React.Component
{
    //constructor to set state
constructor(props,context){

super(props,context);
this.state ={
    course:Object.assign({},this.props.course),
    errors :{}
};

}

//render functon for load course
render(){
return(

<div>

<CourseForm
allAuthors = {[]}
course = {this.state.course}
errors ={this.state.errors} />
</div>

);
}

}

//propsType :: provide proptype validation
ManageCoursesPage.PropTypes ={

course: PropTypes.object.isRequired


};

//Redux-connect related function

function mapStateToProps (state, ownProps){
   // debugger;
   let course = {id: '',watchHref: '',title: '',authorId: '',length: '',category: ''};
    return{
course: course

    };
}
function mapDispatchToProps(dispatch){
    return{
//createCourse: course =>dispatch(courseActions.createCourse(course))
actions: bindActionCreators(courseActions,dispatch)
    };
}
//export using Redux-connect
export default connect(mapStateToProps,mapDispatchToProps)(ManageCoursesPage);