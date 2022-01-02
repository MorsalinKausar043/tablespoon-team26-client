import { useEffect, useState } from "react";
import "./App.css";
import Template3 from "./template3/Template3";
import Template2 from "./template2/Template2";
import Template from "./template1/assets/Template";

function App() {
  const [flag, setFlag] = useState(false);
  const [templateNumber, setTemplateNumber] = useState(null);
  let template = null;

  

  //  const hostName = window.location.hostname;

  useEffect(() => {
    // MAKE API CALL
    fetch('https://inventory.initux.cloud/api/token', {
      method: 'POST',
      headers: { 'content-type': 'application/json'},
      body: JSON.stringify({"domain":"localhost"}),
    })
    .then(res => res.json())
    .then(data => {
        localStorage.setItem('starting', JSON.stringify(data))
        // console.log(data);
    })
   
  }, []);


  useEffect(() => {
    // MAKE API CALL
    fetch('https://raw.githubusercontent.com/initux/ecommerceTest/main/EcomConfigApi')
    .then(res => res.json())
    .then(data => {
        // after getting success response update the templateNumber
        // console.log(data.theme)
        setTemplateNumber(data.theme);
        setFlag(true);
    })
  }, []);

  if (flag && templateNumber === 'theme1') {
    // console.log(templateNumber);
    template = <Template/>;
  } else if (flag && templateNumber === 'theme2') {
    template = <Template2 />;
    // console.log("INSIDE 2", template);
  } else if (flag && templateNumber === 'theme3') {
    template = <Template3 />;
  }

  return <>{flag ? <>{template}</> : <p>Loading...............</p>}</>;
}

export default App;
