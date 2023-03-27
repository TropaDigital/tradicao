import axios, { AxiosResponse } from 'axios';
import API from '../api';

class FileClass {
  async postFile(file: any) {
    try {
      const response: AxiosResponse<any> = await axios.post(
        `https://bucket.backendtropa.com.br/upload`,
        file,
        {
          headers: {
            Authorization:
              'eyJhbGciOiJIUzI1NiJ9.Z3VpbGhlcm1lQHRyb3BhLmRpZ2l0YWx8fDIwMjMtMDMtMDFUMTU6Mjg6MTEuNDExWg.tcU6FFTeKR3re2Do-oIIAncgMJm4B1j5T6muHrs5-30',
            Destination: 'tradicao'
          }
        }
      );
      return response;
    } catch (err) {
      console.error(err);
    }
  }

  async deleteFile(endpoint: string, fileId: string | number) {
    try {
      const response: AxiosResponse<any> = await API.delete(
        `${endpoint}/${fileId}`
      );
      return response;
    } catch (err) {
      console.error(err);
    }
  }
}
export default new FileClass();
