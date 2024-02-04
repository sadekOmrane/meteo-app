import axios from 'axios'

export class AddressService {

  BASE_URL = 'https://api-adresse.data.gouv.fr/search/'


  async getAddress(searchKey) {
    const response = await axios.get(this.BASE_URL, {
      params: {
        q: searchKey || 'paris',
      },
    });
    return response?.data?.features;
  }
}
