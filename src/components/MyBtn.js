export default function button({ apiUrl, inputValue, refreshTodos }) {
  async function handleSubmitClick() {
    await fetch(`${apiUrl}/postTodoes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ task: inputValue }),
    });
    refreshTodos();
  }

  return (
    <button class="submitBtn" onClick={handleSubmitClick}>
      Submit
    </button>
  );
}
