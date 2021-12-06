import { r as resolveComponent, o as openBlock, c as createBlock, a as createElementBlock, b as createCommentVNode, d as createBaseVNode, e as createVNode, w as withDirectives, v as vModelText, n as normalizeClass, t as toDisplayString, F as Fragment, f as renderList, g as createStore, h as createRouter, i as createWebHistory, j as createApp } from "./vendor.47ce3dad.js";
const p = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p();
var App_vue_vue_type_style_index_0_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$5 = {};
function _sfc_render$5(_ctx, _cache) {
  const _component_RouterView = resolveComponent("RouterView");
  return openBlock(), createBlock(_component_RouterView);
}
var App = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5]]);
var store = {
  state() {
    return {
      pages: []
    };
  }
};
var TodoIcon_vue_vue_type_style_index_0_lang = "";
const _sfc_main$4 = {
  props: {
    icon: { type: String }
  }
};
const _hoisted_1$2 = {
  class: "todo-icon",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1 = { key: 0 };
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("circle", {
  cx: "10",
  cy: "10",
  r: "12",
  "stroke-width": "2"
}, null, -1);
const _hoisted_4$1 = [
  _hoisted_3$1
];
const _hoisted_5$1 = { key: 1 };
const _hoisted_6$1 = /* @__PURE__ */ createBaseVNode("line", {
  x1: "0",
  y1: "10",
  y2: "10",
  x2: "20",
  "stroke-width": "2"
}, null, -1);
const _hoisted_7$1 = /* @__PURE__ */ createBaseVNode("line", {
  x1: "10",
  y1: "20",
  x2: "10",
  y2: "0",
  "stroke-width": "2"
}, null, -1);
const _hoisted_8$1 = [
  _hoisted_6$1,
  _hoisted_7$1
];
const _hoisted_9 = { key: 2 };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("line", {
  x1: "0",
  y1: "20",
  x2: "20",
  y2: "0",
  "stroke-width": "2"
}, null, -1);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("line", {
  x1: "20",
  y1: "20",
  x2: "0",
  y2: "0",
  "stroke-width": "2"
}, null, -1);
const _hoisted_12 = [
  _hoisted_10,
  _hoisted_11
];
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, [
    $props.icon === "done" ? (openBlock(), createElementBlock("g", _hoisted_2$1, _hoisted_4$1)) : $props.icon === "add" ? (openBlock(), createElementBlock("g", _hoisted_5$1, _hoisted_8$1)) : $props.icon === "remove" ? (openBlock(), createElementBlock("g", _hoisted_9, _hoisted_12)) : createCommentVNode("", true)
  ]);
}
var TodoIcon = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
var TodoItem_vue_vue_type_style_index_0_lang = "";
const _sfc_main$3 = {
  components: {
    TodoIcon
  },
  props: {
    task: { type: Object }
  },
  mounted() {
    this.$refs[this.task.id].focus();
  },
  updated() {
    this.$emit("updated-task", this.task);
  },
  methods: {
    emitDone() {
      this.$emit("done-task", this.task);
    },
    emitRemove() {
      this.$emit("remove-task", this.task);
    }
  }
};
const _hoisted_1$1 = { class: "todo-item__task" };
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_TodoIcon = resolveComponent("TodoIcon");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(`todo-item ${$props.task.done ? "todo-item--done" : ""}`)
  }, [
    createBaseVNode("button", {
      onClick: _cache[0] || (_cache[0] = (...args) => $options.emitDone && $options.emitDone(...args)),
      class: "todo-item__button",
      "aria-label": "Done"
    }, [
      createVNode(_component_TodoIcon, { icon: "done" })
    ]),
    createBaseVNode("div", _hoisted_1$1, [
      withDirectives(createBaseVNode("input", {
        ref: $props.task.id,
        type: "text",
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $props.task.text = $event),
        placeholder: "New task"
      }, null, 512), [
        [vModelText, $props.task.text]
      ])
    ]),
    createBaseVNode("button", {
      onClick: _cache[2] || (_cache[2] = (...args) => $options.emitRemove && $options.emitRemove(...args)),
      class: "todo-item__button",
      "aria-label": "Remove"
    }, [
      createVNode(_component_TodoIcon, { icon: "remove" })
    ])
  ], 2);
}
var TodoItem = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
var Todo_vue_vue_type_style_index_0_lang = "";
const _sfc_main$2 = {
  props: {
    title: { type: String },
    layout: { type: String }
  },
  components: {
    TodoIcon,
    TodoItem
  },
  data() {
    return {
      tasks: [],
      showSeparateLists: true
    };
  },
  created() {
    const localState = this.returnTasksLocally();
    if (localState) {
      this.tasks = localState;
    }
  },
  computed: {
    pendingTasks() {
      return this.tasks.filter((task) => task.done === false);
    },
    doneTasks() {
      return this.tasks.filter((task) => task.done === true);
    }
  },
  methods: {
    addTask() {
      this.tasks.push({ id: this.createID(), text: "", done: false });
      this.storeTasksLocally();
    },
    removeTask(task) {
      const taskIndex = this.tasks.findIndex((task_in_tasks) => task_in_tasks.id === task.id);
      this.tasks.splice(taskIndex, 1);
      this.storeTasksLocally();
    },
    doneTask(task) {
      const taskIndex = this.tasks.findIndex((task_in_tasks) => task_in_tasks.id === task.id);
      this.tasks[taskIndex].done = !this.tasks[taskIndex].done;
      this.storeTasksLocally();
    },
    createID() {
      return Math.random().toString(36).slice(2);
    },
    storeTasksLocally() {
      window.localStorage.setItem("todo-list-items", JSON.stringify(this.tasks));
    },
    returnTasksLocally() {
      return JSON.parse(window.localStorage.getItem("todo-list-items"));
    }
  }
};
const _hoisted_1 = ["data-layout"];
const _hoisted_2 = { class: "todo-list__header" };
const _hoisted_3 = { class: "todo-list__title" };
const _hoisted_4 = { class: "todo-list__content" };
const _hoisted_5 = { class: "todo-list__items" };
const _hoisted_6 = {
  key: 0,
  class: "todo-list__separator"
};
const _hoisted_7 = { class: "todo-list__items" };
const _hoisted_8 = {
  key: 1,
  class: "todo-list__items"
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_TodoIcon = resolveComponent("TodoIcon");
  const _component_TodoItem = resolveComponent("TodoItem");
  return openBlock(), createElementBlock("div", {
    class: "todo-list",
    "data-layout": $props.layout
  }, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("div", _hoisted_3, toDisplayString($props.title), 1),
      createBaseVNode("button", {
        onClick: _cache[0] || (_cache[0] = (...args) => $options.addTask && $options.addTask(...args)),
        class: "todo-list__add-new"
      }, [
        createVNode(_component_TodoIcon, { icon: "add" })
      ])
    ]),
    createBaseVNode("div", _hoisted_4, [
      $data.tasks.length > 0 && $data.showSeparateLists ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        createBaseVNode("div", _hoisted_5, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($options.pendingTasks, (task) => {
            return openBlock(), createBlock(_component_TodoItem, {
              onUpdatedTask: $options.storeTasksLocally,
              onDoneTask: $options.doneTask,
              onRemoveTask: $options.removeTask,
              task
            }, null, 8, ["onUpdatedTask", "onDoneTask", "onRemoveTask", "task"]);
          }), 256))
        ]),
        $options.doneTasks.length > 0 && $options.pendingTasks.length > 0 ? (openBlock(), createElementBlock("hr", _hoisted_6)) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_7, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($options.doneTasks, (task) => {
            return openBlock(), createBlock(_component_TodoItem, {
              onUpdatedTask: $options.storeTasksLocally,
              onDoneTask: $options.doneTask,
              onRemoveTask: $options.removeTask,
              task
            }, null, 8, ["onUpdatedTask", "onDoneTask", "onRemoveTask", "task"]);
          }), 256))
        ])
      ], 64)) : (openBlock(), createElementBlock("div", _hoisted_8, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($data.tasks, (task) => {
          return openBlock(), createBlock(_component_TodoItem, {
            onUpdatedTask: $options.storeTasksLocally,
            onDoneTask: $options.doneTask,
            onRemoveTask: $options.removeTask,
            task
          }, null, 8, ["onUpdatedTask", "onDoneTask", "onRemoveTask", "task"]);
        }), 256))
      ])),
      $data.tasks.length === 0 ? (openBlock(), createElementBlock("button", {
        key: 2,
        class: "todo-list__cta-add",
        onClick: _cache[1] || (_cache[1] = (...args) => $options.addTask && $options.addTask(...args))
      }, "Click to add a new task")) : createCommentVNode("", true)
    ])
  ], 8, _hoisted_1);
}
var Todo = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const _sfc_main$1 = {
  components: {
    Todo
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Todo = resolveComponent("Todo");
  return openBlock(), createBlock(_component_Todo, { title: "Shopping list" });
}
var Home = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const _sfc_main = {
  components: {
    Todo
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Todo = resolveComponent("Todo");
  return openBlock(), createBlock(_component_Todo, { title: "Shopping list page" });
}
var Page = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
var routes = [
  { name: "home", path: "/", component: Home },
  { name: "page", path: "/page", component: Page }
];
const app_store = createStore(store);
const app_router = createRouter({
  routes,
  history: createWebHistory()
});
createApp(App).use(app_store).use(app_router).mount("#app");
