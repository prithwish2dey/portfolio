import { useEffect, useState } from 'react';
import { ThumbsUp, Eye, Heart } from 'lucide-react';
import axios from 'axios';

const BIN_ID = '68abf49743b1c97be928d2a5';
const API_KEY = '$2a$10$feV8beu5feH.n/bi14h3qeEdypRku2szJFvQ5rpeNSkNAlGQjX6Qy';
const JSONBIN_URL = `https://api.jsonbin.io/v3/b/${BIN_ID}`;

const LikeViewCounter = () => {
  const [likes, setLikes] = useState(0);
  const [views, setViews] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [thankYouMessage, setThankYouMessage] = useState(false);

  useEffect(() => {
    const updateView = async () => {
      try {
        const { data } = await axios.get(JSONBIN_URL, {
          headers: { 'X-Master-Key': API_KEY },
        });

        const newViews = data.record.views + 1;

        setLikes(data.record.likes);
        setViews(newViews);

        await axios.put(
          JSONBIN_URL,
          { likes: data.record.likes, views: newViews },
          {
            headers: {
              'Content-Type': 'application/json',
              'X-Master-Key': API_KEY,
            },
          }
        );
      } catch (err) {
        console.error('View update failed', err);
      }
    };

    updateView();
  }, []);

  const handleLike = async () => {
    if (hasLiked) return;

    try {
      const { data } = await axios.get(JSONBIN_URL, {
        headers: { 'X-Master-Key': API_KEY },
      });

      const newLikes = data.record.likes + 1;

      setLikes(newLikes);
      setHasLiked(true);
      setThankYouMessage(true); // Show popup

      setTimeout(() => {
        setThankYouMessage(false); // Hide popup after 2.5 seconds
      }, 2500);

      await axios.put(
        JSONBIN_URL,
        { likes: newLikes, views: data.record.views },
        {
          headers: {
            'Content-Type': 'application/json',
            'X-Master-Key': API_KEY,
          },
        }
      );
    } catch (err) {
      console.error('Like update failed', err);
    }
  };

  return (
    <div className="fixed bottom-5 left-5 z-50 bg-[#0c1220] text-white p-3 rounded-xl shadow-xl space-y-2">
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md flex items-center gap-2 w-full"
        onClick={handleLike}
      >
        <ThumbsUp className="h-4 w-4" />
        Like
      </button>

      {thankYouMessage && (
        <div className="bg-green-600 text-white text-sm font-medium py-2 px-4 rounded-md shadow-md animate-bounce">
          🎉 Thanks for your like!
        </div>
      )}

      <div className="bg-[#1a2238] px-4 py-2 rounded-md flex items-center gap-2 text-sm font-medium">
        <Heart className="text-pink-400 h-4 w-4" />
        {likes} Likes
      </div>
      <div className="bg-[#1a2238] px-4 py-2 rounded-md flex items-center gap-2 text-sm font-medium">
        <Eye className="text-purple-400 h-4 w-4" />
        {views} Views
      </div>
    </div>
  );
};

export default LikeViewCounter;