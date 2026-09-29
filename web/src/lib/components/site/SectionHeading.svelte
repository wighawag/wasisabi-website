<script lang="ts">
	interface Props {
		kicker: string;
		title: string;
		intro?: string;
	}
	let {kicker, title, intro}: Props = $props();
</script>

<header class="max-w-2xl">
	<p class="font-mono text-xs tracking-[0.25em] text-ash uppercase">{kicker}</p>
	<h2 class="mt-4 text-4xl leading-tight font-light text-paper-light sm:text-5xl">
		{title}
	</h2>
	{#if intro}
		<p class="mt-5 text-lg leading-relaxed text-paper-dim">{intro}</p>
	{/if}
</header>
