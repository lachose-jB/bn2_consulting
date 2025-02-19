<script setup>
import { ref } from 'vue'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'

const name = ref('')
const email = ref('')
const subject = ref('')
const message = ref('')
const successMessage = ref('')
const errorMessage = ref('')

const sendEmail = async () => {
  if (!name.value || !email.value || !subject.value || !message.value) {
    errorMessage.value = "Veuillez remplir tous les champs.";
    return;
  }

  const templateParams = {
    from_name: name.value,
    from_email: email.value,
    subject: subject.value,
    message: message.value
  };

  try {
    const response = await emailjs.send(
      'service_id',   // Remplace par ton ID de service
      'template_id',  // Remplace par ton ID de modèle d'email
      templateParams,
      'user_id'       // Remplace par ton ID utilisateur
    );

    if (response.status === 200) {
      successMessage.value = "Message envoyé avec succès !";
      name.value = '';
      email.value = '';
      subject.value = '';
      message.value = '';

      // Afficher un pop-up de succès
      Swal.fire({
        icon: 'success',
        title: 'Message envoyé',
        text: 'Votre message a bien été envoyé. Merci de nous avoir contactés !',
        confirmButtonText: 'D\'accord'
      });
    } else {
      errorMessage.value = "Une erreur est survenue. Veuillez réessayer.";

      // Afficher un pop-up d'erreur
      Swal.fire({
        icon: 'error',
        title: 'Erreur',
        text: 'Une erreur est survenue lors de l\'envoi du message.',
        confirmButtonText: 'Réessayer'
      });
    }
  } catch (error) {
    errorMessage.value = "Une erreur est survenue. Veuillez réessayer.";
    console.error(error);

    // Afficher un pop-up d'erreur
    Swal.fire({
      icon: 'error',
      title: 'Erreur',
      text: 'Une erreur est survenue lors de l\'envoi du message.',
      confirmButtonText: 'Réessayer'
    });
  }
};
</script>

