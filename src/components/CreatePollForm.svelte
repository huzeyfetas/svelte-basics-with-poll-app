<script>
  let fields = {
    question: "",
    answerA: "",
    answerB: "",
  };
  const submitHandler = () => {
    console.log(fields);
  };
  // let question, answerA, answerB;
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
        placeholder="Question"
      />
    </div>
    <div class="form-field">
      <label for="answer-a">Answer A</label>
      <input
        type="text"
        name="answer-a"
        bind:value={fields.answerA}
        id="answer-a"
        placeholder="Answer A"
      />
    </div>
    <div class="form-field">
      <label for="answer-b">Answer B</label>
      <input
        type="text"
        name="answer-b"
        bind:value={fields.answerB}
        id="answer-b"
        placeholder="Answer B"
      />
    </div>
    <button type="submit">Add Question</button>
  </form>
</div>

<style>
  form {
    width: 480px;
    margin: 0 auto;
    padding: 12px;
    border: 1px solid silver;
    border-radius: 4px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
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
</style>
