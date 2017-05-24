import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';


const CourseForm = ({course,allAuthors,onSave,onChange,loading,errors})=>{
return(
<form>


<h1>ManageCourse</h1>
<TextInput 
 name="title"
 label = "Title"
 className="form-control"
 error={errors.title}
 value={course.title}
 onChange={onChange} />

 <SelectInput
 name="authorId"
 label = "Author"
 className="form-control"
// placeholder={placeholder}
 value={course.authorId}
 defaultOption = "Select a Author"
 option={allAuthors}
 onChange={onChange} error={errors.authorId}/>

 <TextInput 
 name="category"
 label = "Category"
 className="form-control"
 error={errors.category}
 value={course.category}
 onChange={onChange} />

  <TextInput 
 name="length"
 label = "Length"
 className="form-control"
 error={errors.length}
 value={course.length}
 onChange={onChange} />
 <input
 type="submit"
 disabled ={loading}
 className="btn btn-primary"
 value={loading?'Saving...':'Save'}
 onClick={onSave} />

</form>

);


};

CourseForm.PropType ={

course:React.PropTypes.object.isRequired,
allAuthors:React.PropTypes.array,
onSave:React.PropTypes.func.isRequired,
onChange:React.PropTypes.func.isRequired,
loading:React.PropTypes.bool,
errors:React.PropTypes.object

};
export default CourseForm;