<template>
  <article id="header-carousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
    <section class="carousel-inner">

      <article class="carousel-item active ">
        <img class="w-100" src="@/assets/img/Industriele.jpg" alt="Image" />
        <section class="carousel-caption d-flex flex-column align-items-center justify-content-center text-center w-100 carScroll">
          <article class="p-3">
            <h5 class="text-white text-uppercase mb-3 animated slideInDown">
              SERVICES - INNOVATIONS - TECHNOLOGIE
            </h5>
            <h1 class="display-1 text-white mb-md-4 animated zoomIn">
              La solution Innovante et Abordable pour Tous
            </h1>
            <RouterLink to="/contact" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">
              Nous contacter
            </RouterLink>
          </article>
        </section>
      </article>

      <article class="carousel-item">
        <img class="w-100" src="@/assets/img/Industriele.jpg" alt="Image" />
        <section class="carousel-caption d-flex flex-column align-items-center justify-content-center text-center w-100 carScroll">
          <article class="p-3">
            <h5 class="text-white text-uppercase mb-3 animated slideInDown">
              SERVICES - INNOVATIONS - TECHNOLOGIE
            </h5>
            <h1 class="display-1 text-white mb-md-4 animated zoomIn">
              La solution Innovante et Abordable pour Tous
            </h1>
            <RouterLink to="/contact" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">
              Nous contacter
            </RouterLink>
          </article>
        </section>
      </article>

    </section>
    <button class="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Précédent</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Suivant</span>
    </button>
  </article>

  <section class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <article class="container py-5">
        <section class="row g-5">
            <article class="col-lg-7">
                <section class="section-title position-relative pb-3 mb-5">
                    <h5 class="fw-bold text-primary text-uppercase">A propos</h5>
                    <h1 class="mb-0">La meilleure solution informatique avec 10 ans d'expérience</h1>
                </section>
                <p class="mb-4">BN2 CONSULTING
                    Nous sommes multi spécialiste qui cultive la compétence
                    et l'apport de solution dans divers domaine :
                    D'ingénierie conseil , Gestion de projet , développement des
                    applications mobiles en informatique et télécommunication
                    à travers un effort de formation conséquent offert aux
                    clients qui représentent 10% des activités.</p>
                <section class="row g-0 mb-3">
                    <article class="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                        <h5 class="mb-3"><i class="fa fa-check text-primary me-3"></i>Primé</h5>
                        <h5 class="mb-3"><i class="fa fa-check text-primary me-3"></i>Personnel professionnel</h5>
                    </article>
                    <article class="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                        <h5 class="mb-3"><i class="fa fa-check text-primary me-3"></i>Assistance 24h/24 et 7j/7</h5>
                        <h5 class="mb-3"><i class="fa fa-check text-primary me-3"></i>Des prix équitables</h5>
                    </article>
                </section>
                <a href="#" class="btn btn-primary py-3 px-5 mt-3 wow zoomIn" data-wow-delay="0.9s">Nous contacter</a>
            </article>
            <article class="col-lg-5 siZe">
                <figure class="position-relative h-100">
                    <img class="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" src="@/assets/img/exp.webp" style="object-fit: cover;">
                </figure>
            </article>
        </section>
    </article>
  </section>

  <section class="container-fluid py-2 wow fadeInUp" data-wow-delay="0.1s">
    <article class="container py-5">
        <section class="section-title text-center position-relative pb-3 mb-5 mx-auto" style="max-width: 600px;">
            <h5 class="fw-bold text-primary text-uppercase">Pourquoi nous choisir</h5>
            <h1 class="mb-0">Découvrez les avantages de choisir BN2 Consulting</h1>
            <p>Choisir BN2 Consulting, c'est faire confiance à une entreprise qui se distingue par son engagement envers l'excellence et l'innovation. Nous nous appuyons sur une expertise reconnue et un positionnement audacieux, alliant spécialisation, créativité, indépendance et agilité pour répondre à vos besoins spécifiques.</p>
        </section>
        <section class="row g-5">
            <article class="col-lg-4">
                <section class="row g-5">
                    <article class="col-12 wow zoomIn" data-wow-delay="0.2s">
                        <section class="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style="width: 60px; height: 60px;">
                            <i class="fa fa-cubes text-white"></i>
                        </section>
                        <h4>Excellence reconnue</h4>
                        <p class="mb-0">Nous nous distinguons par notre capacité à offrir des solutions innovantes et efficaces, adaptées à vos défis spécifiques.</p>
                    </article>
                    <article class="col-12 wow zoomIn" data-wow-delay="0.6s">
                        <section class="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style="width: 60px; height: 60px;">
                            <i class="fa fa-award text-white"></i>
                        </section>
                        <h4>Distinctions</h4>
                        <p class="mb-0">Nous avons été reconnus pour notre excellence dans le domaine du conseil et avons reçu plusieurs distinctions pour notre travail.</p>
                    </article>
                </section>
            </article>
            <article class="col-lg-4 wow zoomIn" data-wow-delay="0.9s" style="min-height: 350px;">
                <figure class="position-relative h-100">
                    <img class="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.1s" src="@/assets/img/logobn2.png" style="object-fit:contain;">
                </figure>
            </article>
            <article class="col-lg-4">
                <section class="row g-5">
                    <article class="col-12 wow zoomIn" data-wow-delay="0.4s">
                        <section class="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style="width: 60px; height: 60px;">
                            <i class="fa fa-users-cog text-white"></i>
                        </section>
                        <h4>Équipe experte</h4>
                        <p class="mb-0">Notre équipe est composée de professionnels expérimentés et passionnés, dédiés à vous offrir des solutions sur mesure.</p>
                    </article>
                    <article class="col-12 wow zoomIn" data-wow-delay="0.8s">
                        <section class="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style="width: 60px; height: 60px;">
                            <i class="fa fa-phone-alt text-white"></i>
                        </section>
                        <h4>Assistance continue</h4>
                        <p class="mb-0">Nous offrons un support 24h/24 et 7j/7 pour répondre à toutes vos questions et garantir la réussite de vos projets.</p>
                    </article>
                </section>
            </article>
        </section>
    </article>
  </section>

  <section class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <article class="container py-5">
        <section class="section-title text-center position-relative pb-3 mb-5 mx-auto" style="max-width: 600px;">
            <h5 class="fw-bold text-primary text-uppercase">Nos Services</h5>
            <h1 class="mb-0">Des solutions informatiques personnalisées pour votre entreprise prospère</h1>
        </section>
        <section class="row g-5">
            <article class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                <section class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                    <article class="service-icon">
                        <i class="fa fa-shield-alt text-white"></i>
                    </article>
                    <h4 class="mb-3">Cybersécurité</h4>
                    <p class="m-0">NOS AXES D’EXPERTISES
                        • Conseil et management ( Conduite de projet
                        et de changement, Développement
                        informatique .
                        • Audit et automatisation des systèmes
                        d'information, mise en place des stratégies
                        de sécurité informatique).</p>
                    <a class="btn btn-lg btn-primary rounded" href="">
                        <i class="bi bi-arrow-right"></i>
                    </a>
                </section>
            </article>
            <article class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                <section class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                    <article class="service-icon">
                        <i class="fa fa-cog text-white"></i>
                    </article>
                    <h4 class="mb-3">Maintenance informatique</h4>
                    <p class="m-0">Ingénierie( conception, maintenance
                        informatique et GSM, mise en place d'un
                        réseau informatique, configuration de la
                        Voix sur IP, VPN, déploiement de fibre
                        optique, la mise en place de Wi-Max)</p>
                    <a class="btn btn-lg btn-primary rounded" href="">
                        <i class="bi bi-arrow-right"></i>
                    </a>
                </section>
            </article>
            <article class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
                <section class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                    <article class="service-icon">
                        <i class="fa fa-code text-white"></i>
                    </article>
                    <h4 class="mb-3">Développement web</h4>
                    <p class="m-0">Développement informatique
                        (Développement des applications mobiles,
                        conception de site web).</p>
                    <a class="btn btn-lg btn-primary rounded" href="">
                        <i class="bi bi-arrow-right"></i>
                    </a>
                </section>
            </article>
            <article class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                <section class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                    <article class="service-icon">
                        <i class="fa fa-calendar text-white"></i>
                    </article>
                    <h4 class="mb-3">Gestion de Projet</h4>
                    <p class="m-0">Conseil et management ( Conduite de projet
                        et de changement, Développement
                        informatique )</p>
                    <a class="btn btn-lg btn-primary rounded" href="">
                        <i class="bi bi-arrow-right"></i>
                    </a>
                </section>
            </article>
            <article class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                <section class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                    <article class="service-icon">
                        <i class="fa fa-search text-white"></i>
                    </article>
                    <h4 class="mb-3">Vente</h4>
                    <p class="m-0">Vente des produits High-tech(Tablette,
                        ordinateur, application mobile etc...)</p>
                    <a class="btn btn-lg btn-primary rounded" href="https://www.bn2smart.net/">
                        <i class="bi bi-arrow-right"></i>
                    </a>
                </section>
            </article>
            <article class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
                <section class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                    <article class="service-icon">
                        <i class="fa fa-graduation-cap text-white"></i>
                    </article>
                    <h4 class="mb-3">Formation</h4>
                    <p class="m-0">Formation sur mesure par rapport aux
                        besoins des clients (Gestion, graphisme, maintenance, etc...)</p>
                    <a class="btn btn-lg btn-primary rounded" href="">
                        <i class="bi bi-arrow-right"></i>
                    </a>
                </section>
            </article>
        </section>
    </article>
  </section>

  <section class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <article class="container py-5">
        <section class="row w-100">
            <article class="col-lg-7 w-100">
                <section class="section-title position-relative pb-3 mb-5 text-center">
                    <h5 class="fw-bold text-primary text-uppercase">NOS APPROCHES</h5>
                    <h1 class="mb-0">3 AXES DE DEVELOPPEMENT DE NOS ACTIVITES</h1>
                </section>
                <div class="row g-8">
                    <div class="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                        <div class="blog-item bg-light rounded overflow-hidden">
                            <div class="blog-img position-relative overflow-hidden">
                                <img class="img-fluid" src="@/assets/img/res.webp" alt="">
                                <a class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href="">RESPONSABILITE</a>
                            </div>
                            <div class="p-4">
                                <p>Nous participons à la diffusion et à
                                    la propagation des valeurs que
                                    notre société d'aujourd'hui a oublié
                                    ou néglige de plus en plus
                                    : la responsabilité</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                        <div class="blog-item bg-light rounded overflow-hidden">
                            <div class="blog-img position-relative overflow-hidden">
                                <img class="img-fluid" src="@/assets/img/clie.webp" alt="">
                                <a class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href="">SENS DU CLIENT</a>
                            </div>
                            <div class="p-4">
                                <p>Parce qu'il faut savoir
                                    casser les conventions,
                                    renoncer au copié/collé,
                                    trouver des solutions
                                    nouvelles en permanence,
                                    être toujours pionnier,
                                    faire preuve de créativité!</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
                        <div class="blog-item bg-light rounded overflow-hidden">
                            <div class="blog-img position-relative overflow-hidden">
                                <img class="img-fluid" src="@/assets/img/crea.webp" alt="lo">
                                <a class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href="">CREATIVITÉ ET EXCELLENCE</a>
                            </div>
                            <div class="p-4">
                                <p>Parce qu'il faut savoir casser les
                                    conventions, renoncer à la facilité,
                                    trouver des solutions nouvelles en
                                    permanence, être toujours pionnier,
                                    faire preuve de créativité et
                                    d’excellence</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    </article>
  </section>

 <section class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <article class="container py-5">
        <section class="section-title text-center position-relative pb-3 mb-5 mx-auto" style="max-width: 600px;">
            <h5 class="fw-bold text-primary text-uppercase">Membres de l'équipe</h5>
            <h1 class="mb-0">Des professionnels prêts à aider votre entreprise</h1>
            <p>Chez BN2 Consulting, notre équipe de
                direction est un groupe dédié de
                professionnels passionnés, chacun
                apportant une expertise unique pour faire
                de notre entreprise un leader dans le
                domaine du conseil , ingénierie
                informatique et gestion de projet etc.
                Nous sommes fiers de notre équipe et de
                notre engagement envers l'excellence,
                l'innovation et le succès continu de nos
                clients.</p>
        </section>
        <section class=" owl-carousel  row g-5">
            <article class="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                <section class="team-item bg-light rounded overflow-hidden">
                    <article class="team-img position-relative overflow-hidden">
                        <img class="img-fluid w-100" src="@/assets/img/team-1.jpg" alt="">
                        <section class="team-social">
                            <a class="btn btn-lg btn-primary btn-lg-square rounded" href=""><i class="fab fa-twitter fw-normal"></i></a>
                            <a class="btn btn-lg btn-primary btn-lg-square rounded" href=""><i class="fab fa-facebook-f fw-normal"></i></a>
                            <a class="btn btn-lg btn-primary btn-lg-square rounded" href=""><i class="fab fa-instagram fw-normal"></i></a>
                            <a class="btn btn-lg btn-primary btn-lg-square rounded" href=""><i class="fab fa-linkedin-in fw-normal"></i></a>
                        </section>
                    </article>
                    <article class="text-center py-4">
                        <h4 class="text-primary">MIKAEL LADIRE</h4>
                        <p class="text-uppercase m-0">RESPONSABLE SECURITE EN CHAGE DE LA
                            PROESPECTION COMMERCIALE</p>
                    </article>
                </section>
            </article>

            <article class="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                <section class="team-item bg-light rounded overflow-hidden">
                    <article class="team-img position-relative overflow-hidden">
                        <img class="img-fluid w-100" src="@/assets/img/team-2.jpg" alt="">
                        <section class="team-social">
                            <a class="btn btn-lg btn-primary btn-lg-square rounded" href=""><i class="fab fa-twitter fw-normal"></i></a>
                            <a class="btn btn-lg btn-primary btn-lg-square rounded" href=""><i class="fab fa-facebook-f fw-normal"></i></a>
                            <a class="btn btn-lg btn-primary btn-lg-square rounded" href=""><i class="fab fa-instagram fw-normal"></i></a>
                            <a class="btn btn-lg btn-primary btn-lg-square rounded" href=""><i class="fab fa-linkedin-in fw-normal"></i></a>
                        </section>
                    </article>
                    <article class="text-center py-4">
                        <h4 class="text-primary">NARCISSE BANDJIM</h4>
                        <p class="text-uppercase m-0">CEO BN2 CONSULTING</p>
                    </article>
                </section>
            </article>

            <article class="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
                <section class="team-item bg-light rounded overflow-hidden">
                    <article class="team-img position-relative overflow-hidden">
                        <img class="img-fluid w-100" src="@/assets/img/team-3.jpg" alt="">
                        <section class="team-social">
                            <a class="btn btn-lg btn-primary btn-lg-square rounded" href=""><i class="fab fa-twitter fw-normal"></i></a>
                            <a class="btn btn-lg btn-primary btn-lg-square rounded" href=""><i class="fab fa-facebook-f fw-normal"></i></a>
                            <a class="btn btn-lg btn-primary btn-lg-square rounded" href=""><i class="fab fa-instagram fw-normal"></i></a>
                            <a class="btn btn-lg btn-primary btn-lg-square rounded" href=""><i class="fab fa-linkedin-in fw-normal"></i></a>
                        </section>
                    </article>
                    <article class="text-center py-4">
                        <h4 class="text-primary">DAVY JOSEPHINE</h4>
                        <p class="text-uppercase m-0">DIRECTEUR TECHNIQUE</p>
                    </article>
                </section>
            </article>
        </section>

        <section class=" owl-carousel  row g-5 mt-5">

            <article class="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
                <section class="team-item bg-light rounded overflow-hidden">
                    <article class="team-img position-relative overflow-hidden">
                        <img class="img-fluid w-100" src="@/assets/img/photp.jpg" alt="">
                        <section class="team-social">
                            <a class="btn btn-lg btn-primary btn-lg-square rounded" href=""><i class="fab fa-twitter fw-normal"></i></a>
                            <a class="btn btn-lg btn-primary btn-lg-square rounded" href=""><i class="fab fa-facebook-f fw-normal"></i></a>
                            <a class="btn btn-lg btn-primary btn-lg-square rounded" href=""><i class="fab fa-instagram fw-normal"></i></a>
                            <a class="btn btn-lg btn-primary btn-lg-square rounded" href=""><i class="fab fa-linkedin-in fw-normal"></i></a>
                        </section>
                    </article>
                    <article class="text-center py-4">
                        <h4 class="text-primary">Jean-Baptiste ADJAHOUISSO</h4>
                        <p class="text-uppercase m-0">Pentester Web -</p>
                    </article>
                </section>
            </article>
        </section>

    </article>
  </section>

  <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div class="container py-5">
        <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style="max-width: 600px;">
            <h5 class="fw-bold text-primary text-uppercase">Nos derniers événements</h5>
            <h1 class="mb-0">Découvrez les derniers articles de notre blog</h1>
        </div>
        <div class="row g-5">
            <div class="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                <div class="blog-item bg-light rounded overflow-hidden">
                    <div class="blog-img position-relative overflow-hidden">
                        <img class="img-fluid" src="@/assets/img/blog-1.jpg" alt="">
                        <a class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href="">Cybersécurité</a>
                    </div>
                    <div class="p-4">
                        <div class="d-flex mb-3">
                            <small class="me-3"><i class="far fa-user text-primary me-2"></i>Narcisse Bandjim</small>
                            <small><i class="far fa-calendar-alt text-primary me-2"></i>15 Septembre 2024</small>
                        </div>
                        <h4 class="mb-3">L'Importance de la Cybersécurité pour les Entreprises Modernes</h4>
                        <p>La protection des données n'est plus une option, mais une nécessité pour les entreprises modernes...</p>

                    </div>
                </div>
            </div>
            <div class="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                <div class="blog-item bg-light rounded overflow-hidden">
                    <div class="blog-img position-relative overflow-hidden">
                        <img class="img-fluid" src="@/assets/img/blog-2.jpg" alt="">
                        <a class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href="">Gestion de Projet</a>
                    </div>
                    <div class="p-4">
                        <div class="d-flex mb-3">
                            <small class="me-3"><i class="far fa-user text-primary me-2"></i>Davy Joséphine</small>
                            <small><i class="far fa-calendar-alt text-primary me-2"></i>22 Septembre 2024</small>
                        </div>
                        <h4 class="mb-3">Gestion de Projet : Clés pour un Succès Assuré</h4>
                        <p>Un projet bien géré peut faire toute la différence entre un succès retentissant et un échec coûteux...</p>

                    </div>
                </div>
            </div>
            <div class="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
                <div class="blog-item bg-light rounded overflow-hidden">
                    <div class="blog-img position-relative overflow-hidden">
                        <img class="img-fluid" src="@/assets/img/blog-3.jpg" alt="">
                        <a class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href="">Intelligence Artificielle</a>
                    </div>
                    <div class="p-4">
                        <div class="d-flex mb-3">
                            <small class="me-3"><i class="far fa-user text-primary me-2"></i>Adama Seck</small>
                            <small><i class="far fa-calendar-alt text-primary me-2"></i>29 Septembre 2024</small>
                        </div>
                        <h4 class="mb-3">Innover avec l'Intelligence Artificielle : Opportunités et Défis</h4>
                        <p>L'intelligence artificielle ouvre des portes à des innovations sans précédent...</p>

                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>

  <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div class="container py-5">
      <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style="max-width: 600px;">
        <h5 class="fw-bold text-primary text-uppercase">Contactez-nous</h5>
        <h1 class="mb-0">Si vous avez des questions, n'hésitez pas à nous contacter</h1>
      </div>
      <div class="row g-5 mb-5">
        <div class="col-lg-4">
          <div id="contactNous" class="d-flex align-items-center wow fadeIn" data-wow-delay="0.1s">
            <div class="bg-primary d-flex align-items-center justify-content-center rounded" style="width: 60px; height: 60px;">
              <i class="fa fa-phone-alt text-white"></i>
            </div>
            <div class="ps-4">
              <h5 class="mb-2">Appeler</h5>
              <h4 class="text-primary mb-0">+33 755672680</h4>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="d-flex align-items-center wow fadeIn" data-wow-delay="0.4s">
            <div class="bg-primary d-flex align-items-center justify-content-center rounded" style="width: 60px; height: 60px;">
              <i class="fa fa-envelope-open text-white"></i>
            </div>
            <div class="ps-4">
              <h5 class="mb-2">Email</h5>
              <h4 class="text-primary mb-0">aseck@bn2consulting.fr</h4>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="d-flex align-items-center wow fadeIn" data-wow-delay="0.8s">
            <div class="bg-primary d-flex align-items-center justify-content-center rounded" style="width: 60px; height: 60px;">
              <i class="fa fa-map-marker-alt text-white"></i>
            </div>
            <div class="ps-4">
              <h5 class="mb-2">Notre Bureau</h5>
              <h4 class="text-primary mb-0">264 Av. Victor Hugo, 94120 Fontenay-sous-Bois, France</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="row g-5">
      <div class="col-lg-6 wow slideInUp" data-wow-delay="0.3s">
        <form @submit.prevent="sendEmail">
          <div class="row g-3">
            <div class="col-md-6">
              <input v-model="name" type="text" class="form-control border-0 bg-light px-4" placeholder="Votre nom" required style="height: 55px;">
            </div>
            <div class="col-md-6">
              <input v-model="email" type="email" class="form-control border-0 bg-light px-4" placeholder="Votre Email" required style="height: 55px;">
            </div>
            <div class="col-12">
              <input v-model="subject" type="text" class="form-control border-0 bg-light px-4" placeholder="Objet" required style="height: 55px;">
            </div>
            <div class="col-12">
              <textarea v-model="message" class="form-control border-0 bg-light px-4 py-3" rows="4" placeholder="Message" required></textarea>
            </div>
            <div class="col-12">
              <button class="btn btn-primary w-100 py-3" type="submit">Envoyer Message</button>
            </div>
            <div class="col-12 text-center">
              <p v-if="successMessage" class="text-success mt-3">{{ successMessage }}</p>
              <p v-if="errorMessage" class="text-danger mt-3">{{ errorMessage }}</p>
            </div>
          </div>
        </form>
        </div>
        <div class="col-lg-6 wow slideInUp" data-wow-delay="0.6s">
          <iframe class="position-relative rounded w-100 h-100"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9607012406086!2d2.4759105769010974!3d48.85895977133227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e612a21858c049%3A0xeca1d8079a521141!2s264%20Av.%20Victor%20Hugo%2C%2094120%20Fontenay-sous-Bois!5e0!3m2!1sfr!2sfr!4v1723805018156!5m2!1sfr!2sfr"
            frameborder="0" style="min-height: 350px; border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
      </div>
    </div>
  </div>

</template>
<style scoped>
  .carScroll {
    left: 0;
    height: 100%;
  }
  .carScrollH{
    height: 70vh !important;
  }
  .siZe{
    min-height: 50%;
  }
</style>
