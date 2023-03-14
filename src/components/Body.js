
import React, { Component } from 'react'
import Head from './head.js'
import Main from './main.js'
import Footer from './footer.js'
export default class Body extends Component {
  render() {
    return (
      <div className="outer-container">
        <div className='inner-container'>
        <Head/>
        <Main/>
        <Footer/>

        </div>
      </div>
    )
  }
}
