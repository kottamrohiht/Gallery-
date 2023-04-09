import './index.css'

const ThumbnailItem = props => {
  const {item, isActive, changeActiveId} = props
  const {id, thumbnailUrl, thumbnailAltText} = item

  const onClickImg = () => {
    changeActiveId(id)
  }

  const opacityCss = isActive === false ? 'addOpacity' : ''
  return (
    <li className={`img-container ${opacityCss}`}>
      <button onClick={onClickImg}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className="thumbnail-img"
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
