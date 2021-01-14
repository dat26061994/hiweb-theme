<template>
    <div>
        <div v-if="reviewsFaker.length" v-for="review,index in reviewsFaker" class="customer__reviews--reviews py-8 border-t">

          <!-- review header -->
          <div class="flex">

            <div class="w-full">

              <!-- user name -->
              <div class="flex flex-wrap align-top ml-2">
                <h2 class="w-2/3 text-black text-xl"><strong>{{ review.name }}</strong></h2>
                <div style="color:#51a3d4;" class="w-1/3 text-right text-xs">{{ new Date() | moment("subtract", (index+3)+" days") | moment("MM/DD/YYYY") }}</div>
                <div class="w-1/3 mt-3 text-xs leading-tight text-gray-700">Overall</div>
                <div class="w-2/3 pl-3 text-xs leading-tight text-gray-700 flex items-end">
                  <img style="height:20px" src="@/assets/img/checkout/star-line.png" alt="">
                  <!-- <StarRating disabled="true" value="5" font-size="0.8rem" /> -->
                </div>

                <div class="w-1/3 mt-3 text-xs leading-tight text-gray-700">Quantity Of Product</div>
                <div class="w-2/3 pl-3 mt-3 flex text-xs leading-tight text-gray-700">
                  <span style="width: 25px;height: 10px;background: #51a3d4;margin-right: 2px;"></span>
                  <span style="width: 25px;height: 10px;background: #51a3d4;margin-right: 2px;"></span>
                  <span style="width: 25px;height: 10px;background: #51a3d4;margin-right: 2px;"></span>
                  <span style="width: 25px;height: 10px;background: #51a3d4;margin-right: 2px;"></span>
                  <span style="width: 25px;height: 10px;background: #51a3d4;margin-right: 2px;"></span>
                </div>
                
                <div class="w-1/3 mt-3 text-xs leading-tight text-gray-700">Value Of Product</div>
                <div class="w-2/3 pl-3 mt-3 flex text-xs leading-tight text-gray-700">
                  <span style="width: 25px;height: 10px;background: #51a3d4;margin-right: 2px;"></span>
                  <span style="width: 25px;height: 10px;background: #51a3d4;margin-right: 2px;"></span>
                  <span style="width: 25px;height: 10px;background: #51a3d4;margin-right: 2px;"></span>
                  <span style="width: 25px;height: 10px;background: #51a3d4;margin-right: 2px;"></span>
                  <span style="width: 25px;height: 10px;background: #51a3d4;margin-right: 2px;"></span>
                </div>
                
              </div>

            </div>

            <!-- date -->
            <!-- <div style="color:#51a3d4;" class="w-1/4 text-right text-xs">{{ new Date() | moment("subtract", (index+3)+" days") | moment("MM/DD/YYYY") }}</div> -->
            
          </div>

          <div class="customer__reviews--review__content">

            <div class="content">
              <p class="text-red-800 text-xl py-3"><strong>{{review.title}}</strong></p>
              <div class="text-black" v-html="review.text"></div>
              <div class="images clearfix">
                <template >
                  <!-- <img :src="review.image" class="image mt-5 cursor-pointer" style="width: 100px;" :key="review.image"> -->
                  <img v-if="index == 0" src="@/assets/img/checkout/review-checkout1.jpg" class="image mt-5 cursor-pointer" style="width: 100px;" :key="review.image">
                  <img v-if="index == 1" src="@/assets/img/checkout/review-checkout2.jpg" class="image mt-5 cursor-pointer" style="width: 100px;" :key="review.image">
                </template>
              </div>
            </div>

          </div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            reviewsFaker: [
                {
                name: '@Janice.P',
                avatar: 'https://storage.googleapis.com/stateless-warmax-net/2019/11/iusa_75x75.20056607.jpg',
                title: 'Best motivation to drink water',
                text: '<p>Love this bottle. Delivery arrived on time. Great motivation to keep drinking water throughout the day - thanks to the time interval markings. Worth the purchase</p>',
                image: 'https://static.litestore.io/bottles/images/Pitbull HN0702027P 2.jpg',
                created_at: '11/16/2019',
                },
                {
                name: '@Dreamer',
                avatar: 'https://storage.googleapis.com/stateless-warmax-net/2019/10/1_Katinka_Stenius.jpg',
                title: 'FANTASIC Bottle!',
                text: `<p class="stamped-review-content-body"> I've used this tumbler for almost two years now and it has held up amazingly well. I bring it everywhere I go and it has never let me down. It's not too mainstream and loud, the design is unique and minimal that really suit my taste. The coating is also very durable, up until now I've had no scratches at all.  I've used many bottles/cup in the past and have never really settled with one. But after using this, I never wanted to switch back to using other brands/model. I'm really happy with my purchase and I'll continue to make more precious memories with this cup!</p>`,
                image: 'https://static.litestore.io/bottles/images/rv9.jpg',
                created_at: '11/17/2019',
                },
            ]
        }
    },
}
</script>