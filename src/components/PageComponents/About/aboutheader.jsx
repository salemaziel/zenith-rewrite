import React from 'react';
import BrownConcreteRoof from '../../../images/index'


class AboutHeader extends React.Component {
  render() {
    return (
      <section
        className="inner-page-banner servicesBanner"
        data-bg-image={BrownConcreteRoof}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumbs-area">
                <h1>About Us</h1>
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>About</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutHeader