import { marked } from 'https://deno.land/x/marked/mod.ts';

const ymlRegex = /---\n[\s\S]*\n---/;
import { parse } from "https://deno.land/std/encoding/yaml.ts";

export function getYml(md: string): Record<string, any> {
  const lines = md.split("\n");
  console.log(lines[0])
  console.log(lines[0]!=="---")
  if (lines[0] !== "---") return {};
  const index = lines.slice(1).indexOf("---") + 1;
  console.log(index)
  if (index === 0) return {};
  return {
    data: parse(lines.slice(1, index).join("\n")),
    body: lines.slice(index + 1).join("\n"),
  };
}
export type mdreturn = {
  html: string;
  yaml: Record<string, any>;
};
const parseOptions={
  parseFlags: {
    
  }
};
export default function (md: string): mdreturn {
  const { data, body } = getYml(md);
  const markup = marked.parse(body);
  return {
    html: markup,
    yaml: data,
  };
}
