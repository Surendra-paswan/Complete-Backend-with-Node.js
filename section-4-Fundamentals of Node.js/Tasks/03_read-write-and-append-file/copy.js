import fs from "node:fs/promises";
import path from "node:path";

try {
    // Get command-line arguments
    const sourcePath = process.argv[2];
    const destinationPath = process.argv[3];

    // Validate arguments
    if (!sourcePath || !destinationPath) {
        throw new Error("Usage: node copy.js <source> <destination>");
    }

    // Get the original file name
    const fileName = path.basename(sourcePath);

    // Create the destination file path
    const finalPath = path.join(destinationPath, fileName);

    // Copy the file
    await fs.copyFile(sourcePath, finalPath);

    console.log(`File copied successfully to: ${finalPath}`);

} catch (err) {
    await fs.appendFile(
        "error.log",
        `\n${new Date().toLocaleTimeString()}\n${err.message}\n${err.stack}\n`
    );

    console.log(err.message);
    console.log("To see the full error message, check ./error.log");
}