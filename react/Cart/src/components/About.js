import React from 'react'
import './style.css'
import '../fonts/icomoon/style.css'
import '../fonts/bootstrap.min.css'
const About = () => {
return (
    <>
        <section id="about">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
    					<h1 class="wow bounceIn mb-5" data-wow-offset="50" data-wow-delay="0.3s">WE ARE <span>AWESOME</span></h1>
    				</div>
					<div class="col-md-4 col-sm-4 col-xs-12 wow fadeInLeft" data-wow-offset="50" data-wow-delay="0.6s">
						<div class="media">
							<div class="media-heading-wrapper">
								<div class="media-object pull-left">
									<i class="icon-mobile"></i>
								</div>
								<h2 class="media-heading">FULLY RESPONSIVE</h2>
							</div>
							<div class="media-body">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget diam et laoreet phasellus ut nisi id leo molestie. Adipiscing vitae vel quam proin eget mauris eget. Lorem ipsum dolor sit amet.</p>
							</div>
						</div>
					</div>
					<div class="col-md-4 col-sm-4 col-xs-12 wow fadeInUp" data-wow-offset="50" data-wow-delay="0.9s">
						<div class="media">
							<div class="media-heading-wrapper">
								<div class="media-object pull-left">
									<i class="icon-comment-o"></i>
								</div>
								<h2 class="media-heading">FREE SUPPORT</h2>
							</div>
							<div class="media-body">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget diam et laoreet phasellus ut nisi id leo molestie. Adipiscing vitae vel quam proin eget mauris eget. Lorem ipsum dolor sit amet.</p>
							</div>
						</div>
					</div>
					<div class="col-md-4 col-sm-4 col-xs-12 wow fadeInRight" data-wow-offset="50" data-wow-delay="0.6s">
						<div class="media">
							<div class="media-heading-wrapper">
								<div class="media-object pull-left">
									<i class="icon-html5"></i>
								</div>
								<h2 class="media-heading">HTML5 &AMP; CSS3</h2>
							</div>
							<div class="media-body">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget diam et laoreet phasellus ut nisi id leo molestie. Adipiscing vitae vel quam proin eget mauris eget. Lorem ipsum dolor sit amet.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    </>
)
}

export default About