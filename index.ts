import { getHtml } from "./_lib/template";
import { getTweet } from "./_lib/tweet";
// @ts-ignore
import toImg from "node-html-to-image";

(async () => {
  let tweet = await getTweet();
  console.log(tweet)
  await toImg({
    output: "screenshot.png",
    html: getHtml(tweet)
  });
})()
