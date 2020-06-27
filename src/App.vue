<template>
  <div class="app">
    <div class="bar">
      <img class="logo" src="logo.svg" alt />
      <div class="controls">
        <button
          @click="deleteEnabled = !deleteEnabled"
          :class="deleteEnabled ? 'toggled':''"
        >{{deleteEnabled?'disable deleting':'enable deleting'}}</button>
        <button
          @click="downloadBackup"
        >backup</button>
      </div>
    </div>
    <div class="main">
      <CategoryList
        :categories="categories"
        :activeCategory="activeCategory"
        :deleteEnabled="deleteEnabled"
        @categoryselected="setActiveCategory"
        @categorydeleted="deleteCategory"
        @newcategory="addCategory"
      ></CategoryList>
      <TagList
        :category="activeCategory"
        :bag="bag"
        :deleteEnabled="deleteEnabled"
        @tagadded="addTags"
        @tagdeleted="deleteTag"
        @tagaddedtobag="addTagToBag"
      ></TagList>
      <TagBag :bag="bag"></TagBag>
    </div>
  </div>
</template>

<script>
import CategoryList from "./components/CategoryList.vue";
import TagList from "./components/TagList.vue";
import TagBag from "./components/TagBag.vue";

const STORAGE_KEY = "TagBagAppuserData";

class TagCategory {
  constructor(name) {
    this.tags = [];
    this.name = name;
  }
  copy() {
    return {
      name: this.name,
      tags: [...this.tags]
    };
  }
  add(tag) {
    tag = TagCategory._cleanTag(tag);
    if (!this.has(tag)) {
      this.tags.push(tag);
    }
  }
  has(tag) {
    return this._indexOf(tag) !== -1;
  }
  delete(tag) {
    if (this.has(tag)) {
      this.tags.splice(this._indexOf(tag), 1);
    }
  }
  _indexOf(tag) {
    return this.tags.indexOf(tag);
  }
  static _cleanTag(tag) {
    tag = tag.trim();
    return tag.charAt(0) === "#" ? tag.substring(1) : tag;
  }
}

function getDateString() {
  return new Date(Date.now())
    .toLocaleString()
    .split(",")[0]
    .split("/")
    .reverse()
    .join("-");
}

function downloadJSON(content) {
  const a = document.createElement("a");
  const file = new Blob([content], { type: "text/plain" });
  a.href = URL.createObjectURL(file);
  a.download = `Tagbag-backup-${getDateString()}.json`;
  a.click();
}

export default {
  name: "App",
  components: {
    CategoryList,
    TagList,
    TagBag
  },
  data: function() {
    return {
      categories: [],
      bag: [],
      activeCategory: undefined,
      deleteEnabled: false,
      loaded: false
    };
  },
  computed: {},
  methods: {
    downloadBackup(){
      downloadJSON(JSON.stringify(this.copy()));
    },
    addTagToBag(tag) {
      if (this.bag.indexOf(tag) !== -1) return;
      this.bag.push(tag);
    },
    addTags({ tags, category }) {
      tags.forEach(tag => category.add(tag));
      this.save();
    },
    deleteTag({ tag, category }) {
      category.delete(tag);
      this.save();
    },
    load() {
      let userData = localStorage.getItem(STORAGE_KEY);
      if (!userData) {
        this.loaded = true;
        return;
      }
      userData = JSON.parse(userData);
      userData.forEach(categoryData => {
        const category = this.addCategory(categoryData.name);
        categoryData.tags.forEach(tag => category.add(tag));
      });
      this.setActiveCategory(this.categories[0]);
      this.loaded = true;
    },
    save() {
      if (!this.loaded) return;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.copy()));
      console.log("saved");
    },
    copy() {
      return this.categories.map(category => category.copy());
    },
    hasCategory(categoryName) {
      return (
        this.categories.find(category => category.name === categoryName) !==
        undefined
      );
    },
    addCategory(categoryName) {
      if (!this.hasCategory(categoryName)) {
        const category = new TagCategory(categoryName);
        this.categories.push(category);
        this.save();
        this.setActiveCategory(category);
        return category;
      }
    },
    deleteCategory(category) {
      const index = this.categories.indexOf(category);
      this.categories.splice(index, 1);
      let newActiveIndex = 0;
      if (index < this.categories.length) {
        newActiveIndex = index;
      } else {
        newActiveIndex = index - 1;
      }
      this.setActiveCategory(this.categories[newActiveIndex]);
      this.save();
    },
    setActiveCategory(category) {
      this.activeCategory = category;
    }
  },
  created() {
    this.load();
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
}
body {
  background: red;
  font-family: "Open Sans", sans-serif;
  font-size: 13px;
}
.app {
  height: 100vh;
}
.bar {
  height: 40px;
  padding: 8px;
  background: linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
  display: flex;
  .logo {
    max-height: 100%;
    pointer-events: none;
  }
  .controls {
    margin-left: auto;
    height: 100%;
    display: flex;
    >button:first-child{
      margin-right: 4px;
    }
  }
}
.bar .controls button {
  display: block;
  border: 0;
  background-color: #fff;
  color: #bc1888;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 20px;
  padding: 0px 15px;
  height: 100%;
  font-size: 10px;
  &.toggled {
    padding: 0px 13px;
    border: 2px solid #fff;
    background-color: transparent;
    color: #fff;
  }
  &:focus {
    outline: none;
  }
}
.main {
  height: calc(100vh - 40px);
  background-color: blue;
  display: flex;
  .placeholder {
    opacity: 0.5;
    font-style: italic;
    padding: 10px 20px;
    text-align: center;
  }
  > * {
    flex: 1;
  }
  .scroll {
    overflow-y: auto;
    &::-webkit-scrollbar-track {
      background-color: rgba(0, 0, 0, 0);
    }
    &::-webkit-scrollbar {
      background-color: rgba(0, 0, 0, 0);
      width: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
}

.listCreate {
  background: red;
  display: flex;
  input {
    flex: 1;
    padding: 10px 20px;
    border: none;
    &:focus {
      outline: none;
    }
  }
  button {
    width: 30px;
  }
}

button.listButton {
  width: 36px;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  position: relative;
  &:focus {
    outline: none;
  }
  &::after {
    display: block;
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 24px;
    opacity: 0.2;
  }
  &:hover::after {
    filter: none;
    opacity: 1;
  }
  &.add,
  &.delete {
    &::after {
      filter: invert(100%);
    }
    &:hover::after {
      filter: none;
    }
  }
}

button.plus {
  background-color: #42acf8;
  &:hover {
    background-color: #5ab6f8;
  }
  &::after {
    opacity: 1;
    background-image: url("assets/icons/plus.svg");
  }
}

button.delete {
  &:hover {
    background-color: #dc2743;
  }
  &::after {
    background-image: url("assets/icons/clear.svg");
  }
}
button.add {
  &:hover {
    background: linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    color: #fff;
  }
  &::after {
    background-image: url("assets/icons/add.svg");
  }
}
</style>
