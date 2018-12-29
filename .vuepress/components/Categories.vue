<template lang="html">
  <div>
    категория:
    <router-link
      v-for="category in $page.frontmatter.categories"
      :key="category"
      :to="{ path: `/categories/#${category}`}">
      {{category}}
    </router-link>
  </div>
</template>