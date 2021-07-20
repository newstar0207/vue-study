Vue.component('product', {
    template: `
    <div class="product">
        <div class="product-image">
            <img v-bind:src='image'>
        </div>
        <div class="product-info">
            <h1>{{ title }}</h1>
            <p v-if="inStock">In Stock</p>
            <p v-else>Out of Stock</p>
            <ul>
                <li v-for="detail in details">
                    <p>{{ detail }}</p>
                </li>
            </ul>

            <div v-for="(variant, index) in variants" :key="variant.variantId" class="color-box" :style="{backgroundColor: variant.variantColor}" @mouseover="updateProduct(index)">
                <!-- <p @click="updateProduct(variant.variantImage)">{{ variant.variantColor }}</p>  -->
            </div>

            <button v-on:click="addToCart" :disabled="!inStock" :class="{disabledButton:!inStock}">Add to Cart</button>
            <div class="cart">
                <p>Cart {{cart}}</p>
            </div>  
        </div>
    </div>`,
    data() {
        return {
        variants: [
            {variantId: 2234, variantColor: "green", variantImage: "./assets/images/socks_green.jpg", variantQuantity: 10},
            {variantId: 2235, variantColor: "blue", variantImage: "./assets/images/socks_blue.jpg", variantQuantity: 0 },
            
        ],
        details : [
        "80% cotton",
        "20% polyester",
        "Gender-neutral"
        ],
        product: 'Socks',
        // inStock: true, // data에 있을경우 computed property 안됨
        // image: './assets/images/socks_blue.jpg',
        cart : 0,
        brand : "새별이의 ",
        selectedVariant: 0,
        }
    },
    methods: {
        addToCart(){
            this.cart += 1
        },
        updateProduct(index){
            this.selectedVariant = index;  
        }
    },

    computed:{
        title(){
            return this.brand + this.product;
        },
        image(){
            return this.variants[this.selectedVariant].variantImage;
        },
        inStock(){
            return this.variants[this.selectedVariant].variantQuantity;
        },
    },
});

let app = new Vue({
    el: '#app'
});