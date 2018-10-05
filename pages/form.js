import React from 'react'
import Layout from '../components/layouts/Layout_Basic.js'
import Styled from 'styled-components'
import fetch from 'isomorphic-unfetch'
import axios from 'axios'
import classnames from 'classnames';
import { Button, Form, FormGroup, Label, Input, FormText, Card, CardBody,
         TabContent, TabPane, Nav, NavItem, NavLink, CardTitle, CardText, Row, Col } from 'reactstrap'





let Container = Styled.div`

  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  h1 {
    margin: 5px 0 25px 0;
  }

  .CardCont {
    height: 100%;
    width: 600px;
  }

  .CardMain {
    height: auto;
    width: 600px;
  }

  .topOp {
    &:hover{
      cursor: pointer;
    }
  }

  .btnSub {

    margin: 45px 0 15px 0;

    &:hover{
      cursor: pointer;
      background-color: rgb(70, 110, 175);
      color: white;
    }
  }
`;



export default class FormPage extends React.Component {


/////////////////////////////////////////////// Statics ////////////////////////////////////////////////////////


state = {
  Name: '',
  Address: '',
  Email: '',
  Password: '',
  Facility_Name: '',
  Facility_Address: '',
  Account_Emai: '',
  Account_Password: '',
  activeTab: '1'
}


// Form Fileds
  Customer = [
              { name: "Name",
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
              { name: "something",
                type: "textarea",
                id: "fSomething",
                placeholder: "something"},
              { name: "Submit",
                type: "submit",
                id: "fSubmit"},
              ]

  Client = [
              { name: "Facility_Name",
                type: "text",
                id: "fFName",
                placeholder: "Facility Name"},
              { name: "Facility_Address",
                type: "text",
                id: "fFAddress",
                placeholder: "Facility Address"},
              { name: "Account_Email",
                type: "email",
                id: "fFEmail",
                placeholder: "Email"},
              { name: "Account_Password",
                type: "password",
                id: "fFPassword",
                placeholder: "Password"},
              ]
//------End




/////////////////////////////////////////////// METHODS ///////////////////////////////////////////////////////



//FormGroup
  F = (data) => data.map((d,i) =>
                    <FormGroup key={i} >
                      {
                        d['type'] === "submit" ?
                        <Input key={i} type={d['type']} className="btnSub" onSubmit={this.HandleSubmit} name={d['name']} id={d['id']} value={this.state[d['name']]} />
                        :
                        <div>
                         <Label for={d['name']}>{d['name'].replace(/_/g,' ')}</Label>
                         <Input key={i} type={d['type']} onChange={this.HandleChange} name={d['name']} id={d['id']} placeholder={d['placeholder']} value={this.state[d['name']]} />
                        </div>
                      }
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
//------

//change
  HandleChange = (e) => {
    e.preventDefault();
    console.log(e.target['name']);
    this.setState({[e.target['name']]: e.target['value']});
  }
//-----

//Submit
  HandleSubmit = (e) => {
    e.preventDefault();

    console.log(e.target);
    let d = new FormData(e.target);
    console.log(d);
    console.log("name: ", d.get("Name"));
    for (let i of d.entries()){
      console.log(i)
    }
/*
    axios({
       method: 'post',
       url: `http://care-center-bck-layer1.herokuapp.com/care-center/Registration?action=nM`,
       data: {
         name: req.body.name,
         address: req.body.address,
         email: req.body.email,
         password: req.body.password
       }
  }).then((r) => res.send(r.data))
  .catch((err) => res.send(err.response.data))
*/
  }
//------End



//////////////////////////////////////////////// RENDER ///////////////////////////////////////////////////////

  render() {

    const { Customer, Client, F } = this;

    return (
      <Layout>
        <Container>
            <h1>Welcome To Blue Care Services</h1>

            <Card className="CardMain">
              <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '1', topOp: true})}
                  onClick={() => { this.toggle('1'); }}>

                  Member

                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '2', topOp: true})}
                  onClick={() => { this.toggle('2'); }}>

                  Facility

                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">

                <Card className="CardCont">
                  <CardBody>
                    <Form onSubmit={this.HandleSubmit}>
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
