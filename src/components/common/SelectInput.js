import React,{PropTypes} from 'react';


const SelectInput = ({name,label,onChange,defaultOption,value,error,option}) => {

    return (

<div className="form-group">
    <label htmlFor={name}>{label}</label>
    <div className="field">
        {
<select
 name={name}
 className="form-control"
// placeholder={placeholder}
 value={value}
 onChange={onChange} >
 <option value="">{defaultOption}  </option>
{option.map((option) => {
  return <option key ={option.value} value={option.value}>{option.text}</option>;
})
}
</select>
        }
 {error && <div className="alert alert-danger" >{error} </div>}
       
    </div>
    </div>



    );
  };
SelectInput.PropTypes = {
name: PropTypes.string.isRequired,
label: PropTypes.string.isRequired,
onChange: PropTypes.func.isRequired,
defaultOption: PropTypes.string,
value: PropTypes.string,
error: PropTypes.string,
option: PropTypes.arrayOf(PropTypes.object)
};


export default SelectInput;