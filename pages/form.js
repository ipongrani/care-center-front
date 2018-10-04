import React from 'react'
import Layout from '../components/layouts/Layout_Basic.js'
import fetch from 'isomorphic-unfetch'



export default class Form extends React.Component {

  state = {
    show: '',
  }




  render() {

    let { show } = this.state;

    return (
      <Layout>
         <h1>Login Form</h1>

      </Layout>
    )

  }

}
