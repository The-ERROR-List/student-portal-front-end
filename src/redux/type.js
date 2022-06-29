// api

export const api = 'http://localhost:3000';

//types add action
export const addStudent = 'add_student';
export const addTeacher = 'add_teacher';
export const addCourse = 'add_course';
export const addClass = 'add_class';
export const addStudentInClass = "addStudentInClass"
//types update action 
export const updateStudent = 'update_student';
export const updateTeacher = 'update_teacher';
export const updateCourse = 'update_course';
export const updateClass = 'update_class';

//types to get 
export const getStudent = 'get_student';
export const getTeacher = 'get_teacher';
export const getCourse = 'get_course';
export const getClass = 'get_class';
export const getStudentFromClass = "getStudentFromClass"
export const getTeacherById = "getTeacherById"
export const getStudentById = "getTeacherById"


//types to delete 
export const deleteStudent = 'delete_student';
export const deleteTeacher = 'delete_teacher';
export const deleteCourse = 'delete_course';
export const deleteClass = 'delete_class';
//------------------

//type to course to teacher

export const addCourseToTeacher = 'add_courseTo_teacher';
export const getAllCourseToTeacher = 'get_allCourse_teacher';

// type to classes to course
export const getAllClassesToCourse='getAllClassesToCourse';
export const getClassesIntoCourse='getClassesIntoCourse';
//type to student view
export const getClassesForStudents = 'get_classes_for_students';

//type for teacher id
export const getTeacherId = 'get_teacher_id';

// get content by id
export const getContentId = 'get_content_id';