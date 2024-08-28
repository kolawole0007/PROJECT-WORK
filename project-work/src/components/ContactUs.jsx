

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
      </div>
      <div className="Contactform">
        <input type="text" name="name" placeholder="Your Name*" className="text"/>
        <input type="email" name="email" placeholder="Email*" className="email"/>
        <input type="tel" name="number" placeholder="Phone Number*" className="tel"/>
        <input type="text" name="city" placeholder="City*" className="city"/>
        <textarea placeholder="Your Message" />
      </div>
    </div>
  );
}

export default ContactUs