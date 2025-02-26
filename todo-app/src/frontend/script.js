$(document).ready(function () {
    // Messages de bienvenue dynamiques
    const messages = [
      "Prêt(e) à être ultra productif(ve) ? 🚀",
      "Ajoute tes tâches comme un(e) pro ! 💪",
      "Aujourd'hui, c'est toi qui gères ! 😎",
      "Fais une liste et deviens une légende ! 🌟"
    ];
    $("#welcome-message").text(messages[Math.floor(Math.random() * messages.length)]);

    // Mise à jour du compteur de tâches
    function updateTaskCount() {
      $("#task-count").text($("#todo-list li").length);
    }

    // Ajout d'une tâche
    $("#todo-form").submit(function (e) {
      e.preventDefault();
      const taskText = $("#todo-input").val().trim();
      if (taskText === "") return;

      const taskItem = $(`
        <li>
          <span>${taskText}</span>
          <button class="delete-btn">🗑</button>
        </li>
      `);

      taskItem.hide().appendTo("#todo-list").fadeIn(400);
      $("#todo-input").val("");
      updateTaskCount();
    });

    // Suppression d'une tâche
    $("#todo-list").on("click", ".delete-btn", function () {
      $(this).parent().fadeOut(400, function () {
        $(this).remove();
        updateTaskCount();
      });
    });

    // Déplacement aléatoire des icônes toutes les 3s
    function randomizeIcons() {
      $(".rotating-icon").each(function () {
        let newX = Math.floor(Math.random() * 90) + "%";
        let newY = Math.floor(Math.random() * 90) + "%";
        $(this).css({ top: newY, left: newX });
      });
    }
    setInterval(randomizeIcons, 3000);

    updateTaskCount();
});
