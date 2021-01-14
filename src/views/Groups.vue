<template>
  <div class="groups container mt-6">

    <!-- Loading -->
    <loader v-if="isLoadingGroups" />

    <!-- Errors -->
    <error-hero :errors="collectionErrors" action-text="Go back" :action="$linkTo('home')" />

    <!-- groups -->
    <template v-if="groupsDocument">
      
      <!-- Breadcrumb -->
      <ol class="breadcrumb mb-0 font-size-xs text-gray-400">
        <li class="breadcrumb-item">
          <router-link class="text-gray-400" :to="$linkTo('home')">Home</router-link>
        </li>
        <li class="breadcrumb-item active">
          <span class="text-gray-400">Product groups</span>
        </li>
      </ol>

      <div class="row mt-3">
        <div v-for="group in groupsDocument.getData()" class="col-lg-3 col-6">
          <div class="card">
            <div class="card-img">
              <router-link :to="{ name: 'groups.products' , params: { handle: group.getAttribute('handle') } }">
                <img :src="$image.url(group.getRelationshipData('image'))" />
              </router-link>
            </div>
            <div class="card-body text-center">
              <router-link :to="{ name: 'groups.products' , params: { handle: group.getAttribute('handle') } }">
                <strong>{{ group.getAttribute('title') }}</strong>
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <Pagination :dataDocument="groupsDocument" :callback="onPagination" :limit="limit" />

    </template>

    <div v-if="!groupsDocument && !isLoadingGroups" class="w-full mt-3">
      <!-- Errors -->
      <error-hero :errors="['Resource not found']" action-text="Go back" :action="$linkTo('home')" />
    </div>
  </div>
</template>

<script type="text/javascript">
import Pagination from '@/components/Pagination';

export default {

  components: {
    Pagination
  },

  data() {
    return {
        groupsDocument: null,
        isLoadingGroups:false,

    }
  },

  created() {

    // this.useGroupsMixin(true);
    this.loadProductsGroups();

  },

  methods: {

    onPagination() {



    },

    /**
    * Load products groups
    */
    async loadProductsGroups() {
        
        this.isLoadingGroups = true;

        try {
          this.groupsDocument = await this.$http.collection('products/groups', {
              params: {
                  sort: '-id',
                  limit: 20
              }
          });
        } catch (error) {
          
        }

        this.isLoadingGroups = false;

    },
  },
}
</script>