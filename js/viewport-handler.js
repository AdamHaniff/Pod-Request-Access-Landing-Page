function insertNewHTML() {
  const viewportWidth =
    window.innerWidth || document.documentElement.clientWidth;
  const mainContainer = document.getElementsByTagName("main")[0];

  if (viewportWidth >= 768) {
    mainContainer.innerHTML = "";
    const newHTML = `
    <div class="logo-container">
      <img class="logo-img" src="assets/desktop/logo.svg" alt="Pod logo" />
  </div>
  <div class="text-container">
    <h1 class="heading-primary">
      <span class="heading-primary--green">Publish Your Podcasts</span>
      <span class="heading-primary--white">Everywhere.</span>
    </h1>
    <p class="text-container__paragraph">
      Upload your audio to Pod with a single click. We'll then distribute your
      podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and
      more!
    </p>
    <div class="form-container">
      <form class="form">
        <div class="input-btn-container">
          <input
            class="form__input"
            name="email"
            placeholder="Email address"
          />
          <button class="form__btn" type="submit">Request Access</button>
        </div>
        <p class="form-error-empty hidden">Oops! Please add your email</p>
        <p class="form-error-invalid hidden">Oops! Please check your email</p>
        <p class="form-submit-success hidden">
          Thank you for submitting your email!
        </p>
      </form>
    </div>
    <div class="podcast-logos-container">
      <img
        class="podcast-logo podcast-logo--spotify"
        src="assets/desktop/spotify.svg"
        alt="Spotify logo"
      />
      <img
        class="podcast-logo podcast-logo--apple"
        src="assets/desktop/apple-podcast.svg"
        alt="Apple Podcast logo"
      />
      <img
        class="podcast-logo podcast-logo--google"
        src="assets/desktop/google-podcasts.svg"
        alt="Google Podcasts logo"
      />
      <img
        class="podcast-logo podcast-logo--pocket"
        src="assets/desktop/pocket-casts.svg"
        alt="Pocket Casts logo"
      />
    </div>
  </div>
  <div class="pattern-dots-container">
    <img
      class="pattern-dots-img"
      src="./assets/desktop/bg-pattern-dots.svg"
      alt="Green-patterned dots"
    />
  </div>
    `;
    mainContainer.innerHTML = newHTML;
  }
}

insertNewHTML();

window.addEventListener("resize", insertNewHTML);
