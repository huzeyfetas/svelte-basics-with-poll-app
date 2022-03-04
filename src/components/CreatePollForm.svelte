<script>
  import { createEventDispatcher } from "svelte";
  import Button from "../shared/Button.svelte";

  let dispatcher = createEventDispatcher();
  let fields = {
    question: "",
    answerA: "",
    answerB: "",
  };
  let error = {
    question: "",
    answerA: "",
    answerB: "",
  };

  let isValid = false;

  const submitHandler = () => {
    isValid = true;
    for (const key in fields) {
      checkIsValid(key);
    }

    // add poll
    if (isValid) {
      let data = {
        ...fields,
        cntA: 0,
        cntB: 0,
        id: ~~(Math.random() * 1000000),
      };

      dispatcher("addPool", data);
      isValid = false;
      fields.question = "";
      fields.answerA = "";
      fields.answerB = "";
    }
  };

  const checkIsValid = (key) => {
    let val = fields[key];

    if (key === "question") {
      if (val.trim().length < 5) {
        isValid = false;

        error[key] = "question must be least 5 characters long";
      } else {
        error[key] = "";
      }
    }
    if (key === "answerA") {
      if (val.trim().length < 1) {
        isValid = false;
        error[key] = "answer a can not be empty";
      } else {
        error[key] = "";
      }
    }
    if (key === "answerB") {
      if (val.trim().length < 1) {
        isValid = false;
        error[key] = "answer b can not be empty";
      } else {
        error[key] = "";
      }
    }
  };
</script>

<div>
  <form on:submit|preventDefault={submitHandler}>
    <div class="form-field">
      <label for="question">Poll Question</label>
      <input
        type="text"
        name="question"
        bind:value={fields.question}
        id="question"
        placeholder="Enter Your Question"
      />
      <div class="error" class:error-show={error.question.length != ""}>
        {error.question}
      </div>
    </div>

    <div class="form-field">
      <label for="answer-a">Answer A</label>
      <input
        type="text"
        name="answer-a"
        bind:value={fields.answerA}
        id="answer-a"
        placeholder="Enter Answer For A"
      />
      <div class="error" class:error-show={error.answerA.length != ""}>
        {error.answerA}
      </div>
    </div>

    <div class="form-field">
      <label for="answer-b">Answer B</label>
      <input
        type="text"
        name="answer-b"
        bind:value={fields.answerB}
        id="answer-b"
        placeholder="Enter Answer For B"
      />
      <div class="error" class:error-show={error.answerB.length != ""}>
        {error.answerB}
      </div>
    </div>
    <!-- <button type="submit">Add Question</button> -->
    <Button type="secondary" flat={true}>Add Poll</Button>
  </form>
</div>

<style>
  form {
    text-align: center;
    width: 480px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 4px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.125);
  }
  label {
    font-weight: 600;
  }
  input {
    width: 100%;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
  .form-field label {
    /* text-shadow: 1px 1px 4px rgb(0, 0, 0); */
    margin-bottom: 4px;
  }
  .form-field {
    margin: 18px 0;
    text-align: left;
  }
  button {
    width: 100%;
    background-color: coral;
    color: white;
    /* border: 1px solid chocolate; */
    border: none;
    border-radius: 6px;

    box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
    padding: 12px;
  }
  button:hover {
    cursor: pointer;
    background-color: rgb(248, 110, 60);
  }

  .error {
    display: none;
  }
  .error-show {
    display: block;
    color: rgb(218, 12, 12);
    text-transform: capitalize;
    font-size: 0.8rem;
    font-weight: 500;
    /* animation-name: error-show-animation; */
    /* animation-duration: 4; */
    animation: error-show-animation 2s infinite;
    position: relative;
  }

  @keyframes error-show-animation {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
</style>
