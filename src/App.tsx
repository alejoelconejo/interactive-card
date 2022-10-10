import { useState } from 'react'
import { creditCard } from './types'

import FormCredit from './components/Form'
import Cards from './components/Cards'

const App = () => {
  const [creditForm, setCreditForm] = useState<creditCard>({
    name: '',
    number: '',
    month: 0,
    year: 0,
    cvc: 0,
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setCreditForm((prevCreditForm) => {
      return { ...prevCreditForm, [name]: value }
    })
  }

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('holuuu, desde el submit')
  }

  return (
    <main>
      <Cards creditForm={creditForm} />
      <FormCredit
        creditForm={creditForm}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </main>
  )
}

export default App
