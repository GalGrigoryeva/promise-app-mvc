export function showYesNoModal(text, yesCallback, noCallback) {
  let html = `
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <p>${text}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary">Yeah, sure!</button>
          <button type="button" class="btn btn-secondary">No, not now</button>
        </div>
      </div>
    </div>
  `;

  let modal = document.createElement("div");
  modal.innerHTML = html;
  modal.classList.add("modal");

  let container = document.querySelector(".container");
  container.appendChild(modal);

  let yesBtn = modal.querySelector(".btn-primary");
  let noBtn = modal.querySelector(".btn-secondary");

  yesBtn.addEventListener("click", function () {
    container.removeChild(modal);
    yesCallback();
  });

  noBtn.addEventListener("click", function () {
    container.removeChild(modal);
    if (noCallback) {
      noCallback();
    }
  });
}