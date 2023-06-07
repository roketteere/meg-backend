document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#signup-form");
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const emailValue = email.value;
    const passwordValue = password.value;
    let results = await fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailValue,
        password: passwordValue,
      }),
    });
    if (results.status === 200) {
      results = await results.json();
    } else {
      alert("Error Signing Up");
    }
    console.log(results);
  });
});
