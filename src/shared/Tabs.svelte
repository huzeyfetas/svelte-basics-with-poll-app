<script>
  import { createEventDispatcher } from "svelte";

  let dispatcher = createEventDispatcher();

  export let items;
  export let activeItem;
</script>

<div class="tabs">
  <ul>
    {#each items as item}
      <li
        class:active={item === activeItem}
        on:click={() => dispatcher("changeTab", item)}
      >
        {item}
      </li>
    {/each}
  </ul>
</div>

<style>
  .tabs {
    margin-bottom: 40px;
  }

  ul {
    display: flex;
    justify-content: center;
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  li {
    color: #636363;
    display: inline-block;
    padding: 4px 8px;
    margin: 0 8px;
    cursor: pointer;
    /* font-size: 18px; */
    font-weight: 600;
  }

  .active {
    color: #cf1919;
    border-bottom: 2px solid #cf1919;
    /* text-decoration: underline; */
  }
</style>
