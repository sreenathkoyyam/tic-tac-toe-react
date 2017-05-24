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
allAuthors = {this.props.authors}
course = {this.state.course}
errors ={this.state.errors} />
</div>

);
}

}

//propsType :: provide proptype validation
ManageCoursesPage.propTypes ={

course : PropTypes.object.isRequired,
authors : PropTypes.array.isRequired

};

//Redux-connect related function

function mapStateToProps (state, ownProps){
   // debugger;

   let course = {id: '',watchHref: '',title: '',authorId: '',length: '',category: ''};
   const authorsFormattedForDropdown = state.authors.map(author =>{
       return {
           value:author.id,
           text:author.firstName + '' + author.lastName
       };
   });

    return{
    course: course ,
    authors: authorsFormattedForDropdown

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