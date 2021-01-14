<template>
    <div>
        <div v-if="reviewsTempalte" v-html="reviewsTempalte">

        </div>

        <div v-else>
            <div class="reviews__pageReview container mx-auto my-10">
    
                <p class="text-black text-2xl"><strong>HAPPY CUSTOMERS</strong></p>

                <hr class="mt-5">

                <div class="py-4 sm:pl-5">

                <p class="py-2">4.9/5 Based on 382 Reviews</p>

                <div class="align-top">

                    <div class="wrapper mt-3">
                        <StarRating :disabled="true" value="5" custom-class="inline-block reviews-star-rating" />
                        <span class="inline-block text-xs ml-1" style="min-width: 35px">(355)</span>
                        <ProgressBar custom-class="inline-block" width="95%" color="#51a3d4" />
                    </div>

                    <div class="wrapper mt-3">
                        <StarRating :disabled="true" value="4" custom-class="inline-block reviews-star-rating" />
                        <span class="inline-block text-xs ml-1" style="min-width: 35px">(18)</span>
                        <ProgressBar custom-class="inline-block" width="6%" color="#51a3d4" />
                    </div>

                    <div class="wrapper mt-3">
                        <StarRating :disabled="true" value="3" custom-class="inline-block reviews-star-rating" />
                        <span class="inline-block text-xs ml-1" style="min-width: 35px">(5)</span>
                        <ProgressBar custom-class="inline-block" width="3%" color="#51a3d4" />
                    </div>

                    <div class="wrapper mt-3">
                        <StarRating :disabled="true" value="2" custom-class="inline-block reviews-star-rating" />
                        <span class="inline-block text-xs ml-1" style="min-width: 35px">(3)</span>
                        <ProgressBar custom-class="inline-block" width="2%" color="#51a3d4" />
                    </div>

                    <div class="wrapper mt-3">
                        <StarRating :disabled="true" value="1" custom-class="inline-block reviews-star-rating" />
                        <span class="inline-block text-xs ml-1" style="min-width: 35px">(1)</span>
                        <ProgressBar custom-class="inline-block" width="1%" color="#51a3d4" />
                    </div>

                </div>
                
                </div>

                <div class="customer__reviews--reviews">

                    <template>

                        <div class="sm:flex flex-wrap">

                        <div v-if="reviewsFaker.length" v-for="review,index in reviewsFaker" class="customer__reviews--reviews sm:px-5 py-8 sm:w-1/2">

                            <div v-if="index < pageReview*10" class="border-t-2 pt-5 flex">

                            <!-- product image -->
                            <div class="w-1/4 align-top">
                                <img v-if="review.image" :src="review.image" />
                            </div>

                            <div class="w-3/4 align-top pl-4 pb-4">

                                <p class="float-right text-blue-600"><small>{{review.created_at}}</small></p>

                                <p class="text-black font-bold text-base pt-1"><strong>{{review.name}}</strong></p>

                                <div class="flex flex-wrap">
                                <div class="w-1/3 mt-3 text-xs leading-tight text-gray-700">
                                    Overall
                                </div>
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

                                <div class="pt-2 text-gray-800 text-base">
                                " {{ review.text }} "
                                </div>

                                <p class="text-base py-2 inline-block pr-2">{{review.name}}</p>
                                <div class="w-4 h-4 rounded-full bg-green-500 text-center inline-block mr-2" style="line-height: 15px"><i class="fas fa-check fa-xs text-white"></i></div>
                                <span class="text-green-500">Verified Buyer</span>

                                <p><i class="far fa-check-circle"></i><i>Yes, I recommend this product</i></p>
                                
                            </div>
                            
                            </div>            

                        </div>

                        </div>

                        <!-- pagination -->
                        <div class="customer__reviews--reviews__pagination text-center">
                        
                        <button><i class="fas fa-chevron-left px-2 text-black"></i></button>
                        <button @click="pageReview = 1" :class="{ 'active' : pageReview == 1 }" class="px-2" >1</button>
                        <button @click="pageReview = 2" :class="{ 'active' : pageReview == 2 }" class="px-2" >2</button>
                        <button><i class="fas fa-chevron-right px-2 text-black"></i></button>

                        </div>
                        
                    </template>
                
                </div>
                
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
            pageReview: 1,

            reviewsFaker: [
                {
                name: '@mads215',
                title: 'I love this bottle!',
                text: 'This thing is awesome. I’ve had it about a month and have used it everyday. Turn it upside down, no leak. It’s printed beautifully and very durable thru the times',
                image: 'https://static.litestore.io/bottles/images/reviews/1.jpg',
                created_at: '04/19/2020',
                },

                {
                name: '@cjosu',
                title: 'Exactly what I needed!',
                text: 'I bought a bottle and accidentally dropped it on my 2nd day of using it. The bottle cracked at the bottom. I was disappointed but it was my fault. The seller asked me how I liked my bottle and I explained to them that I dropped it and it cracked. They sent me a new bottle at no cost! They didn’t have to do that as it wasn’t their fault. That is amazing customer service! I am enjoying my new bottle. I get complements about it at work and the carrying handle makes it easy to tote around the office. He design of it is impressive. The water spout with air hole makes the water flow nicely. It is a nice reminder to drink my water.',
                image: 'https://static.litestore.io/bottles/images/reviews/2.jpg',
                created_at: '04/17/2020',
                },

                {
                name: '@m.leaf',
                title: 'My everyday water bottle!!',
                text: 'I bought the grey one in the end of December 2019. I have always wanted to find a 1 Litre water bottle to track my daily water intake but it had been difficult for me to find the perfect one. After searching for a long time, I decided to go with 64hydro. It fits everything I am looking for: simple good looking, with interval markings and the most important, it fits in the car cupholders! It reminds me to drink water hourly and I can track my intake easily. A month later, my husband bought the blue one which he loves very much as well! They become our everyday bottles, no matter to work or work out.',
                image: 'https://static.litestore.io/bottles/images/reviews/3.jpg',
                created_at: '04/13/2020',
                },

                {
                name: '@SolangeRogerChoquette',
                title: 'Bouteille avec marqueur de temps',
                text: 'Excellent produit avec sangle détachable je peux mesurer la quantité d’eau que je bois dans une journée je l’adore et je suis entièrement satisfaite de mon achat il y a des pièces de rechange pour le couvercle recettes avec fruits',
                image: 'https://static.litestore.io/bottles/images/reviews/4.jpg',
                created_at: '04/06/2020',
                },

                {
                name: '@VanessaK.M',
                title: '10/10',
                text: `Really convenient bottle if you work in an office or if you're in school. It easily motivates you to drink enough water throughout the day. I used to drink from a Swell bottle but since switching to this 64hydro bottle, I've noticeably been drinking way more water (more than 2x). I love the colour and overall design of the bottle. I haven't had any leaks.`,
                image: 'https://static.litestore.io/bottles/images/reviews/5.jpg',
                created_at: '03/25/2020',
                },

                {
                name: '@Fletcher',
                title: 'Great everyday waterbottle!',
                text: `I love this water bottle! I take it everywhere with me and its so easy to drink out of it. I don’t really follow the water markers because i generally drink more than just two a day of the bottle but i love the design and the look. When the bottle closes it doesn’t leak what so ever. Its super useful and very easy to use. Very convenient.`,
                image: 'https://static.litestore.io/bottles/images/reviews/6.jpg',
                created_at: '03/20/2020',
                },

                {
                name: '@C_Anell',
                title: 'Bueno para mantener la hidratación.',
                text: `Excelente producto, calidad inigualable es de plástico rígido y no derrama líquido estando cerrado; es de 32 oz ( unos 950 ml). Llego en tiempo y forma. Lo compraría de nuevo en definitiva.`,
                image: 'https://static.litestore.io/bottles/images/reviews/7.jpg',
                created_at: '03/15/2020',
                },

                {
                name: '@Janice.P',
                title: 'Best motivation to drink water',
                text: `Love this bottle. Delivery arrived on time. Great motivation to keep drinking water throughout the day - thanks to the time interval markings. Worth the purchase`,
                image: 'https://static.litestore.io/bottles/images/reviews/8.jpg',
                created_at: '03/12/2020',
                },

                {
                name: '@Ambrosi.Flowers',
                title: 'A Comfortable, Functional BottleA Comfortable, Functional Bottle',
                text: `The flow of water is great. It caught me off guard at first, but I really like it. The carrying strap is comfortable for when the bottle is full. The bottle is not slick so even if you hold the bottle it should not easily slide out of your hands. The bottle also fits into my car's cupholders and the push button to open is nice for one-handed operations. There is a small arch that hooks over the cap to prevent any accidental openings. The markers on the side of the bottle make it easy to meet my goals to drink more water during the day. It's a mini challenge! I've already got a friend wanting to purchase one for herself. I would definitely recommend this bottle.`,
                image: 'https://static.litestore.io/bottles/images/reviews/9.jpg',
                created_at: '03/09/2020',
                },

                {
                name: '@Dreamer',
                title: 'This is such a great water bottle!',
                text: `I hate drinking water! Hate it! I drink no water ever, tea and coffee only. I decided I needed to try to add water to my day and I found this bottle with time markings. It feels great in my hand, looks great and makes me feel like it's keeping me on a schedule. I absolutely love it! The water flows out in a way I can chug it and be done for the hour. I've only had it a week but I've gone from 8-10 diet sodas cans a day to 3. I know a bottle can't make me drink water, I have to make myself, but this bottle has helped push me tremendously. Great product!`,
                image: 'https://static.litestore.io/bottles/images/reviews/10.jpg',
                created_at: '03/09/2020',
                },

                {
                name: '@BGR8FUL',
                title: 'I might need more than one.',
                text: `I do not drink enough water, especially at work. I love this thing. It has really helped me stay on track. I use the times on the side to make sure I'm drinking water to the line level (or beyond!). It's a great visual. I know most people do not have this problem, but for me the struggle is real. Highly recommend it if that is a problem for you. I love the handstrap so I can carry it and my laptop and whatever from meeting to meeting. The little snap makes sure the lid stays closed even if I drop it. Haven't tried the infuser yet, but its big enough for a few strawberries (cut up) or cucumbers or whatever you want. I don't think the spout you drink from is big enough, but I'm getting used to it. Also, be careful how you drink from it or the little hole for pressure will leak on you. Those two things do not bother me given how beneficial it is to me overall. About to buy another one for home.`,
                image: 'https://static.litestore.io/bottles/images/reviews/11.jpg',
                created_at: '03/07/2020',
                },

                {
                name: '@L.G.B.A',
                title: 'Livesaver when carrying armloads of stuff',
                text: `I usually wait a little while between purchases to make a review, but this one I love so much that I am reviewing it now. It is soft - weird for a water bottle, but the plastic is this nice texture, I like holding it. The time markers keep me more or less on schedule with my fluid intake, and like a few other reviewers have noted, you can use it one handed. It won't leak if you toss it in your bag, and as a law student, I cannot express how much I appreciate the carrying strap. I can loop it over my wrist and still carry an armload of books into class. The infusion filter is a nice addition, and the opening is wide enough to get a decent drink of water, but not so wide that everything around you is doomed if you knock it over by accident while it is open (I've done that - not great).`,
                image: 'https://static.litestore.io/bottles/images/reviews/12.jpg',
                created_at: '03/05/2020',
                },

                {
                name: '@cindygfromb',
                title: 'Finally Found the Perfect Water Bottle',
                text: `I love this bottle. I bought two of them, one for me and one for a friend. She just had major brain surgery and needed something to keep her hydrating that was a visual as well as simple to fill and carry. This bottle fit the bill all the way around. It’s sturdy, easy to clean, easy to fill and easy to infuse with. Best of all we are both easily accomplishing the goal of 64 oz of water a day!`,
                image: 'https://static.litestore.io/bottles/images/reviews/13.jpg',
                created_at: '02/27/2020',
                },

                {
                name: '@bripl',
                title: 'I want to marry this water bottle.',
                text: `I am absolutely HORRIBLE at drinking water. I'm just too picky. But I'm in grad school and I need to take care of myself. So this girl in class was talking about it and my jaw dropped and found it in 5 min and ordered it. Came next day (thank you) and now I'm on my hydration journey!

                    Couple things:
                    Idk what is pictured, it came with it. Looking at it I cant figure out where it goes to. I'm sure it's an extra piece in case I lose something but idk what exactly might fall off. Looks well intact.

                    Gives you a select amount of water to drink by the time. Perfect for me.`,
                image: 'https://static.litestore.io/bottles/images/reviews/14.jpg',
                created_at: '02/24/2020',
                },

                {
                name: '@AlienFunbug',
                title: 'Drinking more water than ever before',
                text: `Never been a fan of drinking water throughout the day. At most I’d have 32oz the whole day. And even then I’d only drink it with crappy artificial powder mixed in it for flavor. This bottle has changed all that! I’ve been EASILY drinking 64oz of water each day since getting this bottle. The times on the side are SO helpful but really for me, it’s the FLOW that’s made it so much easier. I find myself ahead of schedule usually because of how easy it is to chug back 8 oz in one long swig! I do still love flavored water, but now it’s flavored naturally (watermelon and mint is my current favorite combo!) by using the fruit filter. Also, I LOVE the wrist strap, and how quick and easy it is to open and close. I never thought I’d be such a big water drinker! It’s life-changing! If I ever lose this one I’ll be getting another one immediately!`,
                image: 'https://static.litestore.io/bottles/images/reviews/15.jpg',
                created_at: '02/22/2020',
                },

                {
                name: '@Kent_Stroker',
                title: 'I want to marry this water bottle.',
                text: `I was looking for a bottle that was "smart" and would help me with maintaining a healthier hydration schedule. Well, after much looking around I found this totally analog, nothing "smart", nothing "connected", nothing "IoT" related. It is the perfect solution. Fill it in the morning, drink 8 ounces each hour, refill at noon, polish it off by 6PM - you are hydrated. I do use an app on my Samsung S3 Gear watch to remind me on the top of the hour to sip down another 8 ounces. So save a bunch of money on an electric, smart-water-bottle and go with this simple, well built and imprinted with bottle.`,
                image: 'https://static.litestore.io/bottles/images/reviews/16.jpg',
                created_at: '02/22/2020',
                },

                {
                name: '@HAWWWY',
                title: 'What a Nice Waterbottle/Fruit Diffuser!What a Nice Waterbottle/Fruit Diffuser!',
                text: `Great bottle! I love the overall look of the bottle with the colors as well as the finish of the bottle (frosted). I like the flip cap and it says open while you drink. I also appreciate the heck out of the pressure hole now that I know what it's like to have one. I have chug away and not have to release or make strange noises like my other bottles. The handle is very convenient but it stays wet for a while if you wash your bottle or spill water on it. I thought it was really neat the manufacturer/seller included replacement rubber parts for the inside of the flip cap. I don't know why I would need it because it feels sturdy. I also like the fruit/ice filter right on the inside. I've had other fruit diffuser bottles with the strainer like tube thing and I got tired of cleaning them out. I also think the time marks are a very nice touch! I can keep track of my intake if I haven't been paying enough attention to the water bottle`,
                image: 'https://static.litestore.io/bottles/images/reviews/17.jpg',
                created_at: '02/17/2020',
                },

                {
                name: '@Motheroftwins',
                title: 'Best Water Bottle "Ever"',
                text: `Awesome water bottle. I work out often and drink a lot of water during exercise. This bottle really hold the perfect amount of water for 60-90min workouts. I also use it for traveling as well and it fits the bill perfectly. Smooth plastic, pours out well, the sipper isn't too large like a lot of other bottles and isn't too small. The strap is extremely durable and makes and nice way to carry it. Very few sports bottles offer 30+ ounces and this one comes in at 32. My fiancee also loves it because she always complains about not drinking enough water during the day. This bottle is great because it has little time labels on the side that says how much water you should drink at each hour of the day to stay hydrated correctly. I couldn't be more pleased and I'm extremely picky.`,
                image: 'https://static.litestore.io/bottles/images/reviews/18.jpg',
                created_at: '02/15/2020',
                },

                {
                name: '@Lou',
                title: 'Great water bottle to motivate you to stay hydrated!',
                text: `I LOVE this water bottle! I have had a past of kidney stones and my biggest issue is not drinking enough water. I knew I needed something to keep me on track during the day and to be able to drink
        More water! I love that you can add fruit to this to infuse fruits to make your water taste good! Or you can easily take it out to just drink it regular. I put ice in this and I hate it when water bottles leak condensation on the outside. But this one doesn’t! It kept my water cold! I am so excited to be able to keep track of how much I drink and try to drink more daily. I love that it also has a strap to be able to hang onto it as well, it will be perfect when I start going hiking again this summer! I highly reccommend this if you’re looking for a great water bottle with the ability to infuse fruit & Keep track of your daily water intake to motivate you to stay hydrated!`,
                image: 'https://static.litestore.io/bottles/images/reviews/19.jpg',
                created_at: '02/15/2020',
                },

                {
                name: '@lucia_pat',
                title: 'Nice bottle, would buy again.',
                text: `I really like this bottle! I always struggle with my water intake and realize late in the day that i haven’t drank enough and then I try to make up for it and end up having to get up in the middle of the night to use the bathroom. This water bottle has really helped me stay accountable throughout the day. It is easy to drink from and there’s a nice flow of water because the lid is vented. The lid is secure and i have not had any trouble with it leaking. It also fits in my cup holder in the car which is a nice feature. I bought this bottle to replace the 32 oz contigo and it is definitely superior to that bottle!I really like this bottle! I always struggle with my water intake and realize late in the day that i haven’t drank enough and then I try to make up for it and end up having to get up in the middle of the night to use the bathroom. This water bottle has really helped me stay accountable throughout the day. It is easy to drink from and there’s a nice flow of water because the lid is vented. The lid is secure and i have not had any trouble with it leaking. It also fits in my cup holder in the car which is a nice feature. I bought this bottle to replace the 32 oz contigo and it is definitely superior to that bottle! `,
                image: 'https://static.litestore.io/bottles/images/reviews/20.jpg',
                created_at: '02/12/2020',
                },
                
            ]
        }
    },

    created() {
        
    },

    methods: {
        
    },

    computed: {
        reviewsTempalte: function () {

            return this.$themeConfig.getConfigValue('reviews-template') || null;
            
        }
    },
}
</script>

<style lang="scss">
  .customer__reviews--reviews__pagination{
    .active{
      background: #333;
      color: #fff !important;
      border-radius: 10px;
    }
  }
</style>