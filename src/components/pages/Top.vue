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
  <div id="main-visual">
    <div class="main-visual-content">
      <p class="main-visual-text">Patisserie</p>
      <p class="main-visual-name">パティシエール</p>
    </div>
  </div>
  <main>
    <section id="menu">
      <h2 class="menu-heading">Menu</h2>
      <div class="menu-box">
        <div class="menu-text-box">
          <h3 class="menu-title">Decoration Cake</h3>
          <p class="menu-sub-title">デコレーションケーキ</p>
          <p class="menu-message">
            誕生日や記念日などのお祝いにホールケーキはいかがでしょうか。<br />特注でもご予約承ります。
          </p>
        </div>
        <img class="menu-image" src="../../assets/images/season_sq.jpg" />
        <div class="menu-list-page">
          <a href="menu.index.html#Decoration_Cake_area">All List →</a>
        </div>
      </div>
      <div class="menu-box">
        <img class="menu-image" src="../../assets/images/petit_gateau.jpg" />
        <div class="menu-text-box">
          <h3 class="menu-title">Petit Gateau</h3>
          <p class="menu-sub-title">プチガトー</p>
          <p class="menu-message">
            定番ケーキから旬のフルーツを使ったケーキまで幅広くご用意しております。
          </p>
        </div>
        <div class="menu-list-page2">
          <a href="menu.index.html#Petit_Gateau_area">All List →</a>
        </div>
      </div>
      <div class="menu-box">
        <div class="menu-text-box">
          <h3 class="menu-title">Baked Sweets and Gift</h3>
          <p class="menu-sub-title">焼き菓子・ギフト</p>
          <p class="menu-message">
            クッキーをはじめとした、多種多様な焼菓子をご用意しております。<br />お好みの詰め合わせギフトも可能です。
          </p>
        </div>
        <img class="menu-image" src="../../assets/images/yakigashi.jpg" />
        <div class="menu-list-page">
          <a href="menu.index.html#Baked_Serrts_and_Gift_area">All List →</a>
        </div>
      </div>
    </section>
    <section id="news">
      <h2 class="news-heading">News</h2>
      <div class="news-box">
        <div>
          <img
            class="news-image"
            src="../../assets/images/christmas_cake.jpg"
          />
          <p class="news-new">New!</p>
          <p class="news-sub-title">2022.12.01</p>
          <h3 class="news-title">12月のお知らせ</h3>
        </div>
        <div>
          <img class="news-image" src="../../assets/images/montblanc.jpg" />
          <p class="news-sub-title">2022.12.01</p>
          <h3 class="news-title">11月のお知らせ</h3>
        </div>
        <div>
          <img class="news-image" src="../../assets/images/halloween.jpg" />
          <p class="news-sub-title">2022.12.01</p>
          <h3 class="news-title">10月のお知らせ</h3>
          <div class="news-list-page">
            <a href="news.index.html">All List →</a>
          </div>
        </div>
      </div>
    </section>
    <section id="blog">
      <h2 class="blog-heading">Blog</h2>
      <div class="blog-box">
        <div>
          <img
            class="blog-image"
            src="../../assets/images/blog_christmas_cake.jpg"
          />
          <p class="blog-new">New!</p>
          <p class="blog-sub-title">2022.12.01</p>
          <h3 class="blog-title">クリスマス</h3>
        </div>
        <div>
          <img
            class="blog-image"
            src="../../assets/images/halloween_cake.jpg"
          />
          <p class="blog-sub-title">2022.10.05</p>
          <h3 class="blog-title">ハロウィン</h3>
        </div>
        <div>
          <img class="blog-image" src="../../assets/images/autumn_cake.jpg" />
          <p class="blog-sub-title">2022.09.06</p>
          <h3 class="blog-title">秋のケーキ</h3>
          <div class="blog-list-page">
            <a href="blog.index.html">All List →</a>
          </div>
        </div>
      </div>
    </section>
    <hr class="cp_hr02" />
    <section id="calendar">
      <h2 class="calendar-heading">Calendar</h2>
      <h3 class="month">1 January</h3>
      <div class="calendar-box">
        <div class="calendar-content">
          <table>
            <tr>
              <th>日</th>
              <th>月</th>
              <th>火</th>
              <th>水</th>
              <th>木</th>
              <th>金</th>
              <th>土</th>
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
            </tr>
            <tr>
              <td>8</td>
              <td>9</td>
              <td>10</td>
              <td>11</td>
              <td>12</td>
              <td>13</td>
              <td>14</td>
            </tr>
            <tr>
              <td>15</td>
              <td>16</td>
              <td>17</td>
              <td>18</td>
              <td>19</td>
              <td>20</td>
              <td>21</td>
            </tr>
            <tr>
              <td>22</td>
              <td>23</td>
              <td>24</td>
              <td>25</td>
              <td>26</td>
              <td>27</td>
              <td>28</td>
            </tr>
            <tr>
              <td>29</td>
              <td>30</td>
              <td>31</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </table>
          <p class="holiday">
            <span class="square">■</span>
            ：定休日
          </p>
        </div>
        <div class="shop">
          <div>Patisserie</div>
          <div>営業時間:9:00~20:00</div>
          <div>定休日:火曜日</div>
          <div>〒◯◯◯-◯◯◯◯</div>
          <div>愛知県江南市</div>
          <div>000-0000</div>
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

#main-visual {
  width: 100%;
  height: 950px;
  background-image: url(../../assets/images/main01.jpg);
  position: relative;
}

