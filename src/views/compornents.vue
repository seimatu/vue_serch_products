<template>
  <div class="about">
    <h1>This is an about page</h1>
    <body>
      <h1>hello! electron</h1>
      <form>
        <p>
          ID: <input type="text" name="example" placeholder="ここにIDを入力" />
        </p>
        <p>Password: <input type="password" /></p>
        <button type="submit">送信</button>
      </form>

      <button type="submit" name="name" value="value" onclick="start()">
        start
      </button>
    </body>
  </div>
</template>
