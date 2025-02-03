const Book = (props) => {
  return (
    <div>
      <img src={props.book.image} className="bookImage" />
      <h5>
        <i>{props.book.title}</i>
      </h5>
      <h5>By: {props.book.author}</h5>
      <h5>{props.book.printLength}</h5>
      <h5>Published: {props.book.publishedDate}</h5>
      <a
        href={props.book.purchaseLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bookLink"
      >
        Buy Now!
      </a>
    </div>
  )
}

export default Book
