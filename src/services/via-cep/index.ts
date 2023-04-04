class ViaCepClass {
  async getAddress(cep: string | number) {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const address = await response.json();
    console.log(address);
    return address;
  }
}

export default new ViaCepClass();
