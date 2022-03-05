<script>
  import { fade, scale, slide } from "svelte/transition";
  import { flip } from "svelte/animate";
  import { onMount, onDestroy } from "svelte";
  import PollStore from "../store/PollStore";
  import PollDetail from "./PollDetail.svelte";

  let polls;

  //subscribe & unsubscribe
  /*   let unsubscribe;

  onMount(() => {
    console.log("poolist cmpt mounted");
    unsubscribe = PollStore.subscribe((data) => {
      polls = data;
    });
  });

  onDestroy(() => {
    console.log("polllist cmpt destroyed");
    unsubscribe();
  }); */
</script>

<div class="poll-list">
  {#each $PollStore as poll (poll.id)}
    <div in:fade out:scale|local animate:flip={{ duration: 500 }}>
      <PollDetail {poll} on:vote />
    </div>
  {:else}
    <p id="no-poll-txt" transition:slide>
      There is no poll. Click above "Add New Poll" button for creating poll
    </p>
  {/each}
</div>

<style>
  .poll-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1.2rem;
  }

  #no-poll-txt {
    grid-column: 1 / span 2;
    text-align: center;
    color: coral;
    font-size: 1.2rem;
    font-weight: 600;
  }
</style>
