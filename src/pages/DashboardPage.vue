<template>
  <div class="dashboard">
    <div>
      <div class="flex">
        <q-card class="small-card">
          <q-card-section>
            <span>Bugun</span>
            <span>67%</span>
          </q-card-section>
          <q-card-section>
            <span>Kelib tushgan murojaatlar soni</span>
            <span>150</span>
          </q-card-section>
          <q-separator color="grey" inset/>
          <q-card-section>
            <span>Javob berilganlar soni</span>
            <span>100</span>
          </q-card-section>
          <q-separator color="grey" inset/>
        </q-card>
        <q-card class="small-card">
          <q-card-section>
            <span>Joriy oy</span>
            <span>83%</span>
          </q-card-section>
          <q-card-section>
            <span>Kelib tushgan murojaatlar soni</span>
            <span>4337</span>
          </q-card-section>
          <q-separator color="grey" inset/>
          <q-card-section>
            <span>Javob berilganlar soni</span>
            <span>4023</span>
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
            <img src="../assets/chart-1.png" alt="" width="855" height="234">
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
            <img src="../assets/chart-2.png" alt="" width="861" height="231">
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div>
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
.dashboard
  display: flex
  justify-content: center

.small-card
  width: 439px
  height: 213px
  margin-top: 60px
  margin-left: 52px

.medium-card
  width: 930px
  height: 302px
  margin-left: 52px
  margin-top: 35px

.big-card
  width: 455px
  height: 886px
  margin-top: 60px
  margin-left: 42px

.flex-column
  display: flex
  flex-direction: column
  justify-content: space-between
  height: 100%
</style>
