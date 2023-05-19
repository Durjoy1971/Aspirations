const API_KEY = "AIzaSyCbpYT02musRYo3YlAjsbuOjPw9nYJxbZQ";
//AIzaSyCzn7jPRg3rEpPUncuIqaYYv138KcUPMME
//AIzaSyCbpYT02musRYo3YlAjsbuOjPw9nYJxbZQ
//AIzaSyBlLqHsOor_NA3CClfJ69FtaML0HFHgRRk

export const searchYoutube = async (query) => {
  const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&type=video&q=${query}&maxResults=10&order=viewCount&videoDuration=long`);

  const data = await response.json();

  return data.items.map((item) => ({
    id: item.id.videoId,
    title: item.snippet.title,
    description: item.snippet.description,
    thumbnail: item.snippet.thumbnails.high.url.replace("hqdefault.jpg", "hq720.jpg"),
    channelTitle: item.snippet.channelTitle,
  }));
};
