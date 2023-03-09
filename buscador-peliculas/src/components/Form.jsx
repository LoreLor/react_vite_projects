const Form = ({ search, handleSubmit, handleChange, error }) => {
  return (
    <form className='form' onSubmit={handleSubmit}>
      <input
        name='query'
        type='text'
        value={search}
        placeholder='Matrix, Star Wars...'
        onChange={handleChange}
        style={{ border: '1px solid transparent', borderColor: error ? 'red' : 'green' }}
      />
      <button type='submit'>Buscar</button>
    </form>
  )
}

export default Form
