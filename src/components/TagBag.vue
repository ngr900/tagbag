<template>
  <div class="tagBag">
    <div class="controls">
      <button class="copy" :disabled="!hasTags" @click="copyToClipboard()">
        <span class="content">
          <span class="icon"></span>
          <span class="text">Copy To Clipboard</span>
        </span>  
      </button>
    </div>
    <div class="tags" v-if="hasTags">
      <div class="tagInBag"
        v-for="(tag, index) in bag"
        :key="`$tag-${index}`"
      >
        <button class="remove" @click="removeTagFromBag(tag)"></button>
        <span class="text">#{{tag}}</span>
      </div>
    </div>
    <div class="placeholder" v-else>No tags have been selected</div>
  </div>
</template>

<script>
function copyTextToClipboard(text) {
	console.log(`copying ${text}`);
	const input = document.createElement('input');
	input.type = 'text';
	input.value = text;
	input.style = 'position:fixed;top:-1000px';
	document.body.appendChild(input);
	input.select();
	document.execCommand('copy');
	document.body.removeChild(input);
}

export default {
  name: 'TagBag',
  props: ['bag'],
  computed: {
    hasTags() {
      return this.bag.length !== 0;
    }
  },
  methods: {
    removeTagFromBag(tag) {
      this.bag.splice(this.bag.indexOf(tag),1)
    },
    copyToClipboard() {
      const hashtags = this.bag.map(tag => `#${tag}`).join(' ')
      copyTextToClipboard(hashtags);
    }
  }
}
</script>

<style lang="scss">
  .tagBag {
    background: #222;
    padding: 10px;
    .placeholder {
      color: #fff;
      opacity: 0.25;
      font-style: italic;
      padding: 10px 20px;
      text-align: center;
      margin-top: -10px;
    }
  }
  .tagInBag {
    display: inline-block;
    padding: 4.5px 12px 6px 26px;
    border-radius: 24px;
    background: #555;
    color: #fff;
    margin-bottom: 4px;
    margin-right: 4px;
    position: relative;
    .remove {
      position: absolute;
      top: 5.5px;
      left: 6px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: 18px;
      width: 18px;
      height: 18px;
      border:0;
      background-color: rgba(255,0,0,0);
      background-image: url('../assets/icons/clear.svg');
      opacity: 0.4;
      &:hover {
        opacity: 0.8;
      }
      &:focus {
        outline: none;
      }
    }
  }
  .controls {
    margin-bottom: 10px;
    button.copy {
      width: 100%;
      border: 0;
      border-radius: 20px;
      padding: 12px 24px;
      font-weight: 700;
      text-transform: uppercase;
      color: #fff;
      font-size: 10px;
      background-color: #42acf8;
      &:hover {
        background-color: #5ab6f8;
      }
      &:focus {
        outline: none;
      }
      &:disabled {
        background-color: #555;
        opacity: 0.25;
      }
    }
    span.content {
      position: relative;
      display: inline-block;
      top: 1px;
      left: 8px;
    }
    span.icon {
      display: inline-block;
      width: 16px;
      height: 16px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: 16px;
      background-image: url('../assets/icons/copy.svg');
      position: absolute;
      left: -18px;
      top: -3px;
    }
  }
</style>
