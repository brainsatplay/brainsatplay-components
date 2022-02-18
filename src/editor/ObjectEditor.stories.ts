import { Story, Meta } from '@storybook/web-components';
import { ObjectEditor, ObjectEditorProps } from './ObjectEditor';
import object from './object';

export default {
  title: 'Editor/ObjectEditor',
  argTypes: {
  },
} as Meta;

const Template: Story<Partial<ObjectEditorProps>> = (args) => new ObjectEditor(args);

export const Default = Template.bind({});
Default.args = {
  header: 'NWB File',
  target: object,
};


// import("https://cdn.jsdelivr.net/npm/h5wasm@latest/dist/esm/hdf5_hl.js").then(hdf5 => {
//   import("https://cdn.jsdelivr.net/npm/hdf5-io@latest/dist/index.esm.js").then(res => {
//     const HDF5IO = res.default
//     const io = new HDF5IO(hdf5, undefined, true)

//     BigInt.prototype.toJSON = function() { return this.toString() }

//     io.fetch("https://raw.githubusercontent.com/OpenSourceBrain/NWBShowcase/master/FergusonEtAl2015/FergusonEtAl2015.nwb")
//     .then(file => {
//       console.log(file)
//       delete file.specifications

//       const k1 = Object.keys(file.stimulus.presentation)[0]
//       file.stimulus.presentation = {[k1]: file.stimulus.presentation[k1]}

//       const k2 = Object.keys(file.acquisition)[0]
//       file.acquisition = {[k2]: file.acquisition[k2]}

//       // console.log(JSON.stringify(file, null, 2))
//     })
// })
// })


// export const Stacked = Template.bind({});
// Stacked.args = {
//   brand: {content: 'Brains@Play', link: 'https://brainsatplay.com', external: true},
//   primary,
//   secondary
// };