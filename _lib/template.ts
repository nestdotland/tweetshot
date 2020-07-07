export function getHtml(tweet: any) {
    return `<div class="p-4 text-center mt-4" style="width: 500px">
  <span class="tweet-text mb-4">
    ${tweet.text}
  </span>
  <div class="mt-2 p-4">
    <img src="https://avatars2.githubusercontent.com/u/65864058?s=200&v=4" class="rounded-circle shadow border mt-4" width="100px">
     <span class="mb-4">@nestdotland <br> nest.land</span>
  </div>
</div>

<!-- Include external CSS, JavaScript or Fonts! -->
<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">

<link href="https://fonts.googleapis.com/css2?family=Cabin:wght@700&display=swap" rel="stylesheet">
<style>
.tweet-text {
  font-weight: bolder;
  font-size: 32px;
  font-family: 'Cabin', sans-serif;
  padding: 4px;
}
html, body {
 background-image: linear-gradient(to right, #eee 0%, #fff 100%);
}
</style>`;
}
