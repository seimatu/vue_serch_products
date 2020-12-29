<template>
  <div>
    <h1>hello! electron</h1>
    <v-container>
      <v-row align="center" align-content="center">
        <v-col cols="8">
          <p class="text-md-left">
            ネットコンビニ RPA0 RPA1 RPA2 キャンセル検知、注文新規登録、更新
          </p>
        </v-col>
        <v-col>
          <v-btn class="ma-2" outlined color="indigo" @click="start">
            処理開始
          </v-btn>
        </v-col>
      </v-row>
      <v-divider></v-divider>
    </v-container>
  </div>
</template>

<script>
const { ipcRenderer } = require("electron");
export default {
  name: "Serch",
  props: {
    msg: {
      type: String,
      default: ""
    }
  },

  methods: {
    async start() {
      await ipcRenderer.invoke("start1", " ");
    }
  }
};
</script>
