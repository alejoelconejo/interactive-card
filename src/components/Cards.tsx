import CardLogo from '../assets/card-logo.svg'
import { creditCard } from '../types'

const Cards = ({ creditForm }: { creditForm: creditCard }) => {
  return (
    <section className='cards-section'>
      <picture className='card card-front'>
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
      </picture>
      <picture className='card card-back'>
        <p>{creditForm.cvc}</p>
      </picture>
    </section>
  )
}

export default Cards
