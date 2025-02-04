const Footer = () => {
  return (
    <div className="footer">
      <h5>Subscribe to Our Newsletter</h5>
      <form action="#" method="POST">
        <label for="email">Enter your email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
        ></input>
        <button type="submit">Subscribe</button>
      </form>
    </div>
  )
}

export default Footer
