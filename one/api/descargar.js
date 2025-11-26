import { readFileSync } from "fs";
import { join } from "path";

export default function handler(req, res) {
  const filePath = join(process.cwd(), "BluetoothChat.apk");
  const file = readFileSync(filePath);

  res.setHeader("Content-Type", "application/octet-stream");
  res.setHeader("Content-Disposition", 'attachment; filename="BluetoothChat.apk"');
  res.send(file);
}
