document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  let positions = ["active", "right", "left"];

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const currentIndex = Array.from(cards).indexOf(card);
      const activeIndex = positions.indexOf("active");

      // Determine the number of rotations needed
      const rotations = (currentIndex - activeIndex + positions.length) % positions.length;

      // Rotate positions array to bring the clicked card to the front
      for (let i = 0; i < rotations; i++) {
        positions.unshift(positions.pop());
      }

      // Apply new classes
      cards.forEach((c, i) => {
        c.classList.remove("active", "left", "right");
        c.classList.add(positions[i]);
      });
    });
  });
});