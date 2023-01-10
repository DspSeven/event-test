// Write your code here
import './index.css'

const registrationsConstants = {
  initial: 'INITIAL',
  registered: 'REGISTERED',
  yetToRegister: 'YET_TO_REGISTER',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {status, regStatus} = props
  // show you already reg
  const displayRegItem = () => {
    console.log('you already registered')
    return (
      <div>
        <img src={status} alt="registered" />
        <h1>You have already registered for the event</h1>
      </div>
    )
  }
  // show you to reg
  const displayYetToRegItem = () => {
    console.log('yet to reg')
    return (
      <div>
        <img src={status} alt="yet to register" />
        <p>
          A live performance brings so much to your relationship with dance.
          Seeing dance live can often make you fail totally in love with this
          beautiful art form
        </p>
        <button type="button">Register Here</button>
      </div>
    )
  }
  // show u have reg cls
  const displayRegClosedItem = () => {
    console.log('ji')
    return (
      <div>
        <img src={status} alt="registrations closed" />
        <h1>Registrations Are Closed Now!</h1>
        <p>
          Stay tuned. We will reopen
          <br />
          the registrations soon!
        </p>
      </div>
    )
  }
  // you show idle
  const displayIdleItem = () => {
    console.log('hi')
    return (
      <div>
        <p>Click on an event, to view its registration details</p>
      </div>
    )
  }

  const sample = () => {
    switch (regStatus) {
      case registrationsConstants.registered:
        return displayRegItem()
      case registrationsConstants.yetToRegister:
        return displayYetToRegItem()
      case registrationsConstants.registrationsClosed:
        return displayRegClosedItem()
      case registrationsConstants.initial:
        return displayIdleItem()
      default:
        break
    }
    return <></>
  }

  return <div>{sample()}</div>
}

export default ActiveEventRegistrationDetails
