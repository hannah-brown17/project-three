const Footer = () => {
  return (
    <div className="footer">
      <h2>Subscribe to Our Newsletter</h2>
      <h4>
        Our newsletter is jam-packed with book giveaways and author
        recommendations!
      </h4>
      <form action="#" method="POST">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
        ></input>
        <button type="submit">SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default Footer
