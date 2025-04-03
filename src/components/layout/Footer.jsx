 export const Footer = () => {
    return (
<footer className="section-footer">
    <div className="footer-container container">
      <div className="content_1">
        <p>
          Welcome to MovieFlix, <br />
          your ultimate destination for
          <br />
          movies, reviews, and entertainment news!
        </p>
      </div>
      <div className="content_2">
        <h4>MOVIES</h4>
        <a href="#">Now Showing</a>
        <a href="#">Upcoming Releases</a>
        <a href="#">Top Rated</a>
        <a href="#">Trending</a>
      </div>
      <div className="content_3">
        <h4>EXPLORE</h4>
        <a href="./contact.html">Contact Us</a>
        <a href="" target="_blank"> Movir Reviews</a>
        <a href="" target="_blank"> Genres </a>
        <a href="" target="_blank"> FAQs </a>
      </div>
      <div className="content_4">
        <h4>NEWSLETTER</h4>
        <p>
          Stay updated with the latest movie 
          <br />
         news, reviews, and exclusive trailers!
        </p>
        <div className="f-mail">
          <input type="email" placeholder="Your Email" />
          <i className="bx bx-envelope"></i>
        </div>
        <hr />
      </div>
    </div>
    <div className="f-design">
      <div className="f-design-txt">
        <p>Design and Code by MovieFilx </p>
      </div>
    </div>
  </footer>
    )
  }
