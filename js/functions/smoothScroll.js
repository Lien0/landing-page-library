export function smoothScroll() {
  const anchors = document.querySelectorAll('a[href^="#"]');
  if (anchors.length === 0) return;

  anchors.forEach((anchor) => {
    anchor.addEventListener("click", (el) => {
      el.preventDefault();

      const targetId = anchor.getAttribute("href");
      const target = document.querySelector(targetId);

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}
