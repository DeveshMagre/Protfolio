const fs = require("fs");
const zlib = require("zlib");

const buf = fs.readFileSync("src/assets/cv.pdf");
const s = buf.toString("latin1");
const re = /stream\r?\n([\s\S]*?)endstream/g;
let m;
let i = 0;
const texts = [];

while ((m = re.exec(s))) {
  i++;
  const raw = Buffer.from(m[1], "latin1");
  for (const fn of ["inflate", "inflateRaw", "unzip"]) {
    try {
      const out = zlib[fn + "Sync"](raw).toString("latin1");
      const parts = [];
      const re2 = /\((?:\\.|[^\\)])*\)/g;
      let p;
      while ((p = re2.exec(out))) {
        const t = p[0]
          .slice(1, -1)
          .replace(/\\n/g, "\n")
          .replace(/\\r/g, "")
          .replace(/\\t/g, "\t")
          .replace(/\\\(/g, "(")
          .replace(/\\\)/g, ")")
          .replace(/\\\\/g, "\\");
        parts.push(t);
      }
      const joined = parts.join("");
      if (joined.replace(/\s/g, "").length > 30) {
        texts.push(`STREAM ${i} ${fn}\n${joined}`);
      }
    } catch (e) {
      /* ignore */
    }
  }
}

fs.writeFileSync("cv-text.txt", texts.join("\n\n====\n\n"));
console.log("wrote", texts.length, "chunks");
