// Check
// 1. Connected state exists
// 2. No double connections (a -> b && b -> a)
window.typecheck = (ast) => {
  // Normalize
  const normalizedAst = {};
  ast.forEach((flow) => {
    if (normalizedAst[flow.box.label]) {
      throw new TypeError(`Identifier ${flow.box.label} is already defined.`);
    };

    const cons = {};
    flow.connections.forEach(con => cons[con.label] = con.dir);
    normalizedAst[flow.box.label] = {
      text: flow.box.text,
      connections: cons,
    };
  });
};
