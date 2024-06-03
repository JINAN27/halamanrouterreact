import React from 'react';
import "./index.css";
const Home = () => {
    return (
        <div>
           

            <main>
                <section className="text-center">
                    <div className="jumbotron">
                        <img src="path/to/your-photo.jpg" className="rounded-circle profile-photo mb-4" alt="Photo"/>
                        <h1 className="display-4">Hello, I'm Muhammad Miftahul Jinan</h1>
                        <p className="lead">A Mern Fullstack</p>
                    </div>
                </section>

                <section>
                    <h2 className="text-center">Latest Projects</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <h5 className="card-title">Project 1</h5>
                                    <p className="card-text">Project 1 Description</p>
                                </div>
                                <div className="card-body d-flex flex-wrap">
                                    <img src="path/to/image1a.jpg" className="img-thumbnail project-image" alt="Project 1 Image 1"/>
                                    <img src="path/to/image1b.jpg" className="img-thumbnail project-image" alt="Project 1 Image 2"/>
                                    <img src="path/to/image1c.jpg" className="img-thumbnail project-image" alt="Project 1 Image 3"/>
                                    <img src="path/to/image1d.jpg" className="img-thumbnail project-image" alt="Project 1 Image 4"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <h5 className="card-title">Project 2</h5>
                                    <p className="card-text">Project 2 Description</p>
                                </div>
                                <div className="card-body d-flex flex-wrap">
                                    <img src="path/to/image2a.jpg" className="img-thumbnail project-image" alt="Project 2 Image 1"/>
                                    <img src="path/to/image2b.jpg" className="img-thumbnail project-image" alt="Project 2 Image 2"/>
                                    <img src="path/to/image2c.jpg" className="img-thumbnail project-image" alt="Project 2 Image 3"/>
                                    <img src="path/to/image2d.jpg" className="img-thumbnail project-image" alt="Project 2 Image 4"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <h5 className="card-title">Project 3</h5>
                                    <p className="card-text">Project 3 Description</p>
                                </div>
                                <div className="card-body d-flex flex-wrap">
                                    <img src="path/to/image3a.jpg" className="img-thumbnail project-image" alt="Project 3 Image 1"/>
                                    <img src="path/to/image3b.jpg" className="img-thumbnail project-image" alt="Project 3 Image 2"/>
                                    <img src="path/to/image3c.jpg" className="img-thumbnail project-image" alt="Project 3 Image 3"/>
                                    <img src="path/to/image3d.jpg" className="img-thumbnail project-image" alt="Project 3 Image 4"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-5">
                    <h2 className="text-center">Testimonials</h2>
                    <div id="testimonialCarousel" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="d-flex justify-content-center">
                                    <div className="testimonial">
                                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et nisi nec purus commodo scelerisque."</p>
                                        <small>- Client 1</small>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="d-flex justify-content-center">
                                    <div className="testimonial">
                                        <p>"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi."</p>
                                        <small>- Client 2</small>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="d-flex justify-content-center">
                                    <div className="testimonial">
                                        <p>"Phasellus vel elit ut nisi fermentum ultricies. Nulla porttitor massa ut tortor efficitur sollicitudin."</p>
                                        <small>- Client 3</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#testimonialCarousel" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#testimonialCarousel" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </section>
            </main>

            <footer className="bg-dark text-white text-center py-3">
                <p>&copy; 2024 Muhammad Miftahul Jinan</p>
                <p>Follow me on 
                    <a href="#" className="text-white">LinkedIn</a>, 
                    <a href="#" className="text-white">Twitter</a>, 
                    <a href="#" className="text-white">Instagram</a>
                </p>
            </footer>

            <div className="modal fade" id="imageModal" tabIndex="-1" role="dialog" aria-labelledby="imageModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <img id="modalImage" src="" className="img-fluid" alt=""/>
                        </div>
                    </div>
                </div>
            </div>

            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.6.0/dist/umd/popper.min.js"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
            <script src="scripts.js"></script>
        </div>
    );
};

export default Home;
