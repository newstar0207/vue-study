Vue.component('product', {
   template:
    `<div>
        <div class="product">
            <div class="product-image">
                <img v-bind:src="image">
            </div>
            
            <div class="product-info">
                
                <h1>{{ title }}</h1>
                <p v-if="inStock">In Stock</p>
                <p v-else>Out of Stock</p>
                
                <ul>
                    <li v-for="detail in details">{{ detail }}</li>
                </ul>
                
                <div v-for="(variant, index) in variants" v-bind:key="variant.variantId" class="color-box" v-bind:style="{backgroundColor: variant.variantColor}" v-on:mouseover="updateProduct(index)">
                    <!-- <p v-on:mouseover="updateProduct(variant.variantImage)">{{ variant.variantColor }}</p> -->
                </div>
                
                <button v-on:click="addToCart" v-bind:disabled="!inStock" v-bind:class="{disabledButton: !inStock}">Add to Cart</button>

            </div>
        </div> 
    </div>`
    ,
    data(){
        return {
            product: 'Socks',
            // image: './assets/images/socks_blue.jpg',
            selectedVariant : 0,
            // inStock: true,
            details: [  
                "80% cotton",
                "20% polyester",
                "Gender-neutral",
            ],
            variants: [
                {variantId : 2234, variantColor: "green", variantImage : "./assets/images/socks_green.jpg", variantQuantity: 10},
                {variantId : 2235, variantColor: "blue", variantImage : "./assets/images/socks_blue.jpg", variantQuantity: 5},
                
            ],
            brand : '브랜드 제품',
        }
    },
    methods: {
        addToCart(){
            // this.cart += 1;
            this.$emit('add-to-cart')
        },
        updateProduct(index){
            this.selectedVariant= index;
        },
    },
    computed: { 
        title() {
            return this.product + this.brand;
        },
        image() {
            return this.variants[this.selectedVariant].variantImage;
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity;
        }
    }
});

let app = new Vue({
    el: '#app',
    data:{
        cart : 0,
    },
    methods: {
        addToCart(){
            this.cart += 1;
        },
    }
    
});