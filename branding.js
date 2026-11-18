(() => {
  const platforms = [
    { name: "Twitch", url: "https://www.twitch.tv/roga_dev" },
    { name: "TikTok", url: "https://www.tiktok.com/@roga_dev" },
    { name: "YouTube", url: "https://www.youtube.com/@roga_dev" }
  ];

  function createSocialLinks(label) {
    const nav = document.createElement("nav");
    nav.className = "roga-social-links";
    nav.setAttribute("aria-label", label);

    platforms.forEach(({ name, url }) => {
      const link = document.createElement("a");
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.append(document.createTextNode(`${name} `));

      const handle = document.createElement("span");
      handle.textContent = "@roga_dev";
      link.append(handle);
      nav.append(link);
    });

    return nav;
  }

  function addHeader() {
    const titleArea = document.getElementById("titlearea");
    if (!titleArea || document.querySelector(".roga-header-strip")) return;

    const strip = document.createElement("div");
    strip.className = "roga-header-strip";

    const lockup = document.createElement("div");
    lockup.className = "roga-brand-lockup";

    const brand = document.createElement("a");
    brand.className = "roga-brand-name";
    brand.href = "index.html";
    brand.textContent = "RoGa Dev";
    lockup.append(brand);

    const tagline = document.createElement("span");
    tagline.className = "roga-brand-tagline";
    tagline.textContent = "Développement, jeux vidéo et création";
    lockup.append(tagline);

    strip.append(lockup, createSocialLinks("Réseaux sociaux de RoGa Dev"));
    titleArea.insertAdjacentElement("afterend", strip);
  }

  function addFooter() {
    if (document.querySelector(".roga-footer")) return;

    const footer = document.createElement("footer");
    footer.className = "roga-footer";

    const copy = document.createElement("div");
    copy.className = "roga-footer-copy";

    const brand = document.createElement("strong");
    brand.textContent = "RoGa Dev";
    copy.append(brand);

    const invitation = document.createElement("span");
    invitation.textContent = "Retrouve-moi sur les réseaux !";
    copy.append(invitation);

    footer.append(copy, createSocialLinks("Suivre RoGa Dev"));

    const navigationPath = document.getElementById("nav-path");
    if (navigationPath) {
      navigationPath.insertAdjacentElement("beforebegin", footer);
    } else {
      document.body.append(footer);
    }
  }

  function addBranding() {
    addHeader();
    addFooter();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", addBranding, { once: true });
  } else {
    addBranding();
  }
})();
