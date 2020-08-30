import { getHtml } from "./_lib/template";
import { getTweet } from "./_lib/tweet";
import { post } from "./_lib/instagram";
// @ts-ignore
import toImg from "node-html-to-image";
(async () => {
  const tweet = await getTweet();
  if (tweet) {
    const buffer = await toImg({
      html: getHtml(tweet)
    });
    await post(buffer, tweet.text);
  } else {
    console.log("No new tweet found.")
  }
})()
