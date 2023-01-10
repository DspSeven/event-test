// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, displaySelectedStatus} = props
  const {id, imageUrl, name, location, registrationStatus} = eventDetails

  const onRenderSelectedStatus = () => {
    displaySelectedStatus(id, registrationStatus)
  }

  return (
    <li>
      <img
        src={imageUrl}
        alt="event"
        onClick={onRenderSelectedStatus}
        height={50}
        width={50}
      />
      <p>{name}</p>
      <p>{location}</p>
    </li>
  )
}
export default EventItem
