<template>
  <div>
    <section class="profile section" id="profile">
      <div class="container">
        <div class="content">
          <div class="row text-center">
            <div class="col-12">
              <h2 class="header">Profile</h2>
            </div>
          </div>
          <div class="row profile__content">
            <div class="offset-md-1 col-md-3">
              <div class="profile__content-left text-center">
                <div class="row">
                  <img class="rounded-circle profile__content-left-avatar mx-auto" src="img/avatar.png" alt="avatar">
                </div>
                <div class="row">
                  <p class="profile__content-left-name col-sm-7 col-md-12 mx-auto">Alex</p>
                </div>
                <div class="profile__content-left-buttons left-buttons row flex-column">
                  <div class="col-10 col-sm-7 col-md-12 mx-auto">
                    <a href="#addTask" class="left-buttons-button left-buttons-button-darkblue">Add Task</a>
                  </div>
                  <div class="col-10 col-sm-7 col-md-12 mx-auto">
                    <a href="#dashboard" class="left-buttons-button left-buttons-button-blue">Dashboard</a>
                  </div>
                  <div class="col-10 col-sm-7 col-md-12 mx-auto">
                    <a href="#exit" class="left-buttons-button left-buttons-button-pink">exit</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-5 offset-md-1">
              <form action="#" class="basic-form right-form">
                <div class="form-group row right-form__group">
                  <label for="right-form-name" class="col-10 col-sm-4 col-md-5 col-xl-3 col-form-label right-form__group-label">Your name</label>
                  <div class="col-10 col-sm-7">
                    <input type="text" class="form-control basic-form-text-input right-form__group-text-input" id="right-form-name">
                  </div>
                </div>
                <div class="form-group row right-form__group">
                  <label for="right-form-email" class="col-sm-4 col-md-5 col-xl-3 col-form-label right-form__group-label">Your email</label>
                  <div class="col-10 col-sm-7">
                    <input type="email" class="form-control basic-form-text-input right-form__group-text-input" id="right-form-email">
                  </div>
                </div>
                <div class="form-group row right-form__group row">
                  <label for="right-form-pass" class="col-sm-4 col-md-5 col-xl-3 col-form-label right-form__group-label">Password</label>
                  <div class="col-10 col-sm-7">
                    <input type="password" class="form-control basic-form-text-input right-form__group-text-input" id="right-form-pass">
                  </div>
                </div>        
                <div class="row">
                  <div class="alert basic-form__alert right-form__alert col-sm-10 col-9 " role="alert">
                    Invalid input data
                  </div>
                </div>
                <div class="form-group row right-form__group">
                  <div class="col-10 col-sm-7 offset-md-5 col-xl-7 offset-xl-3">
                    <button type="submit" class="btn btn-lg basic-form-button basic-form-button-pink right-form__group-button">Save</button>
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
    name: 'Profile'
  }

</script>

<style lang="scss">
  // @import '../../scss/main.scss';
</style>