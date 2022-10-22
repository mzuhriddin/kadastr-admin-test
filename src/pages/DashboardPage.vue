<template>
  <q-page class="dashboard q-col-gutter-lg items-start justify-center" padding>
    <div class="row">
      <div class="col-xl-8 col-md-7">
        <div class="column">
          <div class="row justify-between">
            <q-card class="col-6">
              <q-card-section class="row">
                <span class="col-9">Bugun</span>
                <span class="col-3">67%</span>
              </q-card-section>
              <q-card-section class="row">
                <span class="col-9">Kelib tushgan murojaatlar soni</span>
                <span class="col-3">150</span>
              </q-card-section>
              <q-separator color="grey" inset/>
              <q-card-section class="row">
                <span class="col-9">Javob berilganlar soni</span>
                <span class="col-3">100</span>
              </q-card-section>
              <q-separator color="grey" inset/>
            </q-card>
            <q-card class="col-6">
              <q-card-section class="row">
                <span class="col-9">Joriy oy</span>
                <span class="col-3">83%</span>
              </q-card-section>
              <q-card-section class="row">
                <span class="col-9">Kelib tushgan murojaatlar soni</span>
                <span class="col-3">4337</span>
              </q-card-section>
              <q-separator color="grey" inset/>
              <q-card-section class="row">
                <span class="col-9">Javob berilganlar soni</span>
                <span class="col-3">4023</span>
              </q-card-section>
              <q-separator color="grey" inset/>
            </q-card>
          </div>
          <div>
            <q-card class="medium-card flex">
              <q-card-section>
                <span>Oy bo'yicha statistika</span>
                <span>Fevral 2022</span>
                <span>
              <q-icon>
                <img src="../assets/date_range.svg" alt=""/>
              </q-icon>
            </span>
              </q-card-section>
              <q-card-section>
                <img src="../assets/chart-1.png" alt="">
              </q-card-section>

            </q-card>
            <q-card class="medium-card flex">
              <q-card-section>
                <span>Yil bo'yicha statistika</span>
                <span>2022</span>
                <span>
              <q-icon>
                <img src="../assets/date_range.svg" alt=""/>
              </q-icon>
            </span>
              </q-card-section>
              <q-card-section>
                <img src="../assets/chart-2.png" alt="">
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-md-5">
        <q-card class="big-card">
          <q-card-section>
            <span>Kun kesimida</span>
            <span>Fevral<br>2022</span>
          </q-card-section>
          <q-separator color="grey" inset/>
          <q-card-section>
            <q-list>
              <q-scroll-area style="height: 720px">
                <q-item v-for="appeal in appeals" class="flex-column">
                  <q-item-section>
                    <span>{{ appeal.date }}</span>
                    <span>{{ appeal.answeredAppeals / appeal.totalAppeals * 100 }}%</span>
                  </q-item-section>
                  <q-item-section>
                    <span>Kelib tushgan murojaatlar soni</span>
                    <span>{{ appeal.totalAppeals }}</span>
                  </q-item-section>
                  <q-item-section>
                    <span>Javob berilganlar soni</span>
                    <span>{{ appeal.answeredAppeals }}</span>
                  </q-item-section>
                  <q-separator color="grey" inset/>
                </q-item>
              </q-scroll-area>
            </q-list>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'DashboardPage',
  data() {
    return {
      appeals: [
        {
          date: "2021-02-01",
          totalAppeals: 128,
          answeredAppeals: 98
        },
        {
          date: "2021-02-02",
          totalAppeals: 150,
          answeredAppeals: 100
        },
        {
          date: "2021-02-03",
          totalAppeals: 150,
          answeredAppeals: 100
        },
        {
          date: "2021-02-04",
          totalAppeals: 150,
          answeredAppeals: 100
        },
        {
          date: "2021-02-05",
          totalAppeals: 150,
          answeredAppeals: 100
        },
        {
          date: "2021-02-06",
          totalAppeals: 150,
          answeredAppeals: 100
        },
        {
          date: "2021-02-07",
          totalAppeals: 150,
          answeredAppeals: 100
        },
        {
          date: "2021-02-08",
          totalAppeals: 150,
          answeredAppeals: 100
        },
        {
          date: "2021-02-09",
          totalAppeals: 150,
          answeredAppeals: 100
        },
        {
          date: "2021-02-10",
          totalAppeals: 150,
          answeredAppeals: 100
        },
        {
          date: "2021-02-11",
          totalAppeals: 150,
          answeredAppeals: 100
        },
        {
          date: "2021-02-12",
          totalAppeals: 150,
          answeredAppeals: 100
        },
        {
          date: "2021-02-13",
          totalAppeals: 150,
          answeredAppeals: 100
        },
        {
          date: "2021-02-14",
          totalAppeals: 150,
          answeredAppeals: 100
        },
        {
          date: "2021-02-15",
          totalAppeals: 150,
          answeredAppeals: 100
        },
        {
          date: "2021-02-16",
          totalAppeals: 150,
          answeredAppeals: 100
        },
        {
          date: "2021-02-17",
          totalAppeals: 150,
          answeredAppeals: 100
        },
        {
          date: "2021-02-18",
          totalAppeals: 150,
          answeredAppeals: 100
        },
        {
          date: "2021-02-19",
          totalAppeals: 150,
          answeredAppeals: 100
        },
        {
          date: "2021-02-20",
          totalAppeals: 150,
          answeredAppeals: 100
        },
        {
          date: "2021-02-21",
          totalAppeals: 150,
          answeredAppeals: 100
        },
        {
          date: "2021-02-22",
          totalAppeals: 150,
          answeredAppeals: 100
        },
        {
          date: "2021-02-23",
          totalAppeals: 150,
          answeredAppeals: 100
        },
        {
          date: "2021-02-24",
          totalAppeals: 150,
          answeredAppeals: 100
        },
        {
          date: "2021-02-25",
          totalAppeals: 150,
          answeredAppeals: 100
        },
        {
          date: "2021-02-26",
          totalAppeals: 150,
          answeredAppeals: 100
        },
        {
          date: "2021-02-27",
          totalAppeals: 150,
          answeredAppeals: 100
        },
        {
          date: "2021-02-28",
          totalAppeals: 150,
          answeredAppeals: 100
        }
      ]
    }
  }
})
</script>

<style lang="sass" scoped>
.flex-column
  display: flex
  flex-direction: column
  justify-content: space-between
  height: 100%
</style>
