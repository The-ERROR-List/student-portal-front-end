export const initialState = {
  infoClass: [],
};

export default function classReducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case "add_class":
      let data = [...state.infoClass];
      data.push(payload);
    
      return {
        infoClass: data,
      };
    default:
      return state;
  }
}

export function selectClass(payload) {
  return {
    type: "add_class",
    payload: payload,
  };
}