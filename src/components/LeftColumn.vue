<template>
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
</template>