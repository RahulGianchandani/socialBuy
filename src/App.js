import './App.css';
import Header from './Components/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route, Redirect, Navigate
} from "react-router-dom";
import Home from './Pages/home';
import Footer from './Components/Footer';

import Login from './Pages/login';
import { ToastContainer } from 'react-toastify';
import CustomerReviews from './Pages/customerReviews';
import ContactUs from './Pages/contactUs';
import Terms from './Pages/terms';
import Privacy from './Pages/privacy';
import ScrollToTop from './Components/scrollTop';
import Refund from './Pages/refund';
import Insta from './Pages/Services/insta/insta';
import FB from './Pages/Services/fb/fb';
import TG from './Pages/Services/tg/tg';
import Discord from './Pages/Services/discord/discord';
import Spotify from './Pages/Services/spotify/spotify';
import Tiktok from './Pages/Services/tiktok/tiktok';
import Youtube from './Pages/Services/yt/youtube';
import Twitch from './Pages/Services/twitch/twitch';
import Snapchat from './Pages/Services/sc/snapchat';
import InstaBuyFollowers from './Pages/Services/insta/instaBuyFollowers';
import InstaBuyComments from './Pages/Services/insta/instaBuyComments';
import InstaBuyReelsViews from './Pages/Services/insta/instaBuyReelViews';
import InstaBuyStoryViews from './Pages/Services/insta/instaBuyStoryViews';
import YTBuySubscribers from './Pages/Services/yt/ytBuySubscribers';
import YTBuyDislikes from './Pages/Services/yt/ytBuyDislikes';
import YTBuyLikes from './Pages/Services/yt/ytBuylikes';
import YTBuyViews from './Pages/Services/yt/ytBuyViews';
import YTBuyWatchTimeHours from './Pages/Services/yt/ytBuyWatchTimeHours';
import FbBuyComments from './Pages/Services/fb/fbBuyComments';
import FbBuyFollowers from './Pages/Services/fb/fbBuyFollowers';
import FbBuyPostLikes from './Pages/Services/fb/fbBuyPostLikes';
import TgBuyMembers from './Pages/Services/tg/tgBuyPostLikes';
import ScBuyViews from './Pages/Services/sc/scBuyViews';
import ScBuyFollowers from './Pages/Services/sc/scBuyFollowers';
import DcBuyMembers from './Pages/Services/discord/dcBuyMembers';
import DcBuyFriendShipReqs from './Pages/Services/discord/dcBuyFriendShipReqs';
import TwitchBuyFollowers from './Pages/Services/twitch/twitchBuyFollowers';
import TwitchBuyVidViews from './Pages/Services/twitch/twitchBuyVidViews';
import TwitchBuyLive from './Pages/Services/twitch/twitchBuyLive';
import TiktokBuyFollowers from './Pages/Services/tiktok/tiktokBuyFollowers';
import TiktokBuyLiveViews from './Pages/Services/tiktok/tiktokBuyLiveViews';
import TiktokBuyLikes from './Pages/Services/tiktok/tiktokBuyLikes';
import TiktokBuyComments from './Pages/Services/tiktok/tiktokBuyComments';
import SpotifyBuyFollowers from './Pages/Services/spotify/spotifyBuyFollowers';
import SpotifyBuyMonthlyListeners from './Pages/Services/spotify/spotifyBuyMonthlyListeners';
import SpotifyBuyPlays from './Pages/Services/spotify/spotifyBuyPlays';
import SpotifyBuySaves from './Pages/Services/spotify/spotifyBuySaves';
import InstaBuyLikes from './Pages/Services/insta/instaBuyLikes';

export default function App() {
  const token = localStorage.getItem('token');

  return (
    <Router>
      <Header />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/socialBuy" element={<Home />} />
          <Route path="/customer-reviews" element={<CustomerReviews />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/terms-conditions" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/refund-policy" element={<Refund />} />
          <Route path="/services-instagram" element={<Insta />} />
          <Route path="/services-facebook" element={<FB />} />
          <Route path="/services-telegram" element={<TG />} />
          <Route path="/services-spotify" element={<Spotify />} />
          <Route path="/services-tiktok" element={<Tiktok />} />
          <Route path="/services-discord" element={<Discord />} />
          <Route path="/services-snapchat" element={<Snapchat />} />
          <Route path="/services-twitch" element={<Twitch />} />
          <Route path="/services-youtube" element={<Youtube />} />
          <Route path="/buy-insta-likes" element={<InstaBuyLikes />} />
          <Route path="/buy-insta-followers" element={<InstaBuyFollowers />} />
          <Route path="/buy-insta-comments" element={<InstaBuyComments />} />
          <Route path="/buy-insta-story-views" element={<InstaBuyStoryViews />} />
          <Route path="/buy-insta-reels-views" element={<InstaBuyReelsViews />} />
          <Route path="/buy-yt-subs" element={<YTBuySubscribers />} />
          <Route path="/buy-yt-dislikes" element={<YTBuyDislikes />} />
          <Route path="/buy-yt-likes" element={<YTBuyLikes />} />
          <Route path="/buy-yt-views" element={<YTBuyViews />} />
          <Route path="/buy-yt-watch-time-hours" element={<YTBuyWatchTimeHours />} />
          <Route path="/buy-fb-comments" element={<FbBuyComments />} />
          <Route path="/buy-fb-followers" element={<FbBuyFollowers />} />
          <Route path="/buy-fb-post-likes" element={<FbBuyPostLikes />} />
          <Route path="/buy-tg-members" element={<TgBuyMembers />} />
          <Route path="/buy-sc-followers" element={<ScBuyFollowers />} />
          <Route path="/buy-sc-views" element={<ScBuyViews />} />
          <Route path="/buy-dc-members" element={<DcBuyMembers />} />
          <Route path="/buy-dc-friendship-reqs" element={<DcBuyFriendShipReqs />} />
          <Route path="/buy-twitch-followers" element={<TwitchBuyFollowers />} />
          <Route path="/buy-twitch-video-views" element={<TwitchBuyVidViews />} />
          <Route path="/buy-twitch-live" element={<TwitchBuyLive />} />
          <Route path="/buy-tiktok-followers" element={<TiktokBuyFollowers />} />
          <Route path="/buy-tiktok-live-views" element={<TiktokBuyLiveViews />} />
          <Route path="/buy-tiktok-likes" element={<TiktokBuyLikes />} />
          <Route path="/buy-tiktok-comments" element={<TiktokBuyComments />} />
          <Route path="/buy-spotify-followers" element={<SpotifyBuyFollowers />} />
          <Route path="/buy-spotify-monthly-listeners" element={<SpotifyBuyMonthlyListeners />} />
          <Route path="/buy-spotify-plays" element={<SpotifyBuyPlays />} />
          <Route path="/buy-spotify-saves" element={<SpotifyBuySaves />} />


          {/* <Route path="/admin-login" element={<Login />} /> */}
          {/* {token === "admin" && */}
          {/* <Route path="/admin-dashboard" element={<AdminDashboard />} /> */}
          {/* } */}
        </Routes>
      </ScrollToTop>
      <ToastContainer />
      <Footer />
    </Router>
  );
}

