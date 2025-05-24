<template>
      <div class="container-fluid p-5 ">
        <h3 class="
                  bg-primary
                  text-secondary
                  text-center
                  p-2 m-0 fs-6
                  custom-title"
              >Consulta de preço
          </h3>
          <div class="radious overflow-hidden justify-content-center bg-secondary p-4">
            <h6 class="text-primary text-center p-4">Consulte o valor da tabela  FIPE do novo veículo para definir um valor para venda</h6>
            <label for="form-select" class="text-primary">Categoria</label>
            <select class="form-select bg-secondary" aria-label="Default select example" v-model="selectedCategory">
              <option selected>Selecione a categoria</option>
              <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
            </select>
  
            <label for="form-select" class="text-primary">Marca</label>
            <select class="form-select bg-secondary" v-model="selectedBrand">
              <option disabled selected value="">Selecione uma marca</option>
              <option v-for="b in brand" :key="b.code" :value="b.code">{{ b.name }}</option>
            </select>
            
            <label for="form-select" class="text-primary">Modelo</label>
            <select class="form-select bg-secondary" v-model="selectedModel">
              <option disabled selected value="">Selecione um modelo</option>
              <option v-for="m in model" :key="m.code" :value="m.code">{{ m.name }}</option>
            </select>

            <label for="form-select" class="text-primary">Ano</label>
            <select class="form-select bg-secondary" v-model="selectedYear">
              <option disabled selected value="">Selecione o ano</option>
              <option v-for="y in year" :key="y.code" :value="y.code">{{ y.name }}</option>
            </select>
  
            <span class="text-primary d-grid col-3 mx-auto p-4 fw-bold">R$ {{ value }}</span>
  
          <div class="d-grid gap-2 col-3 mx-auto">
            <button class="btn btn-primary" type="button">Continuar</button>
          </div>
        </div>
      </div>
  </template>
  
  <script lang="ts">
import { ref, watch, onMounted } from 'vue';
import fipeService from '@/services/api';

export default {
  name: "FipeAPIForms",
  setup() {
    const categories = ref(['Carros', 'Motos', 'Caminhões']);
    const selectedCategory = ref('Carros');

    const brand = ref<any[]>([]);
    const model = ref<any[]>([]);
    const year = ref<any[]>([]);
    const value = ref<string>('');

    const selectedBrand = ref('');
    const selectedModel = ref('');
    const selectedYear = ref('');

    const vehicleTypeMap: Record<string, string> = {
      Carros: 'cars',
      Motos: 'motorcycles',
      Caminhões: 'trucks',
    };

    const getVehicleType = () => vehicleTypeMap[selectedCategory.value];

    const loadBrands = async () => {
      try {
        const vehicleType = getVehicleType();
        brand.value = await fipeService.getBrands(vehicleType);
        console.log('Marcas carregadas:', brand.value);
        model.value = [];
        year.value = [];
        value.value = '';
        selectedBrand.value = '';
        selectedModel.value = '';
        selectedYear.value = '';
      } catch (error) {
        console.error('Erro ao carregar marcas:', error);
      }
    };

    watch(selectedCategory, async () => {
      await loadBrands();
    });

    watch(selectedBrand, async (newBrand) => {
  if (!newBrand) return;
  console.log('Marca selecionada:', newBrand);
  try {
    const vehicleType = getVehicleType();
    const data = await fipeService.getModels(vehicleType, newBrand);
    
    console.log('Resposta da API para modelos:', data); // Mostra o objeto completo retornado
    model.value = data.models || []; // Corrigido: acessa corretamente a propriedade 'models'
    
    console.log('Modelos retornados:', model.value); // Verifica se agora há dados no array
    
    year.value = [];
    value.value = '';
    selectedModel.value = '';
    selectedYear.value = '';
  } catch (error) {
    console.error('Erro ao carregar modelos:', error);
  }
});


    watch(selectedModel, async (newModel) => {
      if (!selectedBrand.value || !newModel) return;
      console.log('Modelo selecionado:', newModel);
      try {
        const vehicleType = getVehicleType();
        year.value = await fipeService.getYears(vehicleType, selectedBrand.value, newModel);
        console.log('Anos retornados:', year.value);
        value.value = '';
        selectedYear.value = '';
      } catch (error) {
        console.error('Erro ao carregar anos:', error);
      }
    });

    watch(selectedYear, async (newYear) => {
      if (!selectedBrand.value || !selectedModel.value || !newYear) return;
      console.log('Ano selecionado:', newYear);
      try {
        const vehicleType = getVehicleType();
        const data = await fipeService.getValue(vehicleType, selectedBrand.value, selectedModel.value, newYear);
        console.log('Valor retornado:', data);
        value.value = data.price || data.Valor || '';
      } catch (error) {
        console.error('Erro ao carregar valor:', error);
      }
    });

    onMounted(async () => {
      await loadBrands();
    });

    return {
      categories,
      selectedCategory,
      brand,
      model,
      year,
      value,
      selectedBrand,
      selectedModel,
      selectedYear,
      loadBrands,
    };
  }
};  </script>
    
<style scoped>
  .radious {
    border-radius: 0 0 10px 10px;
  }
  .custom-title {
    border-radius: 10px 10px 0 0;
  }
</style>