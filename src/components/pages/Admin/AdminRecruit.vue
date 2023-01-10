<script setup>
import { reactive } from "vue";
import { getDatabase, onValue, ref } from "firebase/database";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "vue-router"

const router = useRouter();
const db = getDatabase();
const auth = getAuth();

const data = reactive({
  messages: [],
});

onValue(ref(db, "message"), (snapshot) => {
  data.messages = [];
  // console.log(snapshot);
  for (const key in snapshot.val()) {
    let message = snapshot.val()[key];
    data.messages.push(message);
  }
});

const logout = () => {
  signOut(auth);
  router.push("/admin/login");
};
</script>

<template>
  <header>
    <h1 class="admin-heading">管理画面</h1>
    <div class="logout">
      <button class="btn btn-outline-primary" @click="logout">logout</button>
    </div>
  </header>
  <main>
    <h2 class="recruit-mg-heading">求人問い合わせ</h2>
    <div class="row">
      <table class="table table-striped table-bordered mt-2">
        <thead>
          <tr>
            <th>名前</th>
            <th>ふりがな</th>
            <th>年齢</th>
            <th>電話番号</th>
            <th>志望理由</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(message, index) in data.messages" :key="index">
            <td>{{ message.name }}</td>
            <td>{{ message.furigana }}</td>
            <td>{{ message.age }}</td>
            <td>{{ message.tel }}</td>
            <td>{{ message.reason }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
  <footer></footer>
</template>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

header {
  width: 100%;
  padding: 15px 0;
  margin: 0 auto;
  background-color: black;
  color: white;
  text-align: center;
}

.logout {
  position: absolute;
  top: 25px;
  right: 22px;
}
</style>
