import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import SideBar from "./components/Sidebar";
import EarphonesPage from "./pages/EarphonePage";
import HeadphonePage from "./pages/HeadphonePage";
import SpeakersPage from "./pages/SpeakerPage";
import Checkout from "./pages/CheckoutPage";
import SingleProductPage from "./pages/SIngleProductPage";
import Footer from "./components/Footer";
export default function App() {
  return (
    <Router>
      <Header />
      <SideBar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/earphones">
          <EarphonesPage />
        </Route>
        <Route exact path="/headphones">
          <HeadphonePage />
        </Route>
        <Route exact path="/speakers">
          <SpeakersPage />
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
        <Route path="/product/:id" children={<SingleProductPage />} />
      </Switch>
      <Footer />
    </Router>
  );
}
