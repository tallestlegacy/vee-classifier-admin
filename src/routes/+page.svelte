<script lang="ts">
	import UsersHistory from '$lib/components/UsersHistory.svelte';
	import UsersTab from '$lib/components/UsersTab.svelte';
	import { Collection, docStore } from 'sveltefire';

	function getIndividualUsers(predistions: any[]) {
		const users: any[] = [];
		predistions.forEach((prediction) => {
			let idx = users.findIndex((e) => e.email === prediction.email);
			if (idx === -1) {
				users.push({
					email: prediction.email,
					id: prediction.userId,
					predictions: [prediction]
				});
			} else {
				users[idx].predictions.push(prediction);
			}
		});
		return users;
	}

	let currentIndex = 0;
</script>

<Collection ref="/predictions" let:data let:count>
	<main>
		<UsersTab users={getIndividualUsers(data)} bind:currentIndex />
		<UsersHistory predictions={getIndividualUsers(data)[currentIndex]?.predictions} />
	</main>
</Collection>

<style>
	main {
		display: grid;
		grid-template-columns: auto 1fr;
		height: 100dvh;
		width: 100%;
		overflow: hidden;
	}
</style>
