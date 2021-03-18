const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [false, 'name field is required'],
    },
    age: {
      type: Number,
      required: [false, 'age field is required'],
    },
  },
  { timestamps: false },
);

module.exports = model('users', userSchema);
