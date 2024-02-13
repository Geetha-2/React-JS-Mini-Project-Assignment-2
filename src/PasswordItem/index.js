import './index.css'

const PasswordItem = props => {
  const {eachDetails, deleteBtn, isClicked} = props
  const {id, website, username, password, initialClassName} = eachDetails

  const initial = username.slice(0, 1).toUpperCase()

  const onClickDelBtn = () => {
    deleteBtn(id)
  }

  return (
    <li className="list-item-cont">
      <div className="list-cont">
        <div className="initial-flex-cont">
          <p className={` initial-container ${initialClassName}`}>{initial}</p>
          <div className="flex-col-cont">
            <p className="text">{website}</p>
            <p className="text">{username}</p>
            {isClicked ? (
              <p className="text">{password}</p>
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
                alt="stars"
                className="stars-img"
              />
            )}
          </div>
        </div>
        <button
          type="button"
          className="del-btn"
          onClick={onClickDelBtn}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default PasswordItem
