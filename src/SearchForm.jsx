import { useGlobalContext } from "./context"

const SearchForm = () => {
  const {setSearchTerm}=useGlobalContext()
  const handleSubmit=(e)=>{
e.preventDefault()
const searchValue=e.target.elements.search.value
if(!searchValue)return
setSearchTerm(searchValue)

  }
  return (
    <section>
      <h2 className="title">Unsplash search</h2>
      <form className="search-form" onSubmit={handleSubmit} >
        <input type="text" className="form-input search-input"
        name="search" placeholder="search"
        />
        <button type="btn" className="btn">search</button>
      </form>
    </section>
  )
}

export default SearchForm
