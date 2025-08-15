// type definitions for Cypress object "cy"
/// <reference types="cypress" />

import {BeldenPOM} from "../../page-objects/BeldensPOM";

describe ('checkbox radio button & dropdown list also new tab', () => {
    const BeldensPOM = new BeldenPOM();  
    it('My first test with other selectors and new tab', () => {   
      BeldensPOM.navigate();
      BeldensPOM.radiobutton();
      BeldensPOM.dropdownoption();
      BeldensPOM.checkbox();
    }); 
  });