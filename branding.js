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

  function createDownloadLink() {
    const link = document.createElement("a");
    link.className = "roga-download-link";
    link.href = "https://roga-dev.itch.io/bear-next-sword";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "Télécharger le jeu";
    return link;
  }

  function addHeader() {
    const titleArea = document.getElementById("titlearea");
    const existingStrip = document.querySelector(".roga-header-strip");
    if (existingStrip) {
      if (!existingStrip.querySelector(".roga-download-link")) {
        existingStrip.append(createDownloadLink());
      }
      return;
    }
    if (!titleArea) return;

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

    strip.append(lockup, createSocialLinks("Réseaux sociaux de RoGa Dev"), createDownloadLink());
    titleArea.insertAdjacentElement("afterend", strip);
  }

  function addFooter() {
    const existingFooter = document.querySelector(".roga-footer");
    if (existingFooter) {
      const brand = existingFooter.querySelector(".roga-footer-copy strong");
      if (brand && !brand.closest(".roga-credit-link")) {
        const brandLink = document.createElement("a");
        brandLink.className = "roga-credit-link";
        brandLink.href = "https://www.youtube.com/@roga_dev";
        brandLink.target = "_blank";
        brandLink.rel = "noopener noreferrer";
        brand.textContent = "RoGa Dev";
        brand.before(brandLink);
        brandLink.append(brand);
      }
      return;
    }

    const footer = document.createElement("footer");
    footer.className = "roga-footer";

    const copy = document.createElement("div");
    copy.className = "roga-footer-copy";

    const brandLink = document.createElement("a");
    brandLink.className = "roga-credit-link";
    brandLink.href = "https://www.youtube.com/@roga_dev";
    brandLink.target = "_blank";
    brandLink.rel = "noopener noreferrer";

    const brand = document.createElement("strong");
    brand.textContent = "RoGa Dev";
    brandLink.append(brand);
    copy.append(brandLink);

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

  function removeDoxygenCredit() {
    document.querySelectorAll("#nav-path li.footer, address.footer").forEach((credit) => {
      if (credit.querySelector('a[href="https://www.doxygen.org/index.html"]')) {
        credit.remove();
      }
    });
  }

  function addBranding() {
    addHeader();
    addFooter();
    removeDoxygenCredit();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", addBranding, { once: true });
  } else {
    addBranding();
  }
})();
