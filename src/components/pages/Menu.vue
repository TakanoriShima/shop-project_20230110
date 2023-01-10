<script setup></script>

<template>
  <header>
    <nav>
      <ul class="nav-list">
        <b>
          <li class="nav-list-item">
            <a href="/menu">Menu</a>
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
        <a href="/"> Patisserie </a>
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
    <section id="menu-page">
      <div class="menu-area">
        <div class="menu-box2">
          <div class="menu-page-title">
            <h2 class="menu-heading2">Menu</h2>
            <span class="menu-sub-heading">メニュー</span>
          </div>
          <div class="menu-list">
            <p class="menu-list-item">
              <a href="#Decoration_Cake_area">デコレーション<br />ケーキ</a>
            </p>
            <p class="menu-list-item2">
              <a href="#Petit_Gateau_area">プチガトー</a>
            </p>
            <p class="menu-list-item">
              <a href="#Baked_Sweets_and_Gift_area">焼き菓子・<br />ギフト</a>
            </p>
          </div>
          <div id="Decoration_Cake_area">
            <div class="dc-box">
              <div class="dc-head">
                <h3 class="dc-heading">Decoration Cake</h3>
                <span class="dc-sub">デコレーションケーキ</span>
              </div>
              <div class="dc-cake-box">
                <div class="dc-cake">
                  <img
                    class="dc-cake-image"
                    src="../../assets/images/season_sq.jpg"
                  />
                  <div class="dc-textbox">
                    <div class="dc-title">生クリームデコレーション</div>
                    <div class="dc-text">
                      5号(15cm) ¥3000
                      <br />
                      6号(18cm) ¥3800
                      <br />
                      7号(21cm) ¥4700
                    </div>
                  </div>
                </div>
                <div class="dc-cake">
                  <img
                    class="dc-cake-image"
                    src="../../assets/images/namachoco_cake.jpg"
                  />
                  <div class="dc-textbox">
                    <div class="dc-title">生チョコクリームデコレーション</div>
                    <div class="dc-text">
                      5号(15cm) ¥3300
                      <br />
                      6号(18cm) ¥4100
                      <br />
                      7号(21cm) ¥5000
                    </div>
                  </div>
                </div>
              </div>
              <div class="dc-box">
                <div class="dc-cake">
                  <img
                    class="dc-cake-image"
                    src="../../assets/images/fruit_tart.jpg"
                  />
                  <div class="dc-textbox">
                    <div class="dc-title">フルーツタルト</div>
                    <div class="dc-text">
                      5号(15cm) ¥3500
                      <br />
                      6号(18cm) ¥4500
                      <br />
                      7号(21cm) ¥6000
                    </div>
                  </div>
                </div>
                <div class="dc-cake">
                  <img
                    class="dc-cake-image"
                    src="../../assets/images/classic_chocolate.jpg"
                  />
                  <div class="dc-textbox">
                    <div class="dc-title">クラシックショコラ</div>
                    <div class="dc-text">
                      5号(15cm) ¥3500
                      <br />
                      6号(18cm) ¥4300
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
}

header .heading a {
  color: #fff;
  letter-spacing: 0.15em;
}

.sub-heading {
  font-size: 20px;
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
}

main {
  width: 100%;
  height: 5000px;
  background-image: url(../../assets/images/background.jpg);
  margin: 0 auto;
}

#menu-page {
  height: 4000px;
  padding: 100px;
}

.menu-area {
  width: 60%;
  height: 3500px;
  background-color: white;
  margin: 0 auto;
}

.menu-box2 {
  width: 90%;
  height: 1000px;
  margin: 0 auto;
}

.menu-page-title {
  width: 40%;
  height: 165px;
  text-align: center;
  margin: 0 auto;
}

.menu-heading2 {
  width: 100%;
  padding: 15px 0 0 0;
  font-size: 60px;
  margin: 0 auto;
  text-align: center;
  color: rgb(43, 43, 43);
}

.menu-sub-heading {
  font-size: 20px;
  text-align: center;
  margin: 0 auto;
  color: rgb(43, 43, 43);
}

.menu-list {
  width: 53%;
  display: flex;
  margin-left: 190px;
  position: absolute;
}

.menu-list-item {
  background-color: gray;
  border-radius: 50%;
  list-style: none;
  font-size: 25px;
  text-align: center;
  width: 20%;
  margin: 20px;
  padding: 20px 30px;
}

.menu-list-item2 {
  background-color: gray;
  border-radius: 50%;
  list-style: none;
  font-size: 25px;
  text-align: center;
  width: 20%;
  margin: 20px;
  padding: 38px 30px;
}

#Decoration_Cake_area {
  width: 100%;
  height: 1000px;
}

.dc-box {
  margin: 0 auto;
}

.dc-head {
  width: 70%;
  height: 125px;
  text-align: center;
  margin: 0 auto;
  margin-top: 250px;
}

.dc-heading {
  color: rgb(43, 43, 43);
  font-size: 50px;
}

.dc-sub {
  color: rgb(43, 43, 43);
  font-size: 30px;
}

.dc-cake-box {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  margin-top: 40px;
}

.dc-cake-image {
  width: 450px;
  height: 400px;
  margin: 70px 50px 30px 50px;
}

.dc-textbox {
  text-align: center;
}

.dc-title {
  color: rgb(43, 43, 43);
  font-size: 30px;
}

.dc-text {
  color: rgb(43, 43, 43);
  font-size: 20px;
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
