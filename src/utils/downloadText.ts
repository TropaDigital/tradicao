import { jsPDF } from 'jspdf';

export async function downloadText(text: string | undefined) {
  const doc = new jsPDF();
  doc.setFontSize(16);

  if (text) {
    doc.text(text, 10, 10);
    doc.save('a4.pdf');
  }
}
