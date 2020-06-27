<template>
  <div class="categoryList">
    <div class="listCreate">
      <input type="text" placeholder="Enter category name..." v-model="newCategoryName" @keydown="keydownHandler">
      <button class="listButton plus" @click="addNewCategory()"></button>
    </div>
    <div class="categories scroll" v-if="categories.length !== 0">
      <Category
        v-for="(category,index) in categories"
        :key="`category-${index}-${category.name}`"
        :category="category"
        :active="activeCategory === category"
        :deleteEnabled="deleteEnabled"
        @categorydeleted="$emit('categorydeleted',$event)"
        @categoryselected="categorySelectedHandler($event)"
      >
      </Category>
    </div>
    <div class="placeholder" v-else>There are no categories. Create one!</div>
  </div>
</template>

<script>
import Category from './Category.vue';
export default {
  name: 'CategoryList',
  props: ['categories', 'activeCategory', 'deleteEnabled'],
  components: {Category},
  data: function(){
    return {
      newCategoryName: ''
    }
  },
  methods: {
    addNewCategory() {
      const name = this.newCategoryName.trim();
      this.newCategoryName = '';
      this.$emit('newcategory',name);
    },
    categorySelectedHandler(category) {
      this.$emit('categoryselected', category);
    },
    keydownHandler(event) {
      if (event.key === 'Enter') this.addNewCategory();      
    }
  }
}
</script>

<style lang="scss">
.categoryList {
  background-color: #ddd;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #ccc;
}
</style>
