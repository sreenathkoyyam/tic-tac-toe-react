import React,{PropTypes} from 'react';
import CourseListRow from  './CourseListRow';


//render functon
const CourseList = ({courses}) =>
{
   
return (
<table className="table" >
    <thread>
    <tr>

<th>Title</th>
<th>Author</th>
<th>Category</th>
<th>Length</th>

    </tr>
    </thread>

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

CourseList.PropTypes = {
    courses : PropTypes.array.isRequired
};
 export default CourseList;