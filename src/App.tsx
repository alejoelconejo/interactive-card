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
            <input placeholder='e.g. Jane Appleseed' type={'text'} />
          </label>
          <label>
            Card number
            <input placeholder='e.g. 1234 5678 9123 0000' type={'number'} />
          </label>
          <label>
            Exp. Date (MM/YY)
            <input placeholder='MM' type={'number'} />
            <input placeholder='YY' type={'number'} />
          </label>
          <label>
            CVC
            <input placeholder='e.g. 123' type={'number'} />
          </label>
          <button>Confirm</button>
        </form>
      </section>
    </main>
  )
}

export default App
