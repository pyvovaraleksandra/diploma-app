<template>
  <div>
    <section class="welcomePage align-items-center section">
        <div class="container welcomePage__container">
          <div class="content">
            <div class="row justify-content-center">
              <h2 class="welcomePage__header header col-11 col-sm-9 col-md-8 ml-auto mr-auto text-center">
                Welcome to Todo app
              </h2>
              <div class="welcomePage__discr col-11 col-sm-9 col-md-8 ml-auto mr-auto text-center">
                Please enter your data and press “start” button
              </div>
        
              <form action="#" 
                    v-on:submit.prevent="toDashboard"
                    class="form-horizontal welcomePage__registrationForm basic-form col-11 col-sm-9 col-md-8" 
                    novalidate>
                <div class="form-group">
                  <label for="inputEmail">Your email:</label>
                  <input type="email" 
                          v-model="email" 
                          class="form-control welcomePage__registrationForm-email basic-form-text-input" 
                          id="inputEmail" 
                          aria-describedby="emailHelp" 
                          :class="{ error: isFormSubmitted && !isEmailValid }"
                          placeholder="Please enter your email"
                          required>
                </div>
                <div class="form-group">
                  <label for="inputPassword">Your password:</label>
                  <input type="password" 
                          v-model="password"
                          :class="{ error: isFormSubmitted && !isPasswordValid }"
                          class="form-control welcomePage__registrationForm-pass basic-form-text-input" 
                          id="inputPassword" 
                          placeholder="Please enter your password"
                          required>
                </div>
                <div class="alert basic-form__alert" 
                     role="alert">
                  Invalid input data
                </div>
                <div class="text-center">
                  <router-link :to="{name: 'Dashboard'}" 
                  class="btn btn-lg basic-form-button basic-form-button-pink welcomePage__registrationForm-pinkButton col-sm-5">START</router-link>
                </div>
                
              </form>
            </div>
          </div>
        </div>  
    </section>
  </div> 
</template>

<script>
  export default {
    name: 'Welcome',
    data: function() {
      return {
        email: '',
        password: '',
        isFormSubmitted: false
      }
    },
    computed: {
      isEmailValid: function() {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.email);
                                              // validation email
      },
      isPasswordValid: function() {
        return /^.{5,}$/.test(this.password); // validation password (5 or more characters)
      }
    },
    methods: {
      toDashboard: function() {
        this.isFormSubmitted = true;
        if (!this.isEmailValid && !this.isPasswordValid) return;
        this.$router.push({ name: 'dashboard' });
      }
    }
  };
</script>
