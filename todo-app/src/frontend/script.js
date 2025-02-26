$(document).ready(function () {
    // Messages de bienvenue rigolos
    const messages = [
      "Prêt(e) à dominer le monde avec tes tâches ? 😈",
      "Ajoute une tâche et deviens ultra productif(ve) 🚀",
      "Une tâche ajoutée = une victoire de plus ! 🏆",
      "Ne reporte pas tes tâches... ou fais-le demain ! 😜"
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
          <input type="checkbox" class="task-toggle">
          <span>${taskText} 🤯</span>
          <button class="delete-btn">💥</button>
        </li>
      `);

      taskItem.hide().appendTo("#todo-list").fadeIn(400);
      $("#todo-input").val("");
      updateTaskCount();
    });

    // Marquer comme complété
    $("#todo-list").on("change", ".task-toggle", function () {
      $(this).parent().toggleClass("completed");
    });

    // Suppression d'une tâche
    $("#todo-list").on("click", ".delete-btn", function () {
      $(this).parent().fadeOut(400, function () {
        $(this).remove();
        updateTaskCount();
      });
    });

    updateTaskCount();

    function randomizeIcons() {
      $(".rotating-icon").each(function () {
        let newX = Math.floor(Math.random() * 90) + "%";
        let newY = Math.floor(Math.random() * 90) + "%";
        $(this).css({ top: newY, left: newX });
      });
    }

    // Changement de position toutes les 5s
    setInterval(randomizeIcons, 5000);
});
