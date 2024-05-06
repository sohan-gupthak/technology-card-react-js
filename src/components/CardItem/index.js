import './index.css'

const CardItem = props => {
  const {technologyCardDetails} = props
  const {id, title, description, imgUrl, className} = technologyCardDetails

  return (
    <li className={`card-container ${className}`} id={id}>
      <h1 className="role">{title}</h1>
      <p className="role-description">{description}</p>
      <img className="image" src={imgUrl} alt={title} />
    </li>
  )
}

export default CardItem
