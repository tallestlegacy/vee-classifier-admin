<script lang="ts">
	export let users: any[] = [];
	export let currentIndex: number = 0;
</script>

<nav>
	<h3>Patients</h3>

	<hr />

	{#each users as user, index}
		<button
			on:click={() => (currentIndex = index)}
			class="tab-item {currentIndex == index ? 'active' : ''}"
		>
			<span class="user-email"> {user.email} </span>
			<span class="user-id">
				{user.id}
			</span>
		</button>
	{/each}
</nav>

<style>
	hr {
		background: #000;
		height: 1px;
	}

	nav {
		background: #0000;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;

		height: 100%;
		overflow: auto;
		padding: 2rem 1rem;
		border-right: 1px solid #0006;
	}

	.tab-item {
		height: fit-content;
		background: none;
		border: none;
		padding: 1rem 0.5rem;
		cursor: pointer;
		font-weight: 600;

		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.25rem;

		border-radius: 0.25rem;
	}

	.user-email {
		font-size: 0.875rem;
	}

	.user-id {
		font-weight: 400;
		font-size: 0.75rem;
		color: #0008;
	}

	.active {
		background: #0003;
	}

	.active .user-id,
	.active .user-email {
		color: purple;
	}
</style>
