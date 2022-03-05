<script>
  import PollStore from "../store/PollStore";
  import Card from "../shared/Card.svelte";
  import Button from "../shared/Button.svelte";
  import { tweened } from "svelte/motion";

  export let poll;
  $: cntTotal = poll.cntA + poll.cntB;
  $: percentA = Math.floor((100 / cntTotal) * poll.cntA) || 0;
  $: percentB = Math.floor((100 / cntTotal) * poll.cntB) || 0;
  const tweenedA = tweened(0);
  const tweenedB = tweened(0);
  $: tweenedA.set(percentA);
  $: tweenedB.set(percentB);
  $: {
    console.log(cntTotal, percentA, percentB);
  }
  const voteHandler = (val) => {
    let id = poll.id;

    PollStore.update((currentPolls) => {
      currentPolls.map((p) => {
        if (p.id === id) {
          if (val === "A") {
            p.cntA++;
          } else {
            p.cntB++;
          }
        }
      });
      return [...currentPolls];
    });
  };

  const deleteHandler = (id) => {
    PollStore.update((currentPolls) => {
      return currentPolls.filter((p) => p.id !== id);
    });
    console.log("delete");
  };
</script>

<Card>
  <div class="poll-list-item">
    <h3>{poll.question}</h3>
    <p>Total Votes : <span class="cnt-total">{cntTotal}</span></p>
    <div class="answer" on:click={(e) => voteHandler("A")}>
      <div class="percent percent-a" style="width: {$tweenedA}%;" />
      <span>{poll.answerA} ({poll.cntA})</span>
    </div>
    <div class="answer" on:click={(e) => voteHandler("B")}>
      <div class="percent percent-b" style="width: {$tweenedB}%;" />
      <span>{poll.answerB} ({poll.cntB})</span>
    </div>
    <div class="btn-container">
      <Button flat={true} on:click={(e) => deleteHandler(poll.id)}
        >Delete</Button
      >
    </div>
  </div>
</Card>

<style>
  .poll-list-item > h3 {
    margin: 0 auto;
    color: #555;
  }
  .poll-list-item > p {
    margin-top: 0.4rem;
    margin-bottom: 1.8rem;
    font-size: 0.9rem;
    color: #aaa;
  }
  .answer {
    background-color: #fafafa;
    cursor: pointer;
    margin: 0.8rem auto;
    position: relative;
  }
  .answer:hover {
    opacity: 0.6;
  }
  .answer > span {
    display: inline-block;
    padding: 0.8rem 1.2rem;
  }
  .cnt-total {
    font-weight: 600;
  }

  .percent {
    height: 100%;
    position: absolute;
    box-sizing: border-box;
  }
  .percent-a {
    border-left: 4px solid #cf1919;
    background: rgba(217, 27, 66, 0.2);
  }
  .percent-b {
    border-left: 4px solid #45c496;
    background: rgba(69, 196, 150, 0.2);
  }
  .btn-container {
    margin-top: 2.2rem;
    text-align: center;
  }
  .btn-container button {
  }
</style>
