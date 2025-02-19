<template>
  <footer>
    <div class="container-fluid bg-dark text-light mt-5 wow fadeInUp" data-wow-delay="0.1s">
      <div class="container">
        <div class="row gx-5">
          <!-- À propos -->
          <div class="col-lg-4 col-md-6 footer-about">
            <div class="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-primary p-4">
              <router-link to="/" class="navbar-brand">
                <figure class="logobn2f">
                  <img src="@/assets/img/logobn2.png" alt="logobn2">
                </figure>
              </router-link>
              <p class="mt-3 mb-4">
                BN2 Consulting, votre partenaire de confiance pour des solutions innovantes et personnalisées.
                Nous vous accompagnons à chaque étape de votre projet pour garantir votre succès.
                Ensemble, bâtissons l'avenir sur des bases solides et durables.
              </p>
            </div>
          </div>

          <!-- Infos de contact -->
          <div class="col-lg-8 col-md-6">
            <div class="row gx-5">
              <div class="col-lg-4 col-md-12 pt-5 mb-5">
                <div class="section-title section-title-sm position-relative pb-3 mb-4">
                  <h3 class="text-light mb-0">Adresse</h3>
                </div>
                <div class="d-flex mb-2">
                  <i class="bi bi-geo-alt text-primary me-2"></i>
                  <p class="mb-0">1264 Av. Victor Hugo, 94120 Fontenay-sous-Bois, France</p>
                </div>
                <div class="d-flex mb-2">
                  <i class="bi bi-envelope-open text-primary me-2"></i>
                  <p class="mb-0">aseck@bn2consulting.fr</p>
                </div>
                <div class="d-flex mb-2">
                  <i class="bi bi-telephone text-primary me-2"></i>
                  <p class="mb-0">+33 755672680</p>
                </div>
                <div class="d-flex mt-4">
                  <a class="btn btn-primary btn-square me-2" href="#"><i class="fab fa-twitter fw-normal"></i></a>
                  <a class="btn btn-primary btn-square me-2" href="#"><i class="fab fa-facebook-f fw-normal"></i></a>
                  <a class="btn btn-primary btn-square me-2" href="#"><i class="fab fa-linkedin-in fw-normal"></i></a>
                  <a class="btn btn-primary btn-square" href="#"><i class="fab fa-instagram fw-normal"></i></a>
                </div>
              </div>

              <!-- Menu -->
              <div class="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                <div class="section-title section-title-sm position-relative pb-3 mb-4">
                  <h3 class="text-light mb-0">Menu</h3>
                </div>
                <div class="link-animated d-flex flex-column justify-content-start">
                  <router-link class="text-light mb-2" to="/"><i class="bi bi-arrow-right text-primary me-2"></i>Home</router-link>
                  <router-link class="text-light mb-2" to="/appropos"><i class="bi bi-arrow-right text-primary me-2"></i>A propos</router-link>
                  <router-link class="text-light mb-2" to="/services"><i class="bi bi-arrow-right text-primary me-2"></i>Service</router-link>
                  <router-link class="text-light mb-2" to="/blog"><i class="bi bi-arrow-right text-primary me-2"></i>Blog</router-link>
                  <router-link class="text-light mb-2" to="/formation"><i class="bi bi-arrow-right text-primary me-2"></i>Formation</router-link>
                  <router-link class="text-light mb-2" to="/contact"><i class="bi bi-arrow-right text-primary me-2"></i>Contact</router-link>
                </div>
              </div>

              <!-- Liens rapides -->
              <div class="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                <div class="section-title section-title-sm position-relative pb-3 mb-4">
                  <h3 class="text-light mb-0">Lien rapide</h3>
                </div>
                <div class="link-animated d-flex flex-column justify-content-start">
                  <router-link class="text-light mb-2" to="/boutique"><i class="bi bi-arrow-right text-primary me-2"></i>Boutique</router-link>
                  <router-link class="text-light mb-2" to="/cicp"><i class="bi bi-arrow-right text-primary me-2"></i>CICP</router-link>
                  <router-link class="text-light mb-2" to="/services"><i class="bi bi-arrow-right text-primary me-2"></i>Our Services</router-link>
                  <router-link class="text-light mb-2" to="/meetup"><i class="bi bi-arrow-right text-primary me-2"></i>Meet up</router-link>
                  <router-link class="text-light mb-2" to="/blog"><i class="bi bi-arrow-right text-primary me-2"></i>Latest Blog</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="container-fluid text-white" style="background: #061429;">
      <div class="container text-center">
        <div class="row justify-content-end">
          <div class="col-lg-8 col-md-6">
            <div class="d-flex align-items-center justify-content-center" style="height: 75px;">
              <p class="mb-0">
                &copy; <router-link class="text-white border-bottom" to="/">BN2 Consulting</router-link>. Tous droits réservés.
                Réalisé par <a class="text-white border-bottom" href="https://shop.bn2smart.fr" target="_blank">Bn2 Smart</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent"
};
</script>

<style scoped>
  footer{
      width: 100%;
    }
</style>
