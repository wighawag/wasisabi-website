<script lang="ts">
	interface Props {
		code: string;
		label?: string;
	}
	let {code, label}: Props = $props();

	// UI-only state: flips the button text for a moment after copying.
	let copied = $state(false);
	async function copy() {
		await navigator.clipboard.writeText(code);
		copied = true;
		setTimeout(() => (copied = false), 1600);
	}
</script>

<figure class="max-w-full min-w-0 overflow-hidden rounded-lg border border-ink-700 bg-ink-950/80">
	<figcaption
		class="flex items-center justify-between border-b border-ink-700 px-4 py-2 font-mono text-xs text-ash"
	>
		<span>{label ?? 'shell'}</span>
		<button
			type="button"
			onclick={copy}
			class="rounded px-2 py-0.5 text-paper-dim transition hover:bg-ink-700 hover:text-paper-light"
		>
			{copied ? 'copied' : 'copy'}
		</button>
	</figcaption>
	<pre
		class="overflow-x-auto px-4 py-4 font-mono text-[0.82rem] leading-relaxed text-paper-light"><code
			>{code}</code
		></pre>
</figure>
