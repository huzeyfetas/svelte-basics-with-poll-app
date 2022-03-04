<script>
  import PollDetail from "./PollDetail.svelte";
  import Card from "../shared/Card.svelte";

  export let polls;
</script>

<div class="poll-list">
  {#each polls as poll}
    <Card>
      <PollDetail {poll} on:vote />
    </Card>
  {:else}
    <p id="no-poll-txt">
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
