<script lang="ts">
	import dayjs from 'dayjs';

	import relativeTime from 'dayjs/plugin/relativeTime';
	dayjs.extend(relativeTime);

	export let predictions: any[] = [];

	function formatRelativeTime(date: Date) {
		return dayjs(date).fromNow();
	}
</script>

<div class="container">
	{#each predictions as prediction}
		<div class="prediction-card">
			<span class="prediction">{prediction.prediction}</span>
			<span class="confidence">{prediction.confidence} confidence</span>
			<span class="date">{formatRelativeTime(prediction.date)}</span>
		</div>
	{/each}
</div>

<style>
	.container {
		padding: 1rem;
		height: 100%;
		overflow: auto;
		display: flex;
		flex-direction: column;
		gap: 1rem;

		background-color: #d0c4e8;
	}

	.prediction-card {
		background-color: white;
		padding: 1rem;
		border-radius: 0.5rem;
		border: 1px solid #673bb789;
		box-shadow: 0 2px 12px #0001;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.prediction {
		font-weight: 600;
		font-size: 1rem;
	}

	.confidence {
		font-size: 0.875rem;
	}

	.date {
		font-size: 0.75rem;
		color: #999;
	}
</style>
