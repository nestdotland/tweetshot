import { getHtml } from "./_lib/template";
import { getTweet } from "./_lib/tweet";
import { post } from "./_lib/instagram";
// @ts-ignore
import toImg from "node-html-to-image";
(async () => {
  let tweet = await getTweet();
  if (tweet) {
    await toImg({
      output: "screenshot.png",
      html: getHtml(tweet)
    });
    await post("screenshot.png", tweet.text);
  } else {
    console.log("No new tweet found.")
  }
})()
