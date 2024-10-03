<script lang="ts">
	import { goto } from '$app/navigation';

	export let data;
	let { selectedProduct } = data;
</script>

<div class="flex justify-between items-center">
	<p class="px-2 py-9 text-gray-600 text-5xl font-bold">Product - {selectedProduct?.name}</p>
	<button class="border-2 hover:bg-gray-100 rounded-lg px-2 py-1"
					on:click={() => goto(`/add-edit-product?id=${selectedProduct.id}`)}>Edit Product
	</button>
</div>

<div class="flex w-2/4 p-3">
	<div class="shadow-lg w-full flex flex-col rounded-xl bg-[#E5FFE5] p-3">
		<img src="https://picsum.photos/200/300" class="h-72" alt="" width="100%" />
		<div class="flex flex-col text-xl my-2 px-2">
			<p>{selectedProduct.name}</p>
			<p class="text-sm">{selectedProduct.description}</p>
		</div>
		<div class="flex flex-row justify-start px-2">
			<p class="text-md font-semibold">Price</p>
			<p class="text-md">$ {selectedProduct.price}</p>
		</div>
		<div class="flex gap-2 justify-end">
			<button class="border-2 hover:bg-gray-100 rounded-lg px-2 py-1">Add to cart</button>
		</div>
	</div>
</div>


