<template>
  <div class="tagList">
    <div class="listCreate">
      <input type="text" placeholder="Enter tags..." v-model="newTagText" @keydown="keydownHandler">
      <button class="listButton plus" @click="submitTags()"></button>
    </div>
    <div class="list scroll" v-if="category !== undefined">
      <div v-if="filteredTags.length !== 0">
        <Tag
          v-for="(tag, index) in filteredTags"
          :key="`tag-${index}`"
          :tag="tag"
          :deleteEnabled="deleteEnabled"
          @tagaddedtobag="$emit('tagaddedtobag',tag)"
          @tagdeleted="deleteTag($event)"
        ></Tag>
      </div>
      <div class="placeholder" v-else>There are no {{tagsUsed?'more':''}} tags in this category</div>
    </div>
    <div class="placeholder" v-else>Select a category...</div>
  </div>
</template>

<script>
import Tag from './Tag.vue';

function parseTags(text) {
  const split = text.split(' ');
  return split.map(tag => {
    const splitTag = tag.split('');
    return splitTag.filter(char => char !== '#').join('');
  })
  .filter(tag => tag !== '')
}


export default {
  name: 'TagList',
  props: ['category','bag','deleteEnabled'],
  components: { Tag },
  data: function(){
    return {
      newTagText: ''
    }
  },
  computed: {
    filteredTags() {
      return this.category.tags.filter(tag => this.bag.indexOf(tag) === -1);
    },
    tagsUsed() {
      for (let tag of this.bag) {
        if (this.category.has(tag)) return true;
      }
    }
  },
  methods: {
    keydownHandler() {
      if (event.key === 'Enter') this.submitTags();   
    },
    submitTags() {
      const tagText = this.newTagText;
      this.newTagText = '';
      this.$emit('tagadded',{
        tags: parseTags(tagText),
        category: this.category
      })
    },
    deleteTag(tag) {
      this.$emit('tagdeleted',{
        tag,
        category: this.category
      })
    }
  }
}
</script>

<style lang="scss">
.tagList {
  background-color: #eee;
  display: flex;
  flex-direction: column;
}

</style>
