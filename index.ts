import { getScreenshot } from "./_lib/chromium";
import { getHtml } from "./_lib/template";
import { getTweet } from "./_lib/tweet";
import * as fs from "fs";

(async () => {
  let tweet = await getTweet();
  console.log(tweet)
  fs.writeFileSync("screenshot.png", getScreenshot(getHtml(tweet), "png", true));
})()
