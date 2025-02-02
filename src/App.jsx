import './App.css'
import Menu from './components/Menu'
import Content from './components/Content'
import books from './data/books.json'
import Book from './components/Book'

const App = () => {
  return (
    <div className="App">
      <Menu />
      <Content books={books} />
    </div>
  )
}

export default App
