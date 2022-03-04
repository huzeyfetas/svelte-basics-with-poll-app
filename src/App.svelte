<script>
  import Header from "./components/Header.svelte";
  import PollList from "./components/PollList.svelte";
  import Footer from "./components/Footer.svelte";
  import CreatePollForm from "./components/CreatePollForm.svelte";

  import Tabs from "./shared/Tabs.svelte";
  // import Card from "./shared/Card.svelte";

  let items = ["Current Polls", "Add New Poll"];
  let activeItem = "Current Polls";
  let polls = [];

  const changeTabHandler = (event) => {
    activeItem = event.detail;
  };
  const addPoolHandler = (event) => {
    polls = [event.detail, ...polls];
    activeItem = "Current Polls";
  };
  const voteHandler = (event) => {
    let id = event.detail.id;
    let vote = event.detail.val;
    polls.map((p) => {
      if (p.id === id) {
        if (vote === "A") {
          p.cntA++;
        } else {
          p.cntB++;
        }
      }
    });
    polls = [...polls];
  };
  $: console.log("polls->", polls);
</script>

<Header />
<main>
  <Tabs {items} {activeItem} on:changeTab={changeTabHandler} />
  {#if activeItem === "Current Polls"}
    <PollList {polls} on:vote={voteHandler} />
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
