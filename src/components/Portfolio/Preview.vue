<template>
  <main role="main" class="cp" v-title :data-title="'預覽-' + content.title">
    <div class="container">
      <logo />

      <div class="row justify-content-center">
        <div class="col-md-9">
          <div class="card">
            <div class="card-body">
              <h2 class="form-title">
                {{ content.title }}<span class="en">{{ content.etitle }}</span>
              </h2>
              <!-- 會員類型為[ CCT ]且參展類別選取[ 影視 ] -->
              <form>
                <p><strong>作品型態 Status：</strong>{{ basic.filmStatus }}</p>
                <p>
                  <strong>類型 Genre：</strong>
                  <span class="item" v-for="(item, index) in basic.knds" :key="index">{{
                    item
                  }}</span>
                  <span v-if="content.kndRemk">({{ content.kndRemk }})</span>
                </p>

                <p>
                  <strong>風格 Style：</strong
                  ><span class="item" v-for="(item, index) in basic.styles" :key="index">{{
                    item
                  }}</span>
                  <span v-if="content.styleRemk">({{ content.styleRemk }})</span>
                </p>
                <p>
                  <strong>題材 Topic：</strong
                  ><span class="item" v-for="(item, index) in basic.themes" :key="index">{{
                    item
                  }}</span>
                  <span v-if="content.themeRemk">({{ content.themeRemk }})</span>
                </p>
                <p>
                  <strong>觀眾 Audiences：</strong
                  ><span class="item" v-for="(item, index) in basic.audiences" :key="index">{{
                    item
                  }}</span>
                  <span v-if="content.audienceRemk">({{ content.audienceRemk }})</span>
                </p>
                <p>
                  <strong>集數 Episode / 長度 Lenth：</strong>{{ content.ep }}/{{ content.lenth }}
                </p>
                <p><strong>完成年月 Year & Month of Production：</strong>{{ content.prodMonth }}</p>

                <hr />

                <p>
                  <strong>導演 Director：</strong>{{ content.direc
                  }}<span class="en">{{ content.edirec }}</span>
                </p>
                <p>
                  <strong>主演 Cast：</strong>
                  {{ content.actor }}<span class="en">{{ content.eactor }}</span>
                </p>

                <hr />

                <h3 class="form-subtitle">劇情簡介 Synopsis</h3>
                <p>
                  {{ content.synop }}
                </p>
                <p>
                  {{ content.esynop }}
                </p>

                <hr />

                <p>
                  <strong>獲獎紀錄 Winning Record：</strong>{{ content.award }} {{ content.eaward }}
                </p>
                <p>
                  <strong>節目主要演員 Main cast：</strong>
                  {{ content.actorRemk }}<span class="en">{{ content.eactorRemk }}</span>
                </p>
                <p>
                  <strong>製作人 Producer：</strong>{{ content.producer
                  }}<span class="en">{{ content.eproducer }}</span>
                </p>
                <p>
                  <strong>導演 Director：</strong>{{ content.direcRemk
                  }}<span class="en">{{ content.edirecRemk }}</span>
                </p>
                <p>
                  <strong>編劇 Writer：</strong>{{ content.writer
                  }}<span class="en">{{ content.ewriter }}</span>
                </p>
                <p v-if="content.video">
                  <strong>預告片花 Trailer：</strong
                  ><a :href="content.video" target="_blank">{{ content.video }}</a>
                </p>
                <p v-if="content.video">
                  <strong>提案簡報 Proposal：</strong>[<a
                    :href="$conf.FILE_URL + content.imageLocation + content.proposal"
                    target="_blank"
                    >點此查看</a
                  >]
                </p>

                <hr />
                <div class="row">
                  <div
                    class="col-lg-4 col-md-4 col-6 h-100 mb-3"
                    v-for="(image, index) in basic.photo"
                    :key="index"
                    @click="() => showImg(index)"
                  >
                    <img class="img-fluid img-thumbnail" :src="$conf.FILE_URL + image" />
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div class="card d-none">
            <div class="card-body">
              <h2 class="form-title">蠟筆小新<span class="en">Crayon Shin Chain</span></h2>

              <!-- 會員類型為[ CCT ]且參展類別選取[ 出版 ]  -->
              <form>
                <p><strong>作者名：</strong>臼井儀人<span class="en">Usui Yoshito</span></p>

                <h3 class="form-subtitle">作家簡介</h3>
                <p>
                  臼井儀人（日語：うすい
                  よしと，1958年4月21日－2009年9月11日[1]），本名臼井義人（うすい
                  よしひと），是日本的男性漫畫家、作詞家，代表作為《蠟筆小新》。出生於靜岡縣靜岡市，成長並住於埼玉縣春日部市，身高174公分，育有二個女兒。2009年9月11日，臼井於登山時失足跌落山谷不幸罹難，享年51歲。
                </p>
                <p>
                  Usui Yoshito (Japanese: うすいよしと, April 21, 1958-September 11, 2009 [1]),
                  whose real name is Usui Yoshito (うすいよしひと), is a Japanese male manga artist
                  and lyricist, represented as "Crayon Little new". Born in Shizuoka City, Shizuoka
                  Prefecture, grew up and lived in Kasugabe City, Saitama Prefecture, is 174 cm tall
                  and has two daughters. On September 11, 2009, Usui fell into a valley while
                  climbing a mountain, and died at the age of 51.
                </p>

                <h3 class="form-subtitle">劇情簡介</h3>
                <p>
                  故事舞台是在埼玉縣春日部市，一位正在「雙葉幼稚園」學習的五歲小孩野原新之助（小新），在日常生活中發生的事。
                  起初，小新與父親野原廣志和母親野原美冴（娘家姓：小山）組成一個3人家庭，住在兩層樓平房。隨著故事發展，家中添加了一隻被遺棄的小狗「小白」與妹妹「野原向日葵」（小葵）。車子換了兩次（前兩台都被美冴撞毀）。
                  家裡一度因為被氣爆炸毀而暫時遷居胯下痛公寓（雞飛狗跳莊）一陣子，後來房屋修繕完畢，全家搬回原住處。
                  有一陣子美冴的妹妹小山夢冴因為自己夢想而不想相親，暫居野原家二樓，後來夢冴搬出去後住在他們之前住的胯下痛公寓，同時劇裡登場的通訊工具逐漸由最初尚未有手機的年代轉變成智慧型手機。
                </p>
                <p>
                  The story is set in Kasugabe City, Saitama Prefecture, a five-year-old Nohara
                  Shinnosuke (Xiaoxin) who is studying at Futaba Kindergarten, and what happened in
                  his daily life. At first, Xiaoxin formed a three-person family with his father
                  Hiroshi Nohara and his mother Misaki Nohara (maiden name: Koyama) and lived in a
                  two-story bungalow. As the story progresses, an abandoned puppy "Xiao Bai" and his
                  sister "Ye Yuan Sunflower" (Xiao Kui) are added to the home. The car was changed
                  twice (both the first two were crashed by Mei Cheng). The family was once
                  destroyed by a gas explosion and temporarily moved to the Crotch Pain Apartment
                  (Ji Fei Gou Diao Zhuang) for a while. Later, the house was repaired and the family
                  moved back to their original residence. For a while, Meichen’s younger sister,
                  Xiaoshan Mengyao, didn’t want to have a blind date because of her dreams. She
                  temporarily stayed on the second floor of Nohara’s house. Later, after she moved
                  out, she lived in the apartment where they lived before. At the same time, the
                  communication tools that appeared in the show gradually changed from the
                  beginning. The era of mobile phones has transformed into smart phones.
                </p>

                <h3 class="form-subtitle">作品簡介</h3>
                <p>
                  原定位為成人取向的青年漫畫，早期有較多性暗示的描述[註 1]，於1990年夏天開始連載。
                  然而在動畫版於1992年推出後，大受家庭觀眾歡迎，逐漸轉變為閤家觀賞的作品，排除性暗示的內容。
                  並於1993年推出首部電影版。小新是個性張揚的代表性卡通人物之一，內容是平實地描寫一戶核心家庭日常生活的寫照，而笑點多半是小新總是搞不清楚狀況而出的差錯或是惹人發怒的情形。
                  在日本，電視動畫版收視率常高居前10名。以往故事的性質都是走喜劇、搞笑路線。但自從漫畫第47本德郎醫生死後，風格開始轉為黑暗、嚴肅外加些少的喜劇氣氛。刊名為蠟筆小新，小新是主角的名字，蠟筆是幼稚園小朋友常用的繪圖用具，以表示作品是描述幼稚園時期的小新。
                  此外，漫畫29卷和31卷中有升上小學1年級的小新，名稱為「鉛筆小新」。
                </p>
                <p>
                  Originally positioned as an adult-oriented youth cartoon, there were more sexually
                  suggestive descriptions in the early days [Note 1], and it was serialized in the
                  summer of 1990. However, after the animated version was launched in 1992, it
                  became popular with family audiences and gradually transformed into a
                  family-watching work, excluding sexually suggestive content. And launched the
                  first movie version in 1993. Xiaoxin is one of the representative cartoon
                  characters with publicity. The content is a plain portrayal of the daily life of a
                  nuclear family, and most of the laughter is because Xiaoxin is always confused
                  about the situation and makes mistakes or makes people angry. situation. In Japan,
                  the ratings of the TV animation version are often among the top 10. In the past,
                  the nature of the story was comedy and funny. But since the death of Dr. Bentoro
                  in the 47th manga, the style has turned dark, serious and a little comedy. The
                  publication is titled Crayon Shin-chan. Shin-chan is the protagonist’s name.
                  Crayons are commonly used drawing tools for kindergarten children to indicate that
                  the work is a description of Xiao-xin in kindergarten. In addition, in the 29 and
                  31 volumes of the manga, there is a small new person who has entered the first
                  grade of elementary school, and the name is "Pencil small new."
                </p>

                <hr />

                <h3 class="form-subtitle">版權資訊</h3>
                <p><strong>作品的發表/成品時間：</strong>1990/03</p>
                <p><strong>版權資訊：</strong>雙葉社</p>
                <p><strong>完成年月：</strong>2020/08</p>
                <p><strong>版權歸屬：</strong>雙葉社</p>
                <p><strong>出版版權交易情形：</strong>1990年夏天雙葉社周末漫畫Action開始連載</p>
                <p><strong>版權聯絡人姓名：</strong>臼井義人<span class="en">Usui Yoshito</span></p>
                <p><strong>版權聯絡人單位：</strong>雙葉社<span class="en">Usui Yoshito</span></p>
                <p><strong>版權聯絡人職稱：</strong>雙葉社<span class="en">Usui Yoshito</span></p>
                <p><strong>版權聯絡人電話：</strong>02-29180756</p>

                <hr />

                <h3 class="form-subtitle">作品詳細資訊</h3>
                <p><strong>作品頁數／字數：</strong>178頁/1803884字</p>
                <p><strong>出版方式：</strong>實體出版</p>
                <p><strong>文本體裁：</strong>漫畫</p>
                <p>
                  <strong>作品內容類型：</strong>
                  動作<span class="en">Action</span>、 成人<span class="en">Adult</span>、 冒險<span
                    class="en"
                    >Adventure</span
                  >
                </p>
                <p>
                  <strong>主要關鍵字：</strong>
                  家庭溫馨喜劇、排解憂愁、娛樂消遣
                </p>
                <p>
                  <strong>其他主要關鍵字：</strong>
                  無聊好笑
                </p>
                <p>
                  <strong>是否為跨國題材：</strong>
                  是
                </p>
                <p>
                  <strong>跨國題材國家：</strong>
                  台灣
                </p>
                <p>
                  <strong>期待改編類型：</strong>
                  電影、劇集
                </p>
                <p>
                  <strong>預計授權改編之新台幣費用：</strong>
                  10000000000000百萬
                </p>
                <p>
                  <strong>意象圖：</strong>
                </p>
                <!--程式裁圖 287px:215px -->
                <div data-ciao="lightbox-gallery">
                  <a href="images/ten2.jpg" title="demo 1"
                    ><img
                      data-src="images/ten2.jpg"
                      class="img-fluid lazyload"
                      alt="CiaoYu"
                      width="287"
                  /></a>
                </div>

                <div class="btn-area">
                  <button type="button" class="btn btn-system btn-confirm" data-confirm="返回">
                    返回
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!--row END-->
    </div>
    <vue-easy-lightbox
      :visible="visible"
      :imgs="imgs"
      :index="index"
      @hide="handleHide"
    ></vue-easy-lightbox>
  </main>
