<template>
  <SearchResults />
</template>

<script setup>
const route = useRoute()
const { data: results } = await useFetch(`/api/search?q=${route.query.q}`)
</script>