import React from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Auth from "./pages/Auth/Auth";
import { auth, createUserProfileDocument } from "./firebase/firebase";
import { onSnapshot } from "firebase/firestore";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        onSnapshot(userRef, (docSnapshot) => {
          this.setState({
            currentUser: {
              id: docSnapshot.id,
              ...docSnapshot.data(),
            },
          });
          console.log(this.state);
        });
      } else {
        this.setState({
          currentUser: userAuth,
        });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/signin" component={Auth} />
        </Switch>
      </div>
    );
  }
  r;
}

export default App;
