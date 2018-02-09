<template>
  <div>
	  <section class="editTaskPage profile section" id="editTask">
      <div class="container">
        <div class="content">
          <div class="row text-center">
            <div class="col-12">
              <h2 class="header">Edit task</h2>
            </div>
          </div>
          <div class="row profile__content">
            <div class="offset-md-1 col-md-3">
              <div class="profile__content-left text-center">
                <div class="row">
                  <img class="rounded-circle profile__content-left-avatar mx-auto" src="img/avatar.png" alt="avatar">
                </div>
                <div class="row">
                  <p class="profile__content-left-name col-sm-7 col-md-12 mx-auto">user.name</p>
                </div>
                <div class="profile__content-left-buttons left-buttons row flex-column">

                  <div v-on:submit.prevent="toAddTask" 
                       class="col-10 col-sm-7 col-md-12 mx-auto">
                    <router-link :to="{name: 'AddTask'}" class="left-buttons-button left-buttons-button-darkblue">Add Task </router-link>
                  </div>

                  <div v-on:submit.prevent="toDashboard"
                       class="col-10 col-sm-7 col-md-12 mx-auto">
                    <router-link :to="{name: 'Dashboard'}" class="left-buttons-button left-buttons-button-blue">Dashboard</router-link>
                  </div>

                  <div v-on:submit.prevent="toWelcome"
                       class="col-10 col-sm-7 col-md-12 mx-auto">
                    <router-link :to="{name: 'Welcome'}" class="left-buttons-button left-buttons-button-pink">exit</router-link>
                  </div>

                </div>
              </div>
            </div>
            <div class="col-md-8">
              <form action="#" class="basic-form right-form">
                <div class="form-group alignItemsCenter row">
                  <label for="editTaskTitle" class="col-10 col-sm-4 col-xl-3 col-form-label right-form__group-label">Task title</label>
                  <div class="col-10 col-sm-6 col-xl-5">
                    <textarea class="form-control basic-form-text-input right-form__group-text-input" id="editTaskTitle" maxlength="50" rows="1" cols="45" name="task" placeholder="Old title"></textarea>
                  </div>
                </div>
                <div class="form-group alignItemsCenter row">
                  <label for="editTaskDescription" class="col-sm-4 col-xl-3 col-form-label right-form__group-label">Task description</label>
                  <div class="col-10 col-sm-10 col-xl-8">
                    <textarea class="form-control basic-form-text-input right-form__group-text-input" id="editTaskDescription" maxlength="180" rows="10" cols="80" name="description" placeholder="Old description"></textarea>
                  </div>
                </div> 
                <div class="alignItemsCenter row">
                  <div class="alert basic-form__alert right-form__alert col-sm-10 col-9 " role="alert">
                    Invalid input data
                  </div>
                </div>
                <div class="form-group alignItemsCenter row">
                  <div class="col-10 col-sm-6 offset-md-4 col-xl-5 offset-xl-3">
                    <button type="submit" class="btn btn-lg basic-form-button basic-form-button-pink">Save changes</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div> 
</template>

<script>
  export default {
    name: 'EditTask',
    methods: {
        toAddTask: function() {
          this.$router.push({ name: 'addTask' });
        },

        toDashboard: function() {
          this.$router.push({ name: 'dashboard' });
      	},

      	toWelcome: function() {
          this.$router.push({ name: 'welcome' });
      	}
  	}
  };
</script>