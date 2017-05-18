export default function courseReducer(state = [], action){

switch (action.type){
case 'CREATE_COURSE':
//debugger; puting user action value in state and returning
    return [...state ,
    Object.assign({} , action.course)
    ];
default:
return state;


}
}