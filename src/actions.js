export const ADD_TWEETS = 'ADD_TWEETS';

export const fetchTweets = () => {
  return (dispatch) => {
    fetch('http://tweet-stream.glitch.me/api/tweets')
      .then((response) => response.json())
      .then((response) => {
        console.log('response.tweets', response.tweets);
        dispatch(addTweets(response.tweets));
      });
  };
};

export const addTweets = (tweets) => ({
  type: ADD_TWEETS,
  payload: { tweets },
});
