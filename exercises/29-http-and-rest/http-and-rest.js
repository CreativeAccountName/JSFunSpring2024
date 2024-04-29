(function () {
  /**
   * This exercise is in Teams. Ignore the code below.
   * You should not change this code.
   */
  const fetchUsers = async () => {
    try {
      const { data } = await axios({
        method: "GET",
        url: "https://reqres.in/api/users",
      });

      // e.g. {data: { [{ first_name: ... },{ first_name: ... }] }
      data.data.forEach((user) => {
        const { first_name, last_name, avatar } = user;
        const htmlStr = `<img src="${avatar}"><p>${first_name} ${last_name}</p>`;
        document
          .querySelector("#users")
          .insertAdjacentHTML("beforeend", htmlStr); // Use a library to prevent XSS
      });
    } catch (err) {
      console.error(err);
      const htmlStr =
        '<div class="text-danger">We\'re sorry, but an unexpected error occurred</div>';
      document.querySelector(".container").innerHTML = htmlStr; // Use a library to prevent XSS
    }
  };

  const createUser = async (name, job) => {
    try {
      const { data } = await axios({
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          name,
          job,
        },
        url: "https://reqres.in/api/users",
      });

      console.log(data);
    } catch (err) {
      console.error(err);
      const htmlStr =
        '<div class="text-danger">We\'re sorry, but an unexpected error occurred</div>';
      document.querySelector(".container").innerHTML = htmlStr; // Use a library to prevent XSS
    }
  };

  document.querySelector("#form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const fullName = document.querySelector("#fullName");
    const job = document.querySelector("#job");

    await createUser(fullName.value, job.value);

    // Clear input
    fullName.value = "";
    job.value = "";
  });

  fetchUsers();
})();
