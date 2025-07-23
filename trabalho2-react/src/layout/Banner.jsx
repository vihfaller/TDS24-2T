import React from 'react'
import './Banner.css'

function Banner() {
    return (

        <div className="carousel" >

            <div id="carouselExampleFade" class="carousel slide carousel-fade">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="..\src\assets\img\zurich.jpg" class="d-block w-100" alt="zurich"></img>

                        <div className="carousel-caption d-none d-md-block">
                            <h6>SWITZERLAND</h6>
                            <h1>ZURICH</h1>
                            <p>Artic temperatures and several maters of snow <br /> are no match for the natural impressions and cultural twist <br /> that will warm your soul while dog sledding in Greenland.</p>
                        </div>
                    </div>


                    <div class="carousel-item">
                        <img src="..\src\assets\img\paris.jpg" class="d-block w-100" alt="paris"></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h6>FRANCE</h6>
                            <h1>PARIS</h1>
                            <p>Artic temperatures and several maters of snow <br /> are no match for the natural impressions and cultural twist <br /> that will warm your soul while dog sledding in Greenland.</p>

                        </div>

                    </div>

                    <div class="carousel-item">
                        <img src="..\src\assets\img\venezia.jpg" class="d-block w-100" alt="venezia"></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h6>ITALY</h6>
                            <h1>VENEZIA</h1>
                            <p>Artic temperatures and several maters of snow <br /> are no match for the natural impressions and cultural twist <br /> that will warm your soul while dog sledding in Greenland.</p>

                        </div>

                    </div>

                </div> {/* FIM CLASSE CARROSEL IMAGENS E LEGENDAS */}

                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                {/* FIM DIV CARROSEL E BOTOES */}
            </div>

            {/* ANIMAÇOES LEGENDAS CARROSEL */}
            <div data-aos="fade-up">
                {/* P */}
            </div>

            <div data-aos="fade-right">
                {/* h6 */}
            </div>

            <div data-aos="fade-left">
                {/* h1 */}
            </div>

        </div>


    )
}

export default Banner