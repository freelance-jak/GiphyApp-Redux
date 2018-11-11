import axios from "axios";

const giphyApi = target => {
  //GiphyAPIを実行するための定義
  const searchKey = target;
  const key = "IOv3YP3uQiAtC2spYVCArB4CC000M7Pg";
  const limit = 50;
  const url = `https://api.giphy.com/v1/gifs/search?q=${searchKey}&api_key=${key}&limit=${limit}`;

  //GiphyAPIを実行し、取得したGIF一覧を配列に変換する
  return axios.get(url);
};

export default giphyApi;
