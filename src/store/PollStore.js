import { writable } from "svelte/store";

const PollStore = writable([
  {
    question: "selam naber",
    answerA: "iyiyim",
    answerB: "kötüyüm",
    cntA: 10,
    cntB: 40,
  },
]);

export default PollStore;
