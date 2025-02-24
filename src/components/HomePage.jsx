import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedText from './AnimatedText';

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()


const HomePage = () => {
    return (
    <div id='page-top'>   
        <header className="masthead">
            <div className="container">
                <div className="masthead-subheading">Bienvenue Dans Mon Portfolio!</div>
                <div className="masthead-heading text-uppercase"><AnimatedText text="Raavi de vous rencontrer" speed={100} /></div>
                <a className="btn btn-primary btn-xl text-uppercase" href="#services">En savoir plus</a>
            </div>
        </header>

        <section className="page-section" id="services">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">- Services -</h2>
                    <h3 className="section-subheading text-muted">Une variété de services pour répondre aux besoins des clients</h3>
                </div>
                <div className="row text-center">
                    <div className="col-md-3">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Sites web</h4>
                        <p className="text-muted">sites vitrines | sites e-commerce | blogs | sites d'actualités | portfolios</p>
                    </div>
                    <div className="col-md-3">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-laptop fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Applications web</h4>
                        <p className="text-muted">Applications web sur mesure | Développement full-stack </p>
                    </div>
                    <div className="col-md-3">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-server fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Intégration et déploiement</h4>
                        <p className="text-muted">Intégration de systèmes tiers | Déploiement et hébergement | Conception UX/UI</p>
                    </div>
                    <div className="col-md-3">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-lightbulb fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Conseil et Gestion de projet</h4>
                        <p className="text-muted">Analyse des Besoins | Rédaction de Cahier des Charges | Coordination d'équipes</p>
                    </div>
                    <div className="col-md-3">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-infinity fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">DevOps</h4>
                        <p className="text-muted">Configuration de pipelines CI/CD | Monitoring et Logging | Scalabilité et Performances</p>
                    </div>
                    <div className="col-md-3">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-cloud fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Outils et Plateformes Cloud</h4>
                        <p className="text-muted">AWS | Google Cloud Platform | Microsoft Azure | Heroku</p>
                    </div>
                    <div className="col-md-3">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-newspaper fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Frameworks et Bibliothèques</h4>
                        <p className="text-muted">React | Angular | Spring Boot | Django</p>
                    </div>
                    <div className="col-md-3">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-tools fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Maintenance et support</h4>
                        <p className="text-muted">Maintenance de sites web | Support technique | Formation et documentation</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">- Portfolio -</h2>
                    <h3 className="section-subheading text-muted">Quelques de mes travaux.</h3>   
                </div>

                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <div className="portfolio-item">
                            <a className="portfolio-link" ><Link to="/profile" target="_blank" rel="noopener noreferrer" >
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src="./images/portfolio/2.jpg" alt="..." />
                            </Link></a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">User Management</div>
                                <div className="portfolio-caption-subheading text-muted">App Web</div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="portfolio-item">
                            <a className="portfolio-link" ><Link to="https://lecubacois.ca/" target="_blank" rel="noopener noreferrer" >
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src="./images/portfolio/10.jpg" alt="..." />
                            </Link></a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Le Cubaquois</div>
                                <div className="portfolio-caption-subheading text-muted">Site Vitrine</div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="portfolio-item">
                            <a className="portfolio-link" ><Link to="https://asso-ndolopourtous.com" target="_blank" rel="noopener noreferrer" >
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src="./images/portfolio/11.jpg" alt="..." />
                            </Link></a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Association Ndolo Pour Tous</div>
                                <div className="portfolio-caption-subheading text-muted">Site Vitrine ONG</div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="portfolio-item" >
                            <a className="portfolio-link" ><Link to="https://github.com/yanntafou/Gestion_logement" >
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src="./images/portfolio/8.jpeg" alt="..." />
                            </Link></a>
                            <div className="portfolio-caption"> 
                                <div className="portfolio-caption-heading">Gestion Immobilière</div>
                                <div className="portfolio-caption-subheading text-muted">App Web</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='page-section bg-light' id='about'>

            <div className='container'>   

                <h2 className="section-heading text-uppercase text-center">- PRESENTATION -</h2>
                <div className='pres-container'>
                    <div className=''>
                        <h5 className='pres-text'>Je m'appelle Yann Tafou. Développeur full stack axé sur les résultats 
                        avec 5 ans d'expérience dans la création des sites et applications web, Intégration et deploiement continues. 
                        <br/>
                        <br/>Capable de concevoir et de développer des applications pour répondre aux besoins des clients ou à un problème informatique spécifique.
                        <br/>
                        <br/>J'ai des compétences en front-end, back-end et DevOps. 
                        Bonne maîtrise des technologies modernes.
                        </h5>
                    </div>
                
                    <div className=''>
                        <img className ='img-fluid img-presentation' src="./images/NTYA.jpg" alt="" />
                    </div>
                </div>
                
   
                <div className='row '>
                
                    <div className="img-display py-2 ">
                        <div className="col-img img-fluid mb-3">
                            <img className='img-thumbnail img-bg' src="./images/logo/HTML5.png" alt="" />
                        </div>
                        <div className="col-img img-fluid mb-3">
                            <img className='img-thumbnail img-bg' src="./images/logo/css.png" alt="" />
                        </div>
                        <div className="col-img img-fluid mb-3">
                            <img className='img-thumbnail img-bg' src="./images/logo/javascript.png" alt="" />
                        </div>
                        <div className="col-img img-fluid mb-3">
                            <img className='img-thumbnail img-bg' src="./images/logo/spring.png" alt="" />
                        </div>
                        <div className="col-img img-fluid mb-3">
                            <img className='img-thumbnail img-bg' src="./images/logo/bootstrap.png" alt="" />
                        </div>
                        <div className="col-img img-fluid mb-3">
                            <img className='img-thumbnail img-bg' src="./images/logo/java.png" alt="" />
                        </div>
                        <div className="col-img img-fluid mb-3">
                            <img className='img-thumbnail img-bg' src="./images/logo/python.png" alt="" />
                        </div>
                        <div className="col-img img-fluid mb-3">
                            <img className='img-thumbnail img-bg' src="./images/logo/react.png" alt="" />
                        </div>
                        <div className="col-img img-fluid mb-3">
                            <img className='img-thumbnail img-bg' src="./images/logo/angular.png" alt="" />
                        </div>
                        <div className="col-img img-fluid mb-3">
                            <img className='img-thumbnail img-bg' src="./images/logo/node.png" alt="" />
                        </div>
                        <div className="col-img img-fluid mb-3">
                            <img className='img-thumbnail img-bg' src="./images/logo/api.png" alt="" />
                        </div>
                        <div className="col-img img-fluid mb-3">
                            <img className='img-thumbnail img-bg' src="./images/logo/mysql.png" alt="" />
                        </div>
                        <div className="col-img img-fluid mb-3">
                            <img className='img-thumbnail img-bg' src="./images/logo/aws.png" alt="" />
                        </div>
                        <div className="col-img img-fluid mb-3">
                            <img className='img-thumbnail img-bg' src="./images/logo/php.png" alt="" />
                        </div>
                        <div className="col-img img-fluid mb-3">
                            <img className='img-thumbnail img-bg' src="./images/logo/windows.png" alt="" />
                        </div>
                        <div className="col-img img-fluid mb-3">
                            <img className='img-thumbnail img-bg' src="./images/logo/git.png" alt="" />
                        </div>
                        <div className="col-img img-fluid mb-3">
                            <img className='img-thumbnail img-bg' src="./images/logo/office.png" alt="" />
                        </div>
                        <div className="col-img img-fluid mb-3">
                            <img className='img-thumbnail img-bg' src="./images/logo/maven.png" alt="" />
                        </div>
                    </div>
                </div>  
            </div>
        </section>

        <section className='yanofolio-section py-3'>
            <div className='container'>            
                <div className="container text-center">
                    <h2 className="section-heading text-uppercase">YANOFOLIO</h2>
                    <p className='lh-lg'>Ce portfolio a été conçu et déployé avec les technologies suivantes :</p>
                    
                    <div className="img-display justify-content-center">
                        <div className="col-img-2 img-fluid">
                            <img className='img-thumbnail img-bg-2' src="./images/logo/HTML5.png" alt=""/>
                        </div>
                        <div className="col-img-2 img-fluid">
                            <img className='img-thumbnail img-bg-2' src="./images/logo/css.png" alt=""/>
                        </div>
                        <div className="col-img-2 img-fluid">
                            <img className='img-thumbnail img-bg-2' src="./images/logo/javascript.png" alt=""/>
                        </div>
                        <div className="col-img-2 img-fluid">
                            <img className='img-thumbnail img-bg-2' src="./images/logo/spring.png" alt=""/>
                        </div>
                        <div className="col-img-2 img-fluid">
                            <img className='img-thumbnail img-bg-2' src="./images/logo/bootstrap.png" alt=""/>
                        </div>
                        <div className="col-img-2 img-fluid">
                            <img className='img-thumbnail img-bg-2' src="./images/logo/java.png" alt=""/>
                        </div>
                        <div className="col-img-2 img-fluid">
                            <img className='img-thumbnail img-bg-2' src="./images/logo/react.png" alt=""/>
                        </div>
                        <div className="col-img-2 img-fluid">
                            <img className='img-thumbnail img-bg-2' src="./images/logo/mysql.png" alt=""/>
                        </div>
                        <div className="col-img-2 img-fluid">
                            <img className='img-thumbnail img-bg-2' src="./images/logo/node.png" alt=""/>
                        </div>
                        <div className="col-img-2 img-fluid mb-3">
                            <img className='img-thumbnail img-bg' src="./images/logo/git.png" alt="" />
                        </div>
                        <div className="col-img-2 img-fluid mb-3">
                            <img className='img-thumbnail img-bg' src="./images/logo/github.png" alt="" />
                        </div>
                        <div className="col-img-2 img-fluid mb-3">
                            <img className='img-thumbnail img-bg' src="./images/logo/heroku.png" alt="" />
                        </div>
                        <div className="col-img-2 img-fluid mb-3">
                            <img className='img-thumbnail img-bg' src="./images/logo/maven.png" alt="" />
                        </div>
                    </div>
                </div>    
            </div>
        </section>

        <section className="page-section" id="contact">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Nous contacter</h2>
                    <h3 className="section-subheading ">Nous serons ravi de vous lire.</h3>
                </div>
                <form id="contactForm" className='needs-validation' noValidate method='POST'>
                    <div className="row align-items-stretch mb-5">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input className="form-control" id="name" type="text" placeholder="Votre Nom *" required/>
                                <div className="invalid-feedback" data-sb-feedback="name:required">Le nom est requis.</div>
                            </div>
                            <div className="form-group">
                                
                                <input className="form-control" id="email" type="email" placeholder="Votre Email *" required/>
                                <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                <div className="invalid-feedback" data-sb-feedback="email:email">L'addresse mail n'est pas valide.</div>
                            </div>
                            <div className="form-group mb-md-0">
                                
                                <input className="form-control" id="phone" type="tel" placeholder="Votre Tél *" required/>
                                <div className="invalid-feedback" data-sb-feedback="phone:required">Le numéro est requis.</div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group form-group-textarea mb-md-0">
                                
                                <textarea className="form-control" id="message" placeholder="Votre Message *" required></textarea>
                                <div className="invalid-feedback" data-sb-feedback="message:required">Message requis.</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="d-none" id="submitSuccessMessage">
                        <div className="text-center text-white mb-3">
                            <div className="fw-bolder">Votre message a été envoyé avec succès!</div>
                        </div>
                    </div>
                    
                    <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Erreur lors de l'envois du message!</div></div>
                    <div className="text-center"><button className="btn btn-primary btn-xl text-uppercase" id="submitButton" type="submit">Envoyer Message</button></div>
                </form>
            </div>
        </section>
    </div>
    );
};

export default HomePage;
