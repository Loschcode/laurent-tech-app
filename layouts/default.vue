<template>
  <div>
<div class="container">
  <div class="row row-full">
    <div class="header">
      <div class="row">
        <div class="gr-8@desktop push-4@desktop gr-12@mobile gr-12@tablet">
          <div class="header__prelinks">
            <a href="/career">Career</a>
            <a href="/projects">Projets</a>
          </div>
        </div>

        <div class="gr-4@desktop pull-4@desktop gr-12@mobile gr-12@tablet">
          <div class="header__inside">
            <a href="#">
              <div class="header__author">
                <h1>Laurent Schaffner</h1>
              </div>

              <div class="header__summary">
                Hackers &amp; Painters
              </div>
            </a>

            <div class="header__links">
              <a href="`github`" target="_blank"><i aria-hidden="true" class="fab fa-github"></i></a>
              <a href="`linkedin`" target="_blank"><i aria-hidden="true" class="fab fa-linkedin"></i></a>
              <a href="`twitter`" target="_blank"><i aria-hidden="true" class="fab fa-twitter"></i></a>
              <a href="`facebook`" target="_blank"><i aria-hidden="true" class="fab fa-facebook"></i></a>
              <a href="`skype`" target="_blank"><i aria-hidden="true" class="fab fa-skype"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="row">

    <nuxt />

  </div>
</div>
  </div>
</template>

<style lang="scss">
</style>

<script>
export default {
  name: 'Default',
  props: {
    github: 'https://github.com/Loschcode',
    linkedin: 'http://fr.linkedin.com/in/laurentschaffner',
    twitter: 'https://twitter.com/LoschCode',
    facebook: 'https://www.facebook.com/LoSchaffner',
    skype: 'callto:loschcode'
  }
}
</script>
