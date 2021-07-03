<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-xl-10 col-lg-12 col-md-9">
        <div class="card o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0">
            <div class="row">
              <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
              <div class="col-lg-6">
                <div class="p-5">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Wiki Documentation</h1><br>
                  </div>
                  <form class="user">
                    <FormEnter />
                  </form>
                  <br>
                  <div class="text-center">
                    <a class="small" href="https://play.google.com/store/apps/dev?id=8185819019973346070" target="_blank">Alexei Suzdalenko</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormEnter from '@/components/EnterComponent/FormEnter.vue';
export default {
  components: { FormEnter }
}
</script>