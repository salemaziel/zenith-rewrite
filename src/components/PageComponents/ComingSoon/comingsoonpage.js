import React, { Component } from 'react';
import comingsoonStyles from "./comingsoon.module.css"

import { LogoWshadowDark } from '../../../images/index'


class ComingSoonPage extends Component {
  constructor() {
    super()
  }

  render() {
    return (
 <div /*id="wrapper"*/ className={comingsoonStyles.wrapper}>
  <div /*id="main"*/ className={comingsoonStyles.main}>
    <div /*className="inner"*/ className={comingsoonStyles.inner}>
      <header /*id="header"*/ className={comingsoonStyles.header}>
        <img src={LogoWshadowDark} width="75%" style={{margin: 'auto'}} />
        <h1 /*id="text01"*/ className={comingsoonStyles.text01}>Coming Soon</h1>
       {/* <p /*id="text04"* / className={comingsoonStyles.text04}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tristique, magna ut tincidunt lacinia, ante erat hendrerit est, id varius tortor ipsum.</p>*/}
        <div id="timer01" className="timer">
          <ul />
        </div>
      </header>
      {/*<section /*id="home-section"* / className={comingsoonStyles.homeSection}>
        <form id="form01" method="post">
          <div className={comingsoonStyles.inner}>
            <div /*className="field"* / className={comingsoonStyles.field}>
              <input type="email" name="email" id="form01-email" placeholder="Email" maxLength={128} required />
            </div>
            <div /*className="field"* / className={comingsoonStyles.field}>
              <input type="text" name="domain" id="form01-domain" placeholder="Domain" maxLength={128} />
            </div>
            <div /*className="actions"* / className={comingsoonStyles.actions}>
              <button type="submit">Notify Me</button>
            </div>
          </div>
          <input type="hidden" name="id" defaultValue="form01" />
        </form>
      </section>
      <section id="done-section">
        <hr id="divider01" />
        <h2 id="text03">Thank You</h2>
        <p id="text02">Sed ipsum dolor erat hendrerit magna varius tortor ipsum.</p>
    </section>*/}
    </div>
  </div>
</div>

      
    );
  }
}

export default ComingSoonPage;
