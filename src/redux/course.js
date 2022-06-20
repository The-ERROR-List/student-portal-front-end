export const initialState = {
  infoCourse: [],
};

export default function courseReducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case "add_course":
      let data = [...state.infoCourse];
      data.push(payload);
    
      return {
        infoCourse: data,
      };
    default:
      return state;
  }
}

export function selectCourse(payload) {
  return {
    type: "add_course",
    payload: payload,
  };
}