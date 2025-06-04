<template>
  <div class="container-fluid p-5">
		<div class="mx-auto col-md-6">
			<h3 class="bg-primary text-secondary text-center p-2 m-0 fs-6 custom-title">
				Cadastro do veículo
			</h3>

			<div class="radious overflow-hidden justify-content-center bg-secondary p-4">
				<h6 class="text-primary text-center p-4">
					Revise os dados para cadastrar o veículo
				</h6>

				<label class="text-primary">Categoria</label>
				<input class="form-control bg-secondary mb-3" v-model="category" disabled />

				<label class="text-primary">Marca</label>
				<input class="form-control bg-secondary mb-3" v-model="brand" />

				<label class="text-primary">Modelo</label>
				<input class="form-control bg-secondary mb-3" v-model="model" />

				<label class="text-primary">Ano</label>
				<input class="form-control bg-secondary mb-3" v-model="year" />

				<label class="text-primary">Preço</label>
				<input class="form-control bg-secondary mb-3" v-model="price" />

				<label class="text-primary">Descrição</label>
				<textarea class="form-control bg-secondary mb-3" v-model="description" />

				<label class="text-primary mt-3">Foto do veículo</label>
				<input
					type="file"
					class="form-control bg-secondary text-light"
					accept="image/*"
					@change="handleImageUpload"
				/>

				<div v-if="imagePreview" class="mt-3 text-center">
					<p class="text-primary">Pré-visualização:</p>
					<img :src="imagePreview" alt="Pré-visualização" class="img-fluid rounded" style="max-height: 200px;" />
				</div>


				<div class="d-grid gap-2 col-3 mx-auto mt-3">
					<button class="btn bg-primary text-light" type="button" @click="submitVehicle">
						Cadastrar
					</button>
				</div>
			</div>
		</div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from '../../store';

export default {
  name: 'VehicleRegistrationForm',
  setup() {
    const route = useRoute();
	const router = useRouter();
	const vehicleStore = useStore();

    const category = ref('');
    const brand = ref('');
    const model = ref('');
    const year = ref('');
    const price = ref('');
    const description = ref('');
    const imageFile = ref<File | null>(null);
    const imagePreview = ref<string | null>(null);

    onMounted(() => {
      category.value = route.query.category as string || '';
      brand.value = route.query.brand as string || '';
      model.value = route.query.model as string || '';
      year.value = route.query.year as string || '';
      price.value = route.query.price as string || '';
    });

		const handleImageUpload = (event: Event) => {
			const target = event.target as HTMLInputElement;
			const file = target.files?.[0];

			if (file) {
        imageFile.value = file;

        imagePreview.value = URL.createObjectURL(file);
			}
		};

    const submitVehicle = () => {
      const newVehicle = {
		category: category.value,
		brand: brand.value,
		model: model.value,
		year: year.value,
		price: price.value,
		description: description.value,
		image: imagePreview.value,
	  }

	  vehicleStore.addVehicle(newVehicle);
	  router.push('/');
    }

    return {
			category,
      brand,
      model,
      year,
      price,
	    description,
      submitVehicle,
      handleImageUpload,
      imagePreview,
      imageFile,
    };
  }
};
</script>

<style scoped>
.radious {
  border-radius: 0 0 10px 10px;
}
.custom-title {
  border-radius: 10px 10px 0 0;
}
</style>
