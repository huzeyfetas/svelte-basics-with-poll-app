<script>
  import { createEventDispatcher } from "svelte";

  let dispatcher = createEventDispatcher();

  export let poll;
  $: cntTotal = poll.cntA + poll.cntB;
  $: percentA = Math.floor((100 / cntTotal) * poll.cntA);
  $: percentB = Math.floor((100 / cntTotal) * poll.cntB);
  $: {
    console.log(cntTotal, percentA, percentB);
  }
  const voteHandler = (val) => {
    let id = poll.id;
    dispatcher("vote", { id, val });
  };
</script>

<div class="poll-list-item">
  <h3>{poll.question}</h3>
  <p>Total Votes : <span class="cnt-total">{cntTotal}</span></p>
  <div class="answer" on:click={(e) => voteHandler("A")}>
    <div class="percent percent-a" style="width: {percentA}%;" />
    <span>{poll.answerA} ({poll.cntA})</span>
  </div>
  <div class="answer" on:click={(e) => voteHandler("B")}>
    <div class="percent percent-b" style="width: {percentB}%;" />
    <span>{poll.answerB} ({poll.cntB})</span>
  </div>
  <!-- <button on:click={(e) => voteHandlerxxx(poll.id, "A")}
    >{poll.answerA} -> {poll.cntA}</button
  >
  <button on:click={(e) => voteHandlerxxx(poll.id, "B")}
    >{poll.answerB} -> {poll.cntB}</button
  > -->
</div>

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
</style>
