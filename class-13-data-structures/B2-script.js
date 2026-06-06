let cards =
JSON.parse(
localStorage.getItem("kanbanCards")
) || [];

function saveCards() {

  localStorage.setItem(
    "kanbanCards",
    JSON.stringify(cards)
  );

}

document
.getElementById("addBtn")
.addEventListener(
  "click",
  addCard
);

function addCard() {

  const title =
  prompt("Task title");

  if (!title) return;

  const description =
  prompt("Description");

  const priority =
  prompt(
    "Priority (low, medium, high)"
  );

  const dueDate =
  prompt(
    "Due Date (YYYY-MM-DD)"
  );

  cards.push({
    id: Date.now(),
    title,
    description,
    priority,
    dueDate,
    status: "todo"
  });

  saveCards();
  renderCards();
}

function priorityClass(priority) {

  switch(priority){

    case "high":
      return "bg-red-500";

    case "medium":
      return "bg-yellow-500";

    default:
      return "bg-green-500";
  }

}

function renderCards() {

  document
  .querySelectorAll(".column")
  .forEach(col => {

    col.innerHTML = "";

  });

  cards.forEach(card => {

    const cardEl =
    document.createElement("div");

    cardEl.className =
    "bg-gray-50 border rounded p-3 mb-3 cursor-move";

    cardEl.draggable = true;

    cardEl.dataset.id =
    card.id;

    cardEl.innerHTML = `
      <h3 class="font-bold">
        ${card.title}
      </h3>

      <p class="text-sm mb-2">
        ${card.description}
      </p>

      <span
      class="
      ${priorityClass(card.priority)}
      text-white
      px-2 py-1
      rounded text-xs
      "
      >
      ${card.priority}
      </span>

      <p class="mt-2 text-sm">
      Due:
      ${card.dueDate}
      </p>

      <div class="mt-3 flex gap-2">

        <button
        onclick="editCard(${card.id})"
        class="
        bg-yellow-500
        text-white
        px-2 py-1 rounded
        "
        >
        Edit
        </button>

        <button
        onclick="deleteCard(${card.id})"
        class="
        bg-red-500
        text-white
        px-2 py-1 rounded
        "
        >
        Delete
        </button>

      </div>
    `;

    addDragEvents(cardEl);

    document
    .querySelector(
      `[data-status="${card.status}"]`
    )
    .appendChild(cardEl);

  });

}

function deleteCard(id){

  cards =
  cards.filter(
    card => card.id !== id
  );

  saveCards();
  renderCards();
}

function editCard(id){

  const card =
  cards.find(
    card => card.id === id
  );

  card.title =
  prompt(
    "Title",
    card.title
  );

  card.description =
  prompt(
    "Description",
    card.description
  );

  card.priority =
  prompt(
    "Priority",
    card.priority
  );

  card.dueDate =
  prompt(
    "Due Date",
    card.dueDate
  );

  saveCards();
  renderCards();
}

let draggedCard = null;

function addDragEvents(card){

  card.addEventListener(
    "dragstart",
    () => {

      draggedCard =
      card.dataset.id;

      card.classList.add(
        "opacity-50"
      );

    }
  );

  card.addEventListener(
    "dragend",
    () => {

      card.classList.remove(
        "opacity-50"
      );

    }
  );

}

document
.querySelectorAll(".column")
.forEach(column => {

  column.addEventListener(
    "dragover",
    e => {

      e.preventDefault();

      column.classList.add(
        "bg-blue-100"
      );

    }
  );

  column.addEventListener(
    "dragleave",
    () => {

      column.classList.remove(
        "bg-blue-100"
      );

    }
  );

  column.addEventListener(
    "drop",
    () => {

      column.classList.remove(
        "bg-blue-100"
      );

      const card =
      cards.find(
        card =>
        card.id ==
        draggedCard
      );

      card.status =
      column.dataset.status;

      saveCards();
      renderCards();

    }
  );

});

renderCards();