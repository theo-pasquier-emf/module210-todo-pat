$(document).ready(function () {
    // Messages de bienvenue dynamiques
    const messages = [
      "Organise ta journée avec style !",
      "Ajoute une tâche et reste productif 🚀",
      "Les petites actions font les grands succès !",
      "Commence par une tâche et avance 💪"
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
          <span>${taskText}</span>
          <button class="delete-btn">🗑</button>
        </li>
      `);
  
      // Animation d'ajout
      taskItem.hide().appendTo("#todo-list").fadeIn(300);
  
      $("#todo-input").val("");
      updateTaskCount();
    });
  
    // Marquer comme complété
    $("#todo-list").on("change", ".task-toggle", function () {
      $(this).parent().toggleClass("completed");
    });
  
    // Suppression d'une tâche
    $("#todo-list").on("click", ".delete-btn", function () {
      $(this).parent().fadeOut(300, function () {
        $(this).remove();
        updateTaskCount();
      });
    });
  
    updateTaskCount();
  });
  