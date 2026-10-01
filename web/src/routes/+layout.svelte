<script lang="ts">
	import Notifications from '$lib/core/notifications/Notifications.svelte';
	import UpdateNotice from '$lib/components/site/UpdateNotice.svelte';
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

<UpdateNotice {serviceWorker} />
