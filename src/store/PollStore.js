import { writable } from "svelte/store";

const PollStore = writable([
  {
    question: "Do you like svelte ?",
    answerA: "no",
    answerB: "yes",
    cntA: 1,
    cntB: 9,
  },
]);

export default PollStore;
