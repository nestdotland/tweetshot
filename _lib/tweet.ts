import Twitter from "twitter-lite";

const client = new Twitter({
  consumer_key: "--",
  consumer_secret: "--",
  access_token_key: "--",
  access_token_secret: "--"
});

export async function getTweet() {
  const latestTweets = await client.get("statuses/user_timeline", {
    screen_name: "nestdotland"
  }).catch(x => x);
  return latestTweets[0];
}
