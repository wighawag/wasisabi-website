<script lang="ts">
	import Notifications from '$lib/core/notifications/Notifications.svelte';
	import VersionAndInstallNotfications from '$lib/core/service-worker/VersionAndInstallNotfications.svelte';
	import NavigationProgress from '$lib/components/NavigationProgress.svelte';
	import {notifications, serviceWorker} from '$lib';
	import {navigating} from '$app/state';
	import '@fontsource-variable/fraunces/full.css';
	import '@fontsource-variable/inter';
	import '@fontsource-variable/jetbrains-mono';
	import '../app.css';
	let {children} = $props();
</script>

<NavigationProgress isNavigating={() => !!navigating.to} />

<div class="grain">
	{@render children()}
</div>

<Notifications {notifications} />

<VersionAndInstallNotfications {serviceWorker} />
