const reviewCount = document.querySelector("#reviewCount");
const storageKey = "productReviewCount";
const currentCount = Number(localStorage.getItem(storageKey)) || 0;
const updatedCount = currentCount + 1;

localStorage.setItem(storageKey, updatedCount);
reviewCount.textContent = updatedCount;
