const HistoryReducer = (state = { data: null }, action) => {
  switch (action.type) {
    case "FETCH_ALL_HISTORY_VIDEOS":
      return {
        ...state,
        data: action.payload,
      };
    case "POST_HISTORY":
      return {
        ...state,
        data: action?.data,
      };
    default:
      return state;
  }
};

export default HistoryReducer;
