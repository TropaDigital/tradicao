import axios, { AxiosResponse } from 'axios';
import API from '../api';

class CurriculumClass {
  async postCurriculum(curriculum: any) {
    try {
      const response: AxiosResponse<any> = await axios.post(
        `https://bucket.backendtropa.com.br/upload`,
        curriculum,
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

  async deleteCurriculum(curriculoId: string) {
    try {
      const response: AxiosResponse<any> = await API.delete(
        `delete-TrabalheConosco/${curriculoId}`
      );
      return response;
    } catch (err) {
      console.error(err);
    }
  }
}
export default new CurriculumClass();
