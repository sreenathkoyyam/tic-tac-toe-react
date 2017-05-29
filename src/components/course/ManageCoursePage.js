import React , { PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
//import * as authorActions from '../../actions/authorActions';
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

this.updateCourseState =this.updateCourseState.bind(this);
this.saveCourse =this.saveCourse.bind(this);
}

componentWillReceiveProps(nextProps){
    if(this.props.course.id != nextProps.course.id)
    {
this.setState({course: Object.assign({},nextProps.course)});
    }
}
//its for all of my change form field
updateCourseState(event){
    //differantiating field by name
    const field = event.target.name;
    let course = this.state.course;
    course[field]=event.target.value;
    return this.setState({course: course});
}
//course save event
saveCourse(event){
    event.preventDefault();
    this.props.actions.saveCourse(this.state.course);
    //redirecting to course page
    this.context.router.push('/courses');
}

//render functon for load course
render(){
return(

<div>

<CourseForm
allAuthors = {this.props.authors}
onChange = {this.updateCourseState}
onSave ={this.saveCourse}
course = {this.state.course}
errors ={this.state.errors} />
</div>

);
}

}

//propsType :: provide proptype validation
ManageCoursesPage.propTypes ={

course: PropTypes.object.isRequired,
authors: PropTypes.array.isRequired,
actions: PropTypes.object.isRequired
};
// adding context type for redirecting to course page
ManageCoursesPage.contextTypes = {

    router: PropTypes.object
};
// function should return indvidual course details 
function getCourseById (courses, id){
    //taiking relevent course details
   // debugger;
    const course = courses.filter(course => course.id ==id );
    if(course) return course[0];
    return null;
}

//Redux-connect related function
function mapStateToProps (state, ownProps){
    //console.log(ownProps);
    //state will containe the course,author data.ownProps will allow u to access props values attach to this component
    // [ access courses using "state.courses" based on what name u gave in reducer/index.js]

 const courseId = ownProps.params.id; //from the path 'course/:id'
   let course = {id: '',watchHref: '',title: '',authorId: '',length: '',category: ''};
if (courseId, state.courses.length > 0 ){
    course = getCourseById(state.courses, courseId)
}

   const authorsFormattedForDropdown = state.authors.map(author =>{
       return {
           value:author.id,
           text:author.firstName + '' + author.lastName
    //  for node api ::  value:author.name,
    //   text:author.name + '' + author.name
       };
   });

    return{
    course: course ,
    authors: authorsFormattedForDropdown

    };
}

//action you want to expose the component
function mapDispatchToProps(dispatch){
    return{
//createCourse: course =>dispatch(courseActions.createCourse(course))
actions: bindActionCreators(courseActions,dispatch)
    };
}
//export using Redux-connect.passeing f1 result to f2
export default connect(mapStateToProps,mapDispatchToProps)(ManageCoursesPage);