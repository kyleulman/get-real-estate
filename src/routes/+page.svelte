<script lang="ts">
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import EmailForm from '../lib/EmailForm.svelte';
	import type { ActionData, PageData } from './$types';

	export let data: PageData;
	export let form: ActionData;

	let isMounted = false;

	onMount(() => (isMounted = true));
</script>

<main class="mx-auto my-6 flex max-w-4xl flex-col gap-6 tablet:my-28 tablet:gap-28">
	<section class="max-w-2xl space-y-6">
		<h1 class="heading-xl">{data.content.hero.heading}</h1>
		<p>{data.content.hero.description}</p>
		{#if isMounted && form}
			<p transition:slide class:text-red-400={form.error} class:text-green-400={form.message}>
				{@html form.error || form.message}
			</p>
		{/if}
		<div class="flex flex-wrap items-center gap-3">
			<EmailForm />
			<small class="text-red-300">Or continue scrolling to learn more.</small>
		</div>
	</section>
	<section class="max-w-2xl space-y-6 self-end bg-red-400 text-zinc-900">
		<h2 class="heading-lg">{data.content.website.heading}</h2>
		<ul class="space-y-6">
			{#each data.content.website.iconList as l}
				<li class="flex gap-3">
					<figure>
						<svelte:component this={l.icon} size={32} />
					</figure>
					<article class="space-y-1">
						<h3 class="heading-sm">{l.heading}</h3>
						<p>{l.description}</p>
					</article>
				</li>
			{/each}
		</ul>
	</section>
	<section class="max-w-xl self-center text-center">
		<h2 class="heading-md">{data.content.websiteCTA.heading}</h2>
	</section>
	<section class="max-w-2xl space-y-6 bg-red-400 text-zinc-900">
		<h2 class="heading-lg">{data.content.copywriting.heading}</h2>
		<p>{data.content.copywriting.description}</p>
	</section>
	<section class="max-w-xl space-y-6 self-center text-center">
		<h2 class="heading-md">{data.content.copywritingCTA.heading}</h2>
		<p class="text-red-400">{data.content.copywritingCTA.description}</p>
	</section>
</main>
<footer
	class="flex flex-col items-center justify-center gap-6 bg-red-400 px-6 py-28 text-center text-zinc-900"
>
	<h2 class="heading-lg">{data.content.footer.heading}</h2>
	<p>{data.content.footer.description}</p>
	{#if isMounted && form}
		<p
			transition:slide
			class:text-red-400={form.error}
			class:text-green-400={form.message}
			class="max-w-md rounded-lg bg-zinc-900 p-3"
		>
			{@html form.error || form.message}
		</p>
	{/if}
	<EmailForm />
</footer>

<style lang="postcss">
	section {
		@apply p-6;
	}

	h1,
	h2 {
		@apply tracking-tighter;
	}

	.heading-xl {
		@apply text-5xl font-black tablet:text-6xl;
	}

	.heading-lg {
		@apply text-4xl font-black tablet:text-5xl;
	}

	.heading-md {
		@apply text-3xl tablet:text-4xl;
	}

	.heading-sm {
		@apply text-xl font-bold;
	}
</style>
