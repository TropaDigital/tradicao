import API from '@/services/api';

export async function downloadSpreadSheet(endpoint: string, fileName: string) {
  try {
    API.get(`${endpoint}`, {
      responseType: 'blob'
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${fileName}.xlsx`);
      document.body.appendChild(link);
      link.click();
      URL.revokeObjectURL(url);
    });
  } catch (err) {
    console.log(err);
  }
}
