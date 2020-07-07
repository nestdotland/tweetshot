import Twitter from "twitter-lite";

const client = new Twitter({
  consumer_key: "--",
  consumer_secret: "--",
  access_token_key: "--",
  access_token_secret: "--"
});

(async () => {
  const latestTweets = await client.get("statuses/user_timeline", {
    screen_name: "nestdotland"
  }).catch(x => x);
  let tweet = latestTweets[0];
})()
