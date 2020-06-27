<template>
  <div class="category"
    :class="active ? 'active' : ''"
    @click="$emit('categoryselected',category)"
  >
    <span class="text">{{category.name}}</span>
    <button class="listButton delete" @click="$emit('categorydeleted',category)" v-show="deleteEnabled"></button>
  </div>
</template>

<script>
export default {
  name: 'Category',
  props: ['category', 'active','deleteEnabled']
}
</script>

<style lang="scss">
.category {
  display: flex;
  border-bottom: 1px solid #ccc;
  transition: all 0.2s ease;
  span.text {
  padding: 10px 20px;
  }
  button.delete {
    margin-left: auto;
  }
  &:hover {
    background-color: #e8e8e8;
  }
  &.active {
    background-color: #e8e8e8;
    border-left: 10px solid #bc1888;
  }
}
</style>
