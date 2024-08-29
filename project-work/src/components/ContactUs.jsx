

function ContactUs() {
  return (
    <div className="contactus">
      <h1 className="cont-us">CONTACT US</h1>
      <div>
        <div className="info">
          <h3 className="informat">INFORMATION</h3>
          <h4>ADDRESS</h4>
          <p>
            plot 145 Adetokunbo Ademola Street,
            <br /> PMB 12724, Victoria Island,
            <br />
            Lagos Nigeria
          </p>
          <h4>Phone / Fax</h4>
          <p>
            International Calls: +234 201 2772700,
            <br /> National Calls: 0201 2772700
          </p>
          <h4>E-mail</h4>
          <p>
            sales@shearhotels.com, reservation@shearhotels.com,
            <br />
            banquet@shearhotels.com
          </p>
        </div>
        <p className="subheading">
          If you have any <br /> questions <br /> don't hesitate to <br /> contact us.
        </p>
      </div>
      <div className="Contactform">
        <p className="section-contacts-title">Get in touch</p>
        <div className="alert" id="form-message" role="alert"></div>

        <form
          className="contacts__form"
          method="post"
          action="contact-process.php"
        >
          <div className="form-group">
            <label className="sr-only">Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              placeholder="Enter your email address"
              required
            />
            <span className="help-block"></span>
          </div>

          <div className="form-group">
            <label className="sr-only">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="name"
              placeholder="Enter your name"
              required
            ></input>
            <span className="help-block"></span>
          </div>

          <div className="form-group">
            <label className="sr-only">Message</label>
            <textarea
              name="message"
              className="form-control"
              id="message"
              rows="6"
              placeholder="Enter your message"
              required
            ></textarea>
            <span className="help-block"></span>
          </div>

          <div className="form-group">
            <small className="text-muted">* All fields are mandatory.</small>
          </div>
          <button type="submit" className="btn btn-default">
            Send Message
          </button>
          <div className="col-sm-12 ">
            <span className="output_message"></span>
          </div>
        </form>
      </div>
    </div>
  );
}



export default ContactUs