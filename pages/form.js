import React from 'react'
import Layout from '../components/layouts/Layout_Basic.js'
import Styled from 'styled-components'
import fetch from 'isomorphic-unfetch'
import classnames from 'classnames';
import { Button, Form, FormGroup, Label, Input, FormText, Card, CardBody,
         TabContent, TabPane, Nav, NavItem, NavLink, CardTitle, CardText, Row, Col } from 'reactstrap'


let Container = Styled.div`

  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  .CardCont {
    height: 100%;
    width: 600px;
  }

  .CardMain {
    height: auto;
    width: 600px;
  }
`;



export default class FormPage extends React.Component {


/////////////////////////////////////////////// Statics ////////////////////////////////////////////////////////




state = {
  name: '',
  address: '',
  email: '',
  password: '',
  activeTab: '1'
}


// Form Fileds
  Customer = [{ name: "Name",
                type: "text",
                id: "fName",
                placeholder: "Name"},
              { name: "Address",
                type: "text",
                id: "fAddress",
                placeholder: "Address"},
              { name: "Email",
                type: "email",
                id: "fEmail",
                placeholder: "Email"},
              { name: "Password",
                type: "password",
                id: "fPassword",
                placeholder: "Password"},
              ]

  Client = [{ name: "Facility_Name",
                type: "text",
                id: "fName",
                placeholder: "Facility Name"},
              { name: "Facility_Address",
                type: "text",
                id: "fAddress",
                placeholder: "Facility Address"},
              { name: "Email",
                type: "email",
                id: "fEmail",
                placeholder: "Email"},
              { name: "Password",
                type: "password",
                id: "fPassword",
                placeholder: "Password"},
              ]
//------End




/////////////////////////////////////////////// METHODS ///////////////////////////////////////////////////////




//FormGroup
  F = (data) => data.map((d) =>
                    <FormGroup>
                      <Label for={d['name']}>{d['name'].replace(/_/g,' ')}</Label>
                      <Input type={d['type']} name={d['name']} id={d['id']} placeholder={d['placeholder']} />
                    </FormGroup>
                  );
//------End


//Toggle
  toggle = (tab) => {
   if (this.state.activeTab !== tab) {
     this.setState({
       activeTab: tab
     });
   }
 }
//------End



//////////////////////////////////////////////// RENDER ///////////////////////////////////////////////////////

  render() {

    const { Customer, Client } = this;

    console.log(Customer)

    return (
      <Layout>
        <Container>
            <h1>Welcome To Blue Care Services</h1>

            <Card className="CardMain">
              <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '1' })}
                  onClick={() => { this.toggle('1'); }}
                >
                  Member

                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '2' })}
                  onClick={() => { this.toggle('2'); }}
                >
                  Facility

                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">

                <Card className="CardCont">
                  <CardBody>
                    <Form>
                     { F(Customer) }
                    </Form>
                  </CardBody>
                </Card>

              </TabPane>
              <TabPane tabId="2">

                <Card className="CardCont">
                  <CardBody>
                    <Form>
                     { F(Client) }
                    </Form>
                  </CardBody>
                </Card>

              </TabPane>
            </TabContent>
          </Card>
        </Container>
      </Layout>
    )

  }

}
