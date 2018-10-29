FlowChart
  = flows:FlowBox+ { return flows; }

FlowBox
  = box:TextBox _ connections:FlowConnection * {
      return {
        box: box,
        connections: connections,
      };
    }
  / TextBox

FlowConnection
  = dir:( "<=" / "=>" / "<>" ) _ label:Label _ {
      return {
        label: label,
        dir: dir,
      };
    }

TextBox
  = label:Label ":" text:String {
      return {
        label: label,
        text: text,
      };
    }

Label
  = [a-zA-Z0-9\-\_ ]+ { return text(); }

String
  = '"' s:PlainString '"' { return s; }
  / "'" s:PlainString "'" { return s; }
  / PlainString

PlainString
  = s:[a-zA-Z0-9. \t\n\r]+ { return s.join(""); }

_ "whitespace"
  = [ \t\n\r]*

