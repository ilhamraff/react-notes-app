import React from "react";
import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddPage from "./pages/AddPage";
import NotFoundPage from "./pages/404Page";
import DetailPageWrapper from "./pages/DetailPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { getUserLogged, putAccessToken } from "./utils/network-data";
import AppContext, { AppProvider } from "./contexts/AppContext";
import { FaMoon, FaSun } from "react-icons/fa";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authedUser: null,
      initializing: true,
    };

    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  async componentDidMount() {
    const { data } = await getUserLogged();

    this.setState(() => {
      return {
        authedUser: data,
        initializing: false,
      };
    });
  }

  async onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();

    this.setState(() => {
      return {
        authedUser: data,
      };
    });
  }

  onLogout() {
    this.setState(() => {
      return {
        authedUser: null,
      };
    });

    putAccessToken("");
  }

  render() {
    if (this.state.initializing) {
      return null;
    }

    if (this.state.authedUser === null) {
      return (
        <AppProvider>
          <div className="note-app">
            <AppContext.Consumer>
              {({ locale, theme, toggleLocale, toggleTheme }) => (
                <header className="note-app__header">
                  <h1>{locale === "id" ? "Aplikasi Catatan" : "My Notes"}</h1>
                  <div className="navigation">
                    <button onClick={toggleLocale}>
                      {locale === "id" ? "en" : "id"}
                    </button>
                    <button onClick={toggleTheme}>
                      {theme === "light" ? <FaMoon /> : <FaSun />}
                    </button>
                  </div>
                </header>
              )}
            </AppContext.Consumer>
            <main>
              <Routes>
                <Route
                  path="/*"
                  element={<LoginPage loginSuccess={this.onLoginSuccess} />}
                />
                <Route path="/register" element={<RegisterPage />} />
              </Routes>
            </main>
          </div>
        </AppProvider>
      );
    }
    return (
      <AppProvider>
        <div className="note-app">
          <header className="note-app__header">
            <AppContext.Consumer>
              {({ locale }) => (
                <h1>{locale === "id" ? "Aplikasi Catatan" : "My Notes"}</h1>
              )}
            </AppContext.Consumer>
            <Navigation
              logout={this.onLogout}
              name={this.state.authedUser.name}
            />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/add" element={<AddPage />} />
              <Route path="/notes/:id" element={<DetailPageWrapper />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
        </div>
      </AppProvider>
    );
  }
}

export default NoteApp;
