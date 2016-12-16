process.setMaxListeners(1);
process.on(
  "warning",
  function (warn) {
    console.log("警告：");
    console.log("name="+warn.name+" ,message="+warn.message);
  }
);
process.on("a",function() {});
process.on("a",function() {});
