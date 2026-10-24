
    document.getElementById("backButton").addEventListener("click", (event) => {
      if (history.length > 1) {
        event.preventDefault();
        history.back();
      }
    });
  