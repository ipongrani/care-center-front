import Header from '../Header'
import Head from '../Head'
import Navigation from '../Navigation'
import Styled from 'styled-components'



let Container = Styled.div`

  //Inner Block
  .Inner-Block {
    margin: 10px;
    padding: 5px;
    border: 1px solid #DDD;
  }
  //------
`;


const Layout = (props) => (

  <Container>
    <Head />
    <Navigation />
    <div className="Inner-Block">

      {props.children}

    </div>
  </Container>
)

export default Layout
