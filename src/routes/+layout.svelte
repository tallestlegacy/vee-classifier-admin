<script lang="ts">
	import { FirebaseApp } from 'sveltefire';
	import { getFirestore } from 'firebase/firestore';
	import { getAuth } from 'firebase/auth';
	import { app } from '$lib/firebase';

	// Initialize Firebase
	const firestore = getFirestore(app);
	const auth = getAuth(app);
</script>

<FirebaseApp {auth} {firestore}>
	<slot />
</FirebaseApp>

<style>
	:global(html, body) {
		margin: 0;
		width: 100%;
		min-height: 100dvh;
		font-family: sans-serif;
	}
</style>
