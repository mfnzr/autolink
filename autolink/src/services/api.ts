const BASE_URL = 'https://fipe.parallelum.com.br/api/v2';

const fipeService = {
  getReferences: async () => {
    const res = await fetch(`${BASE_URL}/references`);
    return await res.json();
  },

  getBrands: async (vehicleType: string) => {
    const res = await fetch(`${BASE_URL}/${vehicleType}/brands`);
    return await res.json();
  },

  getModels: async (vehicleType: string, brandId: string) => {
    try {
      const res = await fetch(`${BASE_URL}/${vehicleType}/brands/${brandId}/models`);
      if (!res.ok) {
        throw new Error(`Erro na requisição: ${res.status} ${res.statusText}`);
      }
      const data = await res.json();
      console.log('Resposta da API para modelos:', data); // Log para verificar a resposta
      return data.modelos || []; // Retorna data.modelos ou array vazio se undefined
    } catch (error) {
      console.error(`Erro ao buscar modelos para ${vehicleType}/${brandId}:`, error);
      return []; // Retorna array vazio em caso de erro
    }
  },

  getYears: async (vehicleType: string, brandId: string, modelId: string) => {
    const res = await fetch(`${BASE_URL}/${vehicleType}/brands/${brandId}/models/${modelId}/years`);
    return await res.json();
  },

  getValue: async (vehicleType: string, brandId: string, modelId: string, yearId: string) => {
    const res = await fetch(`${BASE_URL}/${vehicleType}/brands/${brandId}/models/${modelId}/years/${yearId}`);
    return await res.json();
  }
};

export default fipeService;
