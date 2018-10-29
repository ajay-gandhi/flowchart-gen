
let parser;
$.get("/flowchart_grammar.pegjs")
  .done((grammar) => {
    parser = peg.generate(grammar);
  });

$("#render").click(() => {
  const input = $("textarea").val();
  try {
    const parsed = parser.parse(input);
  } catch (e) {
    return display(e.message);
  }

  display(JSON.stringify(parser.parse(input), null, 2));
});

const display = text => $("#output").text(text);
