<script>
    export let data = {}
</script>


<p>Listado</p>
<p>Time: {data.time}</p>

{#each (data.list || []) as product}
    <p>{product.id}: {product.name}</p>
{/each}