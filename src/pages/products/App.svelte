<script>
    import { onMount } from 'svelte';
    import ApiCall from "../../../helpers/api_call";
    import ProductList from "./ProductList.svelte";

    let number = 0
    let data = {}

    const getProducts = async () => {
        try {
            const response = await ApiCall.request('/api/products')
            return response.data
        } catch (error) {
            console.log(error)
        }
    }

    onMount(async () => {
        data = await getProducts()
    })
</script>

<h1>Products Page</h1>

<a href="/login">Login</a>
<a href="/products">Products</a>

<h2>{number}</h2>
<button on:click={() => number++}>+</button>

<ProductList {data}/>