.main-visual-content {
  width: 50%;
  height: 200px;
  margin: 0 auto;
  position: absolute;
  top: 35%;
  left: 25%;
  font-family: "Sacramento";
}

.main-visual-text {
  color: black;
  font-size: 120px;
  text-align: center;
  font-family: Georgia, "Times New Roman", Times, serif;
  letter-spacing: 0.2em;
}

.main-visual-name {
  color: black;
  font-size: 50px;
  text-align: center;
  font-family: Georgia, "Times New Roman", Times, serif;
  letter-spacing: 0.15em;
}

main {
  width: 100%;
  height: 3300px;
  background-image: url(../../assets/images/background.jpg);
  background-size: contain;
  margin: 0 auto;
}

.menu-heading {
  text-align: center;
  color: white;
  width: 20%;
  margin: 0 auto;
  padding: 15px 0;
  font-size: 60px;
}

.menu-box {
  width: 90%;
  padding-bottom: 40px;
  display: flex;
  justify-content: center;
}

.menu-text-box {
  padding-top: 90px;
}

.menu-image {
  width: 400px;
  height: 350px;
  margin: 0 40px;
  border-radius: 50%;
}

.menu-title {
  text-align: center;
  font-size: 40px;
  color: rgb(43, 43, 43);
}

.menu-sub-title {
  text-align: center;
  font-size: 20px;
  color: white;
}

.menu-message {
  text-align: center;
  color: rgb(43, 43, 43);
}

.menu-list-page {
  background-color: rgb(43, 43, 43);
  width: 150px;
  height: 40px;
  text-align: center;
  padding: 5px 8px;
  margin-right: 485px;
  margin-top: 250px;
  position: absolute;
  font-size: 20px;
}

.menu-list-page2 {
  background-color: rgb(43, 43, 43);
  width: 150px;
  height: 40px;
  text-align: center;
  padding: 5px 8px;
  margin-right: -482px;
  margin-top: 230px;
  position: absolute;
  font-size: 20px;
}

#news {
  background-image: url(../../assets/images/background.jpg);
  height: 600px;
}

.news-heading {
  text-align: center;
  color: white;
  width: 20%;
  margin: 0 auto;
  font-size: 60px;
  padding-top: 15px;
}

.news-box {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
}

.news-list-page {
  background-color: rgb(43, 43, 43);
  width: 150px;
  height: 40px;
  text-align: center;
  padding: 5px 8px;
  font-size: 20px;
  margin-left: 190px;
  margin-top: 40px;
}

.news-image {
  width: 300px;
  height: 250px;
  margin: 20px 40px;
}

.news-sub-title {
  padding-left: 40px;
  color: rgb(43, 43, 43);
}

.news-title {
  padding-left: 40px;
  color: rgb(43, 43, 43);
}

.news-new {
  background-color: white;
  font-size: 30px;
  color: gray;
  text-align: center;
  border-radius: 50%;
  padding: 5px 8px;
  margin-left: 295px;
  margin-top: -303px;
  position: absolute;
}

#blog {
  height: 600px;
}

.blog-heading {
  text-align: center;
  color: white;
  width: 20%;
  margin: 0 auto;
  padding-top: 15px;
  font-size: 60px;
}

.blog-box {
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
}

.blog-image {
  width: 300px;
  height: 250px;
  margin: 20px 40px;
}

.blog-sub-title {
  padding-left: 40px;
  color: rgb(43, 43, 43);
}

.blog-title {
  padding-left: 40px;
  color: rgb(43, 43, 43);
}

.blog-new {
  padding: 5px 8px;
  background-color: white;
  color: gray;
  font-size: 30px;
  text-align: center;
  border-radius: 50%;
  margin-left: 295px;
  margin-top: -303px;
  position: absolute;
}

.blog-list-page {
  background-color: rgb(43, 43, 43);
  width: 150px;
  height: 40px;
  text-align: center;
  padding: 5px 8px;
  font-size: 20px;
  margin-left: 190px;
  margin-top: 40px;
}

.cp_hr02 {
  border-width: 2px 0 0 0;
  border-style: dashed;
  border-color: rgb(43, 43, 43);
}

.calendar-heading {
  text-align: center;
  color: white;
  width: 20%;
  margin: 0 auto;
  padding-top: 15px;
  font-size: 60px;
}

#calendar {
  width: 100%;
  height: 600px;
}

.month {
  width: 12%;
  color: rgb(43, 43, 43);
  font-size: 50px;
  border-bottom: 5px double rgb(43, 43, 43);
  margin: 35px auto;
}

.calendar-box {
  width: 30%;
  height: 500px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
}

.calendar-content {
  /* padding-left: 670px; */
  text-align: center;
  margin: 0 auto;
}

table {
  margin-top: 20px;
}

th,
td {
  border: 2px solid rgb(43, 43, 43);
  text-align: center;
  font-size: 30px;
}

th {
  color: white;
  background-color: rgb(43, 43, 43);
}

td {
  color: rgb(43, 43, 43);
  background-color: #ffffff;
}

tr *:first-child {
  color: tomato;
}

td:nth-child(3) {
  background-color: burlywood;
}

tr *:last-child {
  color: dodgerblue;
}

.shop {
  width: 80%;
  color: rgb(126, 70, 30);
  font-size: 30px;
  margin-top: 10px;
  margin-left: 50px;
}

.square {
  color: burlywood;
}

.holiday {
  text-align: right;
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
