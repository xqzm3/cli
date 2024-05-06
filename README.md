# CLI Tool Package

This is a simple Command Line Interface (CLI) tool package written in JavaScript that allows you to create and manage files and directories from the command line.

## Installation

To use this CLI tool, you need to have [Node.js](https://nodejs.org/) installed on your system.

1. Clone this repository or download the `cli-tool.js` file.
2. Navigate to the directory containing `cli-tool.js`.
3. Install dependencies by running:
   ```
   npm install commander
   ```

## Usage

The CLI tool provides the following commands:

### Create a new file

```bash
./cli-tool.js create-file <filename>
```

Replace `<filename>` with the name of the file you want to create.

### Create a new directory

```bash
./cli-tool.js create-directory <dirname>
```

Replace `<dirname>` with the name of the directory you want to create.

### List all files and directories

```bash
./cli-tool.js list
```

This command lists all files and directories in the current directory.

## Example

```bash
./cli-tool.js create-file example.txt
```

This command will create a new file named `example.txt` in the current directory.

## License

This project is licensed under the [MIT License](LICENSE).
