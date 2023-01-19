<script lang="ts">
	import { browser } from '$app/environment';
	import '../app.css';

	const date = new Date();
	const hour = date.getHours();
	const day = date.getDay();

	if (browser) {
		if (hour >= 19 && day == 4) {
			let textlive = 'Dance Xperience nu LIVE! Luister hier';
			document.getElementById('welofnietlive').innerHTML = textlive;
		} else {
			let textnietlive = "Op dit moment zijn we niet live, luister naar onze collega's!";
			document.getElementById('welofnietlive').innerHTML = textnietlive;
		}
		let slideIndex = 1;
		showSlides(slideIndex);

		// Next/previous controls
		function plusSlides(n) {
			showSlides((slideIndex += n));
		}

		// Thumbnail image controls
		function currentSlide(n) {
			showSlides((slideIndex = n));
		}

		function showSlides(n) {
			let i;
			let slides = document.getElementsByClassName('mySlides');
			let dots = document.getElementsByClassName('dot');
			if (n > slides.length) {
				slideIndex = 1;
			}
			if (n < 1) {
				slideIndex = slides.length;
			}
			for (i = 0; i < slides.length; i++) {
				slides[i].style.display = 'none';
			}
			for (i = 0; i < dots.length; i++) {
				dots[i].className = dots[i].className.replace(' active', '');
			}
			slides[slideIndex - 1].style.display = 'block';
			dots[slideIndex - 1].className += ' active';
		}
	}
</script>

<header id="header">
	<ul id="nav">
		<li>
			<a id="logo" href="#home"><img alt="Hier komt een logo" /></a>
		</li>
		<li><a href="#aboutme" class="">Over Ons</a></li>
		<li><a href="#contact" class="">Contact</a></li>
		<li><a href="#vrienden" class="">Vrienden van DanceXprience</a></li>
		<li><a href="#fotoboek" class="">Fotoboek</a></li>
	</ul>
</header>

