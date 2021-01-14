<template>
  <div ref="pagination" class="pagination">
    <div v-if="type == 'pagination'" class="customer__reviews--reviews__pagination text-center">
            
      <button v-if="dataDocument && dataDocument.getMeta() && dataDocument.getMeta().previous && dataDocument.getMeta().count > dataDocument.getData().length" class="bg-white border-gray-400 border hover:bg-gray-600 text-gray-800 font-bold py-2 px-4 rounded-l" v-on:click="changePage('previous');" >
        <i class="fas fa-arrow-left mr-2"></i> Previous
      </button>

      <button v-if="dataDocument && dataDocument.getMeta() && dataDocument.getMeta().next && dataDocument.getData().length == limit" class="bg-white border-gray-400 border hover:bg-gray-600 text-gray-800 font-bold py-2 px-4 rounded-l" v-on:click="changePage('next');" >
        Next <i class="fas fa-arrow-right ml-2"></i>
      </button>

    </div>
  </div>
</template>

<script type="text/javascript">
export default {

  props: {
    /**
    * Callback
    */
    callback: {
      type: Function,
      default(type) {
      }
    },

    /**
    * type
    */
    type: {
      type: String,
      default: 'pagination'
    },

    /**
    * count selected
    */
    count: {
      type: Number,
      default: 1,
    },

    dataDocument: {
      type: Object,
    },
    
  },

  data() {
    return {
    }
  },

  created() {
    window.addEventListener('scroll', this.scrollCallback, true);
  },

  destroyed() {
    window.removeEventListener('scroll', this.scrollCallback, true);
  },

  methods: {

    scrollCallback() {

      let bottomY = window.scrollY + 600;
      let paginationY = this.$el.offsetTop;
      if (bottomY > paginationY && this.type == 'scroll') {
        this.callback();
      }

      if (typeof this.callback !== 'function') {
        return;
      }

    },

    changePage: function(page) {
      this.callback(page);
    },
    
  },

  computed: {

    numberOfResults : function () {
      
      return this.count && this.limit ? Math.ceil(this.count/this.limit) : 1;

    },

  },
}
</script>