import './App.css'

// These are the list used in the application. You can move them to any component needed.
import {Component} from 'react'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here

const HistoryItem = props => {
  const {historyDetails, onDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const deleteHistory = () => {
    onDelete(id)
  }

  return (
    <li className="history-details">
      <p className="time">{timeAccessed}</p>
      <img className="logo" src={logoUrl} alt="domain logo" />
      <p className="title">{title}</p>
      <p className="url">{domainUrl}</p>
      <button data-testid="delete" type="button">
        <img
          onClick={deleteHistory}
          className="delete-icon"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

class App extends Component {
  state = {searchInput: '', historyList: initialHistoryList}

  onType = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onDelete = id => {
    const {historyList} = this.state
    const onDeleteHistory = historyList.filter(
      eachHistory => eachHistory.id !== id,
    )
    this.setState({
      historyList: onDeleteHistory,
    })
  }

  render() {
    const {searchInput, historyList} = this.state
    const searchedHistory = historyList.filter(eachHistory =>
      eachHistory.title.toLowerCase().includes(searchInput),
    )
    let programme

    if (searchedHistory.length === 0) {
      programme = (
        <div className="empty-container">
          <p>There is no history to show</p>
        </div>
      )
    } else {
      programme = (
        <div className="history-main-container">
          <ul>
            {searchedHistory.map(eachHistory => (
              <HistoryItem
                historyDetails={eachHistory}
                key={eachHistory.id}
                onDelete={this.onDelete}
              />
            ))}
          </ul>
        </div>
      )
    }

    return (
      <div className="main-container">
        <div className="search-history-container">
          <img
            className="app-logo"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div className="search-input-container">
            <img
              className="search"
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
            />
            <input
              onChange={this.onType}
              value={searchInput}
              type="search"
              className="search-input"
              placeholder="Search history"
            />
          </div>
        </div>
        {programme}
      </div>
    )
  }
}

export default App
