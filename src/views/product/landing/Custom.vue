<template>
    <div class="row">
        <div class="col-12 col-md-6">

        </div>

        <div class="col-12 col-md-6 pl-lg-10">

            <hr class="mt-5" style="height: 2px;background: #51a3d4;">

            <div class="customer__reviews">

                <div class="star-reviews py-4">

                    <p style="color:#51a3d4;" class="text-2xl cursor-pointer">
                        <strong>
                            <span>Reviews</span>
                        </strong>
                    </p>

                    <div style="border-bottom: 2px solid #ccc;padding-bottom: 15px;" class="w-full py-2 mb-2 align-top flex items-center">
                        <StarRating :hide-value="true"  :disabled="true" value="5" />
                        <span class="ml-3">4.8 out of 5 stars </span>
                    </div>

                    <div class="pl-2 sm:pr-4 align-top">

                        <div class="wrapper flex items-center">
                            <StarRating :disabled="true" :hideValue="true" value="5" star-class="star-item" custom-class="inline-block" />
                            <ProgressBar custom-class="inline-block" width="95%" color="#51a3d4" />
                            <span class="inline-block text-xs ml-1" style="min-width: 35px">(355)</span>
                        </div>

                        <div class="wrapper flex items-center">
                            <StarRating :disabled="true" :hideValue="true" value="4" star-class="star-item" custom-class="inline-block" />
                            <ProgressBar custom-class="inline-block" width="6%" color="#51a3d4" />
                            <span class="inline-block text-xs ml-1" style="min-width: 35px">(18)</span>
                        </div>

                        <div class="wrapper flex items-center">
                            <StarRating :disabled="true" :hideValue="true" value="3" star-class="star-item" custom-class="inline-block" />
                            <ProgressBar custom-class="inline-block" width="3%" color="#51a3d4" />
                            <span class="inline-block text-xs ml-1" style="min-width: 35px">(5)</span>
                        </div>

                        <div class="wrapper flex items-center">
                            <StarRating :disabled="true" :hideValue="true" value="2" star-class="star-item" custom-class="inline-block" />
                            <ProgressBar custom-class="inline-block" width="2%" color="#51a3d4" />
                            <span class="inline-block text-xs ml-1" style="min-width: 35px">(3)</span>
                        </div>

                        <div class="wrapper flex items-center">
                            <StarRating :disabled="true" :hideValue="true" value="1" star-class="star-item" custom-class="inline-block" />
                            <ProgressBar custom-class="inline-block" width="1%" color="#51a3d4" />
                            <span class="inline-block text-xs ml-1" style="min-width: 35px">(1)</span>
                        </div>

                    </div>
                
                </div>

                <router-link to="/reviews" class="show-all-reviews text-blue-500 hover:text-yellow-600 hover:underline pl-3">Read All Reviews (382)</router-link>

            </div>

        </div>
        
    </div>
</template>

<script>
import StarRating from '@/elements/StarRating'
import ProgressBar from '@/elements/ProgressBar'

export default {

    components: {
        StarRating,
        ProgressBar,
    },

    data() {
        return {

            showFeatures: true,
            
        }
    },
    
}
</script>

<style lang="scss">
    .customer__reviews {
        padding: 30px;
        background: #f7f7f7;
    }
</style>