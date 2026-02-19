fetch("../php/get_user_profile.php")
  .then(res => {
    if (!res.ok) {
      window.location.href = "index.html";
    }
  });
