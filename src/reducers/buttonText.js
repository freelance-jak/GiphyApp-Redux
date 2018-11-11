const initialState = "GIFを検索";

const buttonText = (state = initialState, action) => {
  switch (action.type) {
    case "START_REQUEST":
      return "読込中...";
    case "RECEIVE_DATA":
      return initialState;
    default:
      return state;
  }
};

export default buttonText;
