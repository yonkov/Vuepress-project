<template lang="html">
  <div>
    <span v-for="category in Object.keys(categories)">
      <h3 :id="category">
        <router-link
          :to="{ path: `/categories/#${category}`}"
          class="header-anchor"
          aria-hidden="true">#</router-link>
        {{category}}
      </h3>
        <div v-for="page in categories[category]">
          <div>
            <img v-if="page.frontmatter.image" :src="$withBase(page.frontmatter.image)" alt="">
          </div>
          <h2><router-link
            :to="{ path: page.path}">{{page.title}}</router-link></h2>
        </div>
    </span>
  </div>
</template>

<script>
export default {
  computed: {
    categories() {
      let categories = {}
      for (let page of this.$site.pages) {
        for (let index in page.frontmatter.categories) {
          const category = page.frontmatter.categories[index]
          if (category in categories) {
            categories[category].push(page)
          } else {
            categories[category] = [page]
          }
        }
      }
      return categories
    }
  }
}
</script>
