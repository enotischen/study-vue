<template>
  <div class="col-md-9">
    <div class="card">
      <div class="card-body">
        <button type="button" class="btn btn-outline-dark float-r d-none">預覽</button>
        <h2 class="form-title">作品集填寫</h2>
        <film-form v-if="isFilm" />
        <book-form v-if="!isFilm" />
      </div>
    </div>
  </div>
</template>

<script>
import FilmForm from '@/components/Portfolio/Film.vue'
import BookForm from '@/components/Portfolio/Book.vue'

export default {
  data() {
    return {
      isFilm: true,
    }
  },
  components: {
    FilmForm,
    BookForm,
  },
  mounted() {
    this.isFilm = this.$store.state.auth.memberType.indexOf('BOOK') >= 0 ? false : true
  },
}
</script>
