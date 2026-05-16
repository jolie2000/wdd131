// Toggle navigation for mobile, update footer timestamps
(function () {
  const nav = document.getElementById("mainNav");
  const toggle = document.getElementById("navToggle");
  const yearEl = document.getElementById("year");
  const modifiedEl = document.getElementById("lastModified");

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
  if (modifiedEl) {
    try {
      // Format lastModified into a readable date
      const m = document.lastModified && new Date(document.lastModified);
      modifiedEl.textContent =
        m && !isNaN(m)
          ? m.toLocaleString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          : "Unknown";
    } catch (e) {
      modifiedEl.textContent = document.lastModified || "Unknown";
    }
  }

  const mq = window.matchMedia("(min-width: 900px)");

  function setNavForViewport() {
    if (!nav || !toggle) return;
    if (mq.matches) {
      nav.classList.add("open");
      toggle.setAttribute("aria-expanded", "true");
    } else {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
    updateToggleIcon();
  }

  function updateToggleIcon() {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    if (!toggle) return;
    // Use plain unicode icons for simplicity and better accessibility
    toggle.innerHTML = expanded
      ? '<span aria-hidden="true">✖</span>'
      : '<span aria-hidden="true">☰</span>';
  }

  function toggleNav() {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    updateToggleIcon();
  }

  // Attach handlers
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      // only toggle when in mobile view
      if (!mq.matches) {
        toggleNav();
      }
    });
  }

  // Update on resize/initial
  mq.addEventListener
    ? mq.addEventListener("change", setNavForViewport)
    : mq.addListener(setNavForViewport);
  window.addEventListener("load", setNavForViewport);
  window.addEventListener("resize", setNavForViewport);
})();
