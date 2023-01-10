<script setup>
import { signOut, getAuth } from "firebase/auth";
import { useRouter } from "vue-router";

const auth = getAuth();
const router = useRouter();

const logout = () => {
  signOut(auth);
  router.push("/admin/login");
};
</script>

<template>
  <header>
    <nav>
      <div class="d-flex">
        <button class="btn btn-outline-primary" @click="logout">logout</button>
      </div>
    </nav>
  </header>
  <main>
    <ul class="mg">
      <li class="mg-list">
        <a href="news-mg.index.html">お知らせ管理</a>
      </li>
      <li class="mg-list">
        <a href="blog-mg.index.html">ブログ管理</a>
      </li>
      <li class="mg-list">
        <a href="/admin/recruit">求人問い合わせ</a>
      </li>
    </ul>
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

.mg {
  padding-left: 35px;
  padding-top: 15px;
}

.mg-list {
  font-size: 20px;
}
</style>
