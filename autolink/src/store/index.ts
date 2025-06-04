import { defineStore } from 'pinia';

export const useStore = defineStore('vehicles', {
  state: () => ({
    vehicles: [] as any[],
  }),
  actions: {
    addVehicle(vehicle: any) {
      this.vehicles.push(vehicle);
    },
  },
});

