import logo from "url:../assets/desktop/logo.svg";
import spotifyLogo from "url:../assets/desktop/spotify.svg";
import applePodcastLogo from "url:../assets/desktop/apple-podcast.svg";
import googlePodcastsLogo from "url:../assets/desktop/google-podcasts.svg";
import pocketCastsLogo from "url:../assets/desktop/pocket-casts.svg";
import bgPatternDots from "url:../assets/desktop/bg-pattern-dots.svg";

const mobileSiteHTML = `
    <div class="logo-container">
        <img class="logo-img" src="${logo}" alt="Pod logo" />
      </div>
      <div class="text-container">
        <h1 class="heading-primary">
          <span class="heading-primary--green">Publish Your Podcasts</span>
          <span class="heading-primary--white">Everywhere.</span>
        </h1>
        <p class="text-container__paragraph">
          Upload your audio to Pod with a single click. We'll then distribute
          your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts
          and more!
        </p>
      </div>
      <div class="podcast-logos-container">
        <img
          class="podcast-logo podcast-logo--spotify"
          src="${spotifyLogo}"
          alt="Spotify logo"
        />
        <img
          class="podcast-logo podcast-logo--apple"
          src="${applePodcastLogo}"
          alt="Apple Podcast logo"
        />
        <img
          class="podcast-logo podcast-logo--google"
          src="${googlePodcastsLogo}"
          alt="Google Podcasts logo"
        />
        <img
          class="podcast-logo podcast-logo--pocket"
          src="${pocketCastsLogo}"
          alt="Pocket Casts logo"
        />
      </div>
      <div class="form-container">
        <form class="form">
          <p class="form-error-empty hidden">Oops! Please add your email</p>
          <p class="form-error-invalid hidden">Oops! Please check your email</p>
          <p class="form-submit-success hidden">
            Thank you for submitting your email!
          </p>
          <input class="form__input" name="email" placeholder="Email address" />
          <button class="form__btn" type="submit">Request Access</button>
        </form>
      </div>
    `;

const tabletSiteHTML = `
    <div class="logo-container">
      <img class="logo-img" src="${logo}" alt="Pod logo" />
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
        src="${spotifyLogo}"
        alt="Spotify logo"
      />
      <img
        class="podcast-logo podcast-logo--apple"
        src="${applePodcastLogo}"
        alt="Apple Podcast logo"
      />
      <img
        class="podcast-logo podcast-logo--google"
        src="${googlePodcastsLogo}"
        alt="Google Podcasts logo"
      />
      <img
        class="podcast-logo podcast-logo--pocket"
        src="${pocketCastsLogo}"
        alt="Pocket Casts logo"
      />
    </div>
  </div>
  <div class="pattern-dots-container">
    <img
      class="pattern-dots-img"
      src="${bgPatternDots}"
      alt="Green-patterned dots"
    />
  </div>
    `;

export { mobileSiteHTML, tabletSiteHTML };
