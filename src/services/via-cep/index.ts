import { IViaCepResponse } from './types';

class ViaCepClass {
  async getAddress(cep: string | number) {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const address: IViaCepResponse = await response.json();
    return address;
  }
}

export default new ViaCepClass();
