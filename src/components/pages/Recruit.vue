<script setup>
import { reactive } from "vue";
import { getDatabase, push, ref } from "firebase/database";

const data = reactive({
  input_name: "",
  input_furigana: "",
  input_age: "",
  input_tel: "",
  input_reason: "",
  message: [],
});

const sendMessage = () => {
  console.log("ok");
  const db = getDatabase();
  const dbRef = ref(db, "message");
  push(dbRef, {
    name: data.input_name,
    furigana: data.input_furigana,
    age: data.input_age,
    tel: data.input_tel,
    reason: data.input_reason,
  });
};

const refMessage = ref(getDatabase(), "message");
</script>

<template>
  <header>
    <nav>
      <ul class="nav-list">
        <b>
          <li class="nav-list-item">
            <a href="menu.index.html">Menu</a>
            <p class="nav-list-sub">メニュー</p>
          </li>
          <li class="nav-list-item">
            <a href="index.html">News</a>
            <p class="nav-list-sub">お知らせ</p>
          </li>
          <li class="nav-list-item">
            <a href="index.html">Company</a>
            <p class="nav-list-sub">会社情報</p>
          </li>
        </b>
      </ul>
      <h1 class="heading">
        <a href="index.html"> Patisserie </a>
        <p class="sub-heading">パティシエール</p>
      </h1>
      <ul class="nav-list">
        <b>
          <li class="nav-list-item">
            <a href="index.html">Blog</a>
            <p class="nav-list-sub">ブログ</p>
          </li>
          <li class="nav-list-item">
            <a href="index.html">Access</a>
            <p class="nav-list-sub">アクセス</p>
          </li>
          <li class="nav-list-item">
            <a href="/recruit">Recruit</a>
            <p class="nav-list-sub">求人情報</p>
          </li>
        </b>
      </ul>
    </nav>
  </header>
  <main>
    <section id="recruit-page">
      <div class="recruit-area">
        <div class="recruit-box">
          <div class="recruit-title">
            <h2 class="recruit-heading">Recruit</h2>
            <span class="recruit-sub-heading">求人情報</span>
          </div>
        </div>
      </div>
    </section>
    <div class="entry-form">
      <div class="mb-xxl-3"></div>
      <div id="form" class="row bg-light pt-xxl-1 pb-xxl-3">
        <h2 class="entry-hedding text-dark">エントリーフォーム</h2>
        <form>
          <div class="row mb-3">
            <label for="inputName3" class="col-form-label text-dark"
              >お名前</label
            >
            <div class="col-sm-10">
              <input
                type="name"
                v-model="data.input_name"
                id="inputName3"
                style="color: black"
              />
            </div>
          </div>
          <div class="row mb-3">
            <label for="inputFurigana3" class="col-form-label text-dark"
              >ふりがな</label
            >
            <div class="col-sm-10">
              <input
                type="furigana"
                v-model="data.input_furigana"
                id="inputFurigana3"
                style="color: black"
              />
            </div>
          </div>
          <div class="row mb-3">
            <label for="inputAge3" class="col-form-label text-dark">年齢</label>
            <div class="col-sm-10 text-black">
              <input
                type="age"
                v-model="data.input_age"
                id="inputAge3"
                style="color: black"
              />歳
            </div>
          </div>
          <div class="row mb-3">
            <label for="inputTel3" class="col-form-label text-dark"
              >電話番号</label
            >
            <div class="col-sm-10">
              <input
                type="tel"
                v-model="data.input_tel"
                id="inputTel3"
                style="color: black"
              />
            </div>
          </div>
          <fieldset class="mb-3">
            <div class="row">
              <legend class="col-form-label pt-0 text-dark">性別</legend>
              <div class="col-sm-10">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios1"
                    value="option1"
                    checked
                  />
                  <label class="form-check-label text-dark" for="gridRadios1">
                    男性
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios2"
                    value="option2"
                  />
                  <label class="form-check-label text-dark" for="gridRadios2">
                    女性
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
          <div class="row mb-3">
            <label for="inputReason3" class="col-sm-2 col-form-label text-dark"
              >志望理由(※400文字まで)</label
            >
          </div>
          <div class="col-sm-10">
            <input
              type="reason"
              v-model="data.input_reason"
              id="inputReason3"
              style="width: 480px; height: 193px; color: black"
            />
          </div>
          <div class="row">
            <div class="col-sm-2"></div>
            <div class="col-sm-10">
              <button
                type="submit"
                @click="sendMessage"
                class="btn btn-primary text-dark"
              >
                送信
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </main>
  <footer>
    <p class="footer-text">copyright Patisserie</p>
  </footer>
</template>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: whitesmoke;
}

a {
  text-decoration: none;
}

header {
  width: 100%;
  height: 120px;
  padding: 15px 0;
  margin: 0 auto;
  text-align: center;
  background-color: rgb(43, 43, 43);
}

header .heading {
  font-size: 50px;
  margin: 0 auto;
}

header .heading a {
  color: #fff;
  letter-spacing: 0.15em;
}

.sub-heading {
  font-size: 20px;
  text-align: center;
}

nav {
  display: flex;
  font-family: "Times New Roman", Times, serif;
}

.nav-list {
  text-align: center;
  padding: 10px 0;
  margin: 0 auto;
}

.nav-list-item {
  list-style: none;
  display: inline-block;
  margin: 10px;
  letter-spacing: 0.2em;
  font-size: 30px;
}

.nav-list-sub {
  font-size: 12px;
  text-align: center;
}

main {
  width: 100%;
  height: 3300px;
  background-image: url(../../assets/images/background.jpg);
  background-size: contain;
  margin: 0 auto;
}

footer {
  width: 100%;
  height: 120px;
  text-align: center;
  background-color: rgb(43, 43, 43);
}

.footer-text {
  padding-top: 50px;
}
</style>
