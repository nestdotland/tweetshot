import { getScreenshot } from "./_lib/chromium";
import { getHtml } from "./_lib/template";
import { getTweet } from "./_lib/tweet";

let tweet = await getTweet();

getScreenshot(getHtml(tweet), "png", true);
