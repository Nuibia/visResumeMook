import html2canvas from 'html2canvas';
import JsPdf from 'jspdf';
const A4Width = 592.28;
const A4Height = 841.89;

/**
 * @description 导出PDF文件，暂时支持单页
 * @param {string} resumeName 导出文件名
 */
export function toPrintPdf(resumeName?: string) {
  const name = resumeName || '未命名文件';
  // 👇 记住每个模版都需要在根容器组件添加 id
  const dom: HTMLElement | any = document.querySelector('#visPdf');
  if (dom) {
    html2canvas(dom, {
      allowTaint: true,
    }).then(canvas => {
      const contentWidth = canvas.width;
      const contentHeight = canvas.height;
      // 一页pdf显示html页面生成的canvas高度，等比缩放
      const pageHeight = (contentWidth / A4Width) * A4Height;
      let leftHeight = contentHeight;
      // 页面偏移
      let position = 0;
      const imgWidth = A4Width;
      const imgHeight = (A4Width / contentWidth) * contentHeight;
      const pageData = canvas.toDataURL('image/jpeg', 1.0);
      // 这里的第一个参数表示方向，这里一定要选择 portrait
      // 具体可看文档 https://artskydj.github.io/jsPDF/docs/jsPDF.html
      const PDF = new JsPdf('portrait', 'pt', 'a4');
      if (leftHeight < pageHeight) {
        PDF.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
      } else {
        while (leftHeight > 0) {
          PDF.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight);
          leftHeight -= pageHeight;
          position -= A4Height;
          if (leftHeight > 0) {
            PDF.addPage();
          }
        }
      }
      PDF.save(name + '.pdf');
    });
  }
}
