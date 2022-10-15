import iconComplete from '../assets/icon-complete.svg'

interface Props {
  toggleSubmitted: VoidFunction
}

const Submitted = ({ toggleSubmitted }: Props): JSX.Element => {
  return (
    <div className='container submit-section'>
      <img className='logo-completed' src={iconComplete} />
      <h2>Thank you!</h2>
      <p>We've added your card details</p>
      <button onClick={toggleSubmitted}>Continue</button>
    </div>
  )
}

export default Submitted
