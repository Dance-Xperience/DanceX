<script lang="ts">
	import type { Friend } from '../types/Friend';
	import rawFriends from '$lib/data/friends.json';

	import FriendCard from '$lib/components/FriendCard.svelte';

	const friend: Friend[] = rawFriends.filter((friend) => friend.name != 'Generic Friend Template');
</script>

<ul>
	{#each friend as friend}
		<li>
			<FriendCard {friend} />
		</li>
	{/each}
</ul>
