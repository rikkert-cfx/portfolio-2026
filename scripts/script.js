document.getElementById("contact-form").addEventListener("submit", async function(e) {
  e.preventDefault();
  const formData = new FormData(this);
  const response = await fetch(this.action, {
    method: this.method,
    body: formData
  });
  if (response.ok) {
    const successMessage = document.getElementById("success-message");
    successMessage.style.display = "block";
    this.reset();
    setTimeout(() => {
      successMessage.style.display = "none";
    }, 10000);
  }
});

function updateClock() {
  let options = {
    timeZone: "Europe/Amsterdam",
    hour: "2-digit",
    minute: "2-digit"
  };

  let formatter = new Intl.DateTimeFormat("nl-NL", options);
  document.getElementById("clock").textContent = formatter.format(new Date());
}

setInterval(updateClock, 1000);
updateClock();

function openPage(event, url) {
    event.preventDefault(); 

    const modal = document.getElementById('projectModal');
    const frame = document.getElementById('projectFrame');
    
    frame.src = url;
    
    modal.style.display = "flex";
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    const frame = document.getElementById('projectFrame');

    modal.classList.remove('active');
  
    setTimeout(() => {
        modal.style.display = "none";
        frame.src = ""; 
    }, 300);
}

document.getElementById('js-contact-fab').addEventListener('click', function() {
      
      const allH3s = document.getElementsByTagName('div');
      let targetElement = null;

      for (let h3 of allH3s) {
        if (h3.textContent.trim().includes("footer-icons")) {
          targetElement = h3;
          break;
        }
      }

      if (!targetElement) {
        targetElement = document.querySelector('.body-4');
      }

      if (targetElement) {
        targetElement.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });
      } 
    });
