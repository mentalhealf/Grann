document.addEventListener("DOMContentLoaded", function () {
    const accordionItems = document.querySelectorAll(".accordion-item");
  
    accordionItems.forEach((item) => {
      const title = item.querySelector(".accordion-title");
      const content = item.querySelector(".accordion-content");
  
      title.addEventListener("click", () => {
        const isOpen = item.classList.contains("active");
  
        accordionItems.forEach((otherItem) => {
          otherItem.classList.remove("active");
          otherItem.querySelector(".accordion-content").style.display = "none";
          otherItem.querySelector(".arrow").innerHTML =
            '<svg class="arrow-icon" xmlns="icon-up" viewBox="0 0 32 32"><path d="M7 10l5 5 5-5z"/></svg>';
        });
  
        if (!isOpen) {
          item.classList.add("active");
          content.style.display = "block";
          title.querySelector(".arrow").innerHTML =
            '<svg class="arrow-icon" xmlns="icon-down" viewBox="0 0 32 32"><path d="M7 15l5-5 5 5z"/></svg>';
        }
      });
    });
  });