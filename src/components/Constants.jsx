const GOOGLE_API_KEY = "AIzaSyBv6w9WrPYeZ6XRnFtxi4MPf-wq93JU0_c";

export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=${GOOGLE_API_KEY}`;
