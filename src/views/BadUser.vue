<template>
    <div class="container">
        <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
                <div class="row">
                    <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
                    <div class="col-lg-7" style="height: 70vh;">
                        <div class="p-5">
                            <div class="text-center">
                                <h1 class="h4 text-gray-900 mb-4">Friend, you are not logged in !</h1>
                            </div>
                            <hr>
                            <br><br><br>
                            <div class="text-center">
                                <router-link to="/" class="small">Already have an account? Login!</router-link>
                            </div>
                             <div class="text-center">
                                <router-link class="small" to="/buy-buy">Buy Buy</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>        
</template>