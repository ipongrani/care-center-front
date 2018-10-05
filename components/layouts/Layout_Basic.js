import Header from '../Header'
import Head from '../Head'
import Navigation from '../Navigation'
import Styled from 'styled-components'



let MainCont = Styled.div`

//Inner-Block
    .Inner-Block {
      padding: 65px 10px 5px 10px;
      min-height: 100vh;
    }
//------


//Inner-Block
    .Child-Cont {
      padding: 25px 10px 30px 10px;
      min-height: 600px;
      box-shadow: 0 0 1.5px 1px rgb(70, 53, 86);
    }
//------

`;


const Layout = (props) => (

          <MainCont>

              <Head />
              <Navigation />
              <div className="Inner-Block">
                <div className="Child-Cont">
                  {props.children}
                </div>
              </div>

          </MainCont>

)

export default Layout
