import path from "path"
import fs from "fs"

function read(fileName) {
  let data = fs.readFileSync(path.join(process.cwd(), "src", "database", fileName + ".json"), "utf-8")
  return data.length ? JSON.parse(data) : []
}

function write(fileName, value) {
  fs.writeFileSync(path.join(process.cwd(), "src", "database", fileName + ".json"), JSON.stringify(value, null, 2))
  return true
}

export {
  read,
  write
}