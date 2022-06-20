export const initialState = {
  infoStudent: [],
};

export default function studentReducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case "add_student":
      let data = [...state.infoStudent];
      data.push(payload);
    
      return {
        infoStudent: data,
      };
    default:
      return state;
  }
}

export function selectStudent(payload) {
  return {
    type: "add_student",
    payload: payload,
  };
}