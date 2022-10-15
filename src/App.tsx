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

  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setCreditForm((prevCreditForm) => {
      return { ...prevCreditForm, [name]: value }
    })
  }

  const setSubmitted: VoidFunction = () =>
    setIsSubmitted((isSubmitted) => !isSubmitted)

  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

  const setLoading: Function = async () => {
    setIsLoading(true)
    console.log('en el setloadinggg')
    await sleep(2000).then(() => console.log('holu'))
  }

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading().then(() => {
      setSubmitted()
      setIsLoading(false)
    })
  }

  return (
    <main>
      <Cards creditForm={creditForm} />
      <section className='hero-section'>
        {isSubmitted ? (
          <Submitted setSubmitted={setSubmitted} />
        ) : (
          <FormCredit
            creditForm={creditForm}
            isLoading={isLoading}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        )}
      </section>
    </main>
  )
}

export default App
