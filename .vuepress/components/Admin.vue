<template>
  
</template>

<script>
import CMS from "netlify-cms";
import "netlify-cms/dist/cms.css";
import netlifyIndentityWidget from "netlify-identity-widget";

export default {
  created() {
    window.netlifyIndentityWidget = netlifyIndentityWidget;
    netlifyIndentityWidget.init();
  }
};
</script>