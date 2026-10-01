<script lang="ts">
	import {fly} from 'svelte/transition';
	import type {ServiceWorkerStore} from '$lib/core/service-worker';

	interface Props {
		serviceWorker: ServiceWorkerStore;
	}

	const {serviceWorker}: Props = $props();

	const updateAvailable = $derived(
		$serviceWorker &&
			!$serviceWorker.notSupported &&
			!$serviceWorker.registering &&
			$serviceWorker.updateAvailable &&
			$serviceWorker.registration,
	);
</script>

<!--
	Site-themed take on core's VersionAndInstallNotfications. It sits below the
	fixed nav (h-16) and above it in z-order (nav is z-40), but under the page
	grain (z-50) so it reads as printed on the same paper as everything else.
-->
<div
	aria-live="assertive"
	class="pointer-events-none fixed inset-0 z-[45] flex items-end px-4 py-6 sm:items-start sm:px-6 sm:pt-20"
>
	<div class="flex w-full flex-col items-center sm:items-end">
		{#if updateAvailable}
			<div
				class="pointer-events-auto w-full max-w-sm rounded-md border border-ink-700 bg-ink-900/90 p-5 shadow-xl shadow-ink-950/60 backdrop-blur-md"
				transition:fly={{delay: 250, duration: 300, x: 100}}
			>
				<div class="flex items-start gap-4">
					<div class="flex-1">
						<p class="font-mono text-xs tracking-[0.2em] text-ash uppercase">Update</p>
						<p class="mt-2 font-serif text-lg text-paper-light">A new version is available.</p>
						<p class="mt-1 text-sm text-paper-dim">Reload to get the update.</p>
						<div class="mt-4 flex gap-3">
							<button
								type="button"
								class="rounded-md bg-seal px-4 py-2 text-sm font-medium text-paper-light transition hover:bg-seal-light focus:ring-2 focus:ring-paper/60 focus:outline-none"
								onclick={() => serviceWorker.skipWaiting()}>Reload</button
							>
							<button
								type="button"
								class="rounded-md border border-paper/30 px-4 py-2 text-sm text-paper-light transition hover:border-paper/70 focus:ring-2 focus:ring-paper/60 focus:outline-none"
								onclick={() => serviceWorker.skip()}>Dismiss</button
							>
						</div>
					</div>
					<button
						type="button"
						class="rounded text-ash transition hover:text-paper-light focus:ring-2 focus:ring-paper/60 focus:outline-none"
						onclick={() => serviceWorker.skip()}
					>
						<span class="sr-only">Close</span>
						<svg class="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
							<path
								d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"
							/>
						</svg>
					</button>
				</div>
			</div>
		{/if}
	</div>
</div>
