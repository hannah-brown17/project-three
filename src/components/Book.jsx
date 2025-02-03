const Book = (props) => {
  return (
    <div>
      <img src={props.book.image} className="bookImage" />
      <h5>{props.book.title}</h5>
      <h5>
        <i>By: {props.book.author}</i>
      </h5>
      <h5>{props.book.printLength}</h5>
      <h5>Published: {props.book.publishedDate}</h5>
      <a
        href={props.book.purchaseLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bookLink"
      >
        Purchase on Amazon!
      </a>
    </div>
  )
}

export default Book
