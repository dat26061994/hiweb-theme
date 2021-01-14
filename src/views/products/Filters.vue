<template>
    <div>
        <div class="block md:hidden p-3">
            <div class="relative float-right">
                <button data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" class="relative capitalize block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                    <i class="fas fa-filter"></i> Filter
                </button>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
            </div>
            <div class="collapse" id="collapseExample">
                
                <div class="card" >
                    <div class="card-body mt-0 pt-0">

                        <div v-if="$parent.groups" class="w-full border-b py-3">

                            <div>
                                Groups                        
                            </div>

                            <ul v-if="productsGroupsDocument" class="mb-0">
                                <li v-for="group in productsGroupsDocument.getData()">
                                    <label class="container-checkbox mb-0">
                                        {{ group.getAttribute('title') }}
                                        <input @change="inputChange" :value="group.getAttribute('title')" v-model="$parent.groups" type="checkbox">
                                        <span class="checkmark"></span>
                                    </label>
                                </li>
                            </ul>

                        </div>
                        
                        <div v-if="$parent.collections" class="w-full border-b py-3">
                            <div>
                                Collections                        
                            </div>
                            <ul class="mb-0" v-if="collectionsDocument">
                                <li v-for="collection in collectionsDocument.getData()">
                                    <label class="container-checkbox">
                                        {{ collection.getAttribute('title') }}
                                        <input @change="inputChange" :value="collection.getId()" v-model="$parent.collections" type="checkbox">
                                        <span class="checkmark"></span>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
        
            </div>
        </div>
        
        <div class="hidden md:block">
            <div class="card " >
                <div class="card-body mt-0 pt-0">

                    <div v-if="$parent.groups" class="w-full border-b py-3">

                        <div>
                            Groups                        
                        </div>

                        <ul v-if="productsGroupsDocument" class="mb-0">
                            <li v-for="group in productsGroupsDocument.getData()">
                                <label class="container-checkbox mb-0">
                                    {{ group.getAttribute('title') }}
                                    <input @change="inputChange" :value="group.getAttribute('title')" v-model="$parent.groups" type="checkbox">
                                    <span class="checkmark"></span>
                                </label>
                            </li>
                        </ul>

                    </div>
                    
                    <div v-if="$parent.collections" class="w-full border-b py-3">
                        <div>
                            Collections                        
                        </div>
                        <ul class="mb-0" v-if="collectionsDocument">
                            <li v-for="collection in collectionsDocument.getData()">
                                <label class="container-checkbox">
                                    {{ collection.getAttribute('title') }}
                                    <input @change="inputChange" :value="collection.getId()" v-model="$parent.collections" type="checkbox">
                                    <span class="checkmark"></span>
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
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
            default: params => {

            }
        },

    },

    data() {
        return {
            productsGroupsDocument:null,
            collectionsDocument:null,
        }
    },

    created() {
        this.loadProductsGroups();
        this.loadCollections();

    },

    methods: {

        inputChange() {

            this.callback();

        },

        async loadProductsGroups() {

            this.productsGroupsDocument = await this.$http.collection('products/groups');

        },

        async loadCollections() {
            this.collectionsDocument = await this.$http.collection('collections');
        }
    },

    computed: {
        
    },
}
</script>

<style lang="scss">
    /* The container */
    .container-checkbox {
    display: block;
    position: relative;
    padding-left: 30px;
    cursor: pointer;
    font-size: 13px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    }

    /* Hide the browser's default checkbox */
    .container-checkbox input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
    }

    .container-checkbox{

        /* Create a custom checkbox */
        .checkmark {
            position: absolute;
            top: 7px;
            left: 0;
            height: 20px;
            width: 20px;
            background-color: #fff;
            border: 1px solid #ccc;
        }

    }
    

    /* On mouse-over, add a grey background color */
    .container-checkbox:hover input ~ .checkmark {
        background-color: #ccc;
    }

    /* When the checkbox is checked, add a blue background */
    .container-checkbox input:checked ~ .checkmark {
        background-color: #ccc;
    }

    /* Create the checkmark/indicator (hidden when not checked) */
    .checkmark:after {
    content: "";
    position: absolute;
    display: none;
    }

    /* Show the checkmark when checked */
    .container-checkbox input:checked ~ .checkmark:after {
    display: block;
    }

    /* Style the checkmark/indicator */
    .container-checkbox .checkmark:after {
    left: 7px;
    top: 3px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    }
</style>