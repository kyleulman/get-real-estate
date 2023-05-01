<script lang="ts">
	import { page } from '$app/stores';
	import { Head } from '@kyuisonline/workbench';
	import '../app.css';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

{#key $page}
	<Head page={$page.data.content.metadata} shared={data.shared} />
{/key}

<slot />
