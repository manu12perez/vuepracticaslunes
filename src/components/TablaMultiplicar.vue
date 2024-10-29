<template>
  <div>
    <h1>Tablas de Multiplicar</h1>
    <br />
    <br />
    <label>Introduzca número</label>
    <input type="number" v-model="numero" />
    <br />
    <br />
    <hr />

    <h1>Tabla con Boton y Método</h1>
    <button @click="mostrarTabla()">Calcular</button>
    <table border="1">
      <thead>
        <tr>
          <th>OPERACION</th>
          <th>RESULTADO</th>
        </tr>
      </thead>
      <tbody v-html="html"></tbody>
    </table>
    <hr />

    <h1>Tabla con Directivas</h1>
    <table border="1">
      <thead>
        <tr>
          <th>OPERACION</th>
          <th>RESULTADO</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in 10" :key="i">
          <td>{{ numero + " x " + i }}</td>
          <td>{{ numero * i }}</td>
        </tr>
      </tbody>
    </table>
    <hr />

    <h1>Tabla con Filters</h1>
    <table border="1">
      <thead>
        <tr>
          <th>OPERACION</th>
          <th>RESULTADO</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="contador in 10" :key="contador">
          <td>{{ numero + " x " + contador }}</td>
          <td>{{ numero * contador }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TablaMultiplicar",
  data() {
    return {
      numero: 0,
      html: "",
    };
  },
  methods: {
    mostrarTabla() {
      this.html = "";

      for (let i = 0; i <= 10; i++) {
        let operacion = this.numero + " x " + i;
        let resultado = this.numero * i;
        this.html +=
          "<tr><td>" + operacion + "</td><td>" + resultado + "</td></tr>";
      }
    },
  },
};
</script>
