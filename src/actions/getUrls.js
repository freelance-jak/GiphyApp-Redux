import giphyApi from "../APIs/giphyApi";

const receiveData = data => {
  return {
    type: "RECEIVE_DATA",
    payload: data
  };
};

const startRequest = () => {
  return {
    type: "START_REQUEST"
  };
};

const getUrls = target => {
  return dispatch => {
    dispatch(startRequest());
    giphyApi(target).then(res => {
      const data = res.data.data;
      const gifUrlList = data.map(item => item.images.downsized.url);
      dispatch(receiveData(gifUrlList));
    });
  };
};

export default getUrls;
