import { savePDF } from '@progress/kendo-react-pdf';

class DocService {
  createPdf = (html) => {
    savePDF(html, { 
      paperSize: 'A3',
      fileName: 'form.pdf',
       //margin: { top: '2cm', left: '3cm', right: '0', bottom: '2cm' }//margin top ottom can also be added
    })
  }
}

const Doc = new DocService();
export default Doc;