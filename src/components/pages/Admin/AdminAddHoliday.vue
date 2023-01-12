<script setup>
import { reactive } from 'vue';
import { getDatabase, push, ref } from "firebase/database";
import { getAuth } from "firebase/auth";
import { useRouter } from "vue-router"
const auth = getAuth();
const router = useRouter()
const db = getDatabase();
const data = reactive({
  user: '',
  title: '',
  start: '',
})
data.user = auth.currentUser;

const sendMessage = () => {
  console.log('a');
  if (data.title === "" || data.start === "") return;
  push(ref(db, "events"), {title: data.title, start: data.start, display: 'background', color:"#ccc"}); // 追加
  data.title = "";
  data.start = "";
  router.push('/admin/top');
}
</script>

<template>
<div class="row">
  <h1 class="text-center text-primary">新規イベント追加</h1>
</div>
<div class="row offset-sm-3 col-sm-6">
  <div class="form-group">
    <input type="text" class="form-control" v-model="data.title" id="title" placeholder="タイトル">
  </div>
  <div class="form-group mt-2">
    <input type="date" class="form-control" v-model="data.start" id="content">
  </div>
  <div class="form-group mt-4">
    <button class="form-control btn btn-primary" @click="sendMessage" id="send">追加</button>
  </div>
</div>
</template>

<style scoped>
 
</style>