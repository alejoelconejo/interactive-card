import { useState } from 'react'
import { creditCard } from './types'

import FormCredit from './components/FormCredit'
import Cards from './components/Cards'
import Submitted from './components/Submitted'

const App = () => {
  const [creditForm, setCreditForm] = useState<creditCard>({
    name: '',
    number: '',
    month: 0,
    year: 0,
    cvc: 0,
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setCreditForm((prevCreditForm) => {
      return { ...prevCreditForm, [name]: value }
    })
  }

  const toggleSubmitted: VoidFunction = () =>
    setIsSubmitted((isSubmitted) => !isSubmitted)

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()
    toggleSubmitted()
  }

  return (
    <main>
      <Cards creditForm={creditForm} />
      <section className='hero-section'>
        {isSubmitted ? (
          <Submitted toggleSubmitted={toggleSubmitted} />
        ) : (
          <FormCredit
            creditForm={creditForm}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        )}
      </section>
    </main>
  )
}

export default App
