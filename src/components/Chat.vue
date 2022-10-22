<template>
  <q-card>
    <q-card-section>
      <div>
        <span>F.I.Sh:</span>
        <span>{{ name }}</span>
      </div>
      <div>
        <span>Tel:</span>
        <span>{{ phone }}</span>
      </div>
    </q-card-section>
    <q-separator color="grey"/>
    <div class="q-pa-md row justify-center">
      <div>
        <q-chat-message
          :name="time"
          :text="content"
        />
        <q-chat-message
          :name="answered"
          :text="content"
          sent
        />
      </div>
    </div>
  </q-card>
</template>

<script>
export default {
  name: "Chat",
  props: ["name", "phone", "time", "answered", "content"]
}
</script>

<style scoped>

</style>
