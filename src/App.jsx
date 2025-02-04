import './App.css'
import Menu from './components/Menu'
import Footer from './components/Footer'
import Content from './components/Content'
import books from './data/books.json'
import Book from './components/Book'

const App = () => {
  return (
    <div className="App">
      <Menu />
      <Content books={books} />
      <Footer />
    </div>
  )
}

export default App
