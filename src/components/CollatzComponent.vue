<template>
  <div>
    <h1>Conjetura Collatz</h1>
    {{ data }}
    <br />
    <br />
    <label>Intrpduzca número</label>
    <input type="number" v-model="numero" />
    <br />
    <br />
    <button @click="mostrarCollatz()">Calcular</button>
    <ul>
      <li v-for="numero in numeros" :key="numero" v-html=" $filters.colorParImpar(numero) ">
        
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CollatzComponent",

  methods: {
    mostrarCollatz() {
      // Reinicia el arreglo de números antes de calcular
      this.numeros = [];
      // Usa un bucle que verifique si el número no es igual a 1
      while (this.numero !== 1) {
        this.numeros.push(this.numero);
        if (this.numero % 2 === 0) {
          this.numero = this.numero / 2; // PAR
        } else {
          this.numero = this.numero * 3 + 1; // IMPAR
        }
      }
      this.numeros.push(this.numero);
    },
  },

  data() {
    return {
      numeros: [],
    };
  },
};
</script>