<main>
	<div class="agenda">
		<h3>Agenda</h3>
	</div>

	<div>
		<h3><span id="home" /></h3>
		<h3 id="welofnietlive" />
	</div>

	<div id="container" style="margin-bottom: 10px">
		<iframe id="embed" src="https://omroepede.nl/radio/" />
	</div>

	<div>
		<audio controls>
			<source src="https://ms5ic.mx-cd.net/113-661253/Radio_Ede" type="audio/ogg" />
		</audio>
	</div>

	<div style="margin-bottom: 10px">
		Uitzending gemist? Geen probleem!<br />
		Luister terug via
		<a href="https://www.mediainstelling.nl/edegemist/uitzendinggemist/index-iframe.php"
			>deze link</a
		>.
	</div>

	<div>
		<h3 style="margin-bottom: 5px"><span id="aboutme" />Over Ons</h3>
		Wij zijn Ap (DJ Kessie) en Joshua (Sidekick). We zijn samen begonnen met DanceXperience aan het einde
		van 2019.

		<div class="overonscol">
			<div class="overonscolumn">
				<div style="margin-right: -25%">
					<h4>DJ Kessie</h4>
					<br />
					<img
						src="./assets/img/hosts/ap.jpg"
						style="
									height: 250px;
									width: auto;
									margin-top: -32px;
									border: solid #363636;
									border-radius: 10px;
								"
					/>
				</div>
			</div>

			<div class="overonscolumn">
				<div style="margin-left: -25%">
					<h4>Sidekick Joshua</h4>
					<br />
					<img
						src="./assets/img/hosts/joshua.jpg"
						style="
									height: 250px;
									width: auto;
									margin-top: -32px;
									border: solid #363636;
									border-radius: 10px;
								"
					/>
				</div>
			</div>
		</div>
	</div>

	<br />
	banaan <br />
	banaan <br />
	banaan <br />
	banaan <br />
	banaan <br />
	banaan <br />
	banaan <br />
	banaan <br />
	banaan <br />
	banaan <br />
	banaan <br />
	banaan <br />
	banaan <br />
	banaan <br />
	banaan <br />
	banaan <br />
	banaan <br />
	banaan <br />
	banaan <br />
	banaan <br />
	banaan <br />
	banaan <br />
	banaan <br />
	banaan <br />
	banaan <br />
	banaan <br /><br />

	<div>
		<h3><span id="contact" />Neem contact op</h3>
		<a href="mailto:aanmelden@dancex.nl">Aanmelden als gast</a><br />
		<a href="mailto:mix@dancex.nl">Opleveren mix</a>
	</div>

	<br />
	banaan <br />
	banaan <br />
	banaan <br />
	banaan <br />
	banaan <br />
	banaan <br />
	banaan <br />
	banaan <br />
	banaan <br />
	banaan <br />
	banaan <br />
	banaan <br />
	banaan <br />
	banaan <br />
	banaan <br />
	banaan <br />
	banaan <br />
	banaan <br />
	banaan <br />
	banaan <br />
	banaan <br />
	banaan <br />
	banaan <br />
	banaan <br />
	banaan <br />
	banaan <br /><br />

	<div style="margin-bottom: 50px">
		<h3><span id="vrienden" />Vrienden van DanceXperience</h3>

		<div class="vriendencol">
			<div class="vriendencolumn">
				<div class="vriendenfotosborder">
					<h4>Bart Zeal</h4>
					<br />
					<img src="./assets/img/vrienden/bartzeal.jpg" class="vriendenfotos" />
					<br />

					<a href="https://bartzeal.com/" style="position: relative; z-index: 10">
						<img
							src="./assets/img/icons/iconinternet.png"
							style="width: 20px; margin-bottom: -3.5px"
						/>
						Website</a
					><br />

					<a
						href="https://open.spotify.com/artist/1BcqkzstassP2Rc0JdyAcf/"
						style="position: relative; z-index: 10"
					>
						<img
							src="./assets/img/icons/iconspotify.png"
							style="width: 20px; margin-bottom: -3.5px"
						/>
						Spotify</a
					><br />

					<a href="https://www.facebook.com/BartZeal/" style="position: relative; z-index: 10">
						<img
							src="./assets/img/icons/iconfacebook.png"
							style="width: 20px; margin-bottom: -3.5px"
						/>
						Facebook</a
					><br />

					<a
						href="https://www.instagram.com/bartzealmusic/"
						style="position: relative; z-index: 10"
					>
						<img
							src="./assets/img/icons/iconinstagram.png"
							style="width: 20px; margin-bottom: -3.5px"
						/>
						Instagram</a
					><br />

					<a href="https://www.youtube.com/bartzeal" style="position: relative; z-index: 10">
						<img
							src="./assets/img/icons/iconyoutube.png"
							style="width: 20px; margin-bottom: -3.5px"
						/>
						Youtube</a
					><br />
				</div>
			</div>

			<div class="vriendencolumn">
				<div class="vriendenfotosborder">
					<h4>Half Centaur</h4>
					<br />
					<img src="./assets/img/vrienden/halfcentaur.jpg" class="vriendenfotos" />
					<br />

					<!-- Geen website -->
					<img
						src="./assets/img/icons/iconinternet.png"
						style="width: 20px; margin-bottom: -3.5px"
					/>
					<a style="color: #c1c1c1"> Geen website</a><br />

					<a
						href="https://open.spotify.com/artist/5FtkpMVRLnNK5pbxoCC8ZN/"
						style="position: relative; z-index: 10"
					>
						<img
							src="./assets/img/icons/iconspotify.png"
							style="width: 20px; margin-bottom: -3.5px"
						/>
						Spotify</a
					><br />

					<a
						href="https://nl-nl.facebook.com/halfcentaurofficial/"
						style="position: relative; z-index: 10"
					>
						<img
							src="./assets/img/icons/iconfacebook.png"
							style="width: 20px; margin-bottom: -3.5px"
						/>
						Facebook</a
					><br />

					<a
						href="https://www.instagram.com/halfcentaurofficial/"
						style="position: relative; z-index: 10"
					>
						<img
							src="./assets/img/icons/iconinstagram.png"
							style="width: 20px; margin-bottom: -3.5px"
						/>
						Instagram</a
					><br />

					<a
						href="https://www.youtube.com/@halfcentaur8909"
						style="position: relative; z-index: 10"
					>
						<img
							src="./assets/img/icons/iconyoutube.png"
							style="width: 20px; margin-bottom: -3.5px"
						/>
						Youtube</a
					><br />
				</div>
			</div>

			<div class="vriendencolumn">
				<div class="vriendenfotosborder">
					<h4>Jonesy Sings</h4>
					<br />
					<img src="./assets/img/vrienden/jonesysings.jpg" class="vriendenfotos" />
					<br />

					<a href="https://www.jonesysings.com/" style="position: relative; z-index: 10">
						<img
							src="./assets/img/icons/iconinternet.png"
							style="width: 20px; margin-bottom: -3.5px"
						/>
						Website</a
					><br />

					<a
						href="https://open.spotify.com/artist/0lv8xORZe0i7gEWDdfn9Nq/"
						style="position: relative; z-index: 10"
					>
						<img
							src="./assets/img/icons/iconspotify.png"
							style="width: 20px; margin-bottom: -3.5px"
						/>
						Spotify</a
					><br />

					<a href="https://www.facebook.com/Jonesysings/" style="position: relative; z-index: 10">
						<img
							src="./assets/img/icons/iconfacebook.png"
							style="width: 20px; margin-bottom: -3.5px"
						/>
						Facebook</a
					><br />

					<a href="https://www.instagram.com/jonesysings/" style="position: relative; z-index: 10">
						<img
							src="./assets/img/icons/iconinstagram.png"
							style="width: 20px; margin-bottom: -3.5px"
						/>
						Instagram</a
					><br />

					<a
						href="https://www.youtube.com/@jonesysings5240"
						style="position: relative; z-index: 10"
					>
						<img
							src="./assets/img/icons/iconyoutube.png"
							style="width: 20px; margin-bottom: -3.5px"
						/>
						Youtube</a
					><br />
				</div>
			</div>

			<!-- ##################################################################################################################################### -->
			<!-- ROW END -->
			<!-- ##################################################################################################################################### -->

			<div class="vriendencolumn">
				<div class="vriendenfotosborder">
					<h4>Twan Lammers</h4>
					<br />
					<img src="./assets/img/vrienden/twanlammers.jpg" class="vriendenfotos" />
					<br />

					<!-- Geen website -->
					<img
						src="./assets/img/icons/iconinternet.png"
						style="width: 20px; margin-bottom: -3.5px"
					/>
					<a style="color: #c1c1c1"> Geen website</a><br />

					<a
						href="https://open.spotify.com/artist/4suTTjenkiedNTiZ7F6VEC/"
						style="position: relative; z-index: 10"
					>
						<img
							src="./assets/img/icons/iconspotify.png"
							style="width: 20px; margin-bottom: -3.5px"
						/>
						Spotify</a
					><br />

					<a
						href="https://nl-nl.facebook.com/twan.lammers.37"
						style="position: relative; z-index: 10"
					>
						<img
							src="./assets/img/icons/iconfacebook.png"
							style="width: 20px; margin-bottom: -3.5px"
						/>
						Facebook</a
					><br />

					<a
						href="https://www.instagram.com/twanlammersmusic/"
						style="position: relative; z-index: 10"
					>
						<img
							src="./assets/img/icons/iconinstagram.png"
							style="width: 20px; margin-bottom: -3.5px"
						/>
						Instagram</a
					><br />

					<a
						href="https://www.youtube.com/@twanlammersmusic4982"
						style="position: relative; z-index: 10"
					>
						<img
							src="./assets/img/icons/iconyoutube.png"
							style="width: 20px; margin-bottom: -3.5px"
						/>
						Youtube</a
					><br />
				</div>
			</div>

			<div class="vriendencolumn">
				<div class="vriendenfotosborder">
					<h4>Artiest</h4>
					<br />
					<img src="./assets/img/vrienden/nopicture.jpg" class="vriendenfotos" />
					<br />

					<a href="" style="position: relative; z-index: 10">
						<img
							src="./assets/img/icons/iconinternet.png"
							style="width: 20px; margin-bottom: -3.5px"
						/>
						Website</a
					><br />

					<a href="" style="position: relative; z-index: 10">
						<img
							src="./assets/img/icons/iconspotify.png"
							style="width: 20px; margin-bottom: -3.5px"
						/>
						Spotify</a
					><br />

					<a href="" style="position: relative; z-index: 10">
						<img
							src="./assets/img/icons/iconfacebook.png"
							style="width: 20px; margin-bottom: -3.5px"
						/>
						Facebook</a
					><br />

					<a href="" style="position: relative; z-index: 10">
						<img
							src="./assets/img/icons/iconinstagram.png"
							style="width: 20px; margin-bottom: -3.5px"
						/>
						Instagram</a
					><br />

					<a href="" style="position: relative; z-index: 10">
						<img
							src="./assets/img/icons/iconyoutube.png"
							style="width: 20px; margin-bottom: -3.5px"
						/>
						Youtube</a
					><br />
				</div>
			</div>

			<div class="vriendencolumn">
				<div class="vriendenfotosborder">
					<h4>Artiest</h4>
					<br />
					<img src="./assets/img/vrienden/nopicture.jpg" class="vriendenfotos" />
					<br />

					<a href="" style="position: relative; z-index: 10">
						<img
							src="./assets/img/icons/iconinternet.png"
							style="width: 20px; margin-bottom: -3.5px"
						/>
						Website</a
					><br />

					<a href="" style="position: relative; z-index: 10">
						<img
							src="./assets/img/icons/iconspotify.png"
							style="width: 20px; margin-bottom: -3.5px"
						/>
						Spotify</a
					><br />

					<a href="" style="position: relative; z-index: 10">
						<img
							src="./assets/img/icons/iconfacebook.png"
							style="width: 20px; margin-bottom: -3.5px"
						/>
						Facebook</a
					><br />

					<a href="" style="position: relative; z-index: 10">
						<img
							src="./assets/img/icons/iconinstagram.png"
							style="width: 20px; margin-bottom: -3.5px"
						/>
						Instagram</a
					><br />

					<a href="" style="position: relative; z-index: 10">
						<img
							src="./assets/img/icons/iconyoutube.png"
							style="width: 20px; margin-bottom: -3.5px"
						/>
						Youtube</a
					><br />
				</div>
			</div>
		</div>
	</div>

	<div
		style="
					margin-left: 12.5%;
					width: 75%;
					border: solid #363636 5px;
					background-color: white;
					border-radius: 10px;
				"
	>
		<h3><span id="fotoboek" />Fotoboek</h3>

		<div class="slideshow-container">
			<!-- Full-width images with number and caption text -->
			<div class="mySlides fade">
				<div class="numbertext">1 / 4</div>
				<img
					src="./assets/img/fotoboek/img1.jpg"
					style="height: 500px; width: auto; margin-bottom: 30px"
				/>
				<div class="text">Eerste banaan</div>
			</div>

			<div class="mySlides fade">
				<div class="numbertext">2 / 4</div>
				<img
					src="./assets/img/fotoboek/img2.jpg"
					style="height: 500px; width: auto; margin-bottom: 30px"
				/>
				<div class="text">Tweede banaan</div>
			</div>

			<div class="mySlides fade">
				<div class="numbertext">3 / 4</div>
				<img
					src="./assets/img/fotoboek/img3.jpg"
					style="height: 500px; width: auto; margin-bottom: 30px"
				/>
				<div class="text">Derde banaan</div>
			</div>

			<div class="mySlides fade">
				<div class="numbertext">4 / 4</div>
				<img
					src="./assets/img/fotoboek/img4.jpg"
					style="height: 500px; width: auto; margin-bottom: 30px"
				/>
				<div class="text">Vierde banaan</div>
			</div>

			<!-- Next and previous buttons -->
			<a class="prev" onclick="plusSlides(-1)">&#10094;</a>
			<a class="next" onclick="plusSlides(1)">&#10095;</a>
		</div>
		<br />

		<!-- The dots/circles -->
		<div style="text-align: center">
			<span class="dot" onclick="currentSlide(1)" />
			<span class="dot" onclick="currentSlide(2)" />
			<span class="dot" onclick="currentSlide(3)" />
			<span class="dot" onclick="currentSlide(4)" />
		</div>
	</div>
