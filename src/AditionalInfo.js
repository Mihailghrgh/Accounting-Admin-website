export default function AditionalInfo() {
  // Function to handle link click
  const handleLinkClick = (event, linkName) => {
    event.preventDefault();
    alert(`You clicked on ${linkName}`);
  };

  return (
    <section className="additional-section">
      <div className="container">
        <div className="section-left">
          <h2>Our Services</h2>
          <p>
            We offer a variety of services to meet your needs. Here are some of
            the highlights:
          </p>
        </div>
        <div className="section-right">
          {/* <ul>
            <li>
              <a href="#" onClick={(e) => handleLinkClick(e, "Service 1")}>
                Service 1
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => handleLinkClick(e, "Service 2")}>
                Service 2
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => handleLinkClick(e, "Service 3")}>
                Service 3
              </a>
            </li>
          </ul> */}
        </div>
      </div>
    </section>
  );
}
