import { getScreenshot } from "./_lib/chromium";
import { getHtml } from "./_lib/template";
import { getTweet } from "./_lib/tweet";

(async () => {
  let tweet = await getTweet();
  console.log(tweet)
  getScreenshot(getHtml(tweet), "png", true);
})()