</main>

<footer id="footer" class="footerhome">
	<ul id="footer-content">
		<li id="kabelradio">
			<h4 style="text-align: center">Digitale Kabelradio</h4>
			<ul id="kabelradio-lijst">
				<li>KPN: 1015</li>
				<li>XS4ALL: 1015</li>
				<li>Solcon: 1215</li>
				<li>Ziggo: 912</li>
				<li>T-mobile: 2086</li>
			</ul>
		</li>

		<li>
			<h4 style="text-align: center">FM</h4>
			<a style="text-align: center">107,3 MHz</a>
		</li>

		<li>
			<h4 style="text-align: center">DAB+</h4>
			<a style="text-align: center">Kanaal 5A (174,928 MHz)</a>
		</li>

		<li>
			<h4 style="text-align: center">Online Stream</h4>
			<a href="https://omroepede.nl/radio/" style="text-align: center"
				>https://omroepede.nl/radio/</a
			>
		</li>

		<li class="social-link">
			<a href="https://www.facebook.com/djkessie/" class="">
				<img src="./assets/img/icons/iconfacebookgroot.png" />
				<span>Facebook</span>
			</a>
		</li>

		<li class="social-link">
			<a href="https://www.instagram.com/dancex.rtvrijnstreek/" class="">
				<img src="./assets/img/icons/iconinstagramgroot.png" />
				<span>Instagram</span>
			</a>
		</li>

		<li class="social-link">
			<a href="https://omroepede.nl/" class="">
				<img src="./assets/img/icons/iconedefm.png" />
				<span>Omroep Ede</span>
			</a>
		</li>
	</ul>
</footer>
