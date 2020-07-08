import Twitter from "twitter-lite";
import moment from "moment";

const client = new Twitter({
  consumer_key: process.env.consumer_key || "--",
  consumer_secret: process.env.consumer_secret || "--",
  access_token_key: process.env.access_token_key || "--",
  access_token_secret: process.env.access_token_secret || "--"
});

var oneDay = new Date().getTime() + (1 * 24 * 60 * 60 * 1000)

export async function getTweet() {
  const latestTweets = await client.get("statuses/user_timeline", {
    screen_name: "nestdotland"
  }).catch(x => x);
  let tweetDate = moment(latestTweets[0].createdAt, 'dd MMM DD HH:mm:ss ZZ YYYY', 'en').utc().format();;

  if (oneDay > Number(new Date(tweetDate))) {
    return latestTweets[0];
  }
}
