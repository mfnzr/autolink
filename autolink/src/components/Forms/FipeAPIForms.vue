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
              <option disabled value="">Selecione um modelo</option>
              <option v-for="m in model" :key="m.code" :value="m.code">{{ m.name }}</option>
              <option v-if="model.length === 0" disabled>Nenhum modelo disponível</option>
            </select>

            <label for="form-select" class="text-primary">Ano</label>
            <select class="form-select bg-secondary" v-model="selectedYear">
              <option disabled selected value="">Selecione o ano</option>
              <option v-for="y in year" :key="y.code" :value="y.code">{{ y.name }}</option>
            </select>
  
            <span class="text-primary d-grid col-3 mx-auto p-4 fw-bold"> {{ price }}</span>
  
          <div class="d-grid gap-2 col-3 mx-auto">
            <button class="btn btn-primary" type="button">Continuar</button>
          </div>
        </div>
      </div>
  </template>
  
  <script lang="ts">
import { ref, watch, onMounted } from 'vue';
import fipeService from '../../services/api';

export default {
  name: "FipeAPIForms",
  setup() {
    const categories = ref(['Carros', 'Motos', 'Caminhões']);
    const selectedCategory = ref('Carros');

    const brand = ref<any[]>([]);
    const model = ref<any[]>([]);
    const year = ref<any[]>([]);
    const price = ref<string>('');

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
        const response = await fipeService.getBrands(vehicleType);
        brand.value = response;
        console.log('Marcas carregadas:', brand.value);
      } catch (error) {
        console.error('Erro ao carregar marcas:', error);
      }
    };

    const loadModels = async () => {
      if(!selectedBrand.value) return;
      try {
        const vehicleType = getVehicleType();
        const response = await fipeService.getModels(vehicleType, selectedBrand.value);
        console.log('Resposta bruta da API:', response);
        model.value = response;
        console.log('Modelos carregados:', model.value);
      } catch (error) {
        console.error('Erro ao carregar modelos:', error);
      }
    };

    const loadYears = async () => {
      if(!selectedModel.value) return;
      try {
        const vehicleType = getVehicleType();
        const response = await fipeService.getYears(vehicleType, selectedBrand.value, selectedModel.value);
        console.log('Resposta bruta da API:', response);
        year.value = response;
        console.log('Anos carregados:', year.value);
      } catch (error) {
        console.error('Erro ao carregar anos:', error);
      }
    }

    const loadValue = async () => {
      if(!selectedYear.value) return;
      try {
        const vehicleType = getVehicleType();
        const response = await fipeService.getValue(vehicleType, selectedBrand.value, selectedModel.value, selectedYear.value);
        console.log('Resposta bruta da API:', response);
        price.value = response.price;
        console.log('Valor carregado:', price.value);
      } catch (error) {
        console.error('Erro ao carregar valor:', error);
      }
    }

    watch(selectedBrand, () => {
      selectedModel.value = "";
      loadModels();
    });

    watch(selectedModel, () => {
      selectedYear.value = "";
      loadYears();
    });

    watch(selectedYear, () => {
      loadValue();
    });

    watch(selectedCategory, async () => {
      await loadBrands();
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
      price,
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