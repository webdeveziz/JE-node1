const yargs = require("yargs");
const pkgVersion = require('./package.json')
const { addNote, printNotes, removeNote } = require('./notes.controller')

yargs.version(pkgVersion.version)

yargs.command({
  command: 'add',
  describe: 'Add new note to list',
  builder: {
    title: {
      type: 'string',
      describe: 'Title is a good title',
      demandOption: true
    }
  },
  handler({ title }) {
    addNote(title)
  }
})

yargs.command({
  command: 'list',
  describe: 'Print all lists',
  async handler() {
     printNotes()
  }
})

yargs.command({
  command: 'remove',
  describe: 'Remove note by id',
  async handler({id}) {
    await removeNote(id.toString())
  }
})

yargs.parse()

  