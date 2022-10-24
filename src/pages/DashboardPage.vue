<template>
  <q-page class="dashboard q-col-gutter-lg items-start justify-center q-pa-xl">
    <div class="row justify-center">
      <div class="col-xl-8 col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div>
          <div class="row justify-between">
            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <q-card class="q-ma-lg q-pr-lg q-pb-lg">
                <q-card-section class="row" style="padding: 0;">
                  <span class="col-10 fs-28 q-pa-lg bg-grey text-weight-bold">Bugun</span>
                  <span class="col-2 fs-28 q-pt-lg q-pl-md text-weight-bold" style="color: orange">67%</span>
                </q-card-section>
                <q-card-section class="row q-pl-lg" style="padding: 0;">
                  <span class="col-10 fs-18 q-pa-lg">Kelib tushgan murojaatlar soni</span>
                  <span class="col-2 fs-24 q-pa-lg text-weight-bold">150</span>
                </q-card-section>
                <q-separator color="grey" class="q-ml-lg" inset/>
                <q-card-section class="row q-pl-lg" style="padding: 0;">
                  <span class="col-10 fs-18 q-pa-lg">Javob berilganlar soni</span>
                  <span class="col-2 fs-18 q-pa-lg">100</span>
                </q-card-section>
                <q-separator color="grey" class="q-ml-lg" inset/>
              </q-card>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <q-card class="q-ma-lg q-pr-lg q-pb-lg">
                <q-card-section class="row" style="padding: 0;">
                  <span class="col-10 fs-28 q-pa-lg bg-grey text-weight-bold">Joriy oy</span>
                  <span class="col-2 fs-28 q-pt-lg q-pl-md text-weight-bold" style="color: orange">83%</span>
                </q-card-section>
                <q-card-section class="row" style="padding: 0;">
                  <span class="col-10 fs-18 q-pa-lg">Kelib tushgan murojaatlar soni</span>
                  <span class="col-2 fs-24 q-pa-lg text-weight-bold">4337</span>
                </q-card-section>
                <q-separator color="grey" class="q-ml-lg" inset/>
                <q-card-section class="row" style="padding: 0;">
                  <span class="col-10 fs-18 q-pa-lg">Javob berilganlar soni</span>
                  <span class="col-2 fs-18 q-pa-lg">4023</span>
                </q-card-section>
                <q-separator color="grey" class="q-ml-lg" inset/>
              </q-card>
            </div>
          </div>
          <div class="col-12">
            <q-card class="q-ma-lg">
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
                <img class="chart-img" src="../assets/chart-1.png" alt="">
              </q-card-section>
            </q-card>
            <q-card class="q-ma-lg">
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
                <img class="chart-img" src="../assets/chart-2.png" alt="" width="861" height="231">
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <q-card class="q-ma-lg">
          <q-card-section>
            <span>Kun kesimida</span>
            <span>Fevral<br>2022</span>
          </q-card-section>
          <q-separator color="grey" inset/>
          <q-card-section>
            <q-list>
              <q-scroll-area style="height: 79vh">
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
.fs-28
  font-size: 28px
  line-height: 1.15

.fs-24
  font-size: 24px
  line-height: 1.15

.fs-18
  font-size: 18px
  line-height: 1.15

@media (min-width: 1024px) and (max-width: 1439px)
  .chart-img
    width: 650px

@media (min-width: 320px) and (max-width: 600px)

</style>
