<template>
  <div id="app">
    <Button />
    <DynamicSlicer />
  </div>
</template>

<script>
import { Button } from 'sf-page-schema'
import { DynamicSlicer } from '@/components/index'
export default {
  name: 'App',
  components: {
    Button,
    DynamicSlicer
  }
}
</script>

<style>
</style>
