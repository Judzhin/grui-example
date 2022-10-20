import React, { useEffect } from "react";
import "./App.css";
import { Column, SenchaGrid } from "@sencha/sencha-grid";
import "@sencha/sencha-grid/dist/themes/material.css";
import CSS from "csstype";
import Button from "@mui/material/Button";

interface IEmployment {
  title: string;
  key_skill: string;
}

interface ICoordinates {
  lat: number;
  lng: number;
}

interface IAddress {
  city: string;
  street_name: string;
  street_address: string;
  zip_code: string;
  state: string;
  country: string;
  coordinates: ICoordinates;
}

interface ICreditCard {
  cc_number: string;
}

interface ISubscription {
  plan: string;
  status: string;
  payment_method: string;
  term: string;
}

interface IPeople {
  id: number;
  uid: string;
  password: string;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  avatar: string;
  gender: string;
  phone_number: string;
  social_insurance_number: string;
  date_of_birth: string;
  employment: IEmployment;
  address: IAddress;
  credit_card: ICreditCard;
  subscription: ISubscription;
}

const data: IPeople[] = require("./peoples.json");

var toolBarStyle: CSS.Properties = {
  marginBottom: "20px",
};

function App() {
  return (
    <div style={{margin:'20px'}}>
      <div style={toolBarStyle}>
        <Button variant="contained" color="primary">
          Add item
        </Button>
      </div>
      <SenchaGrid data={data} style={{ height: "400px" }}>
        <Column field="id" text="ID" />
        <Column field="first_name" text="First name" />
        <Column field="last_name" text="Last name" />
        <Column field="username" text="Username" />
        <Column field="email" text="Email" />
        <Column field="avatar" text="Avatar" />
        <Column field="gender" text="Gender" />
        <Column field="phone_number" text="Phone number" />
        <Column
          field="social_insurance_number"
          text="Social insurance number"
        />
        <Column
          field="date_of_birth"
          text="Date of birth"
          align="right"
          flex="1"
        />
      </SenchaGrid>
    </div>
  );
}

export default App;