</template>

<script>
import {
  apiFilm,
  apiFilmKnd,
  apiFilmCat,
  apiFilmStyle,
  apiFilmTheme,
  apiFilmAudience,
  apiFilmStatus,
} from '@/api/index'
import Logo from '@/components/Common/Logo.vue'

export default {
  components: { Logo },
  data() {
    return {
      imgs: [],
      visible: false,
      index: 0,
      isFilm: true,
      filmKnd: [],
      filmStyle: [],
      filmTheme: [],
      filmAudience: [],
      content: {},
      basic: {
        photo: [],
        knds: [],
        styles: [],
        themes: [],
        audiences: [],
      },
    }
  },
  methods: {
    showImg(index) {
      this.index = index
      this.visible = true
    },
    handleHide() {
      this.visible = false
    },
    async getContent() {
      let loader = this.$loading.show()
      await apiFilm(this.$route.params.code)
        .then(response => {
          this.content = response.data
          this.basic.photo = this.content.photo.split(',')
          for (let i = 0; i < this.basic.photo.length; i++) {
            this.imgs.push(this.$conf.FILE_URL + this.basic.photo[i])
          }
          this.filmKnd = this.content.filmKnd.split(',')
          this.filmStyle = this.content.filmStyle.split(',')
          this.filmTheme = this.content.filmTheme.split(',')
          this.filmAudience = this.content.filmAudience.split(',')
          this.getfilmKnds(this.content.filmCat)
          this.getfilmStyles()
          this.getfilmThemes()
          this.getfilmAudiences()
          this.getfilmStatus()
        })
        .catch(err => {
          // this.$router.push({ path: '/login' })
        })
      loader.hide()
    },
    async getfilmKnds(data) {
      if (data != '') {
        await apiFilmKnd(data).then(response => {
          for (let i = 0; i < response.data.length; i++) {
            if (this.filmKnd.indexOf(response.data[i].id) < 0) continue
            this.basic.knds.push(response.data[i].item)
          }
        })
      } else {
        this.basic.knds = []
      }
    },
    async getfilmStyles() {
      await apiFilmStyle().then(response => {
        for (let i = 0; i < response.data.length; i++) {
          if (this.filmStyle.indexOf(response.data[i].id) < 0) continue
          this.basic.styles.push(response.data[i].item)
        }
      })
    },
    async getfilmThemes() {
      await apiFilmTheme().then(response => {
        for (let i = 0; i < response.data.length; i++) {
          if (this.filmTheme.indexOf(response.data[i].id) < 0) continue
          this.basic.themes.push(response.data[i].item)
        }
      })
    },
    async getfilmAudiences() {
      await apiFilmAudience().then(response => {
        for (let i = 0; i < response.data.length; i++) {
          if (this.filmAudience.indexOf(response.data[i].id) < 0) continue
          this.basic.audiences.push(response.data[i].item)
        }
      })
    },
    async getfilmStatus() {
      await apiFilmStatus().then(response => {
        for (let i = 0; i < response.data.length; i++) {
          if (this.content.filmStatus != response.data[i].id) continue
          this.basic.filmStatus = response.data[i].item
        }
      })
    },
  },
  mounted() {
    if (!this.$store.state.auth.isLogin) this.$router.push({ path: '/login' })
    if (this.$route.params.code) {
      this.isFilm = this.$store.state.auth.memberType.indexOf('BOOK') >= 0 ? false : true
      this.getContent()
    } else this.$router.push({ path: '/login' })
  },
}
</script>

<style>
.img-fluid {
  width: 200px; /* You can set the dimensions to whatever you want */
  height: 100px;
  object-fit: cover;
}
.item + .item:before {
  width: 20px;
  content: '、';
}
</style>
