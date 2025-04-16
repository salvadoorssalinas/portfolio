<script setup>

</script>

<template>

  <h2>{{ $t('knowledge')}} </h2>
  <div id="knowledge">
    <pv-accordion :value="['0']" multiple>
      <pv-accordion-panel value="1">
        <pv-accordion-header id="subtitle">{{ $t('skills') }}</pv-accordion-header>
        <pv-accordion-content>
          <h3>{{ $t('languages')}}</h3> C++, C#, Python, Java, JavaScript, TypeScript, Kotlin, Dart
          <h3>{{ $t('frameworks')}}</h3> .NET, Spring Boot, Jetpack Compose, Vue.js, Angular
          <h3>{{ $t('database')}}</h3> SQL Server, MySQL, PostgreSQL, SQLite, MongoDB
        </pv-accordion-content>
      </pv-accordion-panel>
      <pv-accordion-panel value="2">
        <pv-accordion-header id="subtitle">{{ $t('courses') }}</pv-accordion-header>
        <pv-accordion-content>
          <h3><a href="https://www.coursera.org/account/accomplishments/certificate/RQ3E7USVYFNZ" target="_blank">{{$t('course1')}}</a></h3> Universidad de los Andes - Coursera
          <h3><a href="https://www.coursera.org/account/accomplishments/certificate/ZYJK9497HQFU" target="_blank">{{$t('course2')}}</a></h3> Google - Coursera
          <h3><a href="https://www.coursera.org/account/accomplishments/specialization/certificate/APMZ6F9VAFBQ" target="_blank">{{ $t('course3')}}</a></h3> University of Michigan - Coursera
          <h3><a href="https://learn.mongodb.com/c/e5Q5184pQqGzApUPWwXMIQ" target="_blank">{{ $t('course4')}}</a></h3> MongoDB University
          <h3><a href="https://www.coursera.org/account/accomplishments/specialization/FM9DXAFVZ3ES" target="_blank">{{$t('course5')}}</a></h3> University of California, Davis - Coursera
        </pv-accordion-content>
      </pv-accordion-panel>
      <pv-accordion-panel value="3">
        <pv-accordion-header id="subtitle">{{ $t('tools') }}</pv-accordion-header>
        <pv-accordion-content>
          <h3>IDEs</h3> Visual Studio, Visual Studio Code, WebStorm, IntelliJ IDEA, Android Studio, Rider
          <h3>VCS</h3> Git, GitHub
          <h3>{{ $t('design')}}</h3> Figma, Canva
          <h3>{{ $t('hosting')}}</h3> GitHub Pages, Docker, Azure, Render
          <h3>{{ $t('office')}}</h3> Microsoft Office, Google Workspace, Power BI
        </pv-accordion-content>
      </pv-accordion-panel>
    </pv-accordion>

  </div>

</template>

<style scoped>

  #subtitle {
    font-size: 20px;
    font-weight: bold;
    color: #637bc8;
    margin-top: 20px;
  }

  #knowledge {
    padding: 0 40px 30px 40px;
  }

  h2 {
    text-align: center;
    margin-top: 50px;
    margin-bottom: 20px;
  }

  h3 {
    font-weight: bold;
    color: #637bc8;
  }

</style>