
import React, { Component, useState } from "react";
import { Document } from 'react-pdf';
import MyDocument from "./pdf.js"
import myCV from './myCV.pdf'
import ReactDom from 'react-dom';
import {PDFViewer} from '@react-pdf/renderer'
import ReactPDF from '@react-pdf/renderer';
import MyApp from './pdf.js'
class Resume extends Component {
  render() {
    
    return (
      <div>
        <MyApp/>
      </div>
    );
  }
}
 
export default Resume;