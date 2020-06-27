<template>
  <div class="tag">
    <span class="text">#{{tag}}</span>
    <button class="listButton delete" @click="$emit('tagdeleted',tag)" v-show="deleteEnabled"></button>
    <button class="listButton add" @click="$emit('tagaddedtobag',tag)"></button>
  </div>
</template>

<script>
export default {
  name: 'Tag',
  props: ['tag','deleteEnabled']
}
</script>

<style lang="scss">
.tag {
  display: flex;
  border-bottom: 1px solid #ddd;
  &:hover {
    background-color: #f5f5f5;
  }
  .text {
    flex: 1;
    display: block;
    padding: 10px 5px 10px 20px;
    text-transform: lowercase;
  }
}
</style>
