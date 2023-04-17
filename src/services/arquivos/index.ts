import cookieClass from '@/utils/cookieClass';
import axios, { AxiosResponse } from 'axios';
import API from '../api';

class FileClass {
  private AUTH_BUCKET_CODE =
    'eyJhbGciOiJIUzI1NiJ9.Z3VpbGhlcm1lQHRyb3BhLmRpZ2l0YWx8fDIwMjMtMDMtMDFUMTU6Mjg6MTEuNDExWg.tcU6FFTeKR3re2Do-oIIAncgMJm4B1j5T6muHrs5-30';
  private BUCKET_DESTINATION = 'tradicao';
  private AUTH_TOKEN = cookieClass.getCookie('AuthorizedAdminConsorcio');

  async postFile(file: FormData) {
    try {
      const response: AxiosResponse<any> = await axios.post(
        `https://bucket.backendtropa.com.br/upload`,
        file,
        {
          headers: {
            Authorization: this.AUTH_BUCKET_CODE,
            Destination: this.BUCKET_DESTINATION
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
        `${endpoint}/${fileId}`,
        {
          headers: {
            Authorization: `Bearer ${this.AUTH_TOKEN}`
          }
        }
      );
      return response;
    } catch (err) {
      console.error(err);
    }
  }
}
export default new FileClass();
