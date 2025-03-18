// Select all elements with the 'autoShow' class
const elements = document.querySelectorAll(".autoShow");

// Intersection Observer to detect element visibility
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active"); // Add animation when visible
      } else {
        entry.target.classList.remove("active"); // Remove animation when not visible
      }
    });
  },
  { threshold: 0.3 }
); // Trigger when 30% of element is visible

// Observe each element
elements.forEach((element) => observer.observe(element));
