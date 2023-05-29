document
  .getElementById("blogForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var title = document.getElementById("title").value;
    var content = document.getElementById("content").value;
    var image = document.getElementById("image").files[0];

    if (title.trim() === "" || content.trim() === "" || !image) {
      alert("Please fill in all fields.");
      return;
    }

    // Perform additional operations here (e.g., AJAX request to save blog data)

    // Reset form fields
    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
    document.getElementById("image").value = "";

    alert("Blog post published successfully!");
  });
