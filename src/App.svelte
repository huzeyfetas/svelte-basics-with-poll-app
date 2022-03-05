<script>
  import Header from "./components/Header.svelte";
  import PollList from "./components/PollList.svelte";
  import Footer from "./components/Footer.svelte";
  import CreatePollForm from "./components/CreatePollForm.svelte";
  import Tabs from "./shared/Tabs.svelte";

  let items = ["Current Polls", "Add New Poll"];
  let activeItem = "Current Polls";

  const changeTabHandler = (event) => {
    activeItem = event.detail;
  };

  const addPoolHandler = () => (activeItem = "Current Polls");
</script>

<Header />
<main>
  <Tabs {items} {activeItem} on:changeTab={changeTabHandler} />
  {#if activeItem === "Current Polls"}
    <PollList />
  {:else}
    <CreatePollForm on:addPool={addPoolHandler} />
  {/if}
</main>
<Footer />

<style>
  main {
    max-width: 960px;
    margin: 40px auto;
  }
</style>
