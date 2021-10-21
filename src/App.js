import React, { Component } from "react";
import $ from "jquery";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NHL from './components/NHL';

class App extends Component {

  constructor(props) {
    super();
    this.state = {
      foo: "bar",
      resumeData: {},
      sharedData: {},
    };
  }

  applyPickedLanguage(pickedLanguage) {
    document.documentElement.lang = pickedLanguage;
    var resumePath =
      document.documentElement.lang === window.$primaryLanguage
        ? `res_primaryLanguage.json`
        : `res_secondaryLanguage.json`;
    this.loadResumeFromPath(resumePath);
  }

  componentDidMount() {
    this.loadSharedData();
    this.applyPickedLanguage(
      window.$primaryLanguage
    );
  }

  loadResumeFromPath(path) {
    $.ajax({
      url: path,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  loadSharedData() {
    $.ajax({
      url: `portfolio_shared_data.json`,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ sharedData: data });
        document.title = `${this.state.sharedData.basic_info.name}`;
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  render() {
    return (
      <Router>
        <div>
          <ul className="navbar navbar-light justify-content-center bg-light fixed-top">
            {this.state.sharedData.header_nav && this.state.sharedData.header_nav.map((item) => (
              <Link
                to={item.url}
                className="navbar-brand"
              >
                <i
                  className=""
                >{item.name}</i>
              </Link>
            ))}
          </ul>
        <Switch>
          <Route path="/nhl">
            <NHL />
          </Route>
          <Route path="/">
            <div>
              <Header sharedData={this.state.sharedData.basic_info} />
              <div className="col-md-12 mx-auto text-center language">
              </div>
              <About
                resumeBasicInfo={this.state.resumeData.basic_info}
                sharedBasicInfo={this.state.sharedData.basic_info}
              />
              <Projects
                resumeProjects={this.state.resumeData.projects}
                resumeBasicInfo={this.state.resumeData.basic_info}
              />
              <Skills
                sharedSkills={this.state.sharedData.skills}
                resumeBasicInfo={this.state.resumeData.basic_info}
              />
              <Experience
                resumeExperience={this.state.resumeData.experience}
                resumeBasicInfo={this.state.resumeData.basic_info}
              />
              <Footer sharedBasicInfo={this.state.sharedData.basic_info} />
            </div>
          </Route>
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
