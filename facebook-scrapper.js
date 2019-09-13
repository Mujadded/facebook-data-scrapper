console.info("bot started");

setTimeout(getFBPosts, 150000);

function getData(data, keywords = []) {
  const sentence = data.querySelector(".userContent").innerText;
  if (
    keywords.length === 0 ||
    keywords.some(keyword => sentence.indexOf(keyword) >= 0)
  ) {
    return {
      link: data.querySelector('div[id^="feed_subtitle"]').querySelector("a")
        .href,
      post: data.querySelector(".userContent").innerText
    };
  }

  return null;
}

function getFBPosts() {
  const posts = [];
  const keywords = ["any", "words", "you", "want", "to", "search"];
 
  divs = document.querySelectorAll('div[id^="mall_post_"]');

  console.info(
    `Got ${divs.length} posts but choosen fb posts are ${posts.length}`
  );

  for (var i = 0; i < divs.length; i++) {
    const facebookJson = getData(divs[i], keywords);

    if (facebookJson) {
      posts.push(facebookJson);
    }
  }

  if (posts.length > 0) {
    // Do something with the data 
    //maybe post it in url to get in server
  }
}
