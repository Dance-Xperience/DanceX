<script lang="ts">
	import type { Friend } from '../types/Friend';

	export let friend: Friend;
</script>

<article>
	<h3>{friend.name}</h3>
	<img src={friend.img} alt="" />
	{#if friend.bio}
		<p>{friend.bio}</p>
	{/if}
	<ul>
		{#each Object.entries(friend.socials) as [key, value]}
			<li>
				<a href={value} target="_blank">{key}</a>
			</li>
		{/each}
	</ul>
</article>
