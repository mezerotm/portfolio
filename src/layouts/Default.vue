<template>
  <div class="layout">
    <header>
      <h1>
        <g-link to="/">{{ $static.metaData.siteName }}</g-link>
      </h1>
      <nav>
        <g-link class="m-1" to="/portfolio">Portfolio</g-link>
        <g-link class="m-1" to="/blog">Blog</g-link>
        <g-link class="m-1" to="/news">News</g-link>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>
