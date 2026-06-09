/**
 * gen-favicons.cjs — regenerates raster favicons from public/favicon.svg.
 * Run with: node scripts/gen-favicons.cjs
 * Requires `sharp` (already a project dependency).
 *
 * Produces:
 *   public/favicon.ico         (48x48, PNG-encoded ICO — supported by all
 *                               modern browsers and Google Search)
 *   public/apple-touch-icon.png (180x180 for iOS home-screen)
 */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const PUBLIC = path.join(__dirname, "..", "public");
const svg = fs.readFileSync(path.join(PUBLIC, "favicon.svg"));

(async () => {
  // Apple touch icon — 180x180 PNG (iOS fills the dark background corners).
  await sharp(svg)
    .resize(180, 180, { fit: "contain", background: { r: 10, g: 10, b: 10, alpha: 1 } })
    .png()
    .toFile(path.join(PUBLIC, "apple-touch-icon.png"));

  // 48x48 PNG, wrapped in a single-image ICO container (PNG-in-ICO).
  const png = await sharp(svg).resize(48, 48).png().toBuffer();

  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: 1 = icon
  header.writeUInt16LE(1, 4); // image count

  const entry = Buffer.alloc(16);
  entry.writeUInt8(48, 0); // width
  entry.writeUInt8(48, 1); // height
  entry.writeUInt8(0, 2); // palette count
  entry.writeUInt8(0, 3); // reserved
  entry.writeUInt16LE(1, 4); // color planes
  entry.writeUInt16LE(32, 6); // bits per pixel
  entry.writeUInt32LE(png.length, 8); // size of image data
  entry.writeUInt32LE(22, 12); // offset (6 + 16)

  fs.writeFileSync(path.join(PUBLIC, "favicon.ico"), Buffer.concat([header, entry, png]));
  console.log(`Generated favicon.ico (${png.length + 22} bytes) and apple-touch-icon.png`);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
