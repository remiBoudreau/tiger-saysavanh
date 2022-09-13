// React Types
import { useEffect, FC, ReactElement } from "react";
// Pages
import Album from "./pages/Album";
import Albums from "./pages/Albums";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Video from "./pages/Video";
import Videos from "./pages/Videos";
// Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Redux
import { fetchAlbums } from "./redux/actions/albumsActions";
import { fetchVideos } from "./redux/actions/videosActions";
import { fetchInformation } from "./redux/actions/informationActions";

import { useAppDispatch } from "./redux/hooks";

import { Provider } from "./contexts/Context";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PageTransition from "./components/PageTransition/PageTransition";

const App: FC = (): ReactElement => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch<any>(fetchAlbums());
    dispatch<any>(fetchVideos());
    dispatch<any>(fetchInformation());
  }, [dispatch]);

  return (
    <Provider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/videos">
            <Videos />
          </Route>
          <Route exact path="/videos/:slug">
            <Video />
          </Route>
          <Route exact path="/info">
            <Info />
          </Route>
          <Route exact path="/:type">
            <Albums />
          </Route>
          <Route path="/:type/:slug">
            <Album />
          </Route>
        </Switch>
        <Footer />
      </Router>
      <PageTransition />
    </Provider>
  );
};

export default App;
