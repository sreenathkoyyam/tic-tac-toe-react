import React,{PropTypes} from 'react';
import CourseListRow from  './CourseListRow';


//render functon
const CourseList = ({courses}) =>
{
   
return (
<table className="table" >
    <tbody>
    
        
    <tr>

<th>Title</th>
<th>Author</th>
<th>Category</th>
<th>Length</th>

    </tr>
 
</tbody>
    <tbody>
        {
            courses.map(course=>
        <CourseListRow key={course.id} course={course} />
        )
        }
    </tbody>
    </table>

);
};

CourseList.propTypes = {
    courses : PropTypes.array.isRequired
};
 export default CourseList;