<template>
  <div>
    <h1>Conjetura Collatz</h1>
    <br />
    <br />
    <label>Introduzca número</label>
    <input type="number" v-model="numero" /> <br />
    <br />
    <button @click="mostrarCollatz()">Calcular</button>
    <ul>
      <li
        v-for="numero in numeros"
        :key="numero"
        v-html="$filters.colorParImpar(numero)"
      ></li>
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

<!--
Forma profesor:
<template>
  <div>
    <h1 style="color: blue">Collatz Component</h1>
    <label>Introduzca número</label>
    <input type="number" v-model="numero" />
    <button @click="generarCollatz()">Generar Collatz</button>
    <div v-if="numerosCollatz.length > 0">
      <ul>
        <li
          v-for="num in numerosCollatz"
          :key="num"
          v-html="$filters.evaluarNumero(num)"
        ></li>
      </ul>
    </div>
  </div>
</template> 

<script>
export default {
  name: "CollatzComponent",

  data() {
    return {
      numero: -1,

      numerosCollatz: [],
    };
  },
  methods: {
    generarCollatz() {
      let aux = [];

      aux.push(this.numero);

      while (this.numero != 1) {
        if (this.numero % 2 == 0) {
          this.numero = this.numero / 2;
        } else {
          this.numero = this.numero * 3 + 1;
        }
        aux.push(this.numero);
      }
      this.numerosCollatz = aux;
    },
  },
};
</script>
-->