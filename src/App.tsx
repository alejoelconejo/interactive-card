const App = () => {
  return (
    <main>
      <section className='cards-section'>
        <article className='card card-front'></article>
        <article className='card card-back'></article>
      </section>
      <section className='form-section'>
        <form>
          <label>
            Cardholder name
            <input
              placeholder='e.g. Jane Appleseed'
              name='name'
              type={'text'}
            />
          </label>
          <label>
            Card number
            <input
              placeholder='e.g. 1234 5678 9123 0000'
              name='card-number'
              type={'text'}
              inputMode='numeric'
            />
          </label>
          <div className='form-horizontal'>
            <label>
              Exp. Date (MM/YY)
              <div className='inputs-date'>
                <input
                  className='input-date'
                  name='exp-month'
                  placeholder='MM'
                  type={'text'}
                  inputMode='numeric'
                />
                <input
                  className='input-date'
                  name='exp-year'
                  placeholder='YY'
                  type={'text'}
                  inputMode='numeric'
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
              />
            </label>
          </div>

          <button>Confirm</button>
        </form>
      </section>
    </main>
  )
}

export default App
