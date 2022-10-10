import { creditCard } from '../types'

const FormCredit = ({
  creditForm,
  handleChange,
}: {
  creditForm: creditCard
  handleChange: React.ChangeEventHandler<HTMLInputElement>
}) => {
  return (
    <section className='form-section'>
      <form>
        <label>
          Cardholder name
          <input
            placeholder='e.g. Jane Appleseed'
            name='name'
            type={'text'}
            maxLength={25}
            value={creditForm.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Card number
          <input
            placeholder='e.g. 1234 5678 9123 0000'
            name='number'
            type={'text'}
            inputMode='numeric'
            pattern='[A-Za-z0-9]{4}\s[A-Za-z0-9]{4}\s[A-Za-z0-9]{4}\s[A-Za-z0-9]{4}'
            maxLength={19}
            value={creditForm.number}
            onChange={handleChange}
            required
          />
        </label>
        <div className='form-horizontal'>
          <label>
            Exp. Date (MM/YY)
            <div className='inputs-date'>
              <input
                className='input-month'
                name='month'
                placeholder='MM'
                type={'text'}
                min={'01'}
                max={'12'}
                minLength={2}
                maxLength={2}
                value={creditForm.month}
                onChange={handleChange}
                required
              />
              <input
                className='input-date'
                name='year'
                placeholder='YY'
                type={'text'}
                minLength={2}
                maxLength={2}
                value={creditForm.year}
                onChange={handleChange}
                required
              />
            </div>
          </label>
          <label>
            CVC
            <input
              className='input-cvc'
              name='cvc'
              placeholder='e.g. 123'
              type={'text'}
              inputMode='numeric'
              maxLength={3}
              value={creditForm.cvc}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <button>Confirm</button>
      </form>
    </section>
  )
}

export default FormCredit
