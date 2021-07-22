<template>
    <div id="app">  
        <div class="nav-bar"></div>
        <div class="cart">
            <p>Cart({{ cart.length }})</p>
        </div>
        <product @add-to-cart="addToCart"></product>
    </div> 
</template>
<script>
import Product from './Product.vue';

export default {
    name:'ProductPage',
    components:{
        Product
    },
    data (){
        return { cart:[] }
    },
    methods: {
        addToCart(variantId){
          this.cart.push(variantId)
        }
    }
}
</script>