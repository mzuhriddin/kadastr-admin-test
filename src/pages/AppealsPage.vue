<template>
  <div>
    <q-card class="appeal-card q-ma-xl" style="height: 886px">
      <q-card-section class="appeal-card-header row flex justify-between">
        <div class="row flex q-pl-xl" style="height: 56px">
          <q-input class="input q-mr-xl" color="grey-3" label-color="black" outlined label="11.02.2022" model-value="">
            <template v-slot:append>
              <q-icon>
                <img src="../assets/date_range.svg" alt="">
              </q-icon>
            </template>
          </q-input>
          <q-select class="input q-mr-xl" outlined label="Holati" model-value=""/>
          <q-input class="input" outlined label="Operator" model-value=""/>
        </div>
        <div class="q-pr-md">
          <q-btn class="bg-primary rounded-borders" size="lg">
            <img src="../assets/download.svg" alt="" width="24" height="24">
          </q-btn>
        </div>
      </q-card-section>
      <q-separator color="grey"/>
      <q-list>
        <q-item class="list-fixed row justify-around bg-grey-4 q-px-sm">
          <span>Mijoz</span>
          <span>Murojaat</span>
          <span>Javob</span>
          <span>Operator</span>
        </q-item>
        <q-scroll-area style="height: 750px">
          <template v-for="appeal in appeals">
            <q-item
              clickable
              class="row justify-around"
              @click="showChat(appeal)"
            >
              <div>
                <div class="row">
                  <span class="q-mr-md">F.I.Sh:</span>
                  <span>{{ appeal.name }}</span>
                </div>
                <div class="row">
                  <span class="q-mr-md">Tel:</span>
                  <span>{{ appeal.phone }}</span>
                </div>
                <div class="row">
                  <span class="q-mr-md">Yaratildi:</span>
                  <span>{{ appeal.created }}</span>
                </div>
              </div>
              <div>
                <div class="row">
                  <span class="q-mr-md">Holati:</span>
                  <span>{{ appeal.status }}</span>
                </div>
                <div class="row">
                  <span class="q-mr-md">Vaqti:</span>
                  <span>{{ appeal.time }}</span>
                </div>
                <div class="row">
                  <span class="q-mr-md">Mazmun:</span>
                  <span>{{ appeal.content }}</span>
                </div>
              </div>
              <div>
                <div class="row">
                  <span class="q-mr-md">Qabul qilindi:</span>
                  <span>{{ appeal.accepted }}</span>
                </div>
                <div class="row">
                  <span class="q-mr-md">Javob berildi:</span>
                  <span>{{ appeal.answered }}</span>
                </div>
                <div class="row">
                  <span class="q-mr-md">Vaqtlar farqi:</span>
                  <span>{{ appeal.time_range }}</span>
                </div>
              </div>
              <div>
                <div class="row">
                  <span class="q-mr-md">F.I.Sh:</span>
                  <span>{{ appeal.operator }}</span>
                </div>
                <div class="row">
                  <span class="q-mr-md">Tel:</span>
                  <span>{{ appeal.operator_phone }}</span>
                </div>
                <div class="row">
                  <span class="q-mr-md">Holati:</span>
                  <span>{{ appeal.operator_status }}</span>
                </div>
              </div>
            </q-item>
          </template>
        </q-scroll-area>
      </q-list>
    </q-card>
    <Chat
      v-if="show"
      :answered="answered"
      :name="name"
      :phone="phone"
      :time="time"
      :content="content"
    />
  </div>
</template>

<script>
import Chat from "components/Chat";

