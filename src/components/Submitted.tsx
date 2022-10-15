import iconComplete from '../assets/icon-complete.svg'

interface Props {
  setSubmitted: VoidFunction
}

const Submitted = ({ setSubmitted }: Props): JSX.Element => {
  return (
    <div className='container submit-section'>
      <img className='logo-completed' src={iconComplete} />
      <h2>Thank you!</h2>
      <p>We've added your card details</p>
      <button onClick={setSubmitted}>Continue</button>
    </div>
  )
}

export default Submitted
