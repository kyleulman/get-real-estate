<script lang="ts">
	import { page } from '$app/stores';
	import { Head } from '@kyleulman/lib';
	import '../app.css';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Head page={$page.data.page} site={data.site} />

<slot />