export default {
  name: "AppealsPage",
  components: {Chat},
  data() {
    return {
      name: "",
      phone: "",
      time: "",
      answered: "",
      content: "",
      appeals: [
        {
          name: "Ivan Ivanov",
          phone: "+998 99 999 99 99",
          created: "11.02.2022",
          status: "Qabul qilinmadi",
          time: "11:00 11.02.2022",
          content: "lorem ipsum dolor sit amet",
          accepted: "11:00 11.02.2022",
          answered: "12:00 11.02.2022",
          time_range: "01:00:00",
          operator: "Ivan Ivanov",
          operator_phone: "+998 99 999 99 99",
          operator_status: "Faol",
        }, {
          name: "Ivan Ivanov",
          phone: "+998 99 999 99 99",
          created: "11.02.2022",
          status: "Qabul qilinmadi",
          time: "11:00 11.02.2022",
          content: "lorem ipsum dolor sit amet",
          accepted: "11:00 11.02.2022",
          answered: "12:00 11.02.2022",
          time_range: "01:00:00",
          operator: "Ivan Ivanov",
          operator_phone: "+998 99 999 99 99",
          operator_status: "Faol",
        }, {
          name: "Ivan Ivanov",
          phone: "+998 99 999 99 99",
          created: "11.02.2022",
          status: "Qabul qilinmadi",
          time: "11:00 11.02.2022",
          content: "lorem ipsum dolor sit amet",
          accepted: "11:00 11.02.2022",
          answered: "12:00 11.02.2022",
          time_range: "01:00:00",
          operator: "Ivan Ivanov",
          operator_phone: "+998 99 999 99 99",
          operator_status: "Faol",
        }, {
          name: "Ivan Ivanov",
          phone: "+998 99 999 99 99",
          created: "11.02.2022",
          status: "Qabul qilinmadi",
          time: "11:00 11.02.2022",
          content: "lorem ipsum dolor sit amet",
          accepted: "11:00 11.02.2022",
          answered: "12:00 11.02.2022",
          time_range: "01:00:00",
          operator: "Ivan Ivanov",
          operator_phone: "+998 99 999 99 99",
          operator_status: "Faol",
        }, {
          name: "Ivan Ivanov",
          phone: "+998 99 999 99 99",
          created: "11.02.2022",
          status: "Qabul qilinmadi",
          time: "11:00 11.02.2022",
          content: "lorem ipsum dolor sit amet",
          accepted: "11:00 11.02.2022",
          answered: "12:00 11.02.2022",
          time_range: "01:00:00",
          operator: "Ivan Ivanov",
          operator_phone: "+998 99 999 99 99",
          operator_status: "Faol",
        }, {
          name: "Ivan Ivanov",
          phone: "+998 99 999 99 99",
          created: "11.02.2022",
          status: "Qabul qilinmadi",
          time: "11:00 11.02.2022",
          content: "lorem ipsum dolor sit amet",
          accepted: "11:00 11.02.2022",
          answered: "12:00 11.02.2022",
          time_range: "01:00:00",
          operator: "Ivan Ivanov",
          operator_phone: "+998 99 999 99 99",
          operator_status: "Faol",
        }, {
          name: "Ivan Ivanov",
          phone: "+998 99 999 99 99",
          created: "11.02.2022",
          status: "Qabul qilinmadi",
          time: "11:00 11.02.2022",
          content: "lorem ipsum dolor sit amet",
          accepted: "11:00 11.02.2022",
          answered: "12:00 11.02.2022",
          time_range: "01:00:00",
          operator: "Ivan Ivanov",
          operator_phone: "+998 99 999 99 99",
          operator_status: "Faol",
        }, {
          name: "Ivan Ivanov",
          phone: "+998 99 999 99 99",
          created: "11.02.2022",
          status: "Qabul qilinmadi",
          time: "11:00 11.02.2022",
          content: "lorem ipsum dolor sit amet",
          accepted: "11:00 11.02.2022",
          answered: "12:00 11.02.2022",
          time_range: "01:00:00",
          operator: "Ivan Ivanov",
          operator_phone: "+998 99 999 99 99",
          operator_status: "Faol",
        }, {
          name: "Ivan Ivanov",
          phone: "+998 99 999 99 99",
          created: "11.02.2022",
          status: "Qabul qilinmadi",
          time: "11:00 11.02.2022",
          content: "lorem ipsum dolor sit amet",
          accepted: "11:00 11.02.2022",
          answered: "12:00 11.02.2022",
          time_range: "01:00:00",
          operator: "Ivan Ivanov",
          operator_phone: "+998 99 999 99 99",
          operator_status: "Faol",
        }, {
          name: "Ivan Ivanov",
          phone: "+998 99 999 99 99",
          created: "11.02.2022",
          status: "Qabul qilinmadi",
          time: "11:00 11.02.2022",
          content: "lorem ipsum dolor sit amet",
          accepted: "11:00 11.02.2022",
          answered: "12:00 11.02.2022",
          time_range: "01:00:00",
          operator: "Ivan Ivanov",
          operator_phone: "+998 99 999 99 99",
          operator_status: "Faol",
        }

      ],
      show: false
    }
  },
  methods: {
    showChat(appeal) {
      if (this.show === false) {
        this.show = true
        this.name = appeal.name
        this.phone = appeal.phone
        this.time = appeal.time
        this.answered = appeal.answered
        this.content = appeal.content
      } else {
        this.show = false
        this.name = ""
        this.phone = ""
        this.time = ""
        this.answered = ""
        this.content = ""
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.appeal-card-header
  align-items: center

.list-fixed
  align-items: center

.input
  width: 180px
  height: 56px
</style>
