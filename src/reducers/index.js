const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_NEWS':
      return { ...state, loading: true };
    case 'GET_DATA':
      return { ...state, loading: true };
    case 'DATA_RECEIVED':
      return { ...state, data: action.json[0], loading: false }
    case 'NEWS_RECEIVED':
      return { ...state, news: action.json[0], loading: false }
    default:
      return state;
  }
};

export default reducer;
