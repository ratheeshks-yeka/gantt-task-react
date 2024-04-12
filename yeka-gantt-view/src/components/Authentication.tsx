import Odoo from 'react-native-odoo';
import React, { useEffect } from "react";



const authenticate= async ()=>{
  const odoo = new Odoo({
    host: "195.35.6.94",
    port: "8080",
    database: "dev",
    username: "admin",
    password: "admin@123"
  });

  odoo.connect(function (err: any, res: any) {
    console.error(err, res);
    if (err) {
      console.error(err);
    } else {
      console.log('Authenticated With Odoo server.');
    }
  });
}