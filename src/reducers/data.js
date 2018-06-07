function data(state, action) {
  switch (action.type) {
    case 'SEARCH_VIDEO': {
      const results = state.data.categories.map((category) => {
        const records = category.playlist.filter((item) => {
          return item.author.includes(action.payload.query);
        });
        return records.filter((item) => item);
      });
      console.log(results);
      return {
        ...state,
        search: results
      }
    }
    default:
      return state;
  }
}

export default data;