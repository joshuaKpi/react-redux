export default function courseReducer(state = [], action) {
  switch(action.type) {
    case 'CREATE_COURSE':
      return [...state,
        Object.assign({}, action.course)
      ];

    default:
      return state;
  }
}
//state.push(action.course) not allowed coz' in this way we mutate our state
