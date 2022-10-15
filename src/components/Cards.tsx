import CardLogo from '../assets/card-logo.svg'
import { creditCard } from '../types'

const Cards = ({ creditForm }: { creditForm: creditCard }) => {
  return (
    <section className='cards-section'>
      <div className='card card-front'>
        <header>
          <img src={CardLogo} />
        </header>
        <p>{creditForm.number}</p>
        <footer>
          <h3>{creditForm.name}</h3>
          <span>
            {creditForm.month}/{creditForm.year}
          </span>
        </footer>
      </div>
      <div className='card card-back'>
        <p>{creditForm.cvc}</p>
      </div>
    </section>
  )
}

export default Cards
