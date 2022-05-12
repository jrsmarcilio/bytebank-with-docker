(function (window) {
  window["env"] = window["env"] || {};
  window["env"]["backendBaseUrl"] = "${BACKEND_NODE_HOST}";
  window["env"]["backendBasePort"] = "${BACKEND_NODE_PORT}";
})(this);
