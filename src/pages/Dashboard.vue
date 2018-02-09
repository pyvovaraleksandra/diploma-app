<template>
  <div>
    <section class="section" id="dashboard">
      <div class="container">
        <div class="content">
          <div class="row text-center">
            <div class="col-12">
              <h2 class="header">Dashboard</h2>
            </div>
          </div>
          <div class="row profile__content">
            <div class="offset-md-1 col-md-3">
              <div class="profile__content-left text-center">
                <div class="row">
                  <img class="rounded-circle profile__content-left-avatar mx-auto" src="../assets/avatar.png" alt="avatar">
                </div>
                <div class="row">
                  <p class="profile__content-left-name col-sm-7 col-md-12 mx-auto">Olga</p>
                </div>
                <div class="profile__content-left-buttons left-buttons row flex-column">
                  
                  <div v-on:submit.prevent="toAddTask" 
                       class="col-10 col-sm-7 col-md-12 mx-auto">
                    <router-link :to="{name: 'AddTask'}" class="left-buttons-button left-buttons-button-darkblue">Add Task </router-link>
                  </div>

                  <div v-on:submit.prevent="toProfile"
                       class="col-10 col-sm-7 col-md-12 mx-auto">
                    <router-link :to="{name: 'Profile'}" class="left-buttons-button left-buttons-button-blue">Edit profile</router-link>
                  </div>
                  <div class="col-10 col-sm-7 col-md-12 mx-auto">
                    <a href="#/" class="left-buttons-button left-buttons-button-pink">exit</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-10 col-sm-9 col-md-7 dashboard">

              <div id="tasks">
                <div class="row">
                  <div class="col-9 col-sm-7 col-lg-5 dashboard__filter-small">
                    <slick ref="slick" 
                           :options="slickOptions" 
                           @afterChange="showCurrent"
                           class="dashboard__filter d-flex">
                      <div class="dashboard__filter-item"
                           v-for="filter in filterItems"> {{filter.name}} </div>
                    </slick>

                  </div>
                </div>            
                <div class="list dashboard__list">
                  <div class="row dashboard__list-item"
                       v-bind:class="['dashboard__list_status-' + item.status]"
                       v-for="(item, itemKey, index) in items"
                       v-if="item.status.includes(currentFilterStatus)">
                    <div class="dashboard__list-item-time"></div>
                    <h3 class="dashboard__list-item-name mr-auto">{{ item.title }}</h3>
                    <div class="col-sm-4 d-flex justify-content-around dashboard__list-item-icons">
                      <a href="#" class="dashboard__list-item-delete"
                         @click="deleteTask(itemKey)"></a>
                      <a href="#" class="dashboard__list-item-edit"></a>
                      <a href="#" class="dashboard__list-item-tick"
                         @click="changeStatus(itemKey)"></a>
                    </div>
                  </div>                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import Slick from 'vue-slick';
  export default {
    name: 'Dashboard',
    components: { Slick },
    data() {
      return {
        currentFilterStatus : '',
        filterItems: [
          {
            name : 'All tasks',
            status: ''
          },
          {
            name : 'To Do',
            status: 'todo'
          },
          {
            name : 'In Progress',
            status: 'inprogress'
          },
          {
            name : 'Done',
            status: 'done'
          },

        ],
        slickOptions: {
            slidesToShow: 1,
        },
        items: {
          "3rj.u7" : {
            "title" : "Done task",
            "description" : "1",
            "status" : "done"
          },
          "6g5.ep" : {
            "title" : "In progress task",
            "description" : "1",
            "status" : "inprogress"
          },
          "571.уз" : {
            "title" : "To do task",
            "description" : "1",
            "status" : "todo"
          },
          "671.уз" : {
            "title" : "To do task",
            "description" : "1",
            "status" : "todo"
          },
          "541.у5" : {
            "title" : "To do task",
            "description" : "1",
            "status" : "todo"
          }
        }
      };
    },
    methods: {
      changeStatus: function(taskKey) {
        const oldstatus = this.items[taskKey].status;
        this.items[taskKey].status = oldstatus === "inprogress" ? "done" : "inprogress";
      },
      deleteTask(taskKey) {
        this.$delete(this.items, taskKey);
      },
      showCurrent(event, slick, currentSlide) {
        this.currentFilterStatus = this.filterItems[currentSlide].status;
        console.log(this.currentFilterStatus);
      },
      toAddTask: function() {
        this.$router.push({ name: 'addTask' });
      },
      toProfile: function() {
        this.$router.push({ name: 'profile' });
      }, 
      toWelcome: function() {
        this.$router.push({ name: 'welcome' });
      }
    }
  };
</script>

<style>
  @import '../../node_modules/slick-carousel/slick/slick.scss';
</style>

<!-- scroll.
left column = component. 
save scroll after changing status 
import bootstrap
set favicon
add link to edit
set height and width for avatar-->