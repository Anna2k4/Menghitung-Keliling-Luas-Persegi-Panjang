<script setup>
import { ref, computed } from 'vue';

// Variabel panjang dan lebar
const panjang = ref(5);
const lebar = ref(4);

// Menghitung luas dan keliling persegi
const luas = computed(() => panjang.value * lebar.value);
const keliling = computed(() => 2 * (panjang.value + lebar.value));

// Event Listener: Mengupdate panjang dan lebar dari input
const updateValue = (event, type) => {
  if (type === 'panjang') {
    panjang.value = parseFloat(event.target.value) || 0;
  } else if (type === 'lebar') {
    lebar.value = parseFloat(event.target.value) || 0;
  }
};

// Debugging 
console.log("Panjang:", panjang.value);
console.log("Lebar:", lebar.value);
console.log("Luas persegi:", luas.value);
console.log("Keliling persegi:", keliling.value);
</script>

<template>
  <div class="container">
    <h1>Hitung Luas & Keliling Persegi</h1>

    <div class="input-group">
      <!-- Text Form Binding -->
      <label for="panjang">Panjang:</label>
      <input id="panjang" type="number" :value="panjang" @input="updateValue($event, 'panjang')" />

      <label for="lebar">Lebar:</label>
      <input id="lebar" type="number" :value="lebar" @input="updateValue($event, 'lebar')" />
    </div>

    <!-- Text Interpolation: Menampilkan Keliling Persegi -->
    <p class="result">Keliling Persegi: {{ keliling }}</p>

    <!-- Conditional Rendering: Menampilkan Luas Persegi -->
    <p v-if="panjang > 0 && lebar > 0" class="result">Luas Persegi: {{ luas }}</p>
    <p v-else class="warning">Masukkan panjang dan lebar yang valid.</p>
  </div>
</template>

<style scoped>
.container {
    max-width: 400px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    background: #f9f9f9;
}

h1 {
    color: black;
    font-size: 24px;
    margin-bottom: 20px;
}

.input-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

label {
    font-weight: bold;
}

input {
    width: 100%;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.result {
    font-size: 18px;
    font-weight: bold;
    margin-top: 15px;
}

.warning {
    color: red;
    font-weight: bold;
}
</style>