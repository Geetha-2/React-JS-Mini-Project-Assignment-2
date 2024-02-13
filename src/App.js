import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordItem from './PasswordItem'

import './App.css'

class App extends Component {
  state = {
    website: '',
    username: '',
    password: '',
    passwordsList: [],
    searchInput: '',
    isClicked: false,
  }

  onChangeWebsite = event => {
    this.setState({
      website: event.target.value,
    })
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onAddDetails = event => {
    event.preventDefault()
    const {website, username, password} = this.state

    const initialBgClassnames = [
      'yellow',
      'green',
      'orange',
      'skyBlue',
      'grey',
      'blue',
    ]

    const initialBackgroundClassName =
      initialBgClassnames[
        Math.ceil(Math.random() * initialBgClassnames.length - 1)
      ]

    const newPassword = {
      id: uuidv4(),
      website,
      username,
      password,
      initialClassName: initialBackgroundClassName,
    }

    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newPassword],
      website: '',
      username: '',
      password: '',
    }))
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  deleteBtn = id => {
    const {passwordsList} = this.state
    const filterPasswordsList = passwordsList.filter(each => each.id !== id)

    this.setState({
      passwordsList: filterPasswordsList,
    })
  }

  onToggleCheckbox = () => {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked,
    }))
  }

  render() {
    const {
      website,
      username,
      password,
      passwordsList,
      searchInput,
      isClicked,
    } = this.state

    const searchResults = passwordsList.filter(each =>
      each.website.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <div className="new-passwords-container">
          <div className="sm-img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
              className="password-manager"
            />
          </div>
          <div className="lg-img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="password-manager"
            />
          </div>

          <div className="add-passwords-container">
            <form onSubmit={this.onAddDetails}>
              <h1 className="heading">Add New Password</h1>
              <div className="cont">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="img"
                />
                <input
                  type="text"
                  placeholder="Enter Website"
                  className="input-el"
                  onChange={this.onChangeWebsite}
                  value={website}
                />
              </div>
              <div className="cont">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="img"
                />
                <input
                  type="text"
                  placeholder="Enter Username"
                  className="input-el"
                  onChange={this.onChangeUsername}
                  value={username}
                />
              </div>
              <div className="cont">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="img"
                />
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="input-el"
                  onChange={this.onChangePassword}
                  value={password}
                />
              </div>
              <div className="btn">
                <button type="submit" className="add-btn">
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="passwords-container">
          <div className="password-count-search-container">
            <div className="password-text-count">
              <h1 className="para">Your Passwords</h1>
              <p className="password-count">{passwordsList.length}</p>
            </div>
            <div className="search-cont">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search-img"
              />
              <input
                type="search"
                placeholder="Search"
                className="search-text"
                onChange={this.onChangeSearchInput}
                value={searchInput}
              />
            </div>
          </div>
          <hr className="hr-line" />
          <div className="checkbox-show-password-cont">
            <input
              type="checkbox"
              id="CheckBox"
              className="checkbox"
              onClick={this.onToggleCheckbox}
            />
            <label className="show-password-text" htmlFor="CheckBox">
              Show Passwords
            </label>
          </div>
          {searchResults.length !== 0 ? (
            <ul className="un-ordered-list-cont">
              {searchResults.map(eachList => (
                <PasswordItem
                  key={eachList.id}
                  eachDetails={eachList}
                  deleteBtn={this.deleteBtn}
                  isClicked={isClicked}
                />
              ))}
            </ul>
          ) : (
            <div className="no-passwords-cont">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="no-passwords-img"
              />
              <p className="no-passwords-text">No Passwords</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default App
