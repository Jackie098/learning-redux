import { combineReducers } from "redux";

import course from './course';
// import user from './users';

export default combineReducers({
  course,
  // user
});

// { 
//    course: { modules: [], activeLesson: {}, activeModule: {} },
//    user: { name: '', avatar:'' }
// }