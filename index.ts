// import { getScreenshot } from "./_lib/chromium";
import { getHtml } from "./_lib/template";
import { getTweet } from "./_lib/tweet";
// import * as fs from "fs";
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
