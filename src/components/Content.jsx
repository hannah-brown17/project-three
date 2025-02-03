import Book from './Book'
const Content = (props) => {
  return (
    <div>
      <h1>Top Self Development Books</h1>
      <p>
        Reading self-development books is a powerful investment in yourself.
        These books offer valuable insights, practical strategies, and a fresh
        perspective that can help you overcome challenges, build confidence, and
        unlock your full potential. Whether you are looking to improve your
        mindset, enhance your productivity, or develop better habits, self-help
        literature provides the tools you need to grow both personally and
        professionally. The beauty of these books lies in their ability to
        inspire lasting change and guide you towards becoming the best version
        of yourself. In a world that is constantly evolving, there is no better
        time to dive into the world of personal growth and start shaping your
        future today!
      </p>
      <h3>Personal Growth</h3>
      <div className="gridContainer">
        {props.books.list.map((book) => {
          if (book.bookCategory === 'Personal Growth') {
            return <Book book={book} />
          }
        })}
      </div>
      <h3>Career</h3>
      <div className="gridContainer">
        {props.books.list.map((book) => {
          if (book.bookCategory === 'Career') {
            return <Book book={book} />
          }
        })}
      </div>
      <h3>Personal Finance</h3>
      <div className="gridContainer">
        {props.books.list.map((book) => {
          if (book.bookCategory === 'Finance') {
            return <Book book={book} />
          }
        })}
      </div>
      <h3>Relationships</h3>
      <div className="gridContainer">
        {props.books.list.map((book) => {
          if (book.bookCategory === 'Relationship') {
            return <Book book={book} />
          }
        })}
      </div>
      <h3>Spiritual</h3>
      <div className="gridContainer">
        {props.books.list.map((book) => {
          if (book.bookCategory === 'Spiritual') {
            return <Book book={book} />
          }
        })}
      </div>
    </div>
  )
}

export default Content
