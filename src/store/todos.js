import { writable } from "svelte/store";

function createTodos() {
    const { subscribe, set, update } = writable([
      {
        id: 1,
        done: false,
        text: "스벨트 공부하기",
      },
      {
        id: 2,
        done: false,
        text: "운동하기",
      },
      {
        id: 3,
        done: false,
        text: "Angular Universal 공부하기",
      },
      {
        id: 4,
        done: true,
        text: "To do List 작성하기",
      },
    ]);
    const selected = {};

    return {
      subscribe,
      reset: () => set([]),
      addTodo: (text) => {
        return update((tds) => {
            const newTodo = {
                id: tds.length + 1,
                done: false,
                text
            };
            tds.push(newTodo);
            return tds;
        })
      },
      selectTodo: (todo) => { 
          selected[todo.id] = todo;
          return update((tds) => tds);
       },
      unSelectTodo: (todo) => { 
          delete selected[todo.id];
          return update((tds) => tds);
      },
      complete: () => {
        return update((tds) => {
            for(let i=0; i<tds.length; i++) {
                const td = tds[i];
                if(selected[td.id]) {
                    delete selected[td.id];
                    td.done = true;
                }
            }
            return tds;
        });
      },
      delete: () => {
        return update((tds) => {
            for(let i=0; i<tds.length; i++) {
                const td = tds[i];
                if(selected[td.id]) {
                    delete selected[td.id];
                    tds.splice(i, 1);
                }
            }
            return tds;
        })
      },
      isSelected: (todo) => !!selected[todo.id],
      selected,
    };
}

export let todos = createTodos();