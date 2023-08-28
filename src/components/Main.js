import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
// import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import pic04 from '../images/pic04.mp4'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
          Hello! I'm a passionate developer and seasoned systems administrator with 
          expertise in various programming languages, database management,
          and OS administration. With proficiency in SQL, UML, MySQL, NoSQL, and 
          languages like JavaScript, PHP, as well as frameworks such as Laravel, React, 
          Vuejs, and Nodejs, I'm dedicated to delivering top-notch solutions for 
          your web development, database management, and systems administration needs. 
          Get in touch for tailored solutions that meet your requirements.<a href="#work"></a>
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="video main" style={{ width: '100%', display: 'block', margin: '0 auto' }}>
            <video controls style={{ width: '100%', height: 'auto' }}>
              <source src={pic04} type="video/mp4" />
              Votre navigateur ne prend pas en charge la lecture de vidéos.
            </video>
          </span>

          <p>
          Check out some of my development projects in this video. 
          I've had the opportunity to work on a range of areas, 
          including creating interactive web applications, 
          developing elegant user interfaces and much more. 
          Each project has been an exciting opportunity to learn and grow as a developer. 
          I hope this video gives you an insight into my skills and commitment to technical excellence.
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>

          ## About Me <br /><br />

          Hello, I'm Anis RAHMANI, a passionate web developer based in Algiers, Algeria. <br />
          With over 10 years of experience in the field of information technology, <br />
          I've gained a strong expertise in creating sophisticated and innovative web solutions. <br /><br />

          ### Background and Skills<br /><br />

          I hold a degree in Information Systems Design (CSI) from 3il ingénieur, Limoges, France, <br />
          as well as a diploma in Database Management from Saint Michel, Algeria. <br />
          My educational journey has equipped me with a deep understanding of development concepts,
          database management, and information systems design.<br />

          My toolkit encompasses a range of programming languages including HTML, CSS, JavaScript, and PHP.
          I also have proficiency with popular frameworks such as Laravel, ReactJs, and NodeJs,
          along with content management using WordPress. My skills extend to both relational and non-relational databases,
          including MySQL and MongoDB. I'm familiar with communication protocols such as HTTP and HTTPS,
          and I place particular emphasis on web security, using tools like SSL and OAuth to ensure a secure experience.<br /><br />

          ### Professional Experience<br /><br />

          My experience as a web developer includes substantial contributions to diverse projects. 
          I worked as a web developer at MC SOLUTION in Tunis, where I designed and developed websites and
          applications using an array of technologies. My expertise spans from front-end skills like creating
          interactive user interfaces to implementing robust back-end features, including RESTful APIs and user authentication.

          Prior to that, I worked at Alpha-computers spa in Algiers, where I contributed to the development and maintenance of various web solutions.
          My role involved collaborating with the team to address project needs, using programming languages such as HTML, CSS, JavaScript, and PHP.<br /><br />

          ### Objective and Collaboration<br /><br />

          My goal is to create elegant and functional web experiences using modern development practices, always keeping design principles and user experience in mind.
          My ability to efficiently troubleshoot technical issues and collaborate harmoniously with other development team members is essential for successful project outcomes.

          I'm enthusiastic about contributing to exciting projects and adding value to every collaboration.
          If you're seeking a dedicated web developer with versatile expertise, feel free to contact me at
          <br /><br />

          Thank you for your interest, and talk to you soon!

          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="http://localhost:8000/send-email">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/anis.bou.37454/" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/anis.so25/" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/devChwaker"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main