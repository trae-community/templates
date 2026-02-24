<script>
  let count = 0
  const increment = () => {
    count += 1
  }
</script>

<main>
  <h1>Hello Svelte!</h1>
  <div class="card">
    <button on:click={increment}>
      count is {count}
    </button>
  </div>
</main>

<style>
  main {
    font-family: sans-serif;
    text-align: center;
    padding: 2rem;
  }
</